
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
  const { link } = req.params
  Banners.findOne({ link: link }).then(result => {

    res.send({
      message: 'Success',
      images: result,
      success: true
    });
  })

}

export const sentfeedBack = (req, res) => {

  const { link } = req.params
  const { feedBack } = req.body;
  Clients.findOne({ link: link })
    .then(client => {
      const currentUnseenFeedBack = client.unseenFeedBack;
      currentUnseenFeedBack.push(feedBack);
      client.save();
      res.send({
        message: 'Success',
        success: true,
      });
    });

};