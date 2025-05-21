/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

// Tempo configuration is disabled for production deployment
// Only enable this in development environment
if (process.env.NEXT_PUBLIC_TEMPO && process.env.NODE_ENV === "development") {
  nextConfig["experimental"] = {
    // NextJS 14.1.3 to 14.2.11:
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  };
}

module.exports = nextConfig;
