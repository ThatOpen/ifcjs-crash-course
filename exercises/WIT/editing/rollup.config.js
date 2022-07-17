import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/editing/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/editing/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};