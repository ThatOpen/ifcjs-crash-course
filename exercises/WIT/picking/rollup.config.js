import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/picking/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/picking/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};