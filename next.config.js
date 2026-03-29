/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dmcatering.ca' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
module.exports = nextConfig
