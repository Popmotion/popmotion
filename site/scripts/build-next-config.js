const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../next.config.js');

const fileTemplate = routes => `
module.exports = {
  exportPathMap: function () {
    return ${routes};
  }
};
`;

const generateRouteDefinitions = data => {
  // TODO: Automatically generate api/blog etc
  let routes = `
    '/': { page: '/' },
    '/api': { page: '/api' },
    '/blog': { page: '/blog' },
    '/pose': { page: '/pose' },
    '/pose/api': { page: '/pose/api' },
    '/page-not-found': { page: '/_error' },
  `;

  Object.keys(data).forEach(siteId => {
    const siteData = data[siteId];

    Object.keys(siteData).forEach(sectionId => {
      const sectionData = siteData[sectionId];
      const pageIds = Object.keys(sectionData);

      pageIds.forEach(pageId => {
        const route = `/${
          siteId === 'popmotion' ? '' : siteId + '/'
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
