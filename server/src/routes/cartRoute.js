const express = require("express");
const {addCart, getCartByUserId} = require('../controllers/cartController');

const router = express.Router();


router.get("/product/:userId",getCartByUserId);
router.post("/addtocart",addCart);


module.exports = router;