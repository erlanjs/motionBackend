const mongoose = require("mongoose")

const PartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        data: String ,
        contentType: String,
    }
})


const uploadModel = mongoose.model("portfolio" , PartSchema)

module.exports = uploadModel