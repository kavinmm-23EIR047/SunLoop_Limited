/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
