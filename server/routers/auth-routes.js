const { Router } = require("express");
const router = new Router()
const AuthController = require("../controllers/authControllers")



// router.get('/services', ServicesControllers.getServices);
// router.get('/services/:id', ServicesControllers.getServiceById);

router.post('/auth', AuthController.postAuth);
router.post('/send-message', AuthController.sendMessage);
router.get('/auth', AuthController.getAuth);
router.post('/getMessage', AuthController.getMessage);
router.get('/auth-one/:id', AuthController.getAuthById);
router.put('/auth/:id', AuthController.putAuth);
router.delete('/auth/:id', AuthController.deleteAuth);
// router.put('/services/:id', ServicesControllers.updateServices);
// router.delete('/services/:id', ServicesControllers.deleteServiceById);




module.exports = router