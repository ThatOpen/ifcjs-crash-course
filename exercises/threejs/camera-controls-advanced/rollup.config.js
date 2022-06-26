import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/camera-controls-advanced/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/camera-controls-advanced/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};