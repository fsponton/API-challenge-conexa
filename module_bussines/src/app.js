const express = require("express")
const connection = require("./config/DDBB/connection")


//conexion  DDBB
connection();

//servidor node
const app = express();

//configure cors
// app.use(cors("http://localhost:7777/*"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:7777/*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//convertir datos de body a obj js
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // cualquier dato que llegue en urlencoded lo pasa a json

//cargar conf rutas

const list_route = require("./routes/routes_list")

app.use("/api/negocio", list_route)

module.exports = {
    app
}
