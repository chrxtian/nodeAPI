const express = require("express");
const req = require('express/lib/request');
const router = express.Router();

const authMiddleware = require('../middleware/session');
const checkRole = require('../middleware/role');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * Get items
 */
router.get("/", authMiddleware, getItems);

/**
 * Get item by Id
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Create item
 */
router.post("/", authMiddleware, checkRole(["admin"]), validatorCreateItem, createItem);

/**
 * Update item
 */
 router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

 /**
 * Delete item by Id
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;