import React, { useEffect, useState } from 'react'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import axios from 'axios'
import { ticketPass } from '../protectors/authorize'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import '../componentusers/_99RedSnaq.css'
import AWS from 'aws-sdk';

const _99RedSnaq = (prop) => {
  const navigate = useNavigate()
  const [allUserImg, setAllUserImg] = useState([])

  const getImageUser = () => {
    let bannerimg = [...prop.user?.bannerImage]

    prop.user?.menu.forEach(el => {
      bannerimg.push(el.imgId)

    })


    setAllUserImg(bannerimg)
  }




  const deleteAllData = () => {

    Swal.fire({
      title: 'Do you want to Delete Data?',
      text: `${prop.user.email}`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: '#f56e4f',

    }).then((result) => {
      if (result.isConfirmed) {


        const params = {
          UserPoolId: process.env.REACT_APP_USER_POOL_ID,
          Username: prop.user.email
        };

        AWS.config.region = process.env.REACT_APP_REGION

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
        });

        AWS.config.credentials.get(function (err) {
          if (err) return console.error(err);
          const cognito = new AWS.CognitoIdentityServiceProvider();
          cognito.adminDeleteUser(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred

            ////////////////////////////

            axios
              .post(`${process.env.REACT_APP_API}/user/photos/deleteArray`, { userId: prop.user.userId, imgId: allUserImg }, ticketPass)
              .then((next1) => {
                if (next1.data.success) {

                  axios
                    .post(`${process.env.REACT_APP_API}/user/deleteAllDataAccout`, { userId: prop.user.userId, clientId: prop.user.clientId }, ticketPass)
                    .then((result) => {
                      if (result.data.success) {

                        Swal.fire({
                          title: 'All Data Deleted',
                          toast: true,
                          icon: 'success',
                          showConfirmButton: false,
                          timer: 1000,
                        }).then(next => {
                          navigate('/')

                        })



                      } else {
                        // Swal.fire(result.data.message)
                      }
                    })
                    .catch((err) => {
                      console.log('Server: Connecting...');
                    });


                } else {
                  console.log('DPHT_F');
                }
              })
              .catch((err) => {
                console.log('Server: Connecting...');
              });

            ///////////////////////////


          });

        });

        ////////////////////////////

        axios
          .post(`${process.env.REACT_APP_API}/user/deleteCustomer`, { userId: prop.user.userId }, ticketPass)
          .then((result) => {
            if (result.data.success) {
              // Swal.fire({
              //   title: 'Stripe Deleted',
              //   toast: true,
              //   icon: 'success',
              //   showConfirmButton: false,
              //   timer: 1000,
              // });

            } else {
            }
          })
          .catch((err) => {
          });
      } else if (result.isDenied) {


      }
    })

  }



  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const [listCancelCustomer, setListCancelCustomer] = useState([])
  const listAllSubscription = () => {
    // dispath(showLoading())
    axios
      .get(`${process.env.REACT_APP_API}/user/listAllSubscription`)
      .then((result) => {
        const getReult = result.data.data;
        setListCancelCustomer(getReult)

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // let date = new Date(getReult[0].subscriptions.cancel_at * 1000)
        let date = new Date(getReult[1].subscriptions.cancel_at * 1000)
        let date2 = new Date(Date.now())
        let date3 = getReult[1].subscriptions.cancel_at * 1000
        let date4 = Date.now()
        let date5 = (((Date.now() - '') / 1000) / 60 / 60 / 24)


        let subscriptionEnd = `${monthNames[date2.getMonth()]} ${date2.getDate()} ${date2.getFullYear()} ${date2.getHours()}:${date2.getMinutes()}`
        console.log(subscriptionEnd)
        console.log(date2)
        console.log(date5)


      })
      .catch((err) => {

      });

  }

  useEffect(() => {
    if (prop.user.menu) getImageUser()
  }, [prop.user])


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

                  {listCancelCustomer.map((el, index) => (

                    <div className="CusListGrid" key={index}>
                      <div className="">{el.cutomerID}</div>
                      <div className="">{el.cutomerEmail}</div>

                      <div className="">
                        {`${monthNames[new Date(el.subscriptions.canceled_at * 1000).getMonth()]} ${new Date(el.subscriptions.canceled_at * 1000).getDate()} ${new Date(el.subscriptions.canceled_at * 1000).getFullYear()} ${new Date(el.subscriptions.canceled_at * 1000).getHours()}:${new Date(el.subscriptions.canceled_at * 1000).getMinutes()}`}
                      </div>
                      <div className="">
                        {`${monthNames[new Date(el.subscriptions.cancel_at * 1000).getMonth()]} ${new Date(el.subscriptions.cancel_at * 1000).getDate()} ${new Date(el.subscriptions.cancel_at * 1000).getFullYear()} ${new Date(el.subscriptions.cancel_at * 1000).getHours()}:${new Date(el.subscriptions.cancel_at * 1000).getMinutes()}`}
                      </div>

                      <div className="">{(((Date.now() - el.subscriptions.cancel_at * 1000) / 1000) / 60 / 60 / 24)}</div>
                      <div className="">{el.subscriptions.cancel_at}</div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </form>


        </div>

        {/* ////////////////////////////////////////////////////////////////////////// */}


        <div className="MB_Positon_Bottom_btn_New">


          <div className={`MB_Frid_3Btn`}>


            <button onClick={() => {
              listAllSubscription()
            }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>Sub All</span>
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