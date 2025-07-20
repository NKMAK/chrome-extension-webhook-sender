import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest: {
        ...manifest,
        ...(process.env.NODE_ENV === "development" && {
          host_permissions: ["http://localhost:*/*"],
        }),
      },
    }),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: [],
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    target: "es2020",
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  define: {
    __DEV__: false,
  },
});
