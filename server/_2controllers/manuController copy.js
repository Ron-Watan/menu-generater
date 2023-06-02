// import Users from '../_3models/menuModel.js';
// import { v4 as uuidv4 } from 'uuid';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// //-
// export const getAllMenu = (req, res) => {
//   console.log(req.body)
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   Users.findOne({ userId: userId }).then((user) => {

//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };


// //-
// export const createManu = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   const menu = req.body;

//   Users.findOne({ userId: userId }, '-password').then((user) => {

//     user.menu.push({
//       menuId: uuidv4(),
//       catagory: menu.catagory,
//       list: [
//         {
//           food_name: menu.food_name,
//           description: menu.description,
//           remark: menu.remark,
//           price: menu.price,
//           option_name_1: menu.option_name_1,
//           option_price_1: menu.option_price_1,
//           option_name_2: menu.option_name_2,
//           option_price_2: menu.option_price_2,
//           option_name_3: menu.option_name_3,
//           option_price_3: menu.option_price_3,
//           option_name_4: menu.option_name_4,
//           option_price_4: menu.option_price_4,
//           option_name_5: menu.option_name_5,
//           option_price_5: menu.option_price_5,
//           option_name_6: menu.option_name_6,
//           option_price_6: menu.option_price_6,
//           vetgeterian: menu.vetgeterian,
//           vegan: menu.vegan,
//           gluten_free: menu.gluten_free,
//           halal: menu.halal
//         },
//       ],
//     });

//     user.save();
//     console.log(user);
//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };

// //-
// export const additem = (req, res) => {
//   // res.send({ message: "Success", success: true, }) //send to client side
//   const { userId } = req.body;
//   const menu = req.body;
//   console.log(menu)

//   const menuId = '11489316-782f-4c92-ba46-1c0888c9db40';

//   Users.findOne({ userId: userId }, '-password').then((user) => {
//     user.menu.forEach(el => {
//       if (el.menuId === menuId) {
//         console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWW' + el.list)
//         el.list.push(
//           {
//             food_name: menu.food_name,
//             description: menu.description,
//             remark: menu.remark,
//             price: menu.price,
//             option_name_1: menu.option_name_1,
//             option_price_1: menu.option_price_1,
//             option_name_2: menu.option_name_2,
//             option_price_2: menu.option_price_2,
//             option_name_3: menu.option_name_3,
//             option_price_3: menu.option_price_3,
//             option_name_4: menu.option_name_4,
//             option_price_4: menu.option_price_4,
//             option_name_5: menu.option_name_5,
//             option_price_5: menu.option_price_5,
//             option_name_6: menu.option_name_6,
//             option_price_6: menu.option_price_6,
//             vetgeterian: menu.vetgeterian,
//             vegan: menu.vegan,
//             gluten_free: menu.gluten_free,
//             halal: menu.halal
//           },
//         );
//       }
//     })
//     user.save();
//     console.log(user);
//     res.send({
//       message: 'Success',
//       userMenu: user,
//       success: true
//     }); //send to client side
//   });
// };



// //-
// // export const add = (req, res) => {
// //   // res.send({ message: "Success", success: true, }) //send to client side
// //   const { userId } = req.body

// //   Users.findOne({ userId: userId }).then(user => {
// //     console.log(user.menu)

// //     res.send({ message: "Success", success: true, }) //send to client side
// //   })
// // }
// //     user.menu.push({
// //       catagory: manu.catagory,
// //       list: [
// //         {
// //           food_name: manu.food_name,
// //           description: manu.description,
// //           remark: manu.remark,
// //           price: manu.price,
// //           option: [{
// //             option_name: manu.option_name,
// //             option_price: manu.option_price
// //           }],
// //           vetgeterian: manu.vetgeterian,
// //           vegan: manu.vegan,
// //           gluten_free: manu.gluten_free,
// //           halal: manu.halal
// //         }
// //       ]

// //     })
