/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: 'build',
};
module.exports = nextConfig;
