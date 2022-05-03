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
const getItem = async (req, res) => {
  try {
    const {id} = matchedData(req);
    const data = await tracksModel.findById(id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM', 500)
  }
};

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
const updateItem = async (req, res) => {
  try {

    // Get the id and in other object the rest of props (except the id)
    const {id, ...body} = matchedData(req);    
    const data = await tracksModel.findOneAndUpdate(
      id, body
      );
    res.send(data)    
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM', 500)
  }
};

/**
 * borrar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
 const deleteItem = async (req, res) => {
  try {
    const {id} = matchedData(req);
    const data = await tracksModel.delete({_id:id});
    res.send(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM', 500)
  }
 };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };