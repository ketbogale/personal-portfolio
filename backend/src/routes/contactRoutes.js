const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/contact', submitContactForm);

module.exports = router;
