/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/categories/:category',
        destination: '/categories',
      },
    ];
  },
};

module.exports = nextConfig;
