import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

export default function (pkg, name = pkg.name) {
  const deps = Object.keys(pkg.dependencies || {});
  const peerDeps = Object.keys(pkg.peerDependencies || {});

  const config = {
    input: 'lib/index.js',
    external: makeExternalPredicate(deps.concat(peerDeps)),
  };

  const umd = {
    ...config,
    output: {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      exports: 'named',
      globals: {
        tslib: 'tslib',
        'hey-listen': 'heyListen',
        'style-value-types': 'valueTypes',
        framesync: 'framesync',
        stylefire: 'stylefire',
        popmotion: 'popmotion',
        'pose-core': 'poseCore',
        '@popmotion/easing': 'easing',
        '@popmotion/popcorn': 'popcorn',
      },
    },
    external: makeExternalPredicate(peerDeps),
    plugins: [
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  };

  const umdProd = {
    ...umd,
    output: {
      ...umd.output,
      file: pkg.unpkg || `dist/${name}.min.js`,
    },
    plugins: [
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser({ output: { comments: false } }),
    ],
  };

  const es = {
    ...config,
    output: {
      format: 'es',
      preserveModules: true,
      dir: 'dist/es',
    },
    plugins: [resolve()],
  };

  const cjs = {
    ...config,
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [resolve()],
  };

  return [umd, umdProd, es, cjs];
}
