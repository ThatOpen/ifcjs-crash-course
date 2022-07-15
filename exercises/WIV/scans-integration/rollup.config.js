import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/scans-integration/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/scans-integration/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};