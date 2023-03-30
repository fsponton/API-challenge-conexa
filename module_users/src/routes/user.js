const { Router } = require("express")
const router = Router();
const { register_user } = require("../controllers/register_user")
const { auth_user } = require("../controllers/auth_user");
const { list_users } = require("../controllers/list_users");
const { findByEmail } = require("../controllers/find_user");
const userExtractor = require("../middlewares/userExtractor");
//rutas 

//Registro de usuario
router.post("/register", register_user);

//Autenticacion de usuario
router.post("/auth", auth_user);

//Listar usuarios
router.get("/list", userExtractor, list_users);

//find by email
router.get("", userExtractor, findByEmail);

module.exports = router


