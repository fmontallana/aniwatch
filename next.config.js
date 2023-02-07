/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.animepahe.ru',
      },
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
      },
      {
        protocol: 'https',
        hostname: 'artworks.thetvdb.com',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_BASE_URL: 'https://api.consumet.org'
  },
}

module.exports = nextConfig
