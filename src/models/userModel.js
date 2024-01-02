const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
