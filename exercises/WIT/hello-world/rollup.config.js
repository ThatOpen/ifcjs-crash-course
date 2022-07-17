import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/hello-world/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/hello-world/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};