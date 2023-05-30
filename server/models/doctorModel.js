import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
  doctorId: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  profession: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  freeConsolution: {
    type: String,
    required: false,
  },
  timings: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    deault: 'pending',
  },

}, { timestamps: true })

const Doctors = mongoose.model('Doctors', doctorSchema)

export default Doctors

