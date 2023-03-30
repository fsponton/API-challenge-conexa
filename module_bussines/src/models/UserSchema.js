const { Schema, model, mongoose } = require("mongoose")


const UserSchema = new Schema({
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true }
})

module.exports = model("User", UserSchema) 
