/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bs.plantnet.org",
        port: "",
        pathname: "/image/o/**",
      },
    ],
  },
};

module.exports = nextConfig;
