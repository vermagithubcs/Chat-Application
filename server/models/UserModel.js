const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "Please Provide a name"]
    },
    email : {
        type : String,
        required : [true, "Please provide a email"]
    },
    password : {
        type : String,
        required : [true, "Provide a Password for Security"]
    },
    profile_pic : {
        type : String,
        default : ""
    }
}, {
    timestamps : true
});

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;