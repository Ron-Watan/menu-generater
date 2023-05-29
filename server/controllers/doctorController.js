import Doctors from "../models/doctorModel.js"
import Users from "../models/userModel.js"

// export const testing = (req, res) => {
//   res.send({ message: "Success", success: true, })
// }
{/* <div className="mt-6 flex items-center justify-end gap-x-6">
<button onClick={testing} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Test</button>
</div> */}

// , 'firstName lastName email phoneNumber department profession experience address freeConsolution timings'
export const getInfodoctor = (req, res) => {
  const { doctorId } = req.body
  Doctors.findOne(doctorId , 'firstName lastName email phoneNumber department profession experience address freeConsolution timings'
  ).then(result => {
    console.log(result)
    res.status(200).send({
      success: true,
      message: "Success",
      need: result
    })
  }).catch(err => { res.status(404).json(err) })

}


{/*
export const getAllUser = (req, res) => {

  Users.find({}, 'firstName lastName email createdAt').then(result => {
    res.status(200).send({
      success: true,
      message: "Success",
      need: result
    })
  }).catch(err => { res.status(404).json(err) })


}

export const getAllDoctor = (req, res) => {

  Doctors.find({}, 'firstName lastName email createdAt status doctorId').then(result => {
    res.status(200).send({
      success: true,
      message: "Success",
      need: result
    })
  }).catch(err => { res.status(404).json(err) })

}


export const doctorApproval = (req, res) => {

  const { doctorId, status } = req.body

  Doctors.findOneAndUpdate({ doctorId: doctorId }, status).then(result => {
    res.send({ message: "Success", success: true, })
  }).catch(err => { res.status(404).json(err) })

  Users.findOneAndUpdate({ userId: doctorId }).then(doctor => {
    doctor.unseeNotifications.push({
      type: `Status: ${status.status}`,
      message: ` Your Request has been ${status.status}`,
      data: {
        doctorId: doctor.userId,
        name: `${doctor.firstName} ${doctor.lastName}`,
      },
      onClickPath: '/admin/doctor',
      date: new Date().toLocaleString()
    })
    doctor.account = status.status === "Approved" ? 2 : 3
    doctor.save()
    //send to client side
  })
}
*/}