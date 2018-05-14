import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    typescript(/*{ plugin options }*/),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: false,
      extensions: ['.ts', '.js'],
      include: ['node_modules/stylefire/**']
    })
  ]
};
