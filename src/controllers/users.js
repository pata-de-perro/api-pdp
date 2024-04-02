const User = require("../models/users");
const { welcome } = require("../lib/welcomeMail");
const crypto = require("crypto")

const createNewUser = async (req, res) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res
        .status(400)
        .send({ success: false, msg: "Email already in use" });
    }
    const newUser = await User.create(req.body);
    newUser.password = await User.encrypPassword(newUser.password);
    newUser.emailToken = crypto.randomBytes(64).toString('hex')

    if (!newUser) {
      return res
        .status(502)
        .send({ success: false, msg: "User not created", err: newUser });
    }
    await newUser.save();
    await welcome(newUser.email, newUser.emailToken, req.headers.host);
    return res.status(201).send({ success: true, msg: "User created!" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).send({ success: false, msg: "User not found" });
    }
    return res.status(200).send({ success: true, data: user });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewUser,
  getUserProfile,
  updateUserProfile,
};
