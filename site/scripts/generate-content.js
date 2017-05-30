const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');
const generatePage = require('./generate-content-page');
const filterFilenames = require('./filter-filenames');
const buildNextConfig = require('./build-next-config');

const contentPath = path.join(__dirname, '../../docs');
const contentMetadataOutputPath = path.join(__dirname, '../data/content.json');

const siteMetadata = {};

function generateContent(rootDir, fullDir) {
  if (!siteMetadata[rootDir]) siteMetadata[rootDir] = {};
  const readDir = fullDir ? fullDir : rootDir;
  const readPath = path.join(contentPath, readDir);
  const outputPath = path.join(__dirname, `../pages/${rootDir}`);
  // Create directory if none exists
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

  const dirList = fs.readdirSync(readPath).filter(filterFilenames);

  dirList.forEach((filename) => {
    // If directory
    if (filename.indexOf('.') === -1) {
      generateContent(rootDir, `${readDir}/${filename}`);

    // If file
    } else {
      const [id] = filename.split('.');
      const file = fs.readFileSync(`${readPath}/${filename}`, { encoding: 'utf-8' });
      const { attributes, body } = frontMatter(file);
      const { title, description, category, published } = attributes;

      siteMetadata[rootDir][id] = {
        id,
        title,
        description,
        category,
        published
      };

      fs.writeFile(
        `${outputPath}/${id}.js`,
        generatePage(body, siteMetadata[rootDir][id])
      );
    }
  });
}

const topLevel = fs.readdirSync(contentPath);
topLevel.forEach((dir) => generateContent(dir));

fs.writeFile(contentMetadataOutputPath, JSON.stringify(siteMetadata), (err) => {
  const msg = (!err) ? 'Site content created' : err;
  console.log(msg);
});

buildNextConfig(siteMetadata);
