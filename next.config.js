/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-gmp1-1.cdninstagram.com',
        port: '',
        pathname: '/v/**',
      },
    ],
  },
};

module.exports = nextConfig;
