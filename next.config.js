/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hfn-strapi-bucket.s3.ap-south-1.amazonaws.com',
      },
    ]
  },
}

module.exports = nextConfig
