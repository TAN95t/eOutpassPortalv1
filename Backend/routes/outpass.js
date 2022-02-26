
const express = require('express');

const { getOutpasses, getOutpass, createOutpass, deleteOutpass, updateOutpass, outpassStatus } = require("../controllers/outpass");

const { authorize, protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(protect, authorize('student'), createOutpass);
router.route("/").get(protect, authorize('user'), getOutpasses);
router.route("/:id").get(protect, authorize('user'), getOutpass).delete(protect, authorize('user'), deleteOutpass).put(protect, authorize('user'), updateOutpass);
router.route("/status/:id").get(protect, authorize('student'), outpassStatus);

module.exports = router;