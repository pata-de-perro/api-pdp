const express = require("express");

const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({ ok: true, msg: "Welcome API PDP" });
});
app.use(apiRoutes);

module.exports = app;
