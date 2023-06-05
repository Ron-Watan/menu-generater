import Users from '../_3models/menuModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Clients from '../_3models/clientModel.js';

//-
export const getAllMenu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  Users.findOne({ userId: userId }).select('menu userId link').then((user) => {

    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side
  });
};


//-
export const createManu = (req, res) => {
  // console.log(req.body)
  const { userId, catagory, listMenu, link } = req.body;
  Users.findOne({ userId: userId }).select('menu userId link').then((user) => {
    user.menu.push({
      menuId: uuidv4(),
      catagory: catagory,
      listMenu: listMenu,
    });
    user.save();
    Clients.findOneAndReplace({ link: user.link }, {
      link: user.link,
      menu: user.menu
    }).then(client => {
      res.send({
        message: 'Success',
        userMenu: user,
        success: true
      });
    })

  });
};



//- // componentusers/MainForm.js
export const saveEditMenu = (req, res) => {
  const { menuId, catagory, listMenu, link } = req.body;
  Users.findOneAndUpdate({ 'menu.menuId': menuId }, {
    $set: {
      "menu.$": {
        menuId: menuId,
        catagory: catagory,
        listMenu: listMenu,
      }
    }
  }).then(user => {
    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    });
  })
  Clients.findOneAndUpdate({ 'menu.menuId': menuId }, {
    $set: {
      "menu.$": {
        menuId: menuId,
        catagory: catagory,
        listMenu: listMenu,
      }
    }
  }).then(client => {
    console.log('Data Edited')
  })

};

//-


export const deleteMenu = (req, res) => {

  const { userId, menuId, link } = req.body

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
  Clients.findOneAndUpdate({ link: link }, {
    "$pull": {
      "menu": { "menuId": menuId }
    }
  }).then(client => {
    console.log('Data Deleted')
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

