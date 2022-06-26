import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/hello-world/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/hello-world/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};