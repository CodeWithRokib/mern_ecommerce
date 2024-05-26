const {
  deleteUser,
  getAllUser,
  getUserById,
  loginController,
  registerController,
  updateUser,
} = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
router.post("/user/register", registerController);
router.post("/user/login", loginController);

module.exports = router;
