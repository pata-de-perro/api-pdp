const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes");
const { corsOptions } = require("../config/constants");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).send({ success: true, msg: "Welcome API PDP" });
});
app.use(apiRoutes);

module.exports = app;
