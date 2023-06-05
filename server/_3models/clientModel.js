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

const Clients = mongoose.model('Clients', clientSchema)

export default Clients

