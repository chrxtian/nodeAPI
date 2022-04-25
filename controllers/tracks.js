const { tracksModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send(data);  
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS', 500)
  }  
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
  try {

    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send(data)
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATING_ITEM', 500)
  }
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