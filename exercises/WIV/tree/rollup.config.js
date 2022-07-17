import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/tree/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/tree/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};