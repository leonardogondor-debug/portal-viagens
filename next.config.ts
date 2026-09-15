import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // compressao gzip/brotli
  compress: true,

  //confg de imagem
  images: {
    formats: ["image/webp"],
    deviceSizes: [320, 640, 768, 1024, 1200],
  },

  //headers para preload e cache
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // redirecionamento se preciso
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
