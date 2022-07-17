import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/visibility/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/visibility/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};