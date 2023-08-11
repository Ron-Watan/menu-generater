import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'
// import { hideLoading, showLoading } from '../redux/alertSlice'
import UserPool from "../UserPool"
import { combineReducers } from '@reduxjs/toolkit'


const RegisterComponent = () => {
  // const dispath = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    restaurantName:"",
    email: "",
    password: ""
  })
  const { firstName, lastName, restaurantName,email, password } = state
  const inputValue = name => even => {
    setState({ ...state, [name]: even.target.value })

  }


  const submit = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    UserPool.signUp(email, password, [], null, (err, result) => {
      if (err) {
        alert(err);

        return;
      }
      const userId =result.userSub
      axios.post(`${process.env.REACT_APP_API}/user/register`, { userId,firstName, restaurantName, email }).then(res => {

        if (res.data.success) {
          Swal.fire(res.data.message)
          navigate('/login')
        }
        else { Swal.fire(res.data.message) }
      }).catch(err => { console.log(err) })


    });


    // axios.post(`${process.env.REACT_APP_API}/user/register`, { firstName, lastName, email, password }).then(res => {
    //   // dispath(hideLoading())
    //   if (res.data.success) {
    //     Swal.fire(res.data.message)
    //     navigate('/login')
    //   }
    //   else { Swal.fire(res.data.message) }
    // }).catch(err => { console.log(err) })
  }

  return (
    <div className="">
      <NavbarComponent />
      <div className="flex flex-col justify-center items-center mt-20 ">

        <div className="w-full max-w-md">

          <form onSubmit={submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <input value={firstName} onChange={inputValue('firstName')} className=" appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name" />
              </div>

              <div className="col-span-1">
                <input value={restaurantName} onChange={inputValue('restaurantName')} className=" appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" />
              </div>

              <div className="col-span-2">
                <input value={email} onChange={inputValue('email')} className={`appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="email" type="email" placeholder="Email Address" />
              </div>

              <div className="col-span-2">
                <input value={password} onChange={inputValue('password')} className=" appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
              </div>
              <div className="col-span-2 flex flex-row items-center justify-between">
                <input className="mr-2 leading-tight " type="checkbox" />
                <span className="text-sm">
                  I want to receive marketing promotions and updates via email.
                </span>
              </div>

              <button className=" col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-3" type="submit">
                Sign up
              </button>

            </div>
            <div className="flex items-center justify-end">
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/login">
                Already have an account? Sign in
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

export default RegisterComponent