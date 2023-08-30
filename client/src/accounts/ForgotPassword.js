import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import '../accounts/styleAccount.css'
import Sect00Navigation from '../componenthome/_00Navigation'
import UserPool from "../UserPool"
import { CognitoUser } from 'amazon-cognito-identity-js'
import Swal from 'sweetalert2'

function ForgotPassword() {


  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [infoSendCode, setInfoSendCode] = useState('')

  const navigate = useNavigate()

  //-

  const sendCode = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    /// Cognito //
    const userData = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    userData.forgotPassword({
      onSuccess: (result) => {

      },
      onFailure: (err) => {
        console.log(err);
      },
      inputVerificationCode: (result) => {

        setInfoSendCode(result)

        Swal.fire({
          title: 'Sent',
          toast: true,
          icon: 'success',
          iconColor: '#00a3ff',
          showConfirmButton: false,
          timer: 1500,
        })


      },
    })

  }


  //- //-
  const ConfirmCodePasssword = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    /// Cognito //
    const userData = new CognitoUser({
      Username: email,
      // Username: 'ronwatan@gmail.com',
      Pool: UserPool
    });

    // const authDetail = new AuthenticationDetails({
    //   Username: user.email,
    //   Password: email.curentPassword,
    // })

    userData.confirmPassword(code, newPassword, {
      onSuccess: (result) => {

        Swal.fire({
          title: 'Password Updated',
          toast: true,
          icon: 'success',
          iconColor: '#00a3ff',
          showConfirmButton: false,
          timer: 1500,
        }).then(resultFire => {
          navigate('/login')

        })

      },
      onFailure: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Invalid code',
          toast: true,
          icon: 'error',
          // iconColor: '#00a3ff',
          showConfirmButton: false,
          timer: 1500,
        })
      },
      inputVerificationCode: (result) => {
        console.log(result)
      },
    })


  }

  return (
    <div className='H-body Acc_logBody_H'>
      <Sect00Navigation NavBtnRight={'Home'} />

      <div className="tempSpace"></div>

      <div className="flex flex-col justify-center items-center mt-20">

        <div className="Acc_logBox">
          <div className="Acc_loginBTNBox mb-4 Font_BlueLog Acc_textTitle">
            Reset Passwoed
          </div>
          <form className="Acc_formBox px-8 pt-8 pb-8 mb-4">

            <div className="mb-4 Acc_boxInputLog">
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="Acc_inputLogin " type="text" placeholder="Email Address" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
              </svg>
            </div>
            {/* {infoSendCode && <div className="mb-10 Acc_boxInputLog">
              <input value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className="Acc_inputLogin" id="password" type="password" placeholder="Password" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog Acc_iconKey">
                <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
              </svg>
            </div>} */}
            {/* <div className="mb-10 Acc_boxInputLog">
              <input value={''} onChange={inputValue('password')} className="Acc_inputLogin" id="password" type="password" placeholder="Password" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog Acc_iconKey">
                <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
              </svg>
            </div> */}

            {/* infoSendCode */}
            {infoSendCode &&
              <div className="linkFull">
                <div className="mb-2 text-sm">Your code we have sent to Email or</div>
                <button onClick={sendCode} className="Font_BlueLog mb-4">Resend Code</button>
                <div className="mb-2 Acc_boxInputLog">
                  <input value={code} onChange={(event) => setCode(event.target.value)} className="Acc_inputLogin " type="text" placeholder="Code" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="Acc_iconLog Acc_iconLogRes">
                    <path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z" clip-rule="evenodd" />
                  </svg>

                </div>
                <div className="mb-2 Acc_boxInputLog">
                  <input value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className="Acc_inputLogin" id="password" type="password" placeholder="New Password" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" className="Acc_iconLog Acc_iconKey">
                    <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                  </svg>
                </div>


              </div>
            }

            <div className="Acc_loginBTNBox mb-4 mt-4">

              {!infoSendCode && <button onClick={sendCode} className="Acc_loginBTN Acc_ReBTN_W" type="submit">
                Send Code to Email
              </button>}
              {infoSendCode && <button onClick={ConfirmCodePasssword} className="Acc_loginBTN Acc_ReBTN_W" type="submit">
                Confirm
              </button>}
            </div>
            <div className="Acc_loginBTNBox mb-4 Font_BlueLog">
              <Link to='/login' className="" type="submit">
                Back to Login
              </Link>
            </div>
            {/* <div className="Acc_loginBTNBox mb-4">
              <button className="Font_SmalLog" type="submit">
                New to QR-Clould Menu? <Link to="/register" className="Font_BlueLog">Create an account in seconds...</Link>
              </button>
            </div> */}

          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 QR-Clould Menu. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

// An account with that email address was not found
// Not a valid email.