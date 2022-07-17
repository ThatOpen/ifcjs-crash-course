import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/highlighting/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/highlighting/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};