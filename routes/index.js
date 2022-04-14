const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;
console.log(`PATH_ROUTES: ${PATH_ROUTES}`);

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((fileRoute) => {
   const fileName = removeExtension(fileRoute);
   if (fileName !== 'index') {

    // console.log(`fileName: ${fileName}`)
    // console.log(`fileRoute: ${fileRoute}`)

    router.use(`/${fileName}`, require(`./${fileRoute}`));
   }
});

module.exports = router;
