import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.js',
    output: {
      dir: 'dist',
      plugins: [terser()],
    },
  },
];
