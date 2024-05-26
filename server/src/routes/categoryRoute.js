// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();

// Get all categories
router.get('/categories', async (req, res) => {
     res.send('rokib');
});

module.exports = router;