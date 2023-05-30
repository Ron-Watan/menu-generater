import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; dotenv.config()
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'
import doctorRoute from './routes/doctorRoute.js'

import cors from 'cors'
import morgan from "morgan";

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev')) // log HTTP named dev

app.use('/api/user', userRoute)
app.use('/api/admin', adminRoute)
app.use('/api/doctor', doctorRoute)















mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: false
}).then(res => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log('MongoDB is NOT connected')
})


const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Run server on port ${port}`)
})
