import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from network/public IPs
    port: 4174,       // Dev server port
    strictPort: true, // If true, Vite will exit if this port is already in use
  },
  preview: {
    port: 4174, // Preview server port (e.g., for `vite preview`)
    strictPort: true,
    allowedHosts: ['admin.themangomart.in'],
  },
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
  ],
});
