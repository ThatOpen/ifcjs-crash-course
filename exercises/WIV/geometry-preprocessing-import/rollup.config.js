import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/geometry-preprocessing-import/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/geometry-preprocessing-import/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};