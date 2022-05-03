
const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require('../validators/storage');
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/storages")

/**
 * Get items
 */
router.get("/", getItems);

/**
 * Get item by Id
 */
router.get("/:id", validatorGetItem, getItem);

 /**
  * create item (upload file)
  */
router.post("/", uploadMiddleware.single("myfile"), createItem);

/**
 * Delete item by Id
 */
 router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;