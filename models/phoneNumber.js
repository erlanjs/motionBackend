const mongoose = require("mongoose")

const PhoneSchema = new mongoose.Schema({
    email: {
        type: String ,
        required: true,
        lowercase:true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},{timestamps: true})

const Phone = mongoose.model("phone" , PhoneSchema)

module.exports  = Phone ;