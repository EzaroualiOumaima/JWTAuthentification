const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum:["admin", "user"],
        required: true,
        default: "user",
      }     
})
// userSchema.pre("save",function(next))

const userModel = mongoose.model("user" , userSchema)
module.exports = userModel
