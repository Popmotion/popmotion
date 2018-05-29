import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const config = {
  input: 'src/index.ts'
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/popmotion-pose.dev.js',
    format: 'umd',
    name: 'pose',
    exports: 'named',
    globals: {
      'style-value-types': 'valueTypes'
    }
  },
  plugins: [
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    commonjs()
  ]
});

const umdProd = Object.assign({}, umd, {
  input: 'src/global.ts',
  output: Object.assign({}, umd.output, {
    file: 'dist/popmotion-pose.js'
  }),
  plugins: [
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify(),
    commonjs()
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: pkg.module,
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(noDeclarationConfig), commonjs()]
});

const cjs = Object.assign({}, config, {
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), commonjs()]
});

export default [umd, umdProd, es, cjs];
