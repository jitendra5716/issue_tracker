const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/projects',require('./project'));
router.use('/bugs',require('./bug'));


module.exports = router;