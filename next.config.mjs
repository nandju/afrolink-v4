/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
    images: {
    domains: ['images.unsplash.com'],
        localPatterns: [
      {
        pathname: '/_next/static/media/**',
      },
    ],
  },
};

export default nextConfig;
