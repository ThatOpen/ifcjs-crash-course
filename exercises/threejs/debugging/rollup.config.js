import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/debugging/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/debugging/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};