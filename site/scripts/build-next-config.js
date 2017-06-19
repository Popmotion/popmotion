const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../next.config.js');

const fileTemplate = (routes) => `
module.exports = {
  exportPathMap: function () {
    return ${routes};
  }
};
`;

const generateRouteDefinitions = (data) => {
  let routes = `
    '/': { page: '/' },
    '/api': { page: '/api' },
  `;

  Object.keys(data).forEach((rootId) => {
    const rootObject = data[rootId];
    const pageIds = Object.keys(rootObject);

    pageIds.forEach((pageId) => {
      routes += `
        '/${rootId}/${pageId}': {
          page: '/${rootId}/${pageId}'
        },
      `;
    });
  });

  return `{${routes}}`;
};

module.exports = function (data) {
  const routes = generateRouteDefinitions(data);
  fs.writeFile(outputPath, fileTemplate(routes));
};
