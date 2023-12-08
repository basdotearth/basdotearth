/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: [{
    source: '/resume',
    destination: '/',
    permanent: true,
  }],
};

module.exports = nextConfig;
