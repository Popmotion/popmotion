import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const config = {
  input: 'src/index.ts',
  external: ['react', 'react-dom']
};

const common = commonjs({
  ignoreGlobal: true,
  namedExports: {
    'node_modules/react/index.js': [
      'createContext',
      'createElement',
      'cloneElement',
      'Children',
      'Component',
      'Fragment',
      'PureComponent'
    ]
  }
});

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/react-pose.dev.js',
    format: 'umd',
    name: 'pose',
    exports: 'named',
    globals: { react: 'React' }
  },
  plugins: [
    common,
    typescript(noDeclarationConfig),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  input: 'src/global.ts',
  output: Object.assign({}, umd.output, {
    file: 'dist/react-pose.js'
  }),
  plugins: [
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    uglify(),
    common
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/react-pose.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(noDeclarationConfig), common]
});

const cjs = Object.assign({}, config, {
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig), common]
});

export default [umd, umdProd, es, cjs];
