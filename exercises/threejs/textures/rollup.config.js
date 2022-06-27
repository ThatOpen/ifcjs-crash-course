import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/textures/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/textures/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};