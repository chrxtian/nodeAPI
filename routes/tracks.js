const express = require("express");
const req = require('express/lib/request');
const router = express.Router();

const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * Get items
 */
router.get("/", getItems);

/**
 * Get item by Id
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Create item
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Update item
 */
 router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

 /**
 * Delete item by Id
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;