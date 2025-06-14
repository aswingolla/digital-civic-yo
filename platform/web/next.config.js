/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'], // Allow Pexels images
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

module.exports = nextConfig