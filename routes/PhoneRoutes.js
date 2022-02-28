require("dotenv").config()
const express = require("express")
const app = express()
const phoneModal = require("../models/phoneNumber")
const http = require('request');
const nodemailer = require("nodemailer")

app.use(express.json())




app.get("/api/v1/phones", async (req, res) => {
    const phones = await phoneModal.find({})
    try {
        res.status(200).json(phones)
    } catch (e) {
        console.log(e)
    }
})

app.post("/api/v1/phone" , async (req , res) => {
    const phone = new phoneModal(req.body)

    try{

        const transporter = nodemailer.createTransport({
            service: "gmail" ,
            auth: {
                user: "erlanklink@gmail.com",
                pass: "isakjannat"
            }
        })

        const mailOptions = {
            from: "erlanklink@gmail.com",
            to: "motionwebteam@gmail.com",
            subject: "Новый студент хочет учиться",
            text: `Имя:${req.body.name} \n email: ${req.body.email} \n Телефон: ${req.body.phone}`
        }


        transporter.sendMail(mailOptions , err => {
            console.log(err , "ошибкафф")
        })

        await phone.save()




        res.status(200).json(phone)
    } catch (e) {
        res.status(500).json(e)
    }
})








module.exports = app