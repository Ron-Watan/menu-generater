//-
// import { useEffect, useState } from "react"
// import NavbarComponent from './NavbarComponent'
import axios from "axios"
import { authenticate, getToken, ticketPass } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import { useSelector } from "react-redux"
import { useState } from "react"


const GenerateMenu = () => {
  const { user } = useSelector(state => state.user)
  const dispath = useDispatch()
  const [state, setState] = useState({
    restaurantName: '',

  })
  const { restaurantName } = state

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
  }
  const navigate = useNavigate()

  const submitGenerate = (e) => {
    e.preventDefault()
    dispath(showLoading())

    axios.post(`${process.env.REACT_APP_API}/user/generateMenu`, { restaurantName,userId: user.userId, link:user.link },ticketPass)
      .then(result => {
        if (result.data.success) {
          dispath(hideLoading())
          Swal.fire(result.data.message)
          navigate('/mainform')
        } else {
          Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())

        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }

  // useEffect(() => {
  //   getToken() && navigate('/')
  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className="">

      <div className="flex flex-col justify-center items-center mt-20 ">
        <div className="w-full max-w-md -translate-y-18">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <input value={restaurantName} onChange={inputValue('restaurantName')} className=" appearance-none border-1 
              border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="restaurantName" type="text" placeholder="Restaurant" />
            </div>

            <label className="text-gray-500 mb-10">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-md">
                Remember me
              </span>
            </label>

            <button onClick={submitGenerate} className="bg-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
            submitGenerate
            </button>



            <div className="flex items-center justify-between">
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                Forgot Password?
              </a>
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/register">
                Don't have an account? Sign Up
              </a>
            </div>

          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GenerateMenu



