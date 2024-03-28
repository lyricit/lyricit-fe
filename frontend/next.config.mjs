/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnimg.melon.co.kr',
        port: '',
        pathname: '/cm2/album/images/**',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: false,
};

export default nextConfig;
