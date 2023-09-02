//-
import { useState } from "react"
import axios from "axios"
import { authenticate } from "../protectors/authorize"
import Swal from "sweetalert2"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import UserPool from "../UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { v4 as uuidv4 } from 'uuid';
import Sect00Navigation from '../componenthome/_00Navigation'
import '../accounts/styleAccount.css'

const LoginComponent = () => {

  const dispath = useDispatch()




  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const { email, password } = state

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
    setWrongEmailPass('')
    setErrorEmailrequire(false)
    setErrorEmail(false)

    setErrorPWrequire(false)

  }
  const navigate = useNavigate()

  const [wrongEmailPass, setWrongEmailPass] = useState('')


  const [errorEmailrequire, setErrorEmailrequire] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const [errorPWrequire, setErrorPWrequire] = useState(false)


  // let trry = { "expireAt": new Date('September 2, 2023 06:40:00') }






  const submitData = (e) => {
    sessionStorage.clear()
    localStorage.clear()
    e.preventDefault()
    dispath(showLoading())
    console.log('ddddd')
    if (!email) setErrorEmailrequire(true)
    else if (!(String(email).match(/^\S+@\S+\.\S+$/))) setErrorEmail(true)

    if (!password) setErrorPWrequire(true)

    if (!email || !password || (!(String(email).match(/^\S+@\S+\.\S+$/)))) return dispath(hideLoading())

    /// Cognito //
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
        // const tokenName = 'CognitoIdentityServiceProvider.' + result.getAccessToken().payload.client_id + '.' + result.getAccessToken().payload.username + '.accessToken'
        // authenticate(tokenName, () => navigate('/app'))
        // setState({ ...state, email: '', password: '' })
        const tokenName = 'CognitoIdentityServiceProvider.' + result.getAccessToken().payload.client_id + '.' + result.getAccessToken().payload.username + '.accessToken'


        authenticate(tokenName, () => navigate('/app'))
        setState({ ...state, email: '', password: '' })

        const loginCode = uuidv4()
        sessionStorage.setItem('temp', loginCode)
        axios.post(`${process.env.REACT_APP_API}/user/login`, { email, loginCode })
          .then(resultDB => {
            if (resultDB.data.success) {
              // Swal.fire(resultDB.data.message)

              dispath(hideLoading())

            } else {
              Swal.fire(resultDB.data.message)
              dispath(hideLoading())
            }
          }).catch(err => {
            dispath(hideLoading())

            console.log("Can't not connect the server")
            Swal.fire("Can't not connect the server")
          })


        // userData.globalSignOut({
        //   onSuccess: (globalResult) => {
        //   }
        // });
        dispath(hideLoading())
      },
      onFailure: (err) => {

        if (err.message === 'User is not confirmed') return

        console.log(err.message);
        setWrongEmailPass(err.message)
        dispath(hideLoading())

      },
      newPasswordRequired: (result) => {
        console.log('new password + ' + result);
      },
    })

  }




  // useEffect(() => {
  //   getToken() && navigate('/')
  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className='H-body Acc_logBody_H'>
      <Sect00Navigation NavBtnRight={'Home'} />

      <div className="tempSpace"></div>

      <div className="flex flex-col justify-center items-center mt-20">

        <div className="Acc_logBox">

          <form className="Acc_formBox px-8 pt-6 pb-8 mb-4">

            <div className="mb-4 Acc_boxInputLog">
              <input value={email} onChange={inputValue('email')} className={`Acc_inputLogin ${(wrongEmailPass || errorEmailrequire || errorEmail) && 'borderRed'}`} id="email" type="email" placeholder="Email Address" maxLength="30" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className={`Acc_iconLog ${(wrongEmailPass || errorEmailrequire) && 'AccRed'}`}>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
              </svg>
              {errorEmail && <div className="errorInputTextRe">Invalid email address</div>}

            </div>

            <div className="mb-10 Acc_boxInputLog">
              {/* <input value={password} onChange={inputValue('password')} className="appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" /> */}

              <input value={password} onChange={inputValue('password')} className={`Acc_inputLogin ${(wrongEmailPass || errorPWrequire) && 'borderRed'}`} id="password" type="password" placeholder="Password" maxLength="50" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className={`Acc_iconLog Acc_iconKey ${(wrongEmailPass || errorPWrequire) && 'AccRed'}`}>
                <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
              </svg>


              {wrongEmailPass && <div className="errorInputText">{wrongEmailPass}</div>}
            </div>

            <div className="Acc_loginBTNBox mb-4">
              <button onClick={submitData} className="Acc_loginBTN" type="submit">
                Login
              </button>
            </div>
            <div className="Acc_loginBTNBox mb-4 Font_BlueLog">
              <Link to="/forgotPassword" state={{ email: email }} className="" type="submit">
                Forgot your Password?
              </Link>
            </div>
            <div className="Acc_loginBTNBox mb-4">
              <button className="Font_SmalLog" type="submit">
                New to QR-Clould Menu? <Link to="/register" className="Font_BlueLog">Create an account in seconds...</Link>
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

export default LoginComponent
// Create an Account
// Already have an account? Login

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