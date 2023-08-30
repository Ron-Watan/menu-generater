import React, { useState } from 'react'


import MBiconBack from '../all-icon/button-icon/MBback.svg'

import Swal from 'sweetalert2';
import UserPool from "../UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'


function _12AccountPassword(prop) {

  const [password, setPassword] = useState({
    current: '',
    new: ''
  });

  const inputValuePassword = (name) => (even) => {
    // setCheckInputForm(true)
    setPassword({ ...password, [name]: even.target.value });

  };

  const changePassword = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    /// Cognito //
    const userData = new CognitoUser({
      Username: prop.userEmail,
      Pool: UserPool
    });

    const authDetail = new AuthenticationDetails({
      Username: prop.userEmail,
      Password: password.current,
    })

    userData.authenticateUser(authDetail, {
      onSuccess: (result) => {
        userData.changePassword(password.current, password.new, (err, result) => {
          if (err) {
            alert(err)
            return Swal.fire({
              title: 'Invalid Password',
              toast: true,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
            })
          }
          sessionStorage.clear()
          localStorage.clear()
          window.location.reload(false);
        })
      },
      onFailure: (err) => {
        console.log(err);
        return Swal.fire({
          title: 'Current Password Not Correct',
          toast: true,
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        })
      },
      newPasswordRequired: (result) => {
        console.log('new password + ' + result);
      },
    })

  }





  return (
    <div className="" >

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {

              prop.setAccountPassword(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconBack} alt="" />


          </button>
          <span className='MB_textBtn'>Back</span>
        </div>
        <div className="MB_title">Change Password</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>
      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full  zindexUnderTop" >

        <div className={`${prop.toggleScrollAccount === true && "MB_InScroll_fullNew"} paddingBottom_5`}>



          <form className={` MB_formMenu`}>

            <div className='MB_layoutManu Acc_Padding2'>

              <div className={`MB_layoutManu0 MB_light_Color`}>

                <div className='MB_layoutManu1 Acc_Gap15'>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='currrentPass' className='MB_labelPrice width_Acc '>
                      Currrent Password
                    </label>
                    <div className="posReative">
                      <input onChange={inputValuePassword('current')}
                        value={password.current} id='currrentPass' type='text' name='current' autoComplete='off'
                        className='MB_EditName_Input Acc_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='nesPass' className='MB_labelPrice width_Acc Acc_Newpass'>
                      New Password
                    </label>
                    <div className="posReative">
                      <input onChange={inputValuePassword('new')}
                        value={password.new} id="nesPass" type='text' name='new' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                </div>

              </div>
              {/* <div className="Acc_loginBTNBox mb-4 mt-8">
                <button onClick={changePassword} className="Acc_loginBTN Acc_ReBTN_W" type="submit">
                  Change password
                </button>
              </div> */}
              <div className={`Acc_loginBTNBox`}>
                <button onClick={changePassword} className="Acc_SettingBtn font_base">
                  Change Password</button>
              </div>


            </div>

          </form>




        </div>



      </div >



    </div >
  )
}

export default _12AccountPassword