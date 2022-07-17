import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIV/hello-world-exercise/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIV/hello-world-exercise/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};