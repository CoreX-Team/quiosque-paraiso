import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    INTERNAL_KEY: process.env.INTERNAL_KEY,
    APP_NAME: process.env.APP_NAME,
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    APP_TITLE: process.env.APP_TITLE,
    APP_HEADER_TITLE: process.env.APP_HEADER_TITLE,
    APP_HEADER_SUBTITLE: process.env.APP_HEADER_SUBTITLE,
  },
};

export default nextConfig;
