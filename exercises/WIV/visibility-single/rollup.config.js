import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/visibility-single/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/visibility-single/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};