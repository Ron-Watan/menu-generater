


import Banners from "../_3models/bannerModel.js";
import Clients from "../_3models/clientModel.js";




export const getClentMenu = (req, res) => {
  const { link } = req.params
  Clients.findOne({ link }).then((result) => {

    res.send({
      message: 'Success',
      clientMenu: result,
      success: true
    });
  });
};


export const getAllImageBanner = (req, res) => {
  console.log('dddddddddddddd')

  const { link } = req.params

  console.log('dddddddddddddd')
  Banners.find({ link:link }).then(result => {
    res.send({
      message: 'Success',
      images: result,
      success: true
    });
  })

}
