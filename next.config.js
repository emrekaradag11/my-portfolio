
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
})