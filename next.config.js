/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
    // runtime: "experimental-edge",
  },
  outputFileTracing: true,
  trailingSlash: true,
};

module.exports = nextConfig;
