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

// const bannersSchema = mongoose.Schema(
//   {
//     userId: {
//       type: String,
//     },
//     imgId: {
//       type: String,
//     },
//     link: {
//       type: String,
//     },
//     destination: {
//       type: String,
//     },
//     bannerImage: [{
//       data: Buffer,
//       contentType: String,
//       size: Number,
//     }],


//   }, { timestamps: true })

const Banners = mongoose.model('Banners', bannersSchema)

export default Banners

