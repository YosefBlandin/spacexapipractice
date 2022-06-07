/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.imgur.com',
      'farm8.staticflickr.com',
      'imgur.com',
      'farm1.staticflickr.com',
      'farm5.staticflickr.com',
      'live.staticflickr.com'
    ]
  }
}

module.exports = nextConfig
