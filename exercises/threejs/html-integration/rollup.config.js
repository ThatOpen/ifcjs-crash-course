import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/html-integration/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/html-integration/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};