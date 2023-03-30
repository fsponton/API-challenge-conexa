const { Router } = require("express")
const router = Router();
const { list_users } = require("../controllers/list_users");
const { find_user } = require("../controllers/find_user");


router.get("/list", list_users);

router.get("/user", find_user)

module.exports = router


