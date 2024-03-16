const User = require("../models/users");
const { generateToken } = require("../lib/jwt");

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res
        .status(401)
        .send({ success: false, msg: "Incorrect credentials!" });
    }

    let validPass = await User.comparePassword(password, existUser.password);
    if (!validPass) {
      return res
        .status(401)
        .send({ success: false, msg: "Incorrect credentials!" });
    }

    const token = generateToken({ id: existUser._id });
    const user = { _id: existUser._id, email: existUser.email };

    return res.status(200).send({ success: true, user, token: token });
  } catch (err) {
    return res
      .status(err.status || 401)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  authUser,
};
