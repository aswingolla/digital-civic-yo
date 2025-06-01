/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' as we're using @netlify/plugin-nextjs
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'], // Allow Pexels images
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

module.exports = nextConfig