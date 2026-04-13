import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Isso remove a necessidade do Worker
  reactCompiler: true,
  images: {
    unoptimized: true, // Obrigatório para o modo export
  },
};

export default nextConfig;
