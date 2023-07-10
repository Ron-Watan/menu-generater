import express from 'express'
import { getClentMenu, getAllImageBanner, sentfeedBack } from '../_2controllers/clientController.js'


const router = express.Router()




router.get('/:link', getClentMenu)
router.get('/allBanner/:link', getAllImageBanner)
router.post('/feedBack/:link', sentfeedBack)


export default router