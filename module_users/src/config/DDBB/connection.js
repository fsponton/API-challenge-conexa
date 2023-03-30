const mongoose = require("mongoose");
const { URI } = require("../enviroment")

const connection = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(`${URI}`, { useNewUrlParser: true })
        console.log("the connection with database: db_conexa has been stablished")
    } catch (err) {
        console.log(err.message)
        throw new Error("connection refused")
    }
}

module.exports = connection;