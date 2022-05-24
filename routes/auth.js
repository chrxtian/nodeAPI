const express = require("express");
const { matchedData } = require('express-validator');
const { encrypt, compare } = require("../utils/handlePassword");
const router = express.Router();

const { validatorRegister, validatorLogin } = require('../validators/auth');

/**
 * Create item
 */
router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const passwordHahed = await encrypt(req.password);  
  // Creating new object and replacing password by password hashed
  const body = {...req, password: passwordHahed};
  res.send({data: body});
});


module.exports = router;