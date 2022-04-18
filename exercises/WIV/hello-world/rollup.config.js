import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/hello-world/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/hello-world/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};