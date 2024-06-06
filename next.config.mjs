/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // You can specify any domains here if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
