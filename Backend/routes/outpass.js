const express = require('express');

const { getOutpasses, getOutpass, createOutpass, deleteOutpass, updateOutpass, outpassStatus, getUserOutpasses } = require("../controllers/outpass");

const { authorize, protect } = require("../middleware/auth");

const router = express.Router();

router.route("/fetchstatus").get(outpassStatus);

router.route("/create").post(protect, authorize('student'), createOutpass);
router.route("/getalloutpasses").get(protect, authorize('warden'), getOutpasses);
router.route("/useroutpasses").get(protect, authorize('student'), getUserOutpasses);
router.route("/wardensport/:id").put(protect, authorize('warden'), updateOutpass);

module.exports = router;