import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,

  },
  firstName: {
    type: String,
    // required: true,

  },
  lastName: {
    type: String,
    // required: true,

  },
  email: {
    type: String,
    // required: true,
    // unique: true

  },
  password: {
    type: String,
    // required: true
  },

  namerestaurent: {
    type: String,

  },
  menu: {
    type: Array,
    default: []

  },
  link: {
    type: String,
  }


}, { timestamps: true })

const Users = mongoose.model('Users', userSchema)

export default Users

