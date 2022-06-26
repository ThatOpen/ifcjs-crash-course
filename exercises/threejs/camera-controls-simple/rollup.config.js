import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/camera-animation-simple/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/camera-animation-simple/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};