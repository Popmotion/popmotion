import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { rollup as lernaAliases } from 'lerna-alias';
import pkg from './package.json';

const ensureArray = maybeArr => Array.isArray(maybeArr) ? maybeArr : [maybeArr];

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id);
};

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});

// TODO: umd & umdProd had different input files, was it deliberate?
const createConfig = ({
  input = 'src/index.ts',
  output,
  external = 'all',
  min = false,
  env,
}) => ({
  input,
  output: ensureArray(output).map(format => Object.assign({
    name: 'pose',
    exports: 'named',
  }, format)),
  external: makeExternalPredicate(external === 'peers' ? peerDeps : deps.concat(peerDeps)),
  plugins: [
    alias(
      Object.assign(
        { resolve: ['.tsx', '.ts','.jsx', '.js'] },
        lernaAliases(),
      )
    ),
    resolve(),
    typescript({
      cacheRoot: 'tmp/.rpt2_cache',
      include: /\.tsx?$/,
      tsconfigOverride: { compilerOptions: { resolve: false } },
    }),
    env && replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    min && uglify(),
  ].filter(Boolean)
});

export default [
  createConfig({
    output: [{
      file: pkg.module,
      format: 'es',
    }, {
      file: pkg.main,
      format: 'cjs',
    }],
  }),
  createConfig({
    input: 'src/global.ts',
    output: {
      file: pkg.unpkg,
      format: 'umd',
    },
    external: 'peers',
    env: 'production',
    min: true,
  }),
  createConfig({
    input: 'src/global.ts',
    output: {
      file: pkg.unpkg.replace(/\.min\.js$/, '.js'),
      format: 'umd',
    },
    external: 'peers',
    env: 'development',
  })
];
