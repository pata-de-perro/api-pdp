const User = require("../models/users");
const { generateToken } = require("../lib/jwt");

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .send({ success: false, msg: "Incorrect credentials!" });
    }

    let validPass = await User.comparePassword(password, user.password);
    if (!validPass) {
      return res
        .status(401)
        .send({ success: false, msg: "Incorrect credentials!" });
    }

    let token = generateToken({ id: user._id });
    return res
      .status(200)
      .send({ success: true, msg: "Successful login", data: token });
  } catch (err) {
    return res
      .status(err.status || 401)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  authUser,
};
