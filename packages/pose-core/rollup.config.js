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

const es = Object.assign({}, config, {
  output: {
    file: 'dist/pose-core.es.js',
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

export default [es, cjs];
