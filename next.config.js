/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};
module.exports = nextConfig;
