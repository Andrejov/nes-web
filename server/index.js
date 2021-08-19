const express = require('express');
const request = require('request');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 8080;
const dynmapUrl = "http://localhost:8081/";

const app = express();

const directory = path.resolve(__dirname, '../dist/nes-web');

app.use(
    express.static(
        directory,
    )
);

const dynmap = createProxyMiddleware({
    target: dynmapUrl,
    changeOrigin: true,
    pathRewrite: {
        '^/dynmap': '/'
    },
    onError: (err, req, res) => {
        res.redirect('/dynerr');
    }
});



app.get(
    new RegExp(`^\/dynmap$`, "i"),
    (req, res, next) => {
    res.redirect('/dynmap/');
})

app.use("/dynmap/", dynmap);

// app.use("/", (req, res, next) => {
//     res.redirect('/');
// });
app.all('/*', (req, res, next) => {
    res.sendFile(directory + "/index.html")
})

app.listen(process.env.PORT || port);

console.log(`Listening at ${port}; static from ${directory}`)