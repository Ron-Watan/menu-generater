import Users from "../_3models/menuModel.js"
import Clients from "../_3models/clientModel.js";

import { v4 as uuidv4 } from 'uuid';
import { CognitoJwtVerifier } from "aws-jwt-verify"
import { stripe } from "../_2controllers/Utils.js";






export const checkRegister = (req, res) => {
  const { link, email } = req.body
  let checkEmail = false;
  let checkLink = false;

  Users.findOne({ email }).then(userEmail => {
    if (userEmail) checkEmail = true

    Users.findOne({ link }).then(userLink => {
      if (userLink) checkLink = true
      res.send({
        success: {
          email: checkEmail,
          link: checkLink
        },

      })

    })

  }).catch(err => {
    res.status(500).send({ message: "Error creating account", success: false, err })
  })






}



export const register = (req, res) => {
  req.body.clientId = uuidv4()
  Users.create(req.body).then(result => {
    const { clientId, link, restaurantName, menuName, bannerImage, languageSetup, timeSetup, themeSetup, onOffSetting, email } = result;

    Clients.create({
      clientId: clientId,
      link: link,
      restaurantName: restaurantName,
      menuName: menuName,
      bannerImage: bannerImage,
      languageSetup: languageSetup,
      timeSetup: timeSetup,
      themeSetup: themeSetup,
      onOffSetting: onOffSetting,
    })

    stripe.customers.create(
      { email }, { apiKey: process.env.STRIPE_SECRET_KEY }).then(customersStripe => {
        Users.findOne({ email }).then(user => {
          user.stripeCustomerId = customersStripe.id
          user.save()
        })

      })

    res.status(200).send({ message: `Your account has been successfully created`, success: true })

  }).catch(err => {

    if (err.keyValue.email) res.status(200).send({ message: "existsEmail", success: false })
    else if (err.keyValue.link) res.status(200).send({ message: "existsLink", success: false })
    else res.send({ message: "Error creating account" })
  })


}




//- LOGIN
export const login = (req, res) => {
  const { email, loginCode } = req.body
  Users.findOne({ email }).then(user => {
    user.loginCode = loginCode
    user.save()
    res.send({
      message: 'Success',
      success: true
    })
  }).catch(err => {
    console.log("Error Logging")
    res.status(500).send({ message: "Error Logging", success: false, err })
  })

}



//-  BLOCK CHECK TOKEN'S USER TO ALLOW TO PAGE THEN SEND ID TO USE info and Store to page
export const requireLogin = async (req, res, next) => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: "us-west-1_lmMYcjfH6",
    tokenUse: "access",
    clientId: "2j1e3apf787h6e1trgao5jak8m",
  });
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




//- GET USER INFO to SAVE IN REDUX at Protector Compo
export const getInfoUserToStore = (req, res) => {



  Users.findOne({ userId: req.proved.username })

    // .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
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

