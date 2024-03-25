const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  bio: String,
  avatar: String,
  banner: String,
  followers: Array,
  following: Array,
  Date: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
