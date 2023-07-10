const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-webkorporat.jasamarga.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.jasamarga.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
