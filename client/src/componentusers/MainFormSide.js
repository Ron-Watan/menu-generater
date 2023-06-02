
import { useEffect, useState } from "react"

import axios from 'axios'
import Swal from 'sweetalert2'
import { ticketPass } from "../protectors/authorize"
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from "../redux/alertSlice"


const MainFormSide = (prop) => {


  const dispath = useDispatch()

  const { user } = useSelector(state => state.user)
  const [menus, setMenus] = useState([])
  const [sendMenu, setSendMenu] = useState([])

  const getAllMenu = () => {
    dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          setMenus(result.data.userMenu.menu)
          dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server", err)
        // Swal.fire("Can't not connect the server")
      })
  }

  const getEditManu = (e) => {
    e.preventDefault();
    const menuId = e.target.name
    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/getEditManu`, { menuId: menuId, userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          // console.log(result.data.userMenu)
          // setMenus(result.data.userMenu.menu)
          // dispath(hideLoading())
          prop.editMenuFn(result.data.userMenu)
        } else {
          Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {
        // dispath(hideLoading())
        console.log("Can't not connect the server", err)
        Swal.fire("Can't not connect the server")
      })
  }








  useEffect(() => {
    getAllMenu()
    // eslint-disable-next-line
  }, [user])

  // {
  //   menus.map((el, index) => {
  //     console.log(el)


  //   })
  // }



  return (
    <div className="moitor3">



      <div className="sideBox"  >
        {menus.map((el, index) => (
          <button name={el.menuId} onClick={getEditManu} className="tabCatalog" key={index}>{el.catagory}</button>

        ))}
        .
      </div>




    </div >
  )
}

export default MainFormSide