const mongoose = require("mongoose");
const { URI } = require("../enviroment")

const connection = () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(`${URI}`, { useNewUrlParser: true })
        console.log("conexion exitosa con db: db_conexa")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connection;