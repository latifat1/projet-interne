/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    // Suppression de unoptimized: true pour permettre l'optimisation des images
  },
  experimental: {
    // Activer les fonctionnalités expérimentales de Next.js 17
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
