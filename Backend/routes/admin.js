const express = require("express");

const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/admin");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.get("/getusers", protect, authorize("admin"), getUsers);
router.get("/getuser/:id", protect, authorize("admin"), getUser);
router.put("/updateuser/:id", protect, authorize("admin"), updateUser);
router.delete("/deleteuser/:id", protect, authorize("admin"), deleteUser);



module.exports = router;
