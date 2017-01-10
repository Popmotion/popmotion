const fs = require('fs');
const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function generateSiteMapFromDocs() {
  const siteContent = {};
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
        map[filename.replace('.md', '')] = fs.readFileSync(`${fullPath}/${filename}`, { encoding: 'utf-8' });
      }
    });
  }

  addDirectory('docs', siteContent);

  return { paths, siteContent };
}

const { paths, siteContent } = generateSiteMapFromDocs();

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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!sass-loader'
        )
      }
    ]
  },
  resolve: {
    root: [path.resolve(__dirname), path.resolve('src')]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new StaticSiteGeneratorPlugin('static', paths, {
      siteContent
    }),
    new CopyWebpackPlugin([
      {
        from: 'site/assets',
        to: 'assets'
      }
    ], {})
  ]
};