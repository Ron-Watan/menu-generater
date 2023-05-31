import Users from "../_3models/menuModel.js"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


//-
export const createManu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body
  req.body.menuId = uuidv4()

  Users.findOne({ userId: userId }).then(user => {
    // console.log(user.menu)
    user.menu.push(req.body)
    user.save()

    res.send({ message: "Success", success: true, }) //send to client side
  })
}

//-
export const addFood = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body

  Users.findOne({ userId: userId }).then(user => {
    console.log(user.menu)
 
    res.send({ message: "Success", success: true, }) //send to client side
  })
}
