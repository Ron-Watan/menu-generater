import Users from '../_3models/menuModel.js';
// import Images from '../_3models/imageModel.js';
// import Banners from '../_3models/bannerModel.js';
import { v4 as uuidv4 } from 'uuid';
import Clients from '../_3models/clientModel.js';


//-
export const getAllMenu = (req, res) => {
  // res.send({ message: "Success", success: true, }) //send to client side
  const { userId } = req.body;
  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName themeSetup bannerImage languageSetup timeSetup onOffSetting clientId link bannerNumber')
    .then((user) => {
      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side
    });
};



export const createManu = (req, res) => {
  // console.log(req.body)
  const { userId, clientId, catagory, icon_catagory, imgId, listMenu, menuTime } = req.body;

  const menuId = uuidv4();

  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName bannerImage languageSetup timeSetup onOffSetting clientId link')
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

    });
};

//-
export const uploadImage = (req, res) => {
  console.log(req.file)
  // res.json({ file: req.file });
  // res.redirect('/');

};


//- // componentusers/MainForm.js

export const saveEditMenu = (req, res) => {
  const { menuId, catagory, catagory_2, icon_catagory, imgId, listMenu, menuTime, menuTimeName } = req.body;
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
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup onOffSetting clientId link')
    .then((user) => {
      user.menuName = menuName;
      user.save();


      Clients.findOne({ clientId: clientId }).then((client) => {
        client.menuName = menuName;
        client.save();
      });

      res.send({
        message: 'Success',
        userMenu: user,
        success: true,
      }); //send to client side



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






export const delelteImage = (req, res) => {
  const { imgId } = req.body;

  Images.findOneAndDelete({ imgId: imgId }).then((image) => {
    res.send({
      message: 'Success',
      data: image,
      success: true,
    });
  }).catch(err => {

    res.send({ message: "Delete Error" })
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
  gfs.files.findOne({ filename: imgId }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // File exists
    res.send({
      message: 'Success',
      images: file,
      success: true,
    });
    res.json({ file: req.file });
    // return res.json(file);
  });

};

export const getImage1 = (req, res) => {
  const { imgId } = req.body;
  Images.findOne({ imgId: imgId }).then((result) => {
    res.send({
      message: 'Success',
      images: result,
      success: true,
    });
  });
};

//-
//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-
export const uploadImageBanner = (req, res) => {
  const { userId, clientId, bannerImage, banner } = req.body;
  Users.findOne({ userId: userId }).then(user => {
    user.bannerNumber = banner
    user.bannerImage = bannerImage
    user.save();


    Clients.findOne({ clientId: clientId }).then((client) => {

      client.bannerImage = bannerImage
      client.save();

    });


    res.send({
      message: 'Success',
      success: true,
    });
  })

};

// export const getAllImageBanner = (req, res) => {
//   const { userId } = req.body;

//   Banners.findOne({ userId: userId }).then((result) => {
//     res.send({
//       message: 'Success',
//       images: result,
//       success: true,
//     });
//   });
// };




export const saveTimeSetup = (req, res) => {

  const { userId, timeSetup } = req.body;


  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup onOffSetting clientId link')
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

  const { userId, languageSetup } = req.body;


  Users.findOne({ userId: userId })
    .select('userId restaurentName menu menuName  bannerImage languageSetup timeSetup onOffSetting clientId link')
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

  const { userId, onOffSetting } = req.body;

  Users.findOne({ userId: userId })
    .select('onOffSetting clientId')
    .then((user) => {

      user.onOffSetting = onOffSetting;
      user.save();
      res.send({
        message: 'Success',
        userOnOffSetting: user,// Slected
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

export const getQrCode = (req, res) => {

  const { userId } = req.body;
  Users.findOne({ userId: userId })
    .select('qrCodeSetUp link')
    .then((user) => {
      res.send({
        message: 'Success',
        qrCodeSetUp: user,
        success: true,
      }); //send to client side
    });
};


export const saveQRCode = (req, res) => {

  const { userId, qrCodeSetUp } = req.body;

  Users.findOne({ userId: userId })
    .select('qrCodeSetUp link')
    .then((user) => {
      user.qrCodeSetUp = qrCodeSetUp;
      user.save();
      res.send({
        message: 'Success',
        qrCodeSetUp: user,// Slected
        success: true,
      });
      // Clients.findOne({ clientId: user.clientId }).then((client) => {
      //   client.onOffSetting = onOffSetting;
      //   client.save();
      // });
    }).catch(err => {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeee')
      res.send({ message: "QR Error" })
    })

};












//- // componentusers/MainForm.js
export const saveReArangeList = (req, res) => {
  const { userId, menu } = req.body;
  Users.findOne({ userId: userId })
    .then((user) => {

      user.menu = menu;
      user.save();
      res.send({
        message: 'Success',
        // userOnOffSetting: user,// Slected
        success: true,
      });
      Clients.findOne({ clientId: user.clientId }).then((client) => {
        client.menu = menu;
        client.save();
      });
    });

};


