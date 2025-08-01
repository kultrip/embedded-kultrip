import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
  },
  build: {
    lib: {
      entry: "src/widget.jsx",
      name: "KultripWidget",
      fileName: "kultrip-widget",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
    },
  },
});

