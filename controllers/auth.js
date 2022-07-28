const { matchedData } = require('express-validator');
const { encrypt, compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");

/**
 * Controller in charge of register a user
 * @param {*} req 
 * @param {*} res 
 */
const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHahed = await encrypt(req.password);  
    // Creating new object and replacing password by password hashed
    // split operator ..., sobre-escribir propiedad o agregar si no existe
    const body = {...req, password: passwordHahed};
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    };
    res.send({ data: data });

  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER', 500)
  }
};

/**
 * Controller incharge of login a user
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email})
      .select('password name role email');
    if (!user){
      handleHttpError(res, 'USER_NOT_EXIST', 404);
      return;
    }

    const hashPassword = user.get('password');
    const check = await compare(req.password, hashPassword);
    if (!check){
      handleHttpError(res, 'INVALID_CREDENTIALS', 401);
      return;
    }
    user.set('password', undefined, {strict:false});

    const data = {
      token: await tokenSign(user),
      user
    };

    res.send({data});

  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN_USER', 500)
  }
}

module.exports = { registerController, loginController };