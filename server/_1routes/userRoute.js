import express from 'express'
import mongoose from "mongoose";
import bodyparser from "body-parser";
import { checkRegister, register, login, getInfoUserToStore, requireLogin } from '../_2controllers/userController.js'
import {
  getAllMenu, createManu, saveEditMenu,
  uploadImageBanner, deleteMenu,
  findOneMenu, saveNameMenu, saveReArangeList,
  saveTimeSetup, saveLangSetup, setupTheme, getTheme, saveOnOffSetting,
  getFeedBack, saveFeedBack, saveQRCode, getQrCode, saveExtraInfo,
  deleteAllDataAccout
} from '../_2controllers/manuController.js'


import { getSubscription, subscription, checkSubscription, getSubPayment, deleteCustomer } from '../_2controllers/subscriptionController.js'
import { listAllSubscription } from '../_2controllers/adminControl.js'

const router = express.Router()
import dotenv from 'dotenv'; dotenv.config()

import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from 'gridfs-stream'

import Stripe from 'stripe';


// const stripe = new Stripe('sk_test_...', {
//   apiVersion: '2020-08-27',
// });

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',

});


///////////// GridFs ///////////////
const conn = mongoose.createConnection(process.env.MONGODB_URL)

let gfs, gridfsBucket; // declare one more variable with name gridfsBucket

conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'photos'
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
  console.log('photo connected')
});

const storage = new GridFsStorage({
  url: process.env.MONGODB_URL,
  file: (req, file) => {
    console.log('Image-saveed')
    return {
      bucketName: 'photos',
      filename: file.originalname,// same as imgId
    };
  }

});

const upload = multer({ storage });

///////////// GridFs /////////////// Finish



router.post('/checkRegister', checkRegister) // Not Duplicate Email and Link
router.post('/register', register)
router.post('/login', login)

router.post('/info-user', requireLogin, getInfoUserToStore)

router.post('/getAllMenu', requireLogin, getAllMenu)
router.post('/create-manu', requireLogin, createManu)
router.post('/saveEditMenu', requireLogin, saveEditMenu)
router.post('/saveNameMenu', requireLogin, saveNameMenu)
router.post('/saveReArangeList', requireLogin, saveReArangeList)
router.post('/findOneMenu', requireLogin, findOneMenu)
router.post('/deleteMenu', requireLogin, deleteMenu)

router.post('/getFeedBack', requireLogin, getFeedBack)
router.post('/saveFeedBack', requireLogin, saveFeedBack)
router.post('/getQrCode', requireLogin, getQrCode)
router.post('/saveQRCode', requireLogin, saveQRCode)
router.post('/saveLangSetup', requireLogin, saveLangSetup)
router.post('/saveTimeSetup', requireLogin, saveTimeSetup)
router.post('/saveOnOffSetting', requireLogin, saveOnOffSetting)
router.post('/saveExtraInfo', requireLogin, saveExtraInfo)
router.post('/getTheme', requireLogin, getTheme)
router.post('/setupTheme', requireLogin, setupTheme)




router.post('/photos/dataBanner', requireLogin, uploadImageBanner)
router.post('/images/uplaodBanner', requireLogin, upload.array("avatar", 12), uploadImageBanner)

router.post('/checkSubscription', requireLogin, checkSubscription)
router.get('/getSubscription', requireLogin, getSubscription) // Get Package
router.post('/subscription', requireLogin, subscription) // Get Session Payment
router.post('/getSubPayment', requireLogin, getSubPayment) // for Edit Payment
router.post('/deleteCustomer', requireLogin, deleteCustomer)
router.get('/listAllSubscription', listAllSubscription) 



router.post('/deleteAllDataAccout', requireLogin, deleteAllDataAccout)

//- Image Section

// Public Route
router.get('/photos/:filename', async (req, res) => {
  const filenameLink = req.params.filename;
  try {
    const file = await gfs.files.findOne({ filename: filenameLink });
    const readstream = gridfsBucket.openDownloadStream(file._id);
    readstream.pipe(res);
  } catch (error) {
  }
});

// Banner
router.post('/photos/uplaod', requireLogin, upload.single("avatar"), async (req, res) => {
  console.log('banner')
  const imgId = req.file.originalname

  try {
    const file = await gfs.files.find({ filename: imgId }).toArray()

    if (file.length === 1) {
      return res.send({
        message: 'Success',
        success: true,
      })
    }

    for (let i = 0; i < file.length - 1; i++) {
      if (!file[i]._id) return
      gridfsBucket.delete(file[i]._id)
      console.log('Delete Banner')
    }

    res.send({
      message: 'Success',
      success: true,
    })
  } catch (error) {

  }
})

// One Menu Route
router.post('/photos/uplaodOne', requireLogin, upload.single("avatar"), (req, res) => {
  res.send({
    message: 'Success',
    success: true,
  });
})



router.post('/photos/rename', requireLogin, async (req, res) => {
  const { imgId, newImgId } = req.body;

  const file = await gfs.files.findOne({ filename: imgId });
  if (!file) return
  gridfsBucket.rename(file._id, newImgId)
  res.send({
    message: 'Success',
    success: true,
  });
});

router.post('/photos/deleteArray', requireLogin, (req, res) => {
  const { imgId } = req.body;
  if (imgId.length === 0) {
    return res.send({
      message: 'Success',
      success: true,
    });
  }

  imgId.forEach(async (el, index) => {
    console.log('del')
    const file = await gfs.files.findOne({ filename: el });
    if (!file) return
    gridfsBucket.delete(file._id)
  })
  res.send({
    message: 'Success',
    success: true,
  });
});


router.post('/photos/delete',requireLogin, async (req, res) => {
  const { imgId } = req.body;
  try {
    const file = await gfs.files.findOne({ filename: imgId });
    if (!file) {
      return res.send({
        message: 'Success',
        success: true,
      });
    }
    gridfsBucket.delete(file._id)
    res.send({
      message: 'Success',
      success: true,
    });
  } catch (error) {

  }


});


///// WEB HOOK /////

const endpointSecret = process.env.WEB_HOOK_SECRET;

router.post('/webhook', bodyparser.raw({ type: 'application/json' }), (request, response) => {
  // router.post('/webhook', raw({ type: 'application/json' }), webHooks)

  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

  } catch (err) {
    console.log(err)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


export default router




