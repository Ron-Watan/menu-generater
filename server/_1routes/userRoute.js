import express from 'express'
import { register, login, getInfoUserToStore, requireLogin, generateMenu } from '../_2controllers/userController.js'
import {
  findOneMenu, createManu, getAllMenu, saveEditMenu, deleteMenu,
  uploadImageBanner, getAllImageBanner,
  uploadImage, saveImage, getAllImage, getImage, delelteImage, saveNameMenu
} from '../_2controllers/manuController.js'
import multer from "multer";
import formidable from "formidable";
import fs from "fs";
// import { getResult, resizeImages, uploadImages } from '../_2controllers/uploadController.js';

// const myStorage = multer.memoryStorage()
const upload = multer({ dest: 'images/' })
// const upload = multer({ myStorage })


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

// app.listen(3000, () => {
//   console.log("Server Running!")
// })


// router.post(
//   "/multiple-upload",
//   uploadImages,
//   resizeImages,
//   getResult
// );




// router.post('/apply-doctor', requireLogin, applyToDoctor)
// router.get('/customer/:link', showMenu)


// router.post('/markAllUnSeen', requireLogin,markAllUnSeen)
// router.post('/deleteAllSeen', requireLogin,deleteAllSeen)


export default router