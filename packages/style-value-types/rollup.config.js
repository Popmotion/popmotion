import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const babelConfig = {
  babelrc: false,
  plugins: ['annotate-pure-calls', 'dev-expression']
};

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id);
};

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});

const config = {
  input: 'src/index.ts',
  external: makeExternalPredicate(deps.concat(peerDeps)),
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/style-value-types.js',
    format: 'umd',
    name: 'valueTypes',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), babel(babelConfig)],
  external: makeExternalPredicate(peerDeps),
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: 'dist/style-value-types.min.js'
  }),
  plugins: [typescript(typescriptConfig), babel(babelConfig), uglify()]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/style-value-types.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), babel(babelConfig)]
});

const cjs = Object.assign({}, config, {
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), babel(babelConfig)]
});

export default [umd, umdProd, es, cjs];
