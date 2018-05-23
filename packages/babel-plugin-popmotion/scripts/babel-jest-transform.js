const fs = require('fs')
const { transform } = require('babel-core')

const babelrc = Object.assign(
  JSON.parse(fs.readFileSync(__dirname + '/../.babelrc', 'utf8')),
  { babelrc: false }
)

module.exports = {
  process(src) {
    return transform(src, babelrc).code;
  },
};
