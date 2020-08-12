import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { uglify } from "rollup-plugin-uglify";

const bundle = {
  input: './my-element.js',
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      runtimeHelpers: true
    }),
    uglify()
  ],
  output: [
    { file: './dist/my-element.min.js', format: 'cjs' }
  ]
};

export default bundle;