import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/highlighting/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/highlighting/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};