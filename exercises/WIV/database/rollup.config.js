import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/database/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/database/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};