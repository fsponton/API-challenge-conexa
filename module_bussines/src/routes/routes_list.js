const { Router } = require("express")
const router = Router();
const { list_users } = require("../controllers/list_users");

router.get("/list", list_users);

module.exports = router


