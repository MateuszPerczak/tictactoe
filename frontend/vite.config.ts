import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
    },
  },
  build: {
    target: "esnext",
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
