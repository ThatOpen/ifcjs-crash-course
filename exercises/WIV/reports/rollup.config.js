import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/reports/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/reports/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};