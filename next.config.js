/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //host image
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    API_KEY_TMDB: 'abff7a99b8f97c6f37ba8e4ee5382d72',
    BASE_URL: "https://api.themoviedb.org/3",
  }
};

module.exports = nextConfig;
