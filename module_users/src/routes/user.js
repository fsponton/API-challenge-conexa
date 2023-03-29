const { Router } = require("express")
const router = Router();
const user_reg = require("../controllers/register_user")
const user_auth = require("../controllers/auth_user");
const list = require("../controllers/list_users");
const userExtractor = require("../middlewares/userExtractor");
//rutas 

//Registro de usuario
router.post("/register", user_reg.register_user);

//Autenticacion de usuario
router.post("/auth", user_auth.auth_user);


//Listar usuarios
router.get("/list", userExtractor, list.list_users);



//exportar router
module.exports = router


