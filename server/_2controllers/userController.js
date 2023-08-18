import Users from "../_3models/menuModel.js"
import Clients from "../_3models/clientModel.js";
// import Banners from '../_3models/bannerModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
// import { S3Client } from "@aws-sdk/client-s3";
import { CognitoJwtVerifier } from "aws-jwt-verify"
// import AWS from 'aws-sdk'

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

const verifier = CognitoJwtVerifier.create({
  userPoolId: "us-west-1_lmMYcjfH6",
  tokenUse: "access",
  clientId: "2j1e3apf787h6e1trgao5jak8m",
});

// const ses = new AWS.SES({ apiVersion: '2010-12-01' });


export const register = (req, res) => {

  req.body.clientId = uuidv4()

      Users.create(req.body).then(result => {

        const { clientId, link, restaurantName,menuName, bannerImage, languageSetup, timeSetup, themeSetup, onOffSetting } = result;

        Clients.create({
          clientId: clientId,
          link: link,
          restaurantName:restaurantName,
          menuName: menuName,
          bannerImage: bannerImage,
          languageSetup: languageSetup,
          timeSetup: timeSetup,
          themeSetup: themeSetup,
          onOffSetting: onOffSetting,
        })
        // Banners.create({
        //   link: link,
        //   userId: req.body.userId,
        // })



        res.status(200).send({ message: `Your account has been successfully created`, success: true })
      }).catch(err => {
        console.log(err)
        if (err.keyValue.email) res.status(200).send({ message: "Email already exists", success: false })
        else if (err.keyValue.link) res.status(200).send({ message: "Restaurant Link Name already exists", success: false })

        else res.send({ message: "Error creating account" })
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

  }).catch(err => {
    console.log("Error Logging")
    res.status(500).send({ message: "Error Logging", success: false, err })
  })

}

export const generateMenu = (req, res) => {
  const { userId, link } = req.body;

  Users.findOne({ userId: userId }).then(user => {

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
export const requireLogin = async(req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  try {
    const payload = await verifier.verify(token);
    console.log('Token is valid');
    req.proved = payload
    next()
  } catch {
    console.log("Token not valid!");
  }


}
// catch {
//   { res.status(404).json(err) })
//   console.log("Token not valid!");
//   alert("Token not valid!");
// }




//- GET USER INFO to SAVE IN REDUX at Protector Compo
export const getInfoUserToStore = (req, res) => {
  Users.findOne({ userId: req.proved.username })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
    .then(result => {
      

      if (!result) return res.status(200).send({ message: "User doues not exit", success: false })
      else {

        res.status(200).send({
          success: true,
          data: { result }
        })

      }
    }).catch(err =>
    
      { res.status(404).json(err) })
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





////////////////////////=../////////////////// :Before Cognito
// export const register = (req, res) => {

//   const { firstName, password,email } = req.body
//   req.body.userId = uuidv4()
//   req.body.clientId = uuidv4()
//   req.body.link = firstName + '-' + uuidv4().slice(0, 8)

//   bcrypt.hash(password, 10, (hashErr, hash) => {
//     if (hash) {
//       req.body.password = hash

//       Users.create(req.body).then(result => {

//         const { clientId, link, menuName, bannerImage, languageSetup, timeSetup, themeSetup, onOffSetting } = result;

//         Clients.create({
//           clientId: clientId,
//           link: link,
//           menuName: menuName,
//           bannerImage: bannerImage,
//           languageSetup: languageSetup,
//           timeSetup: timeSetup,
//           themeSetup: themeSetup,
//           onOffSetting: onOffSetting,
//         })
//         Banners.create({
//           link: link,
//           userId: req.body.userId,
//         })




//         res.status(200).send({ message: `Your account has been successfully created`, success: true })
//       }).catch(err => {
//         if (err.keyValue.email) res.status(200).send({ message: "Email already exists", success: false })
//         else res.send({ message: "Error creating account" })
//       })
//     }
//     else { res.send({ message: `Error creating account : ${hashErr}` }) }
//   })
  

// }



// export const login = (req, res) => {
//   const { email } = req.body

//   Users.findOne({ email }).then(userResult => {
//     if (!userResult) {
//       return res.send({ message: "Email does not exit" })
//     }

//     bcrypt.compare(req.body.password, userResult.password).then(result => {
//       const userToken = userResult.userId
//       if (result) {
//         const token = jwt.sign({ userToken }, process.env.JWT_SECRET, { expiresIn: '5d' })
//         return res.send({ message: "Login Complete", success: true, token })

//       } else res.send({ message: "Wrong Password", success: false })
//     })
//     // const { clientId, link, menuName, bannerImage, languageSetup, timeSetup ,themeSetup} = userResult;

//     // Clients.create({
//     //   clientId: clientId,
//     //   link: link,
//     //   menuName: menuName,
//     //   bannerImage: bannerImage,
//     //   languageSetup: languageSetup,
//     //   timeSetup: timeSetup,
//     //   themeSetup:themeSetup,
//     // })

//   }).catch(err => {
//     console.log("Error Logging")
//     res.status(500).send({ message: "Error Logging", success: false, err })
//   })

// }



// export const requireLogin = (req, res, next) => {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)
//   jwt.verify(token, process.env.JWT_SECRET, (err, tokenCard) => {

//     if (err) {
//       return res.sendStatus(403).send({ meassge: "Authorization failed", success: false, err })
//     }

//     req.proved = tokenCard
//     next()
//   })
// }