import express from 'express'
import { getClentMenu, getAllImageBanner } from '../_2controllers/clientController.js'


const router = express.Router()




router.get('/:link', getClentMenu)
router.get('/allBanner/:link', getAllImageBanner)


export default router