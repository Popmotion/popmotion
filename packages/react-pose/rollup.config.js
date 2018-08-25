import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { rollup as createLernaAliases } from 'lerna-alias';
import pkg from './package.json';

const typescriptConfig = {
  cacheRoot: 'tmp/.rpt2_cache',
  include: /\.tsx?$/,
  tsconfigOverride: { compilerOptions: { resolve: false } },
};

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id);
};

const lernaAliases = Object.assign(
  {
    resolve: ['.tsx', '.ts','.jsx', '.js']
  },
  createLernaAliases()
);

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});

const config = {
  input: 'src/index.ts',
  external: makeExternalPredicate(deps.concat(peerDeps))
};

const umd = Object.assign({}, config, {
  output: {
    file: 'dist/react-pose.dev.js',
    format: 'umd',
    name: 'pose',
    exports: 'named',
    globals: { react: 'React' }
  },
  external: makeExternalPredicate(peerDeps),
  plugins: [
    alias(lernaAliases),
    resolve(),
    typescript(typescriptConfig),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  input: 'src/global.ts',
  output: Object.assign({}, umd.output, {
    file: 'dist/react-pose.js'
  }),
  plugins: [
    alias(lernaAliases),
    resolve(),
    typescript(typescriptConfig),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify()
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: 'dist/react-pose.es.js',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript(typescriptConfig)]
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
