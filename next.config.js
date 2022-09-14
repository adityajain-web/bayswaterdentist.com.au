/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      'https:/s4.gifyu.com/',
      "https://bayswaterdentist.com.au"
    ],
  },
  experimental:{
    images:{
      unoptimized: true
    }
  },
}

module.exports = nextConfig