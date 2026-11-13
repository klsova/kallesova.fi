import type { NextConfig } from "next";

// The site used to have one route per section; they now live as tabs on the home page.
const oldRoutes: Record<string, string> = {
  "/about": "/",
  "/works": "/#works",
  "/photography": "/#photography",
  "/music": "/#music",
  "/cv": "/cv.pdf",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(oldRoutes).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
