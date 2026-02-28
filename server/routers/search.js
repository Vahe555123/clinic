const { Router } = require("express");
const router = new Router()
const SearchController = require("../controllers/searchControllers")



router.get('/', SearchController.search);




module.exports = router