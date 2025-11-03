import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Disable static optimization to allow API routes to work
  // This is needed for the contact and join forms
  
  // Configure headers to allow proper serving of static HTML files
  async headers() {
    return [
      {
        source: '/:path*.html',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
