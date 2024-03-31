const express = require("express");
const { createSave, getAllSaves } = require("../controllers/Saves");
const router = express.Router();

/**
 * Create a New Save Post
 * @method POST
 */
router.post("/createsave", createSave);

/**
 * Get All Saves
 * @method Get
 */

router.get("/allsaves", getAllSaves);

module.exports = router;
