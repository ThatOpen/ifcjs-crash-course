import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/materials/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/materials/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};