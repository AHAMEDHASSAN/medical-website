import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/medical-website/", // إضافة هذه السطر
  plugins: [react()],
});
