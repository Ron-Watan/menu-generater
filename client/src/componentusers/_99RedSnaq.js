import React, { useEffect, useState } from 'react'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import axios from 'axios'
import { ticketPass } from '../protectors/authorize'
import Swal from 'sweetalert2'
import UserPool from "../UserPool"
import { CognitoUser } from 'amazon-cognito-identity-js'
import { useNavigate } from 'react-router-dom'
import AWS from 'aws-sdk';
const _99RedSnaq = (prop) => {
  const navigate = useNavigate()
  const [allUserImg, setAllUserImg] = useState([])


  const getImageUser = () => {
    let bannerimg = [...prop.user?.bannerImage]

    prop.user?.menu.forEach(el => {
      bannerimg.push(el.imgId)
      // el.forEach(el2 => {
      //   console.log(el2)
      // })
      // bannerimg.push(el.imgId)
    })


    setAllUserImg(bannerimg)
  }


  useEffect(() => {
    if (prop.user.menu) getImageUser()

  }, [prop.user])


  const deleteAllDataAccout = () => {

    axios
      .post(`${process.env.REACT_APP_API}/user/deleteAllDataAccout`, { userId: prop.user.userId, clientId: prop.user.clientId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
        } else {
          // Swal.fire(result.data.message)
        }
      })
      .catch((err) => {
        console.log('Server: Connecting...');
      });

  }


  const deleteAllData = () => {

    // axios
    //   .post(`${process.env.REACT_APP_API}/user/photos/deleteArray`, { userId: prop.user.userId, imgId: allUserImg }, ticketPass)
    //   .then((result) => {
    //     if (result.data.success) {


    //       axios
    //         .post(`${process.env.REACT_APP_API}/user/deleteAllDataAccout`, { userId: prop.user.userId, clientId: prop.user.clientId }, ticketPass)
    //         .then((result) => {
    //           if (result.data.success) {

    //             Swal.fire({
    //               title: 'All Data Deleted',
    //               toast: true,
    //               icon: 'success',
    //               showConfirmButton: false,
    //               timer: 1000,
    //             }).then(next => {
    //               navigate('/')
    //             })


    //           } else {
    //             // Swal.fire(result.data.message)
    //           }
    //         })
    //         .catch((err) => {
    //           console.log('Server: Connecting...');
    //         });


    //     } else {


    //     }
    //   })
    //   .catch((err) => {
    //     console.log('Server: Connecting...');
    //   });

    AWS.config.apiVersions = {
      cognitoidentityserviceprovider: '2016-04-18',
      // other service API versions
    };

    // console.log(prop.user.email)
    const userData = new CognitoUser({
      Username: prop.user.email,
      Pool: UserPool
    });

    var params = {
      UserPoolId: 'us-west-1_lmMYcjfH6', /* required */
      Username: prop.user.email /* required */
    };


    AWS.config.region = 'us-west-1'

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-west-1:1cd000f1-2843-4085-b6ad-f059f5c4164c',
    });

    AWS.config.credentials.get(function (err) {
      if (err) return console.error(err);
      console.log(AWS.config.credentials);

      // var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

      // cognitoidentityserviceprovider.adminDeleteUser(params, function (err, data) {
      //   if (err) console.log(err, err.stack); // an error occurred
      //   else console.log(data);           // successful response
      // });





    });





    // const user = UserPool.getCurrentUser()

    // // user.signOut()
    // if (user) {
    //   user.signOut()

    // }

  }





  return (
    <div className="" >

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {
              prop.setOnOffRedSnaq_MB(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className="MB_title">Ron Red Snaq</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">
          </button>
        </div>





      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full  zindexUnderTop" >

        <div className={`'MB_InScroll_fullNew'} MB_Make_PadingForm`} >



          <form className={` MB_formMenu`}>

            <div className='MB_layoutManu '>
              <div className={`MB_layoutManu0 MB_light_Color`}>


                <div className='MB_layoutManu1'>







                </div>




              </div>



              {/* <div className="">These infomations will be display on bottom part of menu only.</div> */}


            </div>

          </form>




        </div>

        {/* ////////////////////////////////////////////////////////////////////////// */}


        <div className="MB_Positon_Bottom_btn_New">




          <div className={`MB_Frid_3Btn`}>






            <button onClick={() => {
              ''
            }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>-----</span>
            </button>
          </div>
          <button onClick={() => {
            deleteAllData()
          }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
            <span>Delete All</span>
          </button>




        </div>

      </div >



    </div >
  )
}

export default _99RedSnaq