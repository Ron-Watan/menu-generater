import mongoose from 'mongoose'

const imagesSchema = mongoose.Schema({
  userId: String,
  imgId: String,
  destination: String,
  img: {
    data: Buffer,
    contentType: String
  },
  size: Number,


}, { timestamps: true })

const Images = mongoose.model('Images', imagesSchema)

export default Images

