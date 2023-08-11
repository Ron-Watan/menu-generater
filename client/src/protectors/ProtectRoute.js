//-

import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getToken, ticketPass } from "./authorize"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { setUser } from "../redux/userSlice"
import { hideLoading } from "../redux/alertSlice"
// import { hideLoading, showLoading } from "../redux/alertSlice"

//  
const ProtectRoute = () => {
  const navigate = useNavigate()
  // const { user } = useSelector(state => state.user)

  const dispath = useDispatch()
  const checkUserAuthorize = () => {
 
    axios
      .post(`${process.env.REACT_APP_API}/user/info-user`, {}, ticketPass)
      .then(result => {
        if (result) {
          dispath(setUser(result.data.data.result))
          // console.log("App-CheckUserAuthorize : true")

        }
        else {

          // localStorage.clear()
          navigate('/login')
        }
      }).catch(err => {
        console.log("App-CheckUserAuthorize/ Connection : fail")
        console.log(err)

        dispath(hideLoading());
        // localStorage.clear()
        // navigate("/login");
      })
  }
  // useEffect(() => {
  //   if (!user) {
  //     checkUserAuthorize();
  //   }
  // }, [user]);


  useEffect(() => {
    checkUserAuthorize();
    // eslint-disable-next-line
  }, []);


  // const { user } = useSelector(state => state.user)
  // const dispath = useDispatch()
  // const navigate = useNavigate()

  // const checkUserAuthorize = () => {
  //   console.log("rrr")
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/info-user`, {}, ticketPass)
  //     .then(result => {
  //       if (result) {
  //         dispath(setUser(result.data.data))
  //         console.log("App-CheckUserAuthorize : true")
  //         console.log(result)
  //       }
  //       else {
  //         // localStorage.clear()
  //         navigate('/login')
  //       }
  //     }).catch(err => {
  //       console.log("App-CheckUserAuthorize/ Connection : fail", err)
  //       // dispatch(hideLoading());
  //       // localStorage.clear()
  //       navigate("/login");
  //     })
  // }

  // useEffect(() => {
  //   console.log(Boolean(user))
  //   if (!user) {
  //     checkUserAuthorize();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   checkUserAuthorize()
  //   // eslint-disable-next-line
  // }, [])

  return (
    getToken() ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default ProtectRoute