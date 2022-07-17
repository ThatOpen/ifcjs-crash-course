import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/memory/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/memory/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};