import Users from "../_3models/menuModel.js"
import Clients from "../_3models/clientModel.js";
import Banners from '../_3models/bannerModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'




//- REGISTER
export const register = (req, res) => {

  const { password } = req.body
  req.body.userId = uuidv4()
  req.body.clientId = uuidv4()
  req.body.link = uuidv4().slice(0, 9) + req.body.restaurentName

  bcrypt.hash(password, 10, (hashErr, hash) => {
    if (hash) {
      req.body.password = hash

      Users.create(req.body).then(result => {

        const { clientId, link, menuName, bannerImage, languageSetup, timeSetup, themeSetup, onOffSetting } = result;

        Clients.create({
          clientId: clientId,
          link: link,
          menuName: menuName,
          bannerImage: bannerImage,
          languageSetup: languageSetup,
          timeSetup: timeSetup,
          themeSetup: themeSetup,
          onOffSetting: onOffSetting,
        })
        Banners.create({
          link: link,
          userId: req.body.userId,
        })




        res.status(200).send({ message: `Your account has been successfully created`, success: true })
      }).catch(err => {
        if (err.keyValue.email) res.status(200).send({ message: "Email already exists", success: false })
        else res.send({ message: "Error creating account" })
      })
    }
    else { res.send({ message: `Error creating account : ${hashErr}` }) }
  })
}

//- LOGIN
export const login = (req, res) => {
  const { email } = req.body

  Users.findOne({ email }).then(userResult => {
    if (!userResult) {
      return res.send({ message: "Email does not exit" })
    }

    bcrypt.compare(req.body.password, userResult.password).then(result => {
      const userToken = userResult.userId
      if (result) {
        const token = jwt.sign({ userToken }, process.env.JWT_SECRET, { expiresIn: '5d' })
        return res.send({ message: "Login Complete", success: true, token })

      } else res.send({ message: "Wrong Password", success: false })
    })
    // const { clientId, link, menuName, bannerImage, languageSetup, timeSetup ,themeSetup} = userResult;

    // Clients.create({
    //   clientId: clientId,
    //   link: link,
    //   menuName: menuName,
    //   bannerImage: bannerImage,
    //   languageSetup: languageSetup,
    //   timeSetup: timeSetup,
    //   themeSetup:themeSetup,
    // })

  }).catch(err => {
    console.log("Error Logging")
    res.status(500).send({ message: "Error Logging", success: false, err })
  })

}

export const generateMenu = (req, res) => {
  const { userId, link } = req.body;
  console.log(link)
  Users.findOne({ userId: userId }).then(user => {
    console.log(user)
    Clients.create({
      link: link
    })
    res.send({
      message: 'Success',
      userMenu: user,
      success: true

    })

  })
}




//-  BLOCK CHECK TOKEN'S USER TO ALLOW TO PAGE THEN SEND ID TO USE info and Store to page
export const requireLogin = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.JWT_SECRET, (err, tokenCard) => {

    if (err) {
      return res.sendStatus(403).send({ meassge: "Authorization failed", success: false, err })
    }

    req.proved = tokenCard
    next()
  })
}


//- GET USER INFO to SAVE IN REDUX at Protector Compo
export const getInfoUserToStore = (req, res) => {
  Users.findOne({ userId: req.proved.userToken })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
    .then(result => {
      if (!result) return res.status(200).send({ message: "User doues not exit", success: false })
      else {

        res.status(200).send({
          success: true,
          data: { result }
        })

      }
    }).catch(err => { res.status(404).json(err) })
}







// export const markAllUnSeen = (req, res) => {
//   const { userId } = req.body

//   Users.findOne({ userId: userId }).then(data => {
//     const newUserData = data
//     if (newUserData.unseeNotifications.length === 0) return res.send({ message: "No Data", success: false, })

//     newUserData.seeNotifications.push(...data.unseeNotifications)
//     newUserData.unseeNotifications = []
//     newUserData.save()
//     // newUserData.password = undefined
//     res.send({ message: "Success", success: true, })


//   })
// }


// export const deleteAllSeen = (req, res) => {
//   const { userId } = req.body
//   Users.findOne({ userId: userId }).then(data => {
//     if (data.seeNotifications.length === 0) return res.send({ message: "No Data", success: false, })

//     data.seeNotifications = []
//     data.save()
//     // data.password = undefined
//     res.send({ message: "Success", success: true, })
//   })
// }



// // http://localhost:5000/api/user/info-user
// export const findInfoUser = (req, res) => {
//   Users.findOne({ userId: req.proved.userId }).then(result => {
//     if (!result) return res.status(200).send({ message: "User doues not exit", success: false })
//     else {
//       console.log(result)
//       result.password = undefined
//       res.status(200).send({
//         success: true,
//         data: { ...result._doc, noNotification: result.unseeNotifications.length }
//       })

//     }
//   }).catch(err => { res.status(404).json(err) })
// }



// // Check token
// export const requireLogin = (req, res, next) => {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)
//   jwt.verify(token, process.env.JWT_SECRET, (err, id) => {

//     if (err) {
//       console.log(err)
//       return res.sendStatus(403).send({ meassge: "Authorization failed", success: false, err })
//     }
//     req.proved = id
//     next()
//   })
// }




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





