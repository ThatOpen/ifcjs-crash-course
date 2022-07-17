import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/multithreading/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/multithreading/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};