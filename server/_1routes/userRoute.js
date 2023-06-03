import express from 'express'
import { register, login, getInfoUserToStore, requireLogin } from '../_2controllers/userController.js'
import { findOneMenu, createManu, getAllMenu, saveEditMenu, deleteMenu } from '../_2controllers/manuController.js'


const router = express.Router()

// ==> /api/user
router.post('/register', register)
router.post('/login', login)
router.post('/info-user', requireLogin, getInfoUserToStore)

router.post('/getAllMenu', requireLogin, getAllMenu)
router.post('/create-manu', requireLogin, createManu)
router.post('/findOneMenu', requireLogin, findOneMenu)
router.post('/saveEditMenu', requireLogin, saveEditMenu)
router.post('/deleteMenu', requireLogin, deleteMenu)

// router.post('/apply-doctor', requireLogin, applyToDoctor)
router.get('/customer/:link', showMenu)


// router.post('/markAllUnSeen', requireLogin,markAllUnSeen)
// router.post('/deleteAllSeen', requireLogin,deleteAllSeen)


export default router