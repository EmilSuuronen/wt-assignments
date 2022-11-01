// catRoute

"use strict";
const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController");

router.get("/", catController.cat_list_get);

router.get('/', (req, res) => {
    res.send('From this endpoint you can get cats.')
});

router.get('/:catId', (req, res) => {
    res.send('From this endpoint you can get cats with id of ' + req.params.catId)
});

router.post('/', (req, res) => {
    console.log(req)
    res.send('From this endpoint you can add cats.')
});

router.put('/', (req, res) => {
    console.log(req)
    res.send('From this endpoint you can edit cats.')
});

router.delete('/', (req, res) => {
    console.log(req)
    res.send('From this endpoint you can delete cats.')
});

module.exports = router;