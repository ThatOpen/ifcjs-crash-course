import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/scene-graph/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/scene-graph/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};