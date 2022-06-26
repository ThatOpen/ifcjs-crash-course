import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/camera-controls-simple/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/camera-controls-simple/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};