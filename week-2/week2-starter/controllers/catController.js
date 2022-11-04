'use strict';
const catModel = require('../models/catModel');
const userModel = require("../models/userModel");

const getCats = async (req, res) => {
    const cats = await catModel.getAllCats(res);
    res.json(cats);
};

const getCat = async (req, res) => {
    // choose only one object with matching id
    const cat = await catModel.getCatById(res, req.params.catId);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const createCat = async (req, res) => {
    const catInfo = req.body
    if (catInfo) {
        res.json(catInfo);
        await catModel.addCat(catInfo);
    } else {
        res.sendStatus(404);
    }
    console.log(catInfo);
};

const cat_update_put = async (req, res) => {
    const catInfo = req.body
    if (catInfo) {
        res.json(catInfo);
        await catModel.updateCat(catInfo);
    } else {
        res.sendStatus(404);
    }
    console.log(catInfo);
};

const deleteCat = async (req, res) => {
    const catInfo = req.body
    if (catInfo) {
        res.json(catInfo);
        await catModel.deleteCat(catInfo);
    } else {
        res.sendStatus(404);
    }
    console.log(catInfo);
};

module.exports = {
    getCat,
    getCats,
    cat_update_put,
    createCat,
    deleteCat
};