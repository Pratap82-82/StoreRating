const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkRole');

router.get('/admin-dashboard', authenticate, checkRole(['admin']), adminController.dashboard);


module.exports = router;