const express = require('express')
const app = express()
const uploadModel = require("../models/parthfelioModels")
const upload = require("../moddelware/upload")
app.use(express.json())
const multer = require("multer")
const phoneModal = require("../models/phoneNumber");


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./images/");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload_1_img = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 1024 * 100}});

app.get("/api/v1/uploadget", async (req, res) => {
    const data = await uploadModel.find({})
    try {
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
    }
})

app.post('/api/v1/uploadPost', upload_1_img.single('image'), (req, res, next) => {

    try {
        const newImage = new uploadModel({
            name: req.body.name,
            image: {
                data: req.file.originalname,
                contentType: "image/png"
            },
            link: req.body["link"],
        })
        newImage.save()
            .then(() => console.log("upload image"))
            .catch((e) => console.log(e))
        res.json("qwerty")

    } catch (err) {
        console.log("Ошибка", err)
    }
})

app.delete("/api/v1/uploadDelete/:id" , async (req , res) => {
    try{
        await uploadModel.deleteOne({_id: req.params.id});
        await uploadModel.save()
        return res.json({message: "удалено"})
    } catch (e)  {
        res.status(500).send(e)
    }
})


app.put("api/v1/uploadpatch/:id" , async (req,res) => {
    console.log(req.params.id)
    res.json(res.send(req.params.id))
    // try{
    //     console.log(req.params.id)
    //     await uploadModel.findByIdAndUpdate({_id: req.params.id}, {
    //         name: req.body.name,
    //         image: {
    //             data: req.file.originalname,
    //             contentType: "image/png"
    //         },
    //         link: req.body["link"],
    //     });
    //     await uploadModel.save()
    //         .then(() => console.log("успешно изменено"))
    //     return res.json({message: "изменено"})
    // } catch (e)  {
    //     res.status(500).send(e)
    // }
})

module.exports = app