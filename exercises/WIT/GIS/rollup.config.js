import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'exercises/WIT/GIS/app.js',
  output: [
    {
      format: 'esm',
      file: 'exercises/WIT/GIS/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};