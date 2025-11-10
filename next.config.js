/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['img.shields.io', 'komarev.com'],
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig