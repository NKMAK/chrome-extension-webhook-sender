import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
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
  ],
});
