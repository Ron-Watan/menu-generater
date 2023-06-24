import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; dotenv.config()
import cors from 'cors'
import morgan from "morgan";
import userRoute from './_1routes/userRoute.js'
import clientsRoute from './_1routes/clientsRoute.js'


import multer from "multer";
import bodyparser from "body-parser";


const app = express()



app.use(express.json())
app.use(cors())
app.use(morgan('dev')) // log HTTP named dev

// app.use('/api/client', clientRoute)
app.use('/api/user', userRoute)
app.use('/api/clients', clientsRoute)


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// app.use('/images', express.static('images'))





// const multerStorage = multer.memoryStorage();

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only images.", false);
//   }
// };

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter
// });

// const uploadFiles = upload.array("images", 10); // limit to 10 images

// const uploadImages = (req, res, next) => {
//   uploadFiles(req, res, err => {
//     if (err instanceof multer.MulterError) { // A Multer error occurred when uploading.
//       if (err.code === "LIMIT_UNEXPECTED_FILE") { // Too many images exceeding the allowed limit
//         // ...
//       }
//     } else if (err) {
//       // handle other errors
//     }

//     // Everything is ok.
//     next();
//   });
// };
// /////////////////////////////////////////////
// // const sharp = require("sharp");

// const resizeImages = async (req, res, next) => {
//   if (!req.files) return next();

//   req.body.images = [];
//   await Promise.all(
//     req.files.map(async file => {
//       // const newFilename = ...;

//       await sharp(file.buffer)
//         .resize(640, 320)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`upload/${newFilename}`);

//       req.body.images.push(newFilename);
//     })
//   );

//   next();
// };






/////////////////////////////////////










mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: false
}).then(res => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log('MongoDB is NOT connected')
  console.log(err)

})


const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Run server on port ${port}`)
})
