import { getModuleBuildInfo } from "next/dist/build/webpack/loaders/get-module-build-info";

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};
