import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/alertSlice'
import UserPool from "../UserPool"
import slugify from 'slugify'
import { useDispatch } from 'react-redux'
import _00Navigation from '../componenthome/_00Navigation'
import '../accounts/styleAccount.css'

const RegisterComponent = () => {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState({
    restaurantName: "",
    link: "",
    lastName: "",
    email: "",
    password: ""
  })

  const { link, lastName, restaurantName, email, password } = state
  const inputValue = name => even => {
    if (name === 'restaurantName') {
      let reName = slugify(even.target.value, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: true,     // strip special characters except replacement, defaults to `false`
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
      })
      setState({
        ...state,
        ['restaurantName']: even.target.value,
        ['link']: reName
      })

    } else {
      setState({ ...state, [name]: even.target.value })
    }

  }


  const submit = (e) => {
    e.preventDefault()
    dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/register`, { link, restaurantName, email }).then(res => {
      if (res.data.success) {
        UserPool.signUp(email, password, [], null, (err, result) => {
          if (err) {
            console.log(err)
            alert('Cognito:' + err);
            return;
          }
          dispath(hideLoading())
        });
        Swal.fire(res.data.message)
        navigate('/login')
      }
      else if (!res.data.success) {
        Swal.fire(res.data.message)
      }
    }).catch(err => {
      console.log(err)
      alert('Error')
    })

  }

  return (
    <div className='H-body Acc_logBody_H'>
      <_00Navigation NavBtnRight={'Home'}/>

      <div className="tempSpace"></div>
      <div className="flex flex-col justify-center items-center mt-20">

        <div className="Acc_logBox">

          <form className="Acc_formBox px-8 pt-6 pb-8 mb-4">

            <div className="grid grid-cols-2 gap-3">

              <div className="col-span-2 Acc_boxInputLog">
                <input value={email} onChange={inputValue('email')} className='Acc_inputLogin' id="email" type="email" placeholder="Email Address" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="col-span-2 Acc_boxInputLog">
                <input value={restaurantName} onChange={inputValue('restaurantName')} className="Acc_inputLogin" id="lastname" type="text" placeholder="Restaurant name" />
                <svg fill="" className="Acc_iconLog Acc_iconLogRes" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g id="_6" data-name="6">
                    <path d="m16.35,0H3.64L0,6.25h19.97L16.35,0ZM.02,7.5H0C0,7.77,0,8.39,0,8.75c0,.67.24,1.39.63,1.87l.02,6.87c0,1.38,1.15,2.5,2.58,2.5h13.53c1.42,0,2.62-1.12,2.62-2.5v-6.87c.44-.51.62-1.04.62-1.87v-1.25H.02Zm18.1,7.5H1.88v-3.75h1.23c.67,0,1.74-.6,2.19-1.51.51.89,1.45,1.51,2.35,1.51.95,0,2-.57,2.35-1.38.35.8,1.38,1.38,2.31,1.38s1.88-.68,2.37-1.61c.57.94,1.37,1.61,2.21,1.61.18,0,1.09.03,1.25,0v3.75Z" />
                  </g>
                </svg>
                <div className="linkFull text-s">
                  <div className="py-2 ">www.qr-cloudmenu.com/{link}</div>
                </div>

              </div>


              <div className="col-span-2 Acc_boxInputLog">
                <input value={password} onChange={inputValue('password')} className="Acc_inputLogin" id="password" type="password" placeholder="Password" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog Acc_iconKey">
                  <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                </svg>
              </div>


            </div>
            <div className="Acc_loginBTNBox mb-4 mt-8">
              <button onClick={submit} className="Acc_loginBTN Acc_ReBTN_W" type="submit">
                Create an Account
              </button>
            </div>


            <div className="Acc_loginBTNBox mb-4">
              <button className="Font_SmalLog" type="submit">
                Already have an account?  <Link to="/login" className="Font_BlueLog">Login</Link>
              </button>
            </div>


          </form>

          <p className="text-center text-gray-500 text-xs">
            &copy;2023 QR-Clould Menu. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent