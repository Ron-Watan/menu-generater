import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; dotenv.config()
import cors from 'cors'
import morgan from "morgan";
import userRoute from './_1routes/userRoute.js'
import clientsRoute from './_1routes/clientsRoute.js'


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev')) // log HTTP named dev

// app.use('/api/client', clientRoute)
app.use('/api/user', userRoute)
app.use('/api/clients', clientsRoute)

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
