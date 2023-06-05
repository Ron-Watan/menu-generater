import express from 'express'
import { getClentMenu } from '../_2controllers/clientController.js'


const router = express.Router()




router.get('/:link', getClentMenu)



export default router