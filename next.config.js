// const { build } = require("velite");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

// class VeliteWebpackPlugin {
//   static started = false;
//   apply(compiler) {
//     compiler.hooks.beforeCompile.tapPromise(
//       "VeliteWebpackPlugin",
//       async () => {
//         if (VeliteWebpackPlugin.started) return;
//         VeliteWebpackPlugin.started = true;
//         const dev = compiler.options.mode === "development";
//         await build({ watch: dev, clean: !dev });
//       }
//     );
//   }
// }

module.exports = nextConfig;