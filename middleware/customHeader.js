const customHeader = (req, res, next) => {
  try {
    const apikey = req.headers.api_key

    if (apikey == "chris_api_key") {
      next();  
    } else {
      res.status(403)
      res.send({error: "API_KEY_NO_ES_CORRECTA"})  
    }
    
  } catch (error) {
    res.status(403)
    res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"})
  }
};

module.exports = customHeader;