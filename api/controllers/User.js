const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const UserModel = require("../models/User");

async function getUserFromHisId(req, res) {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUserFromHisId(req, res) {
  try {
    let avatarFilename, bannerFilename;
    if (req.files) {
      if (req.files.avatar) {
        avatarFilename = req.files.avatar[0].filename;
      }
      if (req.files.banner) {
        bannerFilename = req.files.banner[0].filename;
      }
    }

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          bio: req.body.bio,
          avatar: avatarFilename || req.body.avatar, // Use uploaded filename or existing avatar
          banner: bannerFilename || req.body.banner, // Use uploaded filename or existing banner
        },
      },
      { new: true }
    );

    if (user) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ error: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  const users = await UserModel.find();
  res.json(users);
}
module.exports = { getUserFromHisId, updateUserFromHisId, getAllUsers };
