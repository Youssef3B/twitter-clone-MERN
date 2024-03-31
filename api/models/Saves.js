const mongoose = require("mongoose");

const SavesSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id_post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },
  { timestamps: true }
);

const SavesModel = mongoose.model("Saves", SavesSchema);

module.exports = { SavesModel };
