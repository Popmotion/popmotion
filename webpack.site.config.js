const fs = require('fs');
const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

function generateSiteMapFromDocs() {
  const siteMap = {};
  const paths = ['/'];

  function addDirectory(fullPath, map) {
    const dirList = fs.readdirSync(fullPath);

    dirList.forEach((filename) => {
      paths.push(`${fullPath}/${filename}`.replace('docs', '').replace('.md', ''));
      
      // If directory
      if (filename.indexOf('.') === -1) {
        map[filename] = {};
        addDirectory(`${fullPath}/${filename}`, map[filename]);
      } else {
        map[filename] = fs.readFileSync(`${fullPath}/${filename}`, { encoding: 'utf-8' });
      }
    });
  }

  addDirectory('docs', siteMap);

  return { paths, siteMap };
}

const { paths, siteMap } = generateSiteMapFromDocs();

module.exports = {
  entry: {
    static: './site/static.js'
  },
  output: {
    path: __dirname + '/dist/site',
    filename: 'static.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: [path.resolve(__dirname), path.resolve('src')]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', paths, {
      siteMap
    })
  ]
};