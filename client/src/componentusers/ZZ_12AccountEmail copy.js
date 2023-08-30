import React, { forwardRef, useEffect, useState } from 'react'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconBack from '../all-icon/button-icon/MBback.svg'
import MBaddIcon from '../all-icon/button-icon/addIcon.svg'
import MBerroricon from '../all-icon/button-icon/error.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'
import MBiconSetting from '../all-icon/button-icon/setting.svg'
import Swal from 'sweetalert2';
import UserPool from "../UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { logout } from '../protectors/authorize'
import { useSelector } from 'react-redux'

function _12AccountEmail(prop) {
  const { user } = useSelector((state) => state.user);

  const [password, setPassword] = useState({
    current: '',
    new: ''
  });



  const inputValuePassword = (name) => (even) => {
    // setCheckInputForm(true)
    setPassword({ ...password, [name]: even.target.value });

  };

  const getCognitoSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser()
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject()
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject()
                } else {

                  const results = {}
                  for (let attribute of attributes) {
                    const { Name, Value } = attribute
                    results[Name] = Value
                  }

                  resolve(results)
                }

              })

            })


            console.log(attributes)
            console.log(session)
            resolve(user, session, attributes)
          }
        })
      }



    })


  }

  const logout = () => {
    const user = UserPool.getCurrentUser()
    if (user) {
      console.log('logout')
      user.signOut()
    }
  }

  const changePassword = (e) => {
    e.preventDefault()
    // dispath(showLoading())
    /// Cognito //
    const userData = new CognitoUser({
      Username: user.email,
      Pool: UserPool
    });

    const authDetail = new AuthenticationDetails({
      Username: user.email,
      Password: password.current,
    })

    userData.authenticateUser(authDetail, {
      onSuccess: (result) => {
        userData.changePassword(password.current, password.new, (err, result) => {
          if (err) return console.log(err)
          console.log(result)
        })
      },
      onFailure: (err) => {
        console.log(err);
      },
      newPasswordRequired: (result) => {
        console.log('new password + ' + result);
      },
    })

  }

  // useEffect(() => {
  //   getCognitoSession()

  // }, [])


  return (
    <div className="" >

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {

              prop.setAccountEmail(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconBack} alt="" />


          </button>
          <span className='MB_textBtn'>Back</span>
        </div>
        <div className="MB_title">Change Email</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>
      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full  zindexUnderTop" >

        <div className="MB_InScroll_fullNew paddingBottom_5" >



          <form className={` MB_formMenu`}>

            <div className='MB_layoutManu Acc_Padding2'>
              <div className={`MB_layoutManu0 MB_light_Color`}>


                <div className='MB_layoutManu1 Acc_Gap15'>

                  <div className="" onClick={changePassword}>xxxxxxxxxxxxxxxxxxxxxxx</div>
                  <div className="" onClick={logout}>222222222222222</div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_Acc '>
                      Currrent Password
                    </label>
                    <div className="posReative">
                      <input onChange={inputValuePassword('current')}
                        value={password.current} type='text' name='current' autoComplete='off'
                        className='MB_EditName_Input Acc_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_Acc Acc_Newpass'>
                      New Password
                    </label>
                    <div className="posReative">
                      <input onChange={inputValuePassword('new')}
                        value={password.new} type='text' name='new' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>












                </div>




              </div>





            </div>

          </form>














        </div>



      </div >



    </div >
  )
}

export default _12AccountEmail