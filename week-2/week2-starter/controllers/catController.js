'use strict';
const catModel = require('../models/catModel');
const userModel = require("../models/userModel");
const {validationResult} = require('express-validator');

const getCats = async (req, res) => {
    const cats = await catModel.getAllCats(res);
    res.json(cats);
};

const getCat = async (req, res) => {
    const cat = await catModel.getCatById(res, req.params.catId);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const createCat = async (req, res) => {
    const errors = validationResult(req);
    if (!req.file) {
        res.status(400).json({message: 'no valid file found!'});
    }
    else if (errors.isEmpty()) {
        const catInfo = req.body;
        catInfo.filename = req.file.filename;
        console.log('new cat created:', catInfo);
        const catId = await catModel.addCat(catInfo, res);
        res.status(201).json({message: 'cat created', catId});
    } else {
        console.log('validation errors', errors);
        res.status(400).json({message: 'cat creation failed',
            errors: errors.array()});    }
};

const cat_update_put = async (req, res) => {
    const catInfo = req.body
    if (req.params.catId) {
        cat.id = req.params.catId;
    }
    const result = await catModel.updateCat(catInfo, res);
    if (result.affectedRows > 0) {
        res.json({message: 'cat modified: ' + catInfo.id});
    } else {
        res.status(404).json({message: 'nothing changed'});
    }
};

const deleteCat = async (req, res) => {
    const result = await catModel.deleteCat(req.params.catId, res);
    console.log('cat deleted', result)
    if (result.affectedRows > 0) {
        res.json({message: 'cat deleted'});
    } else {
        res.status(404).json({message: 'cat was already deleted'});
    }
};

module.exports = {
    getCat,
    getCats,
    cat_update_put,
    createCat,
    deleteCat
};