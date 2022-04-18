import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'examples/web-ifc-viewer/hello-world/app.js',
  output: [
    {
      format: 'esm',
      file: 'examples/web-ifc-viewer/hello-world/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};