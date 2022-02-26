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

        const token = "1912778515:AAEB8YA-DWf5FS6SIU9Gi5QHMpuBVsnoe3s";
        const id2 = "547616061";

        const newZapisDev = [
            `<b>Name: <i> ${req.body.name}</i></b>`,
            `<b>Phone: <i>${req.body.phone}</i></b>`,
            `<b>Select: <i>${req.body.select}</i></b>`,
        ];
        let msg2 = "";
        newZapisDev.forEach((i) => {
            msg2 += i+"\n"
        })
        http.post(encodeURI(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id2}&parse_mode=html&text=${msg2}`))


        res.status(200).json(phone)
    } catch (e) {
        res.status(500).json(e)
    }
})








module.exports = app