const User = require("../models/users");

const createNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    newUser.password = await User.encrypPassword(newUser.password);
    if (!newUser) {
      return res
        .status(502)
        .send({ success: false, msg: "User not created", err: newUser });
    }
    await newUser.save();
    return res.status(201).send({ success: true, msg: "User created!" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewUser,
};
