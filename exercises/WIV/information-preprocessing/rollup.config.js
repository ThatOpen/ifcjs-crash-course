import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/information-preprocessing/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/information-preprocessing/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};