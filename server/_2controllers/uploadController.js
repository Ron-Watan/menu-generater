

// export const uploadImages = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   Users.findOne({ userId: userId }).select('menu userId link').then((user) => {

//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };

// export const resizeImages = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   Users.findOne({ userId: userId }).select('menu userId link').then((user) => {

//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };

// export const getResult = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   Users.findOne({ userId: userId }).select('menu userId link').then((user) => {

//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };