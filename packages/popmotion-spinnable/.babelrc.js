const { NODE_ENV, BABEL_ENV } = process.env;
const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';
const dev = NODE_ENV === 'development'

const config = {
  presets: [['env', { loose: true, modules: false } ], 'stage-2'],
  plugins: [
    cjs && 'transform-es2015-modules-commonjs',
    'transform-export-extensions',
    'transform-react-jsx',
    'annotate-pure-calls'
  ].filter(Boolean),
};

if (dev) {
  config.sourceMaps = 'inline';
}

module.exports = config;
