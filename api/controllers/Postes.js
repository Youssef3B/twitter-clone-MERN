const { PostModel } = require("../models/Post");

/**
 * Get All Posts
 * @method GET
 */
async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find().populate(
      "id_user",
      "name username email bio avatar banner followers following"
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Create a new Post
 * @method POST
 */
async function createPost(req, res) {
  try {
    const { id, description, likes, comments } = req.body;
    const post = new PostModel({
      id_user: id,
      description,
      likes,
      comments,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
/**
 * Delete Post From His Id
 * @method DELETE
 */
async function deletePost(req, res) {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post) {
      await PostModel.findByIdAndDelete(req.params.id);
      res.json({ message: "Post deleted Successfully" });
    } else {
      res.json({ message: "Post Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Edit Post From His Id
 * @method PUT
 */

async function editPost(req, res) {
  const post = await PostModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        description: req.body.description,
      },
    },
    { new: true }
  );
  if (post) {
    res.json({ message: "Post Has Been Updated" });
  } else {
    res.json({ message: "Post Not Found" });
  }
}
module.exports = { getAllPosts, createPost, deletePost, editPost };
