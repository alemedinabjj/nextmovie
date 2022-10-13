/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //host image
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
