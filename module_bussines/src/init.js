const { app } = require("./app")
const { PORT_USERS } = require("./config/enviroment")
const connection = require("./config/DDBB/connection")
connection();

app.listen(`${PORT_USERS}`, () => {
    console.log(`API Bussines listening on ${PORT_USERS}`)
})