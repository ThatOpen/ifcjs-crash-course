import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/vr/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/vr/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};