const express = require("express");
const { registerController, loginController } = require("../controllers/auth");
const router = express.Router();

const { validatorRegister, validatorLogin } = require('../validators/auth');

/**
 * Create item
 */
router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);


module.exports = router;