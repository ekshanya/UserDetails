const mongoose= require('mongoose')
const UserSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Number : Number,
    id : Number
})
const Usermodel = mongoose.model("Users",UserSchema)
module.exports = Usermodel