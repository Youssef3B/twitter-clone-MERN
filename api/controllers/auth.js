const UserModel = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { name, username, email, password } = req.body;
    // Check if name was entered

    if (!name) {
      return res.json({ error: "name and username are required" });
    }
    // Check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 Characters long",
      });
    }
    // Check Username
    const usernameExist = await UserModel.findOne({ username });
    if (usernameExist) {
      return res.json({
        error: "Username already exists",
      });
    }
    // Check Email
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res.json({
        error: "Email already exists",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await UserModel.create({
      name,
      username,
      email,
      password: hashedPassword,
      bio: null,
      avatar: null,
      banner: null,
      followers: null,
      following: null,
      Date: null,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if User Exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ error: "User does not exist" });
    }
    // Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
    if (!match) {
      return res.json({
        error: "Password does not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const generateToken = (id) => {
  return jwt.sign({ id }, "123456", {
    expiresIn: "90d",
  });
};
module.exports = { registerUser, loginUser };
