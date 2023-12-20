const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dwd.api.proxy.bund.dev",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
