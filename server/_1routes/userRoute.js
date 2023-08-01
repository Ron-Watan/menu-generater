import express from 'express'
import { register, login, getInfoUserToStore, requireLogin, generateMenu } from '../_2controllers/userController.js'
import {
  findOneMenu, createManu, getAllMenu, saveEditMenu, deleteMenu,
  uploadImageBanner, getAllImageBanner,
  uploadImage, saveImage, getAllImage, getImage, delelteImage,
  saveNameMenu, saveTimeSetup, saveLangSetup, setupTheme, getTheme, saveOnOffSetting,
  getFeedBack, saveFeedBack,saveReArangeList,saveQRCode,getQrCode
} from '../_2controllers/manuController.js'
import multer from "multer";
import formidable from "formidable";
import fs from "fs";
// import { getResult, resizeImages, uploadImages } from '../_2controllers/uploadController.js';


// const upload = multer({ dest: 'images/' }) **
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()

// ==> /api/user
// account
router.post('/register', register)
router.post('/login', login)

// components

router.post('/info-user', requireLogin, getInfoUserToStore)
router.post('/getAllMenu', requireLogin, getAllMenu)


router.post('/create-manu', requireLogin, createManu)
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



router.post('/generateMenu', requireLogin, generateMenu)



// router.post('/images/uplaodBanner', upload.single("avatar"), uploadImageBanner)
router.post('/images/uplaodBanner', upload.array("avatar", 12), uploadImageBanner)


router.post('/images/', upload.single("avatar"), getImage)
router.post('/images/uplaod', upload.single("avatar"), uploadImage)
router.post('/images/save', upload.single("avatar"), saveImage)
router.post('/images/delete', upload.single("avatar"), delelteImage)

router.post('/images/preview', getImage)
router.post('/images/all', getAllImage)
router.post('/images/allBanner', getAllImageBanner)


router.post('/setupTheme', requireLogin, setupTheme)
router.post('/getTheme', requireLogin, getTheme)
router.post('/getQrCode', requireLogin, getQrCode)




export default router