/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'res.cloudinary.com'
    ],
  },
  experimental: {
    appDir: true
  }
}
