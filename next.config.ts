import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  experimental: {
    serverActions: {
      // El único Server Action es el formulario de contacto (texto): no necesita más.
      bodySizeLimit: "100kb",
    },
  },
};

export default nextConfig;
