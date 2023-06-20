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
  menu_1: {
    type: String,
    default: 'All Day Menu'
  },
  menu_2: {
    type: String,
    default: 'Luanch'

  },
  menu_3: {
    type: String,
    default: 'Dinner'

  },
  bannerImage: {
    type: Array,
    default: []
  },

  
  menu_1_currency: {
    type: {},
  },
  menu_2__currency: {
    type: {},

  },
  menu_3__currency: {
    type: {},

  },







  link: {
    type: String,
  }


}, { timestamps: true })

const Users = mongoose.model('Users', userSchema)

export default Users

