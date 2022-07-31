
const { handleHttpError } = require("../utils/handleError");

/**
 *  Allowed roles array
 * @param {*} roles 
 * @returns 
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;   
    const rolesByUser = user.role;

    const checkValueRole = roles.some(roleSingle => rolesByUser.includes(roleSingle));
    if (!checkValueRole) {
      handleHttpError(res, 'ERROR_NO_PERMISSIONS', 403)
      return;
    }
  next();  
  } catch (error) {
    console.error(error);
    handleHttpError(res, 'ERROR_PERMISSIONS', 403)
  }
  
};

module.exports = checkRole;