import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.BAT_CAVE_WALLPAPER": JSON.stringify(env.BAT_CAVE_WALLPAPER),
    },
    plugins: [react(), tsconfigPaths()],
  };
});
