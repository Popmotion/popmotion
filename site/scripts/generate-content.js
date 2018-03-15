const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');
const generatePage = require('./generate-content-page');
const generateMenus = require('./generate-menus');
const convertDateFormat = require('./convert-date-format');
const { filterFiles, filterSystemFiles } = require('./filename-operations');
const buildNextConfig = require('./build-next-config');

const packagesPath = path.join(__dirname, '../../packages');
const contentMetadataOutputPath = path.join(__dirname, '../data/content.json');
const siteNameMap = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/site-names.json'), { encoding: 'utf-8' }));

const siteMetadata = {};

function generateContent({rootDir, subDir = '', firstLevelDir = '', siteName, packageName}) {
  packageName = packageName || rootDir;
  siteName = siteName || siteNameMap[rootDir];

  if (!siteName) return;
  if (!siteMetadata[siteName]) siteMetadata[siteName] = {};

  const readPath = path.join(__dirname, `../../packages/${packageName}/docs/${subDir}`);
  const outputPath = path.join(__dirname, `../pages/${siteName === 'popmotion' ? '' : siteName}/${firstLevelDir}`);

  // Create directory if none exists
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

  const dirList = fs.readdirSync(readPath).filter(filterSystemFiles);

  dirList.forEach(filename => {
    // If directory, generate content for that directory
    if (filename.indexOf('.') === -1) {
      generateContent({
        rootDir,
        subDir: `${subDir}/${filename}/`,
        firstLevelDir: firstLevelDir === '' ? filename : firstLevelDir,
        siteName,
        packageName
      });
    
    // If file, generate content
    } else {
      const [id] = filename.split('.');
      const file = fs.readFileSync(`${readPath}/${filename}`, { encoding: 'utf-8' });
      const { attributes, body } = frontMatter(file);
      const { title, description, category, published, next, draft } = attributes;

      if (draft) return;

      const outputId = (id === 'README') ? category : id;

      if (!siteMetadata[siteName][firstLevelDir]) siteMetadata[siteName][firstLevelDir] = {};
      siteMetadata[siteName][firstLevelDir][outputId] = {
        id: outputId,
        title,
        description,
        category,
        date: published,
        published: published ? convertDateFormat(`${published}`) : '',
        section: firstLevelDir,
        siteName,
        next
      };

      fs.writeFile(
        `${outputPath}/${outputId}.js`,
        generatePage(body.replace(new RegExp('.md', 'g'), ''), siteMetadata[siteName][firstLevelDir][outputId])
      );
    }
  });
}

const topLevel = fs.readdirSync(packagesPath).filter(filterFiles);
topLevel.forEach((rootDir) => generateContent({ rootDir }));

fs.writeFile(contentMetadataOutputPath, JSON.stringify(siteMetadata), (err) => {
  const msg = (!err) ? 'Site content created' : err;
  console.log(msg);
});

generateMenus(siteMetadata);
buildNextConfig(siteMetadata);
