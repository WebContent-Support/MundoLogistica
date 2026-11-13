import type { NextConfig } from "next";

import path from "path";

const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    webpackBuildWorker: false,
    cpus: 1,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    try {
      const polyfillPath = require.resolve("next/dist/build/polyfills/polyfill-module");
      config.resolve.alias = {
        ...config.resolve.alias,
        [polyfillPath]: path.resolve(__dirname, "src/empty.js"),
        "../build/polyfills/polyfill-module": path.resolve(__dirname, "src/empty.js"),
        "@next/polyfill-module": path.resolve(__dirname, "src/empty.js"),
      };
    } catch {
      // fallback
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/empty.js",
      "@next/polyfill-module": "./src/empty.js",
    },
  },
};

export default nextConfig;
