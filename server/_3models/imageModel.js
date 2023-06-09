import mongoose from 'mongoose'

const imagesSchema = mongoose.Schema({
  name: String,
  desc: String,
  img:
  {
      data: Buffer,
      contentType: String
  }

}, { timestamps: true })

const Images = mongoose.model('Images', imagesSchema)

export default Images

