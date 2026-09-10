import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bipeqvbzgnmkwoedmvvs.supabase.co",
      },
    ],
  },
};

export default nextConfig;
