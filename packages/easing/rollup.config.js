import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
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

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
  }],
  external: makeExternalPredicate(deps.concat(peerDeps)),
  plugins: [resolve(), typescript(typescriptConfig)]
};
