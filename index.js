const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const phoneRoutes = require("./routes/PhoneRoutes")
const uploadRoute = require('./routes/uploadRoute')
const PORT = 8000
const path = require("path")
app.use(express.json({extended : true, limit: 1024 * 1024 * 1024 * 100}))
app.use("/images" , express.static(path.join(__dirname , "images")))
app.use(cors())


mongoose.connect("mongodb+srv://Askar:qwertyu@cluster0.uolwl.mongodb.net/motionWeb?retryWrites=true&w=majority")
    .then(() => console.log("mongoDB уланды"))
    .catch(() => console.log("MongoDB иштеген жок"))


app.use(express.static(path.resolve(__dirname , "images")))
app.use(phoneRoutes)
app.use(uploadRoute)



app.listen(PORT , () => console.log("BackEnd-Иштеди"))