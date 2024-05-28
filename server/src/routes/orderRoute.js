const express = require("express");
const { orderGetById, createOrder } = require("../controllers/orderController");


const router = express.Router();


router.get("/order/:id",orderGetById);
router.post("/order",createOrder);


module.exports = router;