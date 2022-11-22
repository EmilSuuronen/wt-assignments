'use strict';
const userModel =  require('../models/userModel');
const catModel = require("../models/catModel");

const users = userModel.users;

const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers(res);
    res.json(users);
};

const getUser = async (req, res) => {
    const user = await userModel.getUser(res, req.params.userId);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const createUser = async (req, res) => {
    const userInfo = req.body
    if (userInfo) {
        res.json(userInfo);
        await userModel.addUser(userInfo);
    } else {
        res.sendStatus(404);
    }
    console.log(userInfo);
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