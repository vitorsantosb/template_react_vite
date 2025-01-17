import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
  server: {
    port: 3001,
    watch: {
      usePolling: true
    }
  },
});
