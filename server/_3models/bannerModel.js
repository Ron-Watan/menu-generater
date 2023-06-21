import mongoose from 'mongoose'

const bannersSchema = mongoose.Schema({
  userId: String,
  link: String,
  imgId: String,
  destination: String,
  img: {
    data: Buffer,
    contentType: String
  },
  size: Number,


}, { timestamps: true })

const Banners = mongoose.model('Banners', bannersSchema)

export default Banners

