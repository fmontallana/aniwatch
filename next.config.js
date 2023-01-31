/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.animepahe.ru',
      },
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
