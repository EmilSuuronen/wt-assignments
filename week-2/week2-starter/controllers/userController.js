'use strict';
const userModel =  require('../models/userModel');
const catModel = require("../models/catModel");

const users = userModel.users;

const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers(res);
    res.json(users);
};

const getUser = async (req, res) => {
    const cat = await userModel.getUserById(res, req.params.userId);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const createUser = (req, res) => {
    const userInfo = `username: ${req.body.name}, email: ${req.body.email}`;
    res.send('Adding new user ' + userInfo);
    // TODO: add new user to DB
};

const modifyUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
    getUser,
    getUsers,
    modifyUser,
    createUser,
    deleteUser
};