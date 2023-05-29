import Users from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import Doctors from "../models/doctorModel.js"
import { v4 as uuidv4 } from 'uuid';


// register
export const register = (req, res) => {
  const { password } = req.body
  console.log(req)
  req.body.userId = uuidv4()
  bcrypt.hash(password, 10, (hashErr, hash) => {
    if (hash) {
      req.body.password = hash
      Users.create(req.body).then(result => {
        res.status(200).send({ message: `Your account has been successfully created`, success: true })
      }).catch(err => {
        if (err.keyValue.email) res.status(200).send({ message: "Email already exists", success: false })
        else res.send({ message: "Error creating account" })
      })
    }
    else { res.send({ message: `Error creating account : ${hashErr}` }) }
  })
}

// login
export const login = (req, res) => {
  const { email } = req.body

  Users.findOne({ email }).then(userResult => {
    if (!userResult) {
      return res.send({ message: "Email does not exit" })
    }
    bcrypt.compare(req.body.password, userResult.password).then(result => {
      const userId = userResult.userId
      if (result) {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '5d' })
        return res.send({ message: "Login Complete", success: true, token, userId })

      } else res.send({ message: "Wrong Password", success: false })
    })

  }).catch(err => {
    console.log("Error Logging")
    res.status(500).send({ message: "Error Logging", success: false, err })
  })

}



// aplly-doctor
export const applyToDoctor = (req, res) => {
  const newDoctor = new Doctors({ ...req.body, status: "pending" })
  newDoctor.save().then(result => {
    Users.findOne({ account: 1 }).then(admin => {
      admin.unseeNotifications.push({
        type: 'New doctor request',
        message: `${newDoctor.firstName} has applied to doctor account`,
        data: {
          doctorId: newDoctor.userId,
          name: `${newDoctor.firstName} ${newDoctor.lastName}`,
        },
        onClickPath: '/admin/doctor',
        date: new Date().toLocaleString()
      })
      admin.save()
      console.log(result)
      res.send({ message: "Success", success: true, }) //send to client side
    })
  })
}


export const markAllUnSeen = (req, res) => {
  const { userId } = req.body

  Users.findOne({ userId: userId }).then(data => {
    const newUserData = data
    if (newUserData.unseeNotifications.length === 0) return res.send({ message: "No Data", success: false, })

    newUserData.seeNotifications.push(...data.unseeNotifications)
    newUserData.unseeNotifications = []
    newUserData.save()
    // newUserData.password = undefined
    res.send({ message: "Success", success: true, })


  })
}


export const deleteAllSeen = (req, res) => {
  const { userId } = req.body
  Users.findOne({ userId: userId }).then(data => {
    if (data.seeNotifications.length === 0) return res.send({ message: "No Data", success: false, })

    data.seeNotifications = []
    data.save()
    // data.password = undefined
    res.send({ message: "Success", success: true, })
  })
}



// http://localhost:5000/api/user/info-user
export const findInfoUser = (req, res) => {
  Users.findOne({ userId: req.proved.userId }).then(result => {
    if (!result) return res.status(200).send({ message: "User doues not exit", success: false })
    else {
      console.log(result)
      result.password = undefined
      res.status(200).send({
        success: true,
        data: { ...result._doc,noNotification:result.unseeNotifications.length }
      })

    }
  }).catch(err => { res.status(404).json(err) })
}



// Check token
export const requireLogin = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.JWT_SECRET, (err, id) => {

    if (err) {
      console.log(err)
      return res.sendStatus(403).send({ meassge: "Authorization failed", success: false, err })
    }
    req.proved = id
    next()
  })
}




// http://localhost:5000/api/user/info-user
// export const getInfoUser = (req, res) => {
//   return (
//     Users.find({}).then(result => {
//       res.json(result)
//     }).catch(err => { res.status(404).json(err) })
//   )
// }

// export const findInfoUser = (req, res) => {
//   Users.findOne({ id:req.body.id }).then(result => {
//     console.log('=========> ' + result)
//   }).catch(err => { res.status(404).json(err) })
// }





