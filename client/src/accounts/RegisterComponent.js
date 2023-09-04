import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/alertSlice'
import UserPool from "../UserPool"
import slugify from 'slugify'
import { useDispatch, useSelector } from 'react-redux'
import _00Navigation from '../componenthome/_00Navigation'
import '../accounts/styleAccount.css'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'


const RegisterComponent = () => {

  const { loading } = useSelector((state) => state.alerts);
  const dispath = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [state, setState] = useState({
    restaurantName: "",
    link: "",
    lastName: "",
    email: "",
    password: ""
  })


  const { link, restaurantName, email, password } = state

  const [stepCode, setStepCode] = useState(location.state?.codeStep2)
  const [code, setCode] = useState('')


  const [errorEmailrequire, setErrorEmailrequire] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorEmailexists, setErrorEmailexists] = useState(false)


  const [errorPWrequire, setErrorPWrequire] = useState(false)
  const [errorPWtitle, setErrorPWtitle] = useState(false)
  const [errorPWminimum, setErrorPWminimum] = useState(false)
  const [errorPWnumber, setErrorPWnumber] = useState(false)
  const [errorPWlowercase, setErrorPWlowercase] = useState(false)
  const [errorPWuppercase, setErrorPWuppercase] = useState(false)
  const [errorPWspecial, setErrorPWspecial] = useState(false)

  const [errorResrequire, setErrorResrequire] = useState(false)
  const [errorLinkexists, setErrorLinkexists] = useState(false)

  const [errorCoderequire, setErrorCoderequire] = useState(false)
  const [errorCode, setErrorCode] = useState('')
  const [limitCode, setLimitCode] = useState('')
  const [codeEpired, setCodeEpired] = useState('')


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
      setErrorResrequire(false)
      setErrorLinkexists(false)

    } else {
      setState({ ...state, [name]: even.target.value })
    }

    //////////////
    if (name === 'email') {
      setErrorEmail(false)
      setErrorEmailrequire(false)
      setErrorEmailexists(false)

    }

    if (name === 'password') {
      setErrorPWrequire(false)
      setErrorPWtitle(false)
      setErrorPWminimum(false)
      setErrorPWnumber(false)
      setErrorPWlowercase(false)
      setErrorPWuppercase(false)
      setErrorPWspecial(false)
    }

  }


  // String(password).match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.\[\]{}\(\)?\-"!@#%&\/\\,><':;|_~`+=]).{8,}/)

  //-
  const submit = (e) => {
    e.preventDefault()
    dispath(showLoading())
    // 1. Fileter Input
    if (!email) setErrorEmailrequire(true)
    else if (!(String(email).match(/^\S+@\S+\.\S+$/))) setErrorEmail(true)

    if (!restaurantName) setErrorResrequire(true)

    if (!password) setErrorPWrequire(true)
    else if (password) {
      if (!(String(password).match(/(?=.*[a-z])/))) {
        setErrorPWlowercase(true)
      }
      if (!(String(password).match(/(?=.*[A-Z])/))) {
        setErrorPWuppercase(true)
      }
      if (!(String(password).match(/(?=.*\d)/))) {
        setErrorPWnumber(true)
      }
      if (!(String(password).match(/(?=.*[\^$*.\[\]{}\(\)?\-"!@#%&\/\\,><':;|_~`+=])/))) {
        setErrorPWspecial(true)
      }
      if (!(String(password).match(/.{8,}/))) {
        setErrorPWminimum(true)
      }
      if (!(String(password).match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.\[\]{}\(\)?\-"!@#%&\/\\,><':;|_~`+=]).{8,}/))) {
        setErrorPWtitle(true)
        return dispath(hideLoading())
      }
    }
    if (!email || !password || !restaurantName) return dispath(hideLoading())



    // 2. Check No Duplicate / TRUE = Duplicate
    axios.post(`${process.env.REACT_APP_API}/user/checkRegister`, { link, email }).then(resDB1 => {
      if (resDB1.data.success.email) {
        setErrorEmailexists(true)
      }
      if (resDB1.data.success.link) {
        setErrorLinkexists(true)
      }
      if (resDB1.data.success.email || resDB1.data.success.link) return dispath(hideLoading())

      // 3. Create Cognito Acc. 
      UserPool.signUp(email, password, [], null, (error, result) => {
        if (error) {
          if (error.code === "UsernameExistsException") {
            setErrorEmailexists(true)
            return dispath(hideLoading())
          }
        }

        // 4. Create DB Acc. 
        axios.post(`${process.env.REACT_APP_API}/user/register`, { userId: result.userSub, link, restaurantName, email })
          .then(resDB2 => {

            Swal.fire({
              title: 'Check your email',
              text: 'to confirm your email address',
              confirmButtonText: 'OK',
              confirmButtonColor: '#00a3ff',
              showConfirmButton: true,

            }).then(next => {
              setStepCode(true)

            })

            dispath(hideLoading())
          }).catch(err => {
            alert(err)
          })


      });

      // else if (!res.data.success) {
      //   if (res.data.message === 'existsEmail') {
      //     setErrorEmailexists(true)
      //     return dispath(hideLoading())
      //   }
      //   if (res.data.message === 'existsLink') {
      //     setErrorLinkexists(true)
      //     return dispath(hideLoading())
      //   }


      // }


    }).catch(err => {
      alert(err)
    })
  }
  // let yy=`https://YourAPIPath/redirect?code=${codeParameter}&username=${userName}&clientId=${clientId}&region=${region}&email=${email}`;



  const confirmRegister = (e) => {
    e.preventDefault()

    dispath(showLoading())
    if (!code) setErrorCoderequire(true)
    if (!email) setErrorEmailrequire(true)
    else if (!(String(email).match(/^\S+@\S+\.\S+$/))) setErrorEmail(true)

    // if (!password) setErrorPWrequire(true)
    console.log(code, email)
    if (!code || !email || (!(String(email).match(/^\S+@\S+\.\S+$/)))) return dispath(hideLoading())
    const userData = new CognitoUser({
      Username: email,
      Pool: UserPool
    });


    userData.confirmRegistration(code, true, ((error, reult) => {
      if (error) {
        console.dir(error)
        if (error.code === "CodeMismatchException") {
          setErrorCode(true)
          return dispath(hideLoading())
        }
        else if (error.code === "LimitExceededException") {
          setLimitCode(true)
          return dispath(hideLoading())
        } else if (error.code === "ExpiredCodeException") {
          setCodeEpired(true)
          return dispath(hideLoading())
        }
        else {
          setErrorCode(true)
          return dispath(hideLoading())
        }

        
      }

      setTimeout(() => {
        dispath(hideLoading())
        navigate('/login')
      }, 1000);


    }))









    // userData.authenticateUser(authDetail, {
    //   onSuccess: (result) => {
    //     // const tokenName = 'CognitoIdentityServiceProvider.' + result.getAccessToken().payload.client_id + '.' + result.getAccessToken().payload.username + '.accessToken'
    //     // authenticate(tokenName, () => navigate('/app'))
    //     // setState({ ...state, email: '', password: '' })
    //     const tokenName = 'CognitoIdentityServiceProvider.' + result.getAccessToken().payload.client_id + '.' + result.getAccessToken().payload.username + '.accessToken'
    //     authenticate(tokenName, () => navigate('/app'))
    //     setState({ ...state, email: '', password: '' })

    //     const loginCode = uuidv4()
    //     sessionStorage.setItem('temp', loginCode)
    //     axios.post(`${process.env.REACT_APP_API}/user/login`, { email, loginCode })
    //       .then(resultDB => {
    //         if (resultDB.data.success) {
    //           // Swal.fire(resultDB.data.message)

    //           dispath(hideLoading())

    //         } else {
    //           Swal.fire(resultDB.data.message)
    //           dispath(hideLoading())
    //         }
    //       }).catch(err => {
    //         dispath(hideLoading())

    //         console.log("Can't not connect the server")
    //         Swal.fire("Can't not connect the server")
    //       })


    //     // userData.globalSignOut({
    //     //   onSuccess: (globalResult) => {
    //     //   }
    //     // });
    //     dispath(hideLoading())
    //   },
    //   onFailure: (err) => {
    //     console.log(err.message);
    //     setWrongEmailPass(err.message)
    //     dispath(hideLoading())

    //   },
    //   newPasswordRequired: (result) => {
    //     console.log('new password + ' + result);
    //   },
    // })

  }







  const reSendCode = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    /// Cognito //

    if (!email) setErrorEmailrequire(true)
    else if (!(String(email).match(/^\S+@\S+\.\S+$/))) setErrorEmail(true)
    if (!email || (!(String(email).match(/^\S+@\S+\.\S+$/)))) return dispath(hideLoading())



    const userData = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    userData.resendConfirmationCode((err, reult) => {
      if (err) return alert('ERR')
      Swal.fire({
        title: 'Check your email',
        text: 'to confirm your email address',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00a3ff',
        showConfirmButton: true,
      })

    })

  }







  return (
    <div className='H-body Acc_logBody_H'>
      <_00Navigation NavBtnRight={'Home'} />

      <div className="tempSpace"></div>
      <div className="flex flex-col justify-center items-center mt-20">

        <div className="Acc_logBox">

          <form className="Acc_formBox px-8 pt-6 pb-8 mb-4">

            <div className="grid grid-cols-2 gap-3">

              <div className="col-span-2 Acc_boxInputLog">
                <input value={email} onChange={inputValue('email')} className={`Acc_inputLogin ${(errorEmail || errorEmailexists || errorEmailrequire) && 'borderRed'}`} id="email" type="email" placeholder="Email Address" pattern={/^\S+@\S+$/i} maxLength="30" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className={`Acc_iconLog ${(errorEmail || errorEmailexists || errorEmailrequire) && 'AccRed'}`}>
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                </svg>
                {errorEmail && <div className="errorInputTextRe">Invalid email address</div>}
                {errorEmailexists && <div className="errorInputTextRe">Email already exists</div>}



              </div>

              {!stepCode && <div className="col-span-2 Acc_boxInputLog">
                <input value={restaurantName} onChange={inputValue('restaurantName')} className={`Acc_inputLogin ${(errorResrequire || errorLinkexists) && 'borderRed'}`} id="lastname" type="text" placeholder="Restaurant name" maxLength="30" />
                <svg fill="" className={`Acc_iconLog Acc_iconLogRes ${(errorResrequire || errorLinkexists) && 'AccRed'}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g id="_6" data-name="6">
                    <path d="m16.35,0H3.64L0,6.25h19.97L16.35,0ZM.02,7.5H0C0,7.77,0,8.39,0,8.75c0,.67.24,1.39.63,1.87l.02,6.87c0,1.38,1.15,2.5,2.58,2.5h13.53c1.42,0,2.62-1.12,2.62-2.5v-6.87c.44-.51.62-1.04.62-1.87v-1.25H.02Zm18.1,7.5H1.88v-3.75h1.23c.67,0,1.74-.6,2.19-1.51.51.89,1.45,1.51,2.35,1.51.95,0,2-.57,2.35-1.38.35.8,1.38,1.38,2.31,1.38s1.88-.68,2.37-1.61c.57.94,1.37,1.61,2.21,1.61.18,0,1.09.03,1.25,0v3.75Z" />
                  </g>
                </svg>
                {errorLinkexists && <div className="errorInputTextRe">Link already exists</div>}

                <div className="linkFull text-s">
                  <div className="py-2 ">www.qr-cloudmenu.com/{link}</div>
                </div>

              </div>}






              {!stepCode && <div className="col-span-2 Acc_boxInputLog">
                <input value={password} onChange={inputValue('password')} className={`Acc_inputLogin ${(errorPWtitle || errorPWrequire) && 'borderRed'}`} id="password" type="password" placeholder="Password" maxLength="50" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill='' className={`Acc_iconLog Acc_iconKey ${(errorPWtitle || errorPWrequire) && 'AccRed'}`}>
                  <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                </svg>

                {errorPWtitle && <div className="errorInputTextRe">Requirements:</div>}
                {errorPWminimum && <div className="errorInputTextRe">8-character minimum length</div>}
                {errorPWnumber && <div className="errorInputTextRe">Contains at least 1 number</div>}
                {errorPWlowercase && <div className="errorInputTextRe">Contains at least 1 lowercase letter</div>}
                {errorPWuppercase && <div className="errorInputTextRe">Contains at least 1 uppercase letter</div>}
                {errorPWspecial && <div className="errorInputTextRe">Contains at least 1 special character</div>}

              </div>}


              {stepCode && <div className="col-span-2 Acc_boxInputLog">
                <div className="Acc_codeInputBox">
                  <div className="Acc_codeInput">
                    <input value={code} onChange={(e) => {
                      setCode((e.target.value).trim())
                      setErrorCoderequire(false)
                      setErrorCode(false)
                      setLimitCode(false)
                    }} autoComplete="false" className={`Acc_inputLogin Acc_codeCenter ${(errorCoderequire || errorCode) && 'borderRed'}`} id="regCode" type="text" placeholder="Verification code" maxLength="50" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill='' className={`Acc_iconLog Acc_iconKey ${(errorCoderequire || errorCode) && 'AccRed'} `}>
                      <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                    {errorCode && <div className="errorInputTextRe">Invalid verification code,<br />please try again.</div>}
                    {limitCode && <div className="errorInputTextRe">Attempt limit exceeded,<br />please try after some time.</div>}
                    {codeEpired && <div className="errorInputTextRe">Verification code expired,<br />please request a code again.</div>}


                  </div>
                </div>
              </div>}

            </div>
            {!stepCode && <div className="Acc_loginBTNBox mb-4 mt-8">
              <button onClick={submit} className="Acc_loginBTN Acc_ReBTN_W posRelative" type="submit">
                <div className={`${!loading && 'hiddenMe'}`}>
                  <div className="iconLoadingBTN iconLoadingTwo">
                    <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                  </div>
                </div>
                Create an Account
              </button>
            </div>}
            {stepCode && <div className="Acc_loginBTNBox mb-4 mt-8 posRelative">
              <button onClick={confirmRegister} className="Acc_loginBTN Acc_ReBTN_W" type="submit">
                <div className={`${!loading && 'hiddenMe'}`}>
                  <div className="iconLoadingBTN iconLoadingThree">
                    <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                  </div>
                </div>
                Confirm account
              </button>
            </div>}

            <div className="Acc_loginBTNBox mb-4">
              {!stepCode && <button className="Font_SmalLog" type="submit">
                Already have an account?  <Link to="/login" className="Font_BlueLog">Login</Link>
              </button>}

              {stepCode && <button className="Font_SmalLog" type="submit">
                Didn't recieve a code? <br /> <div onClick={(e) => reSendCode(e)} className="Font_BlueLog">Send a new code</div>
              </button>}

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