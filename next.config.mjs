/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/_next/static/media/**',
      },
    ],
  },
};

export default nextConfig;
