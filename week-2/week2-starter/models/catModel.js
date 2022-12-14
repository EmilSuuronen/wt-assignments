// ./models/catModel.js
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getCatById = async (res, catId) => {
  try {
    const [rows] =
        await promisePool.query("SELECT * FROM wop_cat WHERE cat_id = ?", [catId]);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const addCat = async (catInfo) => {
  try {
    await promisePool.query("INSERT INTO wop_cat (name, weight, owner, filename, birthdate) VALUES (?,?,?,?,?)",
        [catInfo.name, catInfo.weight, catInfo.owner,catInfo.filename, catInfo.birthdate] );
  } catch (e) {
    console.error("error", e.message);
    // res.status(500).send(e.message)
  }
}

const updateCat = async (catInfo) => {
  try {
    await promisePool.query("UPDATE wop_cat SET (cat_id = ?, name = ?, weight = ?, owner = ?, birthdate = ?) WHERE (cat_id = ?) VALUES (?,?,?,?,?)",
        [catInfo.name, catInfo.weight, catInfo.owner, catInfo.birthdate, catInfo.id] );
  } catch (e) {
    console.error("error", e.message);
    // res.status(500).send(e.message)
  }
}

const deleteCat = async (catInfo) => {
  try {
    await promisePool.query("DELETE FROM wop_cat WHERE (cat_id = ?) VALUES (?)",
        [catInfo.id]);
  } catch (e) {
    console.error("error", e.message);
    // res.status(500).send(e.message)
  }
}

module.exports = {
  getAllCats,
  getCatById,
  addCat,
  updateCat,
  deleteCat
};