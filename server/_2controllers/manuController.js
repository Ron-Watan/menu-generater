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

export const uploadImage1 = async (req, res) => {
  console.log("file", req.file.path)
  const form = formidable();
  console.log('ppppppppppppppp')

  form.parse(req, (err, fields, files) => {
    console.log(req, err, fields, files)
    // if (err) {

    //   next(err);
    //   return;
    // }
    console.log('555eewewewe5ppppppppppppppp')

    const imageInput = files.image.path;
    // const contentType = files.image.type;
    console.log('ppppppppppppppp' + imageInput)
    sharp(imageInput)
      .resize(512, 512)
      .png()
      .toBuffer()
      .then((data) => {
        // const base64Data = data.toString('base64');
        // res.status(202).json({ b64Data: base64Data, contentType: contentType, extension: 'png' });
        res.send(data);
      })
      .catch((err) => console.log(err));
  });

  console.log('77777555eewewewe5ppppppppppppppp')

}


export const uploadImage = (req, res) => {
  console.log(req.file)

  fs.access('./images/', (err) => {
    if (err) {
      fs.mkdirSync('./images/')
    }
  })
  var image = {
    name: req.file.originalname,
    destination: req.file.destination,
    size: req.file.size / 1000,
    data: fs.readFileSync(path.join('./images/' + req.file.filename)),
    type: req.file.mimetype
  }
  Images.create(image)
  // fs.access('./data/uploads/', (err) => {
  //   if (err) {
  //     fs.mkdirSync('./data/uploads/')
  //   }
  // })

  // sharp('./images/10-9-6k.jpg').resize(640, 320).toFile('./data/uploads/').then(res => {

  //   res.send(res)
  // }
  // )


  // res.sed('sucess')


  // const imageName = req.file.filename
  // console.log(imageName)
  // const description = req.body.description
  // console.log(description)
  // Save this data to a database probably

  // console.log(description, imageName)
  // res.send({ description, imageName })
  // console.log(req.file)
  // const imageName = req.file
  // res.send({imageName})
  // const form = formidable();
  // form.parse(req, (err, fields, files) => {
  //   if (err) {
  //     next(err);
  //     return;
  //   }
  //   const imageInput = files.image.path;
  //   const contentType = files.image.type;


  // sharp(imageInput)
  //   .resize(512, 512)
  //   .png()
  //   .toBuffer()
  //   .then((data) => {
  //     const base64Data = data.toString('base64');
  //     res.status(202).json({ b64Data: base64Data, contentType: contentType, extension: 'png' });
  //     res.send(base64Data);
  //   })
  //   .catch((err) => console.log(err));
  // });


  // return res.json("File Uploaded Successfully!");


};

export const getImage = (req, res) => {
  // do a bunch of if statements to make sure the user is
  // authorized to view this image, then

  // 'images\\b66a1fb0ea45f4291fe581a8984fbb00'
  // const imageName = req.params.imageName
  // console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' + imageName)
  // res.sendFile(`images/${imageName}`)
  // const readStream = fs.createReadStream(`images/${imageName}`)
  // readStream.pipe(res)
  // console.log(readStream)
}

