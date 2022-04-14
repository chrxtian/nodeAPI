const { storagesModel } = require("../models"); 
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Crear un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  };

  const data = await storagesModel.create(fileData)
  res.send(data)
};



module.exports = { createItem };