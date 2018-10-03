const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../next.config.js');

const fileTemplate = routes => `
module.exports = {
  exportPathMap: function () {
    return ${routes};
  },
  webpack: (config, props) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    },
    {
      test: /\.md$/,
      loader: 'raw-loader',
    })

    return config
  }
};
`;

const generateRouteDefinitions = data => {
  // TODO: Automatically generate api/blog etc
  let routes = `
    '/': { page: '/' },
    '/support': { page: '/support' },
    '/api': { page: '/api' },
    '/blog': { page: '/blog' },
    '/pose': { page: '/pose' },
    '/pure': { page: '/pure' },
    '/popcorn': { page: '/popcorn' },
    '/pose/api': { page: '/pose/api' },
    '/pose/examples': { page: '/pose/examples' },
    '/page-not-found': { page: '/_error' },
    '/stylefire': { page: '/stylefire' },
    '/stylefire/api': { page: '/stylefire/api' },
  `;

  Object.keys(data).forEach(siteId => {
    const siteData = data[siteId];

    Object.keys(siteData).forEach(sectionId => {
      const sectionData = siteData[sectionId];
      const pageIds = Object.keys(sectionData);

      pageIds.forEach(pageId => {
        const route = `/${
          siteId === 'pure' ? '' : siteId + '/'
        }${sectionId}/${pageId}`;
        routes += `
          '${route}': {
            page: '${route}'
          },
        `;
      });
    });
  });

  return `{${routes}}`;
};

module.exports = function(data) {
  const routes = generateRouteDefinitions(data);
  fs.writeFile(outputPath, fileTemplate(routes));
};
