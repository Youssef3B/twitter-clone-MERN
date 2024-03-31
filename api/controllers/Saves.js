const { SavesModel } = require("../models/Saves");

/**
 * Create A New Save
 * @method POST
 */
async function createSave(req, res) {
  const NewSave = new SavesModel({
    id_user: req.body.id_user,
    id_post: req.body.id_post,
  });
  const result = await NewSave.save();
  if (result) {
    res.json(result);
  }
}

/**
 * Get All Saves
 * @method GET
 */

async function getAllSaves(req, res) {
  try {
    const saves = await SavesModel.find()
      .populate({
        path: "id_user",
        select: "name username email bio avatar banner followers following",
      })
      .populate({
        path: "id_post",
        select: "description likes comments",
        populate: {
          path: "id_user",
          select: "name username email bio avatar banner followers following",
        },
      });
    res.json(saves);
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = { createSave, getAllSaves };
