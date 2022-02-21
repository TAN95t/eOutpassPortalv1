
const express = require('express');

const { getOutpasses, getOutpass, createOutpass, deleteOutpass, updateOutpass, outpassStatus } = require("../controllers/outpass");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(createOutpass);

router.route("/").get(protect, getOutpasses)

router.route("/:id").get(protect, getOutpass).delete(protect, deleteOutpass).put(protect, updateOutpass);

router.route("/status/:id").get(outpassStatus);

module.exports = router;