const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.post('/create',projectController.create);
router.get('/details/:id',projectController.viewDetails);
router.get('/delete/:id',projectController.delete);
router.post('/details',projectController.filter);


module.exports = router;