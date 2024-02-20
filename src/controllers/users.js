const User = require("../models/users");

const createNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    newUser.password = await User.encrypPassword(newUser.password);
    if (!newUser) {
      return res
        .status(502)
        .send({ ok: false, msg: "User not created", err: newUser });
    }
    await newUser.save();
    return res
      .status(201)
      .send({ ok: true, msg: "User created!", data: newUser });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ ok: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewUser,
};
