const { Router } = require("express")
const router = Router();
const list = require("../controllers/list_users");

router.get("/list", list.list_users);

module.exports = router


