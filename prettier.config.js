/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
  printWidth: 120,
  tailwindStylesheet: './src/global.css'
}