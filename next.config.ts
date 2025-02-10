import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/travel_app" : "",
  assetPrefix: isProd ? "/travel_app/" : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};



export default nextConfig;
