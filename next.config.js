/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },

  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA(nextConfig);
