'use strict';
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_user");
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUser = async (res, userId) => {
  try {
    const [rows] =
        await promisePool.query("SELECT * FROM wop_user WHERE user_id = ?", [userId]);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getUserLogin = async (user) => {
  try {
    console.log("getUserLogin()", user);
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        user);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};


const addUser = async (userInfo) => {
  try {
    await promisePool.query("INSERT INTO wop_user (name, email, password, role) VALUES (?,?,?,?)",
        [userInfo.name, userInfo.email, userInfo.passwd, 21] );
  } catch (e) {
  console.error("error", e.message);
  // res.status(500).send(e.message)
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  getUserLogin
};