import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'exercises/WIV/floorplans/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/floorplans/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};