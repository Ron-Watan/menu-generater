import Users from '../_3models/menuModel.js';
import Images from '../_3models/imageModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Clients from '../_3models/clientModel.js';
import fs, { mkdirSync } from "fs";
import sharp from "sharp";
import formidable from 'formidable';
import path from 'path';

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
  const { userId, catagory, imgId, listMenu, menuTime, link } = req.body;

  Users.findOne({ userId: userId }).select('menu userId link').then((user) => {
    user.menu.push({
      menuTime: menuTime,
      menuId: uuidv4(),
      catagory: catagory,
      imgId: imgId,
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


//-
//-



export const uploadImage = (req, res) => {
  console.log(req.file)

  fs.access('./images/', (err) => {
    if (err) {
      fs.mkdirSync('./images/')
    }
  })
  var image = {
    // imgId: req.file.filename,
    imgId: req.file.originalname,
    destination: req.file.destination,
    size: req.file.size / 1000,
    img: {
      data: fs.readFileSync(path.join('./images/' + req.file.filename)),
      contentType: 'image/png'
    }
  }

  Images.create(image)

};

export const getImage = (req, res) => {

  const { imgId } = req.body
  console.log(imgId)
  Images.findOne({ imgId: imgId }).then(result => {
    res.send({
      message: 'Success',
      images: result,
      success: true
    });
  })

}

