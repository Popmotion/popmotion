import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
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

const createConfig = ({
  output,
  external = 'all',
  min = false,
}) => ({
  input: 'src/index.ts',
  output: ensureArray(output).map(format => Object.assign({
    name: 'valueTypes',
    exports: 'named',
  }, format)),
  external: makeExternalPredicate(external === 'peers' ? peerDeps : deps.concat(peerDeps)),
  plugins: [
    typescript({
      cacheRoot: 'tmp/.rpt2_cache',
      include: /\.tsx?$/,
      tsconfigOverride: { compilerOptions: { resolve: false } },
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
    output: {
      file: pkg.unpkg,
      format: 'umd',
    },
    external: 'peers',
    env: 'production',
    min: true,
  }),
  createConfig({
    output: {
      file: pkg.unpkg.replace(/\.min\.js$/, '.js'),
      format: 'umd',
    },
    external: 'peers',
    env: 'development',
  })
];

