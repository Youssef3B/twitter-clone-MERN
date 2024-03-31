const { string } = require("joi");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
    },
    likes: {
      type: Array,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = { PostModel };
