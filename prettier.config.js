/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  tailwindFunctions: ['clsx', 'cn'],
  tailwindAttributes: ['className'],
  tailwindConfig: './tailwind.config.js'
}