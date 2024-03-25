const express = require("express");
const users = require("../data/data");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../twitter/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const { registerUser, loginUser } = require("../controllers/auth");
const {
  getUserFromHisId,
  updateUserFromHisId,
  getAllUsers,
} = require("../controllers/User");
const router = express.Router();

router.post("/register", upload.single("file"), registerUser);
router.post("/login", loginUser);
//Users routes
router.get("/user/:id", getUserFromHisId);
router.put(
  "/user/:id",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  updateUserFromHisId
);
router.get("/users", getAllUsers);

module.exports = router;
