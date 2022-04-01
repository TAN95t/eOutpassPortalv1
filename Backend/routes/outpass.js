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

<<<<<<< HEAD
router.route("/fetchstatus").get(outpassStatus);

router.route("/create").post(protect, authorize('student'), createOutpass);
router.route("/getalloutpasses").get(protect, authorize('warden'), getOutpasses);
router.route("/useroutpasses").get(protect, authorize('student'), getUserOutpasses);
router.route("/wardensport/:id").put(protect, authorize('warden'), updateOutpass);
=======
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
>>>>>>> 311ce9e23f520d7c323376bcd1e7905cd4f74b83

module.exports = router;
