import Users from '../_3models/menuModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//-
export const getAllMenu = (req, res) => {
  console.log(req.body)
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  Users.findOne({ userId: userId }).then((user) => {

    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side
  });
};


//-
export const createManu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  const catagory = req.body.header.catagory
  const menu = req.body.listMenu
  console.log(req.body)
  Users.findOne({ userId: userId }, '-password').then((user) => {
    user.menu.push({
      menuId: uuidv4(),
      catagory: catagory,
      listMenu: menu,
    });
    user.save();
    console.log(user);
    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side
  });
};

//-
export const getEditManu = (req, res) => {
  const { userId } = req.body;
  const { menuId } = req.body
  Users.findOne({ userId: userId }, '-password').then((user) => {
    user.menu.forEach(el => {
      if (el.menuId === menuId) {
        res.send({
          message: 'Success',
          userMenu: el,
          success: true
        });
      }
    })

  });
};

//-
export const saveEditMenu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  const catagory = req.body.header.catagory
  const menu = req.body.listMenu
  console.log(req.body)
  Users.findOne({ userId: userId }, '-password').then((user) => {
    user.menu.push({
      menuId: uuidv4(),
      catagory: catagory,
      listMenu: menu,
    });
    user.save();
    console.log(user);
    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side
  });
};


//-
// export const add = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body

//   Users.findOne({ userId: userId }).then(user => {
//     console.log(user.menu)

//     res.send({ message: "Success", success: true, }) //send to client side
//   })
// }
//     user.menu.push({
//       catagory: manu.catagory,
//       list: [
//         {
//           food_name: manu.food_name,
//           description: manu.description,
//           remark: manu.remark,
//           price: manu.price,
//           option: [{
//             option_name: manu.option_name,
//             option_price: manu.option_price
//           }],
//           vetgeterian: manu.vetgeterian,
//           vegan: manu.vegan,
//           gluten_free: manu.gluten_free,
//           halal: manu.halal
//         }
//       ]

//     })
