const User = require("../models/userModel");

const store = async (req, res) => {
  try {
    const user = new User();
    user.email = req.body.email;
    user.password = await user.encryptPassword(req.body.password);
    user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (req, res) => {
  email = req.body.email;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const error = new Error("Invalid");
      throw error;
    }

    const validPassword = await user.validPassword(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      const error = new Error("Invalid password");
      throw error;
    }
    res.json({ user, message: "Vous êtes connécté" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { store, login };
