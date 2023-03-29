const { Router } = require("express")
const router = Router();
const list = require("../controllers/list_users");

//Listar usuarios
router.get("/list", list.list_users);


//exportar router
module.exports = router


