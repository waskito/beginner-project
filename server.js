const express = require('express');
const path = require('path');
const app = express();
const proxyMiddleware = require('http-proxy-middleware');

// Proxy to API server
var translatorContext = [
    '/translate',
  ];                     // requests with this path will be proxied

var dataRead;
var translatorOptions = {
        target: process.env.TRANSLATE_API, // target host
        // changeOrigin: true,              // needed for virtual hosted sites
        // hostRewrite: config.origin,
        // autoRewrite: config.origin,
        // protocolRewrite:
    };

// create the proxy
var proxy = proxyMiddleware(translatorContext, translatorOptions);

app.use(proxy);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT);