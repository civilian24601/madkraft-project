// routes/dashboard.js
const express = require('express');
const router = express.Router();

// Mock API response
router.get('/content', (req, res) => {
  res.json({ message: 'No content generated yet.' });
});

module.exports = router;
