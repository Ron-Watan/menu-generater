import express from 'express'
import { getAllUser, getAllDoctor, doctorApproval } from '../controllers/adminController.js'
import { requireLogin } from '../controllers/userController.js'

const router = express.Router()


router.get('/getAllUser', requireLogin, getAllUser)
router.get('/getAllDoctor', requireLogin, getAllDoctor)
router.post('/doctorApproval', requireLogin, doctorApproval)



export default router