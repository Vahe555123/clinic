const { Router } = require("express");
const router = new Router()
const DoctorControllers = require("../controllers/doctorControllers")


router.get('/doctor', DoctorControllers.getDoctor);
router.get('/doctor/:id', DoctorControllers.getDoctorById);

router.post('/doctor', DoctorControllers.addDoctor);
router.put('/doctor/:id', DoctorControllers.updateDoctor);
router.delete('/doctor/:id', DoctorControllers.deleteDoctor);




module.exports = router