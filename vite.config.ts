// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // base: "/github-portfolio-app",
// });

import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());

  // const baseUrl = mode === "production" ? "/github-portfolio-app" : undefined;

  console.log("defineConfig - START");

  if (mode === "production") {
    console.log("defineConfig - Mode === 'production'");

    return {
      plugins: [react()],
      // base: "/github-portfolio-app",
    };
  }

  console.log("defineConfig - Mode !== 'production'");
  return {
    plugins: [react()],
    // base: "/github-portfolio-app",
  };
});
