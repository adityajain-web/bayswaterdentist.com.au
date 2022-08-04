/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  pageExtensions:"",
  images: {
    domains: [
      'https:/s4.gifyu.com/',
      "https://bayswaterdentist.com.au"
    ]
  },
  rewrites: async () => [
    {
      source: "/public/wisdom-teeth.html/",
      destination: "/pages/api/wisdom-teeth.js/",
      has:[{type:"query",}],
    },
  ],
}

module.exports = nextConfig