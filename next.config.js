/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: '/resume',
      destination: '/',
      permanent: true,
    }];
  },
};

module.exports = nextConfig;
