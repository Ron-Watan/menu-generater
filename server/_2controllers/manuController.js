import Users from '../_3models/menuModel.js';
import Images from '../_3models/imageModel.js';
import Banners from '../_3models/bannerModel.js';

import { v4 as uuidv4 } from 'uuid';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import Clients from '../_3models/clientModel.js';

import fs, { mkdirSync } from 'fs';
// import sharp from "sharp";
// import formidable from 'formidable';
import path from 'path';

//-
export const getAllMenu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName themeSetup bannerImage languageSetup timeSetup clientId link')
    .then((user) => {
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side
    });
};

//-

export const createManu = (req, res) => {
  // console.log(req.body)
  const { userId, clientId, catagory, icon_catagory, imgId, listMenu, menuTime } = req.body;

  const menuId = uuidv4();

  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName bannerImage languageSetup timeSetup clientId link')
    .then((user) => {
      user.menu.push({
        menuTime: menuTime,
        menuId: menuId,
        catagory: catagory,
        icon_catagory: icon_catagory,
        imgId: imgId,
        listMenu: listMenu,
      });
      user.save();
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      });
      Clients.findOne({ clientId: clientId }).then((client) => {
        client.menu.push({
          menuTime: menuTime,
          menuId: menuId,
          catagory: catagory,
          icon_catagory: icon_catagory,
          imgId: imgId,
          listMenu: listMenu,
        });
        client.save();
      });

      // Clients.findOneAndReplace({ link: user.link }, {
      //   link: user.link,
      //   menu: user.menu
      // }).then(client => {
      //   res.send({
      //     message: 'Success',
      //     userMenu: user,
      //     success: true
      //   });
      // })
    });
};

//- // componentusers/MainForm.js
export const saveEditMenu = (req, res) => {
  const { menuId, catagory, catagory_2, icon_catagory, imgId, listMenu, menuTime, menuTimeName } = req.body;
  console.log(catagory_2);
  Users.findOneAndUpdate(
    { 'menu.menuId': menuId },
    {
      $set: {
        'menu.$': {
          menuTime: menuTime,
          menuTimeName: menuTimeName,
          menuId: menuId,
          catagory: catagory,
          catagory_2: catagory_2,
          icon_catagory: icon_catagory,
          imgId: imgId,
          listMenu: listMenu,
        },
      },
    }
  ).then((user) => {
    res.send({
      message: 'Success',
      userMenu: user,
      success: true,
    });
  });
  Clients.findOneAndUpdate(
    { 'menu.menuId': menuId },
    {
      $set: {
        'menu.$': {
          menuTime: menuTime,
          menuTimeName: menuTimeName,
          menuId: menuId,
          catagory: catagory,
          catagory_2: catagory_2,
          icon_catagory: icon_catagory,
          imgId: imgId,
          listMenu: listMenu,
        },
      },
    }
  ).then((client) => {
    console.log('Data Edited');
  });
};

export const saveNameMenu = (req, res) => {
  const { userId, clientId, menuName } = req.body;
  // console.log(menuName)
  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
    .then((user) => {
      user.menuName = menuName;
      user.save();
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side


      Clients.findOne({ clientId: clientId }).then((client) => {
        client.menuName = menuName;
        client.save();
      });




    });

};

//-

export const deleteMenu = (req, res) => {
  const { userId, menuId, link } = req.body;

  Users.findOneAndUpdate(
    { userId: userId },
    {
      $pull: {
        menu: { menuId: menuId },
      },
    }
  ).then((user) => {
    res.send({
      message: 'Success',
      userMenu: user,
      success: true,
    });
  });
  Clients.findOneAndUpdate(
    { link: link },
    {
      $pull: {
        menu: { menuId: menuId },
      },
    }
  ).then((client) => {
    console.log('Data Deleted');
  });
};

//-
export const findOneMenu = (req, res) => {
  const { userId } = req.body;
  const { menuId } = req.body;
  Users.findOne({ userId: userId })
    .select('menu userId')
    .then((user) => {
      user.menu.forEach((el) => {
        if (el.menuId === menuId) {
          res.send({
            message: 'Success',
            userMenu: el,
            success: true,
          });
        }
      });
    });
};

//-
//-

export const uploadImage = (req, res) => {
  // console.log(req.file)
  const { userId } = req.body;
  fs.access('./images/', (err) => {
    if (err) {
      fs.mkdirSync('./images/');
    }
  });
  var image = {
    userId: userId,
    imgId: req.file.originalname,
    destination: req.file.destination,
    size: req.file.size / 1000,
    img: {
      data: fs.readFileSync(path.join('./images/' + req.file.filename)),
      contentType: 'image/png',
    },
  };

  Images.create(image);
};

