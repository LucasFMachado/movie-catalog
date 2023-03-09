const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
