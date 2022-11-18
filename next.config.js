const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  includePaths: [path.join(__dirname, 'styles')],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
}

module.exports = nextConfig
