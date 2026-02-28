const { Router } = require("express");
const router = new Router()
const ServiceItemControllers = require("../controllers/ServiceItemControllers")



router.get('/service-items', ServiceItemControllers.getServiceItems);
router.get('/service-items/:id', ServiceItemControllers.getServicItemsById);
router.get('/service-items/one', ServiceItemControllers.getServicItemsByIdOne);

router.post('/service-items', ServiceItemControllers.postServiceItems);
router.put('/service-items/:id', ServiceItemControllers.putServiceItems);
router.delete('/service-items/:id', ServiceItemControllers.deleteServiceItems);




module.exports = router