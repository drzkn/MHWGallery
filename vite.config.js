module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: false,
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  server: {
    middlewareMode: "connect",
    watch: {
      usePolling: true,
    },
  },
};
