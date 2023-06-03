
// import { forwardRef, useEffect, useImperativeHandle, useState } from "react"

// import axios from 'axios'
// import Swal from 'sweetalert2'
// import { ticketPass } from "../protectors/authorize"
// import { useDispatch, useSelector } from 'react-redux'
// import { hideLoading, showLoading } from "../redux/alertSlice"
// import { setUser } from "../redux/userSlice"


// const MainFormSide = forwardRef((prop, ref) => {
//   useImperativeHandle(ref, () => ({
//     log() {
//       getAllMenu();
//     }
//   }));
//   const dispath = useDispatch()

//   const { user } = useSelector(state => state.user)
//   const [menus, setMenus] = useState([])




//   const getAllMenu = () => {
//     dispath(showLoading())
//     axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
//       .then(result => {
//         if (result.data.success) {
//           // Swal.fire(result.data.message)
//           setMenus(result.data.userMenu.menu)
//           dispath(hideLoading())
//         } else {
//           // Swal.fire(result.data.message)
//           dispath(hideLoading())
//         }
//       }).catch(err => {
//         dispath(hideLoading())
//         console.log("Can't not connect the server", err)
//         // Swal.fire("Can't not connect the server")
//       })
//   }

//   const [menuIdVar, setMenuIdVar] = useState('')
//   const componentDidMount = () => {
//     window.scrollTo(0, 0)
//   }
//   const findOneMenu = (e) => {
//     e.preventDefault();
//     const menuId= e.target.name
//     setMenuIdVar(menuId)
//     componentDidMount()
//     // dispath(showLoading())
//     axios.post(`${process.env.REACT_APP_API}/user/findOneMenu`, { menuId: menuId, userId: user.userId }, ticketPass)
//       .then(result => {
//         if (result.data.success) {
//           // Swal.fire(result.data.message)
//           // console.log(result.data.userMenu)
//           // setMenus(result.data.userMenu.menu)
//           // dispath(hideLoading())
//           prop.chooseMenu(result.data.userMenu)
//         } else {
//           Swal.fire(result.data.message)
//           // dispath(hideLoading())
//         }
//       }).catch(err => {
//         // dispath(hideLoading())
//         console.log("Can't not connect the server", err)
//         Swal.fire("Can't not connect the server")
//       })
//   }

//   const deleteMenu = (e) => {
//     const menuId= e.target.value
//     dispath(showLoading())
//     e.preventDefault();
//     axios.post(`${process.env.REACT_APP_API}/user/deleteMenu`,
//       { menuId: menuId, listMenu: [...prop.listMenu], userId: user.userId }, ticketPass)
//       .then(result => {
//         if (result.data.success) {
//           dispath(setUser(result.data.userMenu));
//           Swal.fire(result.data.message)
//           dispath(hideLoading())
//         } else {
//           Swal.fire(result.data.message)
//           dispath(hideLoading())
//         }
//       }).catch(err => {
//         dispath(hideLoading())
//         console.log("Can't not connect the server")
//         Swal.fire("Can't not connect the server")
//       })
//   }







//   useEffect(() => {
//     getAllMenu()
//     // eslint-disable-next-line
//   }, [user])

//   // {
//   //   menus.map((el, index) => {
//   //     console.log(el)


//   //   })
//   // }



//   return (

//     <div className="moitor3">
//       <div className="sideBox"  >
//         {menus.map((el, index) => (
//           <div className={`flex justify-between ${ menuIdVar===el.menuId? 'bg-blue':""}`} >
//             <button name={el.menuId} onClick={findOneMenu} className="tabCatalog" key={index}>{el.catagory}</button>
//             <div className="flex items-center justify-center gap-x-6">
//               <button onClick={deleteMenu} value={el.menuId} type="submit" className="bg-blue rounded-md bg-
//              indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
//              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
//              focus-visible:outline-indigo-600">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div >
    
//   )
// })

// export default MainFormSide