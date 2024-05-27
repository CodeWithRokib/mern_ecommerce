const express = require("express");
const { getAllCategory, getCategoryById, deleteCategory, updateCategory, createCategory } = require("../controllers/categoryController");
const router = express.Router();

router.get("/category", getAllCategory);
router.get("/category/:id", getCategoryById);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateCategory);
router.post("/category", createCategory);

module.exports = router;