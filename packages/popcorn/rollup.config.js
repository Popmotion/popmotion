import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json'

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});
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
  external: makeExternalPredicate(deps.concat(peerDeps))
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/popcorn.js',
    format: 'umd',
    name: 'popcorn',
    exports: 'named'
  },
  plugins: [resolve(), typescript(noDeclarationConfig), babel(babelConfig)],
  external: makeExternalPredicate(peerDeps)
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: 'dist/popcorn.min.js'
  }),
  plugins: [resolve(), typescript(noDeclarationConfig), babel(babelConfig), uglify()]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/popcorn.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(noDeclarationConfig), babel(babelConfig)],
});

const cjs = Object.assign({}, config, {
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), babel(babelConfig)],
});

export default [umd, umdProd, es, cjs];
