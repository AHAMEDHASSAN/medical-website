import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/medical-website/", // ✨ لازم المسار ده عشان GitHub Pages
  plugins: [react()],
});
