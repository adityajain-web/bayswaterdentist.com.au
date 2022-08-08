/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      'https:/s4.gifyu.com/',
      "https://bayswaterdentist.com.au"
    ]
  },
  rewrites: async () => [
    {
      source: "/public/wisdom-teeth.html",
      destination: "/pages/api/wisdom-teeth.js/",
    },
  ],
}

module.exports = nextConfig