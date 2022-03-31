const express = require("express");

const {
  getOutpasses,
  getOutpass,
  createOutpass,
  deleteOutpass,
  updateOutpass,
  outpassStatus,
  getUserOutpasses,
} = require("../controllers/outpass");

const { authorize, protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(protect, authorize("student"), createOutpass);
router.route("/").get(protect, authorize("warden"), getOutpasses);
router
  .route("/useroutpasses")
  .get(protect, authorize("student"), getUserOutpasses);
router
  .route("/:id")
  .get(protect, authorize("warden"), getOutpass)
  .delete(protect, authorize("warden"), deleteOutpass)
  .put(protect, authorize("warden"), updateOutpass);
router.route("/status").get(outpassStatus);

module.exports = router;
