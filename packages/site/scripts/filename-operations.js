const DS_STORE = '.DS_Store';

module.exports = {
  filterFiles: (filename) => (filename.indexOf('.') === -1),
  filterSystemFiles: (filename) => (filename !== DS_STORE)
};
