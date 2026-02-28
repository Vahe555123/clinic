const { Router } = require("express");
const router = new Router()
const EquipmentControllers = require("../controllers/EquipmentControllers")


router.get('/equipment', EquipmentControllers.getEquipment);
router.get('/equipment/:id', EquipmentControllers.getEquipmentById);

router.post('/equipment', EquipmentControllers.addEquipment);
router.put('/equipment/:id', EquipmentControllers.updateEquipment);
router.delete('/equipment/:id', EquipmentControllers.deleteEquipment);




module.exports = router