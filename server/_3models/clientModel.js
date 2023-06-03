import mongoose from 'mongoose'

const clientSchema = mongoose.Schema({
  link: {
    type: String,
  },

  menu: {
    type: Array,
    default: []
  }

}, { timestamps: true })

const Client = mongoose.model('Client', clientSchema)

export default Client

