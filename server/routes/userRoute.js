import express from 'express'
import { login, register, requireLogin, findInfoUser, applyToDoctor, markAllUnSeen, deleteAllSeen } from '../controllers/userController.js'

const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.post('/info-user', requireLogin, findInfoUser)


router.post('/apply-doctor', requireLogin, applyToDoctor)


router.post('/markAllUnSeen', requireLogin,markAllUnSeen)
router.post('/deleteAllSeen', requireLogin,deleteAllSeen)


export default router