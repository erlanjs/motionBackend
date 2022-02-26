// const multer = require("multer")
// const GridFsStorage = require("multer-gridfs-storage")
// const path = require("path")
//
//
//
// const storage = new GridFsStorage({
//     url: "mongodb+srv://Askar:qwertyu@cluster0.uolwl.mongodb.net/motionWeb?retryWrites=true&w=majority",
//     options: {useNewUrlParser: true, useUnifiedTopology: true},
//     file: (req,file) => {
//         const match = ["image/png" , "image/jpeg"];
//
//         if (match.indexOf(file.mimetype) === -1 ){
//             const filename = `${Date.now()}-any-name${file.originalname}`
//             return filename
//         }
//
//         return {
//             bucketName : 'photos',
//             filename: `${Date.now()}-any-name${file.originalname}`
//         }
//
//     }
// })
//
// module.exports = multer({storage})
//
//
//
// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, "image/")
// //     },
// //     filename: function (req, file, cb) {
// //         let ext = path.extname(file.originalname)
// //         cb(null, Date.now() + ext)
// //     }
// // })
// //
// // // const types = ["image/png" , "image/jpeg" , "image/jpg"]
// //
// // const images = multer({
// //     storage: storage,
// //     fileFilter: function (req, file, cb) {
// //         if (
// //             file.mimetype === "image/png" ||
// //             file.mimetype === "image/jpg"
// //         ) {
// //             cb(null, true)
// //         } else {
// //             console.log("only jpg && png file supported")
// //             cb(null, false)
// //         }
// //     },
// //     limits: {
// //         fileSize: 1024 * 1024 * 2
// //     }
// // })
// //
// // module.exports = images
//
// // const fileFilter = (req , file , cb) => {
// //     if (types.includes(file.mimetype)){
// //         cb(null , true)
// //     } else {
// //         cb(null , false)
// //     }
// // }
//
// // module.exports = multer({storage , fileFilter})