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
  rewrites: async () => [
    {
      source: "/public/wisdom-teeth/index.html",
      destination: "/pages/api/wisdom-teeth.js",
    },
  ],
}

module.exports = nextConfig