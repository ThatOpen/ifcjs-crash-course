import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/geometry-preprocessing-export/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/geometry-preprocessing-export/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};