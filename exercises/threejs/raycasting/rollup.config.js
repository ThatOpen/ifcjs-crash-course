import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/raycasting/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/raycasting/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};