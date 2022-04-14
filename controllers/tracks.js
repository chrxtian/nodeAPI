const { tracksModel } = require("../models"); 

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send(data);
};

/**
 * Obtener detalle de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Crear un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const saved = await tracksModel.create(body);
  res.send(saved)
};

/**
 * actualizar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * borrar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
 const deleteItem = (req, res) => {};

module.exports = { getItems, getItem,createItem, updateItem, deleteItem };