import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const common = commonjs({
  namedExports: {
    'node_modules/react/index.js': ['Fragment', 'PureComponent']
  }
});

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
    file: 'dist/react-pose-text.dev.js',
    format: 'umd',
    name: 'splitText',
    exports: 'named',
    globals: { react: 'React' }
  },
  plugins: [
    common,
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  output: Object.assign({}, umd.output, {
    file: pkg.unpkg
  }),
  plugins: [
    common,
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify()
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: pkg.module,
    format: 'es',
    exports: 'named'
  },
  plugins: [common, typescript(noDeclarationConfig)]
});

const cjs = Object.assign({}, config, {
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
  },
  plugins: [common, typescript(typescriptConfig)]
});

export default [umd, umdProd, es, cjs];
