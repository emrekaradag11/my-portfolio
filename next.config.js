const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  locales: ['en-US', 'tr-TR'],
  defaultLocale: 'en-US',
  reactStrictMode: true,
  swcMinify: true,
})