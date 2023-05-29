import express from 'express'
import { getInfodoctor } from '../controllers/doctorController.js'
import { requireLogin } from '../controllers/userController.js'

const router = express.Router()


router.post('/getInfodoctor', getInfodoctor)



export default router