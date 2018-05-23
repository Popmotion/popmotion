import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const declarationsConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: true, declarationDir: 'types' } }
});

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})

const config = {
  input: { index:'src/index.ts', base: 'src/base.ts' },
  external: makeExternalPredicate(deps.concat(peerDeps))
};

const umd = Object.assign({}, config, {
  input: 'src/global.ts',
  output: {
    file: 'dist/react-pose.dev.js',
    format: 'umd',
    name: 'pose',
    exports: 'named',
    globals: { react: 'React' }
  },
  external: makeExternalPredicate(peerDeps),
  plugins: [
    typescript(typescriptConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: 'dist/react-pose.js'
  }),
  plugins: [
    typescript(typescriptConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify(),
  ]
});

const es = Object.assign({}, config, {
  experimentalCodeSplitting: true,
  output: {
    dir: 'es',
    format: 'es',
    exports: 'named',
    entryNames: '[alias].js',
  },
  plugins: [typescript(typescriptConfig)]
});

const cjs = Object.assign({}, config, {
  experimentalCodeSplitting: true,
  output: {
    dir: 'lib',
    format: 'cjs',
    exports: 'named',
    entryNames: '[alias].js'
  },
  // plugins: [typescript(declarationsConfig)]
  plugins: [typescript(typescriptConfig)]
});

export default [/*umd, umdProd,*/ es, cjs];
