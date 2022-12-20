/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'github.com',
      'res.cloudinary.com'
    ],
  },
  experimental: {
    appDir: true
  }
}
