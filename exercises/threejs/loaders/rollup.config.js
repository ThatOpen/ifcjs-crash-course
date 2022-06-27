import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/loaders/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/loaders/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};