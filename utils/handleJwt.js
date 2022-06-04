const jwt = require("jsonwebtoken");
const JWT_SECRET =  process.env.JWT_SECRET;

/**
 * Debes pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
  const sign = await jwt.sign(
    //PAYLOAD
    {
      _id: user._id,
      role: user.role
    },
    //SECRET
    JWT_SECRET,
    //OPTIONS
    {
      expiresIn: "2h"
    }    
  )

  return sign;
};

/**
 * Debe pasar el token de session, el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };