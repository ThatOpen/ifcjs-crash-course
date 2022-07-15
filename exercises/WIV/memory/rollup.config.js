import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/annotations/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/annotations/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};