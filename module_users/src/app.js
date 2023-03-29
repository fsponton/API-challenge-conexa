const express = require("express")
const connection = require("./config/DDBB/connection")
const cors = require("cors")

//conexion  DDBB
connection();

//servidor node
const app = express();

//configure cors
app.use(cors());

//convertir datos de body a obj js
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // cualquier dato que llegue en urlencoded lo pasa a json

//cargar conf rutas
const register_route = require("./routes/user")
const login_route = require("./routes/user")
const list_route = require("./routes/user")

app.use("/api/user", register_route)
app.use("/api/user", login_route)
app.use("/api/user", list_route)

module.exports = {
    app
}
