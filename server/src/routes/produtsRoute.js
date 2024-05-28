const express = require("express");
const upload = require("../middlewares/upload");
const {getAllProduct,createProduct,getProductById,updateProduct,deleteProduct} = require('../controllers/productController');
const router = express.Router();


router.get("/product",getAllProduct);
router.post("/product/create",upload.single('image'),createProduct);
router.get("/product/:id", getProductById);
router.put("/product/:id",upload.single('image'),updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;