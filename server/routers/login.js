const { Router } = require("express");
const router = new Router()
const LoginController = require("../controllers/loginControllers")

router.post('/register', LoginController.register);
router.post('/login', LoginController.login);
router.delete('/check', LoginController.check);




module.exports = router