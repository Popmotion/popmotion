import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

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

const es = {
  ...config,
  input: 'src/index.ts',
  output: {
    file: pkg.module,
    dir: 'dist',
    format: 'es'
  },
  plugins: [typescript()]
};

const cjs = Object.assign({}, config, {
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
  },
  plugins: [typescript()]
});

export default [es, cjs];
