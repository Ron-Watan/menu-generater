import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; dotenv.config()
import cors from 'cors'
import morgan from "morgan";
import userRoute from './_1routes/userRoute.js'
import clientsRoute from './_1routes/clientsRoute.js'

import bodyparser from "body-parser";
// const methodOverride = require('method-override');
import methodOverride from "method-override";
import { webHooks } from '../server/_2controllers/subscriptionController.js'
import { stripe } from "../server/_2controllers/Utils.js";
// import Stripe from 'stripe';


// const stripe = new Stripe('sk_test_...', {
//   apiVersion: '2020-08-27',
// });

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   // apiVersion: "2020-08-27",
//   apiVersion: '2023-08-16',

// });











const app = express()





app.use(cors())
app.use(morgan('dev')) // log HTTP named dev

// app.use('/api/client', clientRoute)


// const endpointSecret = process.env.WEB_HOOK_SECRET;

app.post('/webhook', express.raw({ type: 'application/json' }), webHooks)




const maxRequestBodySize = '10mb';
app.use(bodyparser.urlencoded({ extended: true, limit: maxRequestBodySize }))
app.use(bodyparser.json({ limit: maxRequestBodySize }))


app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/clients', clientsRoute)


app.use(methodOverride('_method'));
app.set('view engine', 'ejs');







// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
// app.use('/images', express.static('images'))


// const maxRequestBodySize = '10mb';
// app.use(express.json({limit: maxRequestBodySize}));
// app.use(express.urlencoded({limit: maxRequestBodySize}));

// app.use(bodyparser.json({limit: maxRequestBodySize}));
// app.use(bodyparser.urlencoded({limit: maxRequestBodySize}));
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
