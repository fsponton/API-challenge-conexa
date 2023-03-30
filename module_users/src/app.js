const express = require("express")
const app = express();
const cors = require("cors")

// app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const register_route = require("./routes/user")
const login_route = require("./routes/user")
const list_route = require("./routes/user")
const find_user = require("./routes/user")


app.use("/api/user", register_route)
app.use("/api/user", login_route)
app.use("/api/user", list_route)
app.use("/api/user", find_user)

module.exports = {
    app
}
