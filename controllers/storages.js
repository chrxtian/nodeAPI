const fs = require("fs");
const { storagesModel } = require("../models"); 
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
 const getItems = async (req, res) => {
  try {
    const data = await storagesModel.find({});
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
    console.log(id)
    const data = await storagesModel.findById(id);    
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
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  };

  const data = await storagesModel.create(fileData)
  res.send(data)
};

/**
 * actualizar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
 const updateItem = async (req, res) => {
  try {

    res.send(data)    
  } catch (error) {
    
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
    const fileData = await storagesModel.findById(id);
    await storagesModel.deleteOne(id);
    const {filename} = fileData;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted: 1
    };
    res.send(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM', 500)
  }
 };


 module.exports = { getItems, getItem, createItem, updateItem, deleteItem };