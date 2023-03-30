const express = require("express")
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:7777/*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const list_route = require("./routes/routes_list")
const find_user = require("./routes/routes_list")

app.use("/api/negocio", list_route)
app.use("/api/negocio", find_user)

module.exports = {
    app
}
