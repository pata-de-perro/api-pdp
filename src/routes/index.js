const express = require("express");
const router = express.Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ["index"].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/api/v1/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
  }
});

router.get("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: "Page not found", error: "Not found" });
});

module.exports = router;
