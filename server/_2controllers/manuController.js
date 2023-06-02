import Users from '../_3models/menuModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//-
export const getAllMenu = (req, res) => {
  console.log(req.body)
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  Users.findOne({ userId: userId }).select('menu userId').then((user) => {

    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side
  });
};


//-
export const createManu = (req, res) => {

  const { userId, catagory, listMenu } = req.body;

  console.log(req.body)
  Users.findOne({ userId: userId }).select('menu userId').then((user) => {
    user.menu.push({
      menuId: uuidv4(),
      catagory: catagory,
      listMenu: listMenu,
    });
    user.save();
    console.log(user);
    res.send({
      message: 'Success',
      userMenu: user, // May need all Information first
      success: true
    });
  });
};




//-
export const saveEditMenu = (req, res) => {
  const { menuId } = req.body
  const { catagory } = req.body
  const { listMenu } = req.body

  Users.findOneAndUpdate({ 'menu.menuId': menuId }, {
    $set: {
      "menu.$": {
        menuId: menuId,
        catagory: catagory,
        listMenu: listMenu,
      }
    }
  }).select('menu userId').then((user) => {
    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    });
  });
};

//-


export const deleteMenu = (req, res) => {
  const { userId } = req.body
  const { menuId } = req.body
  console.log('______________________' + userId)
  Users.findOneAndUpdate({ userId: userId }, {
    "$pull": {
      "menu": { "menuId": menuId }
    }
  }).then((user) => {
    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    });
  })
};

// Dive.update({ _id: diveId }, { "$pull": { "divers": { "user": userIdToRemove } }}, { safe: true, multi:true }, function(err, obj) {
//   //do something smart
// });






















//- 
export const findOneMenu = (req, res) => {
  const { userId } = req.body;
  const { menuId } = req.body
  Users.findOne({ userId: userId }).select('menu userId').then((user) => {
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

