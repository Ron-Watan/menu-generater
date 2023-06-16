import Users from '../_3models/menuModel.js';
import Images from '../_3models/imageModel.js';
import Banners from '../_3models/bannerModel.js';

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
  Users.findOne({ userId: userId }).select('menu userId menu_1 menu_2 menu_3  bannerImage setting_time link').then((user) => {
    console.log(user)
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

  const { menuId, catagory, imgId, listMenu, menuTime, menuTimeName } = req.body;
  Users.findOneAndUpdate({ 'menu.menuId': menuId }, {
    $set: {
      "menu.$": {
        menuTime: menuTime,
        menuTimeName: menuTimeName,
        menuId: menuId,
        catagory: catagory,
        imgId: imgId,
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
        menuTime: menuTime,
        menuTimeName: menuTimeName,
        menuId: menuId,
        catagory: catagory,
        imgId: imgId,
        listMenu: listMenu,
      }
    }
  }).then(client => {
    console.log('Data Edited')
  })

};

export const saveNameMenu = (req, res) => {
  const { userId, menu_1, menu_2, menu_3 } = req.body;

  console.log(menu_1, menu_2, menu_3)
  Users.findOne({ userId: userId }).select('menu userId menu_1 menu_2 menu_3 link').then(user => {
    user.menu_1 = menu_1
    user.menu_2 = menu_2
    user.menu_3 = menu_3
    user.save()

    res.send({
      message: 'Success',
      userMenu: user,
      success: true
    }); //send to client side


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
  // console.log(req.file)
  const { userId } = req.body
  fs.access('./images/', (err) => {
    if (err) {
      fs.mkdirSync('./images/')
    }
  })
  var image = {
    userId: userId,
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


export const saveImage = (req, res) => {

  // console.log(req.file)
  const { originalname } = req.file
  const { userId } = req.body

  Images.findOneAndDelete({ imgId: originalname }).then((user) => {

    console.log(user)
    var image = {
      userId: userId,
      imgId: originalname,
      destination: req.file.destination,
      size: req.file.size / 1000,
      img: {
        data: fs.readFileSync(path.join('./images/' + req.file.filename)),
        contentType: 'image/png'
      }
    }
    Images.create(image)
  })

}


export const delelteImage = (req, res) => {

  const { imgId } = req.body

  Images.findOneAndDelete({ imgId: imgId }).then((image) => {
    console.log('Delete Image')
  })

};



export const getAllImage = (req, res) => {

  const { userId } = req.body
  // console.log(userId)
  Images.find({ userId: userId }).then(result => {
    res.send({
      message: 'Success',
      images: result,
      success: true
    });
  })

}




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


export const getAllImageBanner = (req, res) => {

  const { userId } = req.body
  // console.log(userId)
  Banners.find({ userId: userId }).then(result => {
    res.send({
      message: 'Success',
      images: result,
      success: true
    });
  })

}



export const uploadImageBanner = (req, res) => {
  const { userId } = req.body
  const arrayBannerImg = req.files
  // console.log(req.body)
  // console.log(req.files)
  Banners.deleteMany({ userId: userId }).then(result => {
    console.log(result)

    arrayBannerImg.map(el => {
      fs.access('./images/', (err) => {
        if (err) {
          fs.mkdirSync('./images/')
        }
      })
      var image = {
        userId: userId,
        imgId: 'banner',
        destination: el.destination,
        size: el.size / 1000,
        img: {
          data: fs.readFileSync(path.join('./images/' + el.filename)),
          contentType: 'image/png'
        }
      }
      Banners.create(image)

    })


  })



  // Users.findOne({ userId: userId }).select('bannerImage').then(user => {
  //   const bannerId = originalname
  //   user.bannerImage.push(bannerId)
  //   user.save()
  //   res.send({
  //     message: 'Success',
  //     userBanner: user,
  //     success: true
  //   });
  // })

}



// export const uploadImageBanner = (req, res) => {
//   const { userId } = req.body
//   const { originalname } = req.file
//   // console.log(req.body)
//   // console.log(req.files)
//   Banners.deleteMany({ userId: userId }).then(result => {

//     console.log(result)
//   })

//   fs.access('./images/', (err) => {
//     if (err) {
//       fs.mkdirSync('./images/')
//     }
//   })
//   var image = {
//     userId: userId,
//     imgId: originalname,
//     destination: req.file.destination,
//     size: req.file.size / 1000,
//     img: {
//       data: fs.readFileSync(path.join('./images/' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   Banners.create(image)

//   Users.findOne({ userId: userId }).select('bannerImage').then(user => {
//     const bannerId = originalname
//     user.bannerImage.push(bannerId)
//     user.save()
//     res.send({
//       message: 'Success',
//       userBanner: user,
//       success: true
//     });
//   })

// }



// const { userId, menu_1, menu_2, menu_3 } = req.body;

// console.log(menu_1, menu_2, menu_3)
// Users.findOne({ userId: userId }).select('menu_1 menu_2 menu_3').then(user => {
//   user.menu_1 = menu_1
//   user.menu_2 = menu_2
//   user.menu_3 = menu_3
//   user.save()

//   res.send({
//     message: 'Success',
//     nameMenu: user,
//     success: true
//   }); //send to client side


// })