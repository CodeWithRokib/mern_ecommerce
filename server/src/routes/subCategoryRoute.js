const express = require("express");
const { getAllSubCategory, getSubCategoryById, deleteSubCategory, updateCategory, updateSubCategory, createSubCategory } = require("../controllers/subCategoryController");
const router = express.Router();

router.get("/subcategory", getAllSubCategory);
router.get("/subcategory/:id", getSubCategoryById);
router.delete("/subcategory/:id", deleteSubCategory);
router.put("/subcategory/:id", updateSubCategory);
router.post("/subcategory", createSubCategory);

module.exports = router;