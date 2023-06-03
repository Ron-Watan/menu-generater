import mongoose from 'mongoose'

const clientSchema = mongoose.Schema({

  menu: {
    type: Array,
    default: []
  }

}, { timestamps: true })

const Client = mongoose.model('Client', userSchema)

export default Client

