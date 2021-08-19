const express = require('express');
const path = require('path');

const port = 8080;

const app = express();

const directory = path.resolve(__dirname, '../dist/nes-web');

app.use(
    express.static(
        directory,
    )
);

app.use("/", (req, res, next) => {
    res.redirect('/');
});

app.listen(port);

console.log(`Listening at ${port}; static from ${directory}`)