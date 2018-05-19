import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const config = {
  input: 'src/index.ts'
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/popmotion.js',
    format: 'umd',
    name: 'popmotion',
    exports: 'named',
    globals: {
      'style-value-types': 'valueTypes'
    }
  },
  plugins: [
    typescript(noDeclarationConfig),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: 'dist/popmotion.global.min.js'
  }),
  plugins: [
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    uglify({
      compress: {
        drop_console: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/popmotion.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(noDeclarationConfig)]
});

const cjs = Object.assign({}, config, {
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig)]
});

export default [umd, umdProd, es, cjs];
