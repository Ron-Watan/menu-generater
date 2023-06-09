


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
