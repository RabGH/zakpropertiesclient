/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  staticPageGenerationTimeout: 120,
  trailingSlash: true,
};

module.exports = nextConfig;
