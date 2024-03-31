const express = require("express");
const {
  createPost,
  getAllPosts,
  deletePost,
  editPost,
} = require("../controllers/Postes");
const router = express.Router();

router.get("/allpostes", getAllPosts);
router.post("/createpost", createPost);
router.delete("/deletepost/:id", deletePost);
router.put("editPost/:id", editPost);
module.exports = router;
