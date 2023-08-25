import express from 'express'
import mongoose from "mongoose";
import { register, login, getInfoUserToStore, requireLogin, generateMenu } from '../_2controllers/userController.js'
import {
  findOneMenu, createManu, getAllMenu, saveEditMenu, deleteMenu,
  uploadImageBanner,
  uploadImage,
  getAllImage, getImage,
  saveNameMenu, saveTimeSetup, saveLangSetup, setupTheme, getTheme, saveOnOffSetting,
  getFeedBack, saveFeedBack, saveReArangeList, saveQRCode, getQrCode, saveExtraInfo
} from '../_2controllers/manuController.js'

import { getSubscription, subscription,checkSubscription } from '../_2controllers/subscriptionController.js'


import multer from "multer";
// import formidable from "formidable";
// import fs from "fs";
// import { getResult, resizeImages, uploadImages } from '../_2controllers/uploadController.js';
import dotenv from 'dotenv'; dotenv.config()
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

// const upload = multer({ dest: 'images/' })
const router = express.Router()
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from 'gridfs-stream'



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
    // const file1 = await gfs.files.findOne({ filename: file.originalname });
    console.log('save')
    // console.log(file1)
    // console.log('save')
    return {
      bucketName: 'photos',
      filename: file.originalname,// same as imgId
    };





    // if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/octet-stream') {
    //   return {
    //     bucketName: 'photos',
    //     filename: file.originalname,// same as imgId
    //   };
    // } else {
    //   return null;
    // }
  }



});












const upload = multer({ storage });

///////////// GridFs /////////////// Finish
// ==> /api/user
// account
router.post('/register', register)
router.post('/login', login)

// components

router.post('/info-user', requireLogin, getInfoUserToStore)
router.post('/getAllMenu', requireLogin, getAllMenu)

router.post('/create-manu', requireLogin, createManu)

// router.post('/create-manu', middleware, requireLogin, createManu)
router.post('/findOneMenu', requireLogin, findOneMenu)
router.post('/saveEditMenu', requireLogin, saveEditMenu)
router.post('/deleteMenu', requireLogin, deleteMenu)
router.post('/saveNameMenu', requireLogin, saveNameMenu)
router.post('/saveTimeSetup', requireLogin, saveTimeSetup)
router.post('/saveLangSetup', requireLogin, saveLangSetup)
router.post('/saveOnOffSetting', requireLogin, saveOnOffSetting)
router.post('/getFeedBack', requireLogin, getFeedBack)
router.post('/saveFeedBack', requireLogin, saveFeedBack)
router.post('/saveReArangeList', requireLogin, saveReArangeList)
router.post('/saveQRCode', requireLogin, saveQRCode)
router.post('/saveExtraInfo', requireLogin, saveExtraInfo)


router.post('/generateMenu', requireLogin, generateMenu)


router.post('/photos/dataBanner', uploadImageBanner)

router.post('/images/uplaodBanner', upload.array("avatar", 12), uploadImageBanner)



router.get('/getSubscription', requireLogin, getSubscription)
router.post('/subscription', requireLogin, subscription)
router.post('/checkSubscription', requireLogin, checkSubscription)


// router.post('/images/save', upload.single("avatar"), saveImage)
// router.post('/images/delete1', upload.single("avatar"), delelteImage)
// router.post('/images/uplaodBanner', upload.single("avatar"), uploadImageBanner)
// router.post('/images/uplaodBanner', upload.array("avatar", 12), uploadImageBanner)
// router.post('/images/allBanner', getAllImageBanner)

router.post('/images/all', getAllImage)

router.post('/setupTheme', requireLogin, setupTheme)
router.post('/getTheme', requireLogin, getTheme)
router.post('/getQrCode', requireLogin, getQrCode)

router.post('/images/', upload.single("avatar"), getImage)

// router.post('/images/preview', getImage)
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


router.post('/photos/uplaod', upload.single("avatar"), async (req, res) => {
  const imgId = req.file.originalname
  // console.log(req.file.originalname)
  try {
    const file = await gfs.files.find({ filename: imgId }).toArray()


    if (file.length === 1) {
      return res.send({
        message: 'Success',
        // data: req.file,
        success: true,
      })
    }
    // gridfsBucket.delete(file._id)

    for (let i = 0; i < file.length - 1; i++) {
      console.log(file[i]._id)
      if (!file[i]._id) return
      gridfsBucket.delete(file[i]._id)
      console.log('dellllll')
    }

    res.send({
      message: 'Success',
      // data: req.file,
      success: true,
    })
  } catch (error) {

  }
})
router.post('/photos/uplaodOne', upload.single("avatar"), (req, res) => {
  res.send({
    message: 'Success',
    // data: req.file,
    success: true,
  });
})
router.post('/photos/uplaod6', upload.array("avatar1", 12), (req, res) => {
  res.send({
    message: 'Success',
    success: true,
  });
})



// One Menu Route
router.post('/photos/getImage', async (req, res) => {
  const { imgId } = req.body;
  // if(imgId.length)
  // try {
  const file = await gfs.files.findOne({ filename: imgId });
  // if (!file) return console.log('Nofile')
  // gfs.createReadStream('df3a2c5fb1c5f2f655c08c32ddaf06b6');
  // readStream.pipe(readStream);
  res.send({
    message: 'Success',
    images: file,
    success: true,
  });

});

router.post('/photos/rename', async (req, res) => {
  const { imgId, newImgId } = req.body;

  const file = await gfs.files.findOne({ filename: imgId });
  if (!file) return
  gridfsBucket.rename(file._id, newImgId)
  res.send({
    message: 'Success',
    success: true,
  });
});

router.post('/photos/deleteArray', (req, res) => {
  const { imgId } = req.body;
  if (imgId.length === 0) return console.log('return')

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

router.post('/photos/delete', async (req, res) => {
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
// router.post('/images/delete', (req, res) => {
//   const { imgId } = req.body;
//   // console.log('imgId')
//   // console.log(imgId)
//   gridfsBucket.delete('64d074a592fb36c34675f77c')
//   // gfs.remove({ _id: '64d074a592fb36c34675f77c', root: 'uploads' }, (err, gridStore) => {
//   //   if (err) {
//   //     return res.status(404).json({ err: err });
//   //   }

//   //   res.redirect('/');
//   // });
// });



export default router




