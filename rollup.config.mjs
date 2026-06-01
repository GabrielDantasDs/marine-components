import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json' with { type: 'json' }

const sharedPlugins = [
  resolve(),
  commonjs(),
  postcss({ extensions: ['.css'], inject: false, extract: true }),
]

export default [
  // CJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      ...sharedPlugins,
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'dist/cjs',  // must match the output dir
        declaration: true,
      }),
    ],
  },
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      ...sharedPlugins,
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'dist/esm',  // must match the output dir
        declaration: true,
      }),
    ],
  },
  // Type declarations bundle
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]