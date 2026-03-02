const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/priceCategoryControllers');

router.get('/price-categories', ctrl.getAll);
router.get('/price-categories/:id', ctrl.getById);
router.post('/price-categories', ctrl.create);
router.put('/price-categories/:id', ctrl.update);
router.delete('/price-categories/:id', ctrl.delete);

module.exports = router;
