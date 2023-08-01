//-
import { useEffect, useState } from "react"
import NavbarComponent from './NavbarComponent'
import axios from "axios"
import { authenticate, getToken } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import { useSelector } from "react-redux"
import UserPool from "../UserPool"

import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const LoginComponent = () => {
  // const { loading } = useSelector(state => state.alerts)

  const dispath = useDispatch()
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const { email, password } = state

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
  }
  const navigate = useNavigate()

  const submitData = (e) => {
    e.preventDefault()
    dispath(showLoading())

    const userData = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetail = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    userData.authenticateUser(authDetail, {
      onSuccess: (result) => {
        
        dispath(hideLoading())

        authenticate(result.getAccessToken().getJwtToken(), () => navigate('/'))
        setState({ ...state, email: '', password: '' })
        Swal.fire(result.data.message)


      },

      onFailure: (err) => {
        console.log(err);
      },
      newPasswordRequired: (result) => {

        console.log('new password + ' + result);
      },
    })



    // axios.post(`${process.env.REACT_APP_API}/user/login`, { email, password })
    //   .then(result => {
    //     console.log(result)
    //     if (result.data.success) {

    //       dispath(hideLoading())
    //       authenticate(result, () => navigate('/'))
    //       setState({ ...state, email: '', password: '' })
    //       Swal.fire(result.data.message)
    //     } else {
    //       Swal.fire(result.data.message)
    //       dispath(hideLoading())
    //     }
    //   }).catch(err => {
    //     dispath(hideLoading())

    //     console.log("Can't not connect the server")
    //     Swal.fire("Can't not connect the server")
    //   })
  }

  // useEffect(() => {
  //   getToken() && navigate('/')
  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className="">
      <NavbarComponent />
      <div className="flex flex-col justify-center items-center mt-20 ">
        <div className="w-full max-w-md -translate-y-18">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <input value={email} onChange={inputValue('email')} className=" appearance-none border-1 
              border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
            </div>

            <div className="mb-2">
              <input value={password} onChange={inputValue('password')} className="appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>

            <label className="text-gray-500 mb-10">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-md">
                Remember me
              </span>
            </label>

            <button onClick={submitData} className="bg-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
              SIGN IN
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

export default LoginComponent



// const clearCacheData = () => {
//   caches.keys().then((names) => {
//     names.forEach((name) => {
//       caches.delete(name);
//     });
//   });
//   alert('Complete Cache Cleared')
// };


// function clearCache() {
//   root.innerHTML += 'Cache cleared using location.reload(true)'
//   windows.location.reload(true)
// }