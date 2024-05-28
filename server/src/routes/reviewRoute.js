const express = require("express");
const { getProductIdByReview, createReview } = require("../controllers/reviewController");

const router = express.Router();


router.get("/review/:productId",getProductIdByReview);
router.post("/review",createReview);



module.exports = router;