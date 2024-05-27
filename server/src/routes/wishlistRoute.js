const express = require("express");
const { getWishlistByUserId,removeWishlist, addWishlist } = require('../controllers/wishlistController');

const router = express.Router();


router.get("/wishlist/:userId",getWishlistByUserId);
router.post("/addwishlist",addWishlist);
router.delete("/removewishlist",removeWishlist);


module.exports = router;