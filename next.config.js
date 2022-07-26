/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'https:/s4.gifyu.com/',
    ]
  }
}

module.exports = nextConfig