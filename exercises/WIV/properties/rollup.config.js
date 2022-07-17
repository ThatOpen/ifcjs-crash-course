import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/properties/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/properties/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};