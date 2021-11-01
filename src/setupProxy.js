const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://15.165.77.151:8000',
      changeOrigin: true,
    })
  )
}