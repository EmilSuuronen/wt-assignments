'use strict';
console.log('server 1 started');

const express = require('express');
const app = express()
const port = 3001

const pug = require('pug');

const compiledFunction = pug.compileFile('/server-2/views/template.pug');

app.use(express.static('public'))

app.get("/catinfo", (req, res) => {
    const cat = {
        name: "Frank",
        birthdate: "2010-12-25",
        weight: 5,
    };
    res.json(cat);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






