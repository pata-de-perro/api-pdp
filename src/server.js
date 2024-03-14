const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({ success: true, msg: "Welcome API PDP" });
});
app.use(apiRoutes);

module.exports = app;
