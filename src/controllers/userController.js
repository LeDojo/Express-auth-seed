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

module.exports = { store };
