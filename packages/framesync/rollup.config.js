import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const babelConfig = {
  babelrc: false,
  plugins: ['annotate-pure-calls', 'dev-expression']
};

const config = {
  input: 'src/index.ts'
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/framesync.js',
    format: 'umd',
    name: 'framesync',
    exports: 'named'
  },
  plugins: [resolve(), typescript(noDeclarationConfig), babel(babelConfig)]
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: 'dist/framesync.min.js'
  }),
  plugins: [resolve(), typescript(noDeclarationConfig), babel(babelConfig), uglify()]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/framesync.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(noDeclarationConfig), babel(babelConfig)],
  external: ['hey-listen']
});

const cjs = Object.assign({}, config, {
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), babel(babelConfig)],
  external: ['hey-listen']
});

export default [umd, umdProd, es, cjs];
