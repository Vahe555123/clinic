const { Router } = require("express");
const router = new Router()
const ServicesControllers = require("../controllers/ServiceControllers")



router.get('/services', ServicesControllers.getServices);
router.get('/services/:id', ServicesControllers.getServiceById);

router.post('/services', ServicesControllers.addService);
router.put('/services/:id', ServicesControllers.updateServices);
router.delete('/services/:id', ServicesControllers.deleteServiceById);




module.exports = router