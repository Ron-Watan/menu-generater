import express from 'express'
import { register, login, getInfoUserToStore, requireLogin, generateMenu } from '../_2controllers/userController.js'
import { findOneMenu, createManu, getAllMenu, saveEditMenu, deleteMenu, uploadImage, getImage } from '../_2controllers/manuController.js'
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

router.post('/generateMenu', requireLogin, generateMenu)


router.post('/images', upload.single("avatar"), uploadImage)
// router.get('/images/:imageName', getImage)
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