import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const typescriptConfig = { cacheRoot: 'tmp/.rpt2_cache' };
const noDeclarationConfig = {
  ...typescriptConfig,
  tsconfigOverride: { compilerOptions: { declaration: false } },
};

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
    input: 'src/index.ts',
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
      typescript(noDeclarationConfig),
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
      typescript(noDeclarationConfig),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      uglify(),
    ],
  };

  const es = {
    ...config,
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'es',
    },
    plugins: [typescript(noDeclarationConfig)],
  };

  const cjs = {
    ...config,
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [typescript(typescriptConfig)],
  };

  return [umd, umdProd, es, cjs];
}
