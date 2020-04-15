import typescript from 'rollup-plugin-typescript2';
import generateConfig from '../../rollup-generate-config';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import pkg from './package.json';

const worklet = {
  input: 'src/worklet/index.ts',
  output: [
    {
      // TODO: Make this not git-ignored
      file: `dist/popmotion-worklet.js`,
      format: 'umd'
    },
    {
      file: `../../playground/public/popmotion-worklet.js`,
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/**'
    }),
    typescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

export default [...generateConfig(pkg)]; //, worklet];
