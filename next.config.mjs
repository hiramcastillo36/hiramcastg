/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: isProd ? 'export' : 'standalone',
  assetPrefix: isProd ? '/hiramcastg/' : '',
  basePath: isProd ? '/hiramcastg' : '',
}

export default nextConfig
