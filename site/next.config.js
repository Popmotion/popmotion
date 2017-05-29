
module.exports = {
  exportPathMap: function () {
    return {
    '/': { page: '/' },

      'docs/tween': {
        page: '/docs',
        query: {
          topic: 'tween'
        }
      },
    };
  }
};
