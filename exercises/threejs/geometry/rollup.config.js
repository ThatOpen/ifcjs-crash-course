import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/geometry/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/geometry/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};