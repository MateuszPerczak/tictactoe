import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    eslintPlugin(),
  ],
});
