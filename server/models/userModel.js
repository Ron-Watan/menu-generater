import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  account: {
    type: Number,
    default: 3
  },
  seeNotifications: {
    type: Array,
    default: []
  },
  unseeNotifications: {
    type: Array,
    default: []
  },




}, { timestamps: true })

const Users = mongoose.model('Users', userSchema)

export default Users

