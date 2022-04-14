const express = require("express");
const req = require('express/lib/request');
const router = express.Router();
const { getItems, getItem, createItem } = require("../controllers/tracks");

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);

module.exports = router;