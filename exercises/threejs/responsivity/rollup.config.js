import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './exercises/threejs/responsivity/index.js',
  output: [
    {
      format: 'esm',
      file: './exercises/threejs/responsivity/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};