export const saveImage = (req, res) => {
  // console.log(req.file)
  const { originalname } = req.file;
  const { userId } = req.body;

  Images.findOneAndDelete({ imgId: originalname }).then((user) => {
    var image = {
      userId: userId,
      imgId: originalname,
      destination: req.file.destination,
      size: req.file.size / 1000,
      img: {
        data: fs.readFileSync(path.join('./images/' + req.file.filename)),
        contentType: 'image/png',
      },
    };
    Images.create(image);
  });
};

export const delelteImage = (req, res) => {
  const { imgId } = req.body;

  Images.findOneAndDelete({ imgId: imgId }).then((image) => {
    console.log('Delete Image');
  });
};

export const getAllImage = (req, res) => {
  const { userId } = req.body;
  // console.log(userId)
  Images.find({ userId: userId }).then((result) => {
    res.send({
      message: 'Success',
      images: result,
      success: true,
    });
  });
};

export const getImage = (req, res) => {
  const { imgId } = req.body;
  Images.findOne({ imgId: imgId }).then((result) => {
    res.send({
      message: 'Success',
      images: result,
      success: true,
    });
  });
};

export const getAllImageBanner = (req, res) => {
  const { userId } = req.body;
  // console.log(userId)
  Banners.find({ userId: userId }).then((result) => {
    res.send({
      message: 'Success',
      images: result,
      success: true,
    });
  });
};

export const uploadImageBanner = (req, res) => {
  const { userId, link } = req.body;
  const arrayBannerImg = req.files;
  Banners.deleteMany({ userId: userId }).then((result) => {
    arrayBannerImg.map((el) => {
      fs.access('./images/', (err) => {
        if (err) {
          fs.mkdirSync('./images/');
        }
      });
      var image = {
        userId: userId,
        link: link,
        imgId: 'banner',
        destination: el.destination,
        size: el.size / 1000,
        img: {
          data: fs.readFileSync(path.join('./images/' + el.filename)),
          contentType: 'image/png',
        },
      };
      Banners.create(image);
    });
  });

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
};

export const saveTimeSetup = (req, res) => {
  console.log('eeeeeeeeeeeeeee');
  const { userId, timeSetup } = req.body;
  console.log(timeSetup);

  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
    .then((user) => {
      user.timeSetup = timeSetup;
      user.save();
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side

      Clients.findOne({ clientId: user.clientId }).then((client) => {
        client.timeSetup = timeSetup;
        client.save();
      });
    });
};

export const saveLangSetup = (req, res) => {
  console.log('eeeeeeeeeeeeeee');
  const { userId, languageSetup } = req.body;
  console.log(languageSetup);

  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup clientId link')
    .then((user) => {
      user.languageSetup = languageSetup;
      user.save();
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side

      Clients.findOne({ clientId: user.clientId }).then((client) => {
        client.languageSetup = languageSetup;
        client.save();
      });
    });
};




export const setupTheme = (req, res) => {

  const { userId, restaurantName, themeSetup } = req.body;
  Users.findOne({ userId: userId })
    .select('userId restaurentName themeSetup clientId')
    .then((user) => {
      user.restaurantName = restaurantName;
      user.themeSetup = themeSetup;
      user.save();
      res.send({
        message: 'Success',
        userTheme: user,// Slected
        success: true,
      });
      Clients.findOne({ clientId: user.clientId }).then((client) => {
        client.restaurantName = restaurantName;
        client.themeSetup = themeSetup;
        client.save();
      });
    });

};



export const getTheme = (req, res) => {

  const { userId } = req.body;
  Users.findOne({ userId: userId })
    .select('restaurantName themeSetup')
    .then((user) => {
      res.send({
        message: 'Success',
        userTheme: user,
        success: true,
      }); //send to client side
    });
};



export const saveOnOffSetting = (req, res) => {
  console.log('HelloMaaddsd')
  const { userId, onOffSetting } = req.body;
  Users.findOne({ userId: userId })
    .select('userId onOffSetting clientId')
    .then((user) => {

      user.onOffSetting = onOffSetting;
      user.save();
      res.send({
        message: 'Success',
        userTheme: user,// Slected
        success: true,
      });
      Clients.findOne({ clientId: user.clientId }).then((client) => {
        client.onOffSetting = onOffSetting;
        client.save();
      });
    });

};


export const getFeedBack = (req, res) => {
  const { clientId } = req.body;
  // console.log(clientId)

  Clients.findOne({ clientId: clientId }).select('unseenFeedBack seenFeedBack')
    .then(bothFeedBack => {

      res.send({
        message: 'Success',
        bothFeedBack: bothFeedBack,
        success: true,
      });
    });
};

export const saveFeedBack = (req, res) => {
  const { clientId, unseenFeedBack, seenFeedBack } = req.body;

  Clients.findOne({ clientId: clientId }).select('unseenFeedBack seenFeedBack')
    .then(client => {
      client.unseenFeedBack = unseenFeedBack
      client.seenFeedBack = seenFeedBack
      client.save();

      res.send({
        message: 'Success',
        bothFeedBack: client,
        success: true,
      });


    });
};
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
