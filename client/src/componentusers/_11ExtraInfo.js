import axios from 'axios';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';

const _11ExtraInfo = (prop) => {

  const { user } = useSelector((state) => state.user);
  const dispath = useDispatch();
  const currentRestaurantName = user?.restaurant_name
  const inputRestaurantName = (e) => {
    prop.setRestaurantName(e.target.value)
  }

  const inputExtraValue = (name) => (even) => {

    prop.setExtraInfo({ ...prop.extraInfo, [name]: even.target.value });

  };

  // ----------------------------------------------------------------------------------------------
  const saveExtraInfo = (e) => {
    dispath(showLoading())

    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveExtraInfo`,
        {
          userId: user.userId,
          clientId: user.clientId,
          restaurantName: prop.restaurantName,
          extraInfo: prop.extraInfo
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {

          const getReult = result.data.userTheme;

          Swal.fire({
            title: 'Saved',
            // text: 'Your menu has been saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(result => {
            dispath(hideLoading())
          })
        } else {


        }
      })
      .catch((err) => {
        dispath(hideLoading());
        Swal.fire("Can't not connect the server");
      });
  };

  return (
    <div className="" >

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {
              prop.setOnOffExtra_MB(false)
              prop.setTurnOnSection(false)

            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className="MB_title">Contact Info.</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">
          </button>
        </div>





      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full  zindexUnderTop" >

        <div className={`${prop.turnOnSection === true && 'MB_InScroll_fullNew'} MB_Make_PadingForm`} >



          <form className={` MB_formMenu`}>

            <div className='MB_layoutManu '>
              <div className={`MB_layoutManu0 MB_light_Color`}>


                <div className='MB_layoutManu1'>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Restaurant
                    </label>
                    <div className="posReative">
                      <input onChange={inputRestaurantName} value={prop.restaurantName} type='text' name='restaurantName' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Address 1
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('address_1')}
                        value={prop.extraInfo.address_1} type='text' name='address_1' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Address 2
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('address_2')}
                        value={prop.extraInfo.address_2} type='text' name='address_2' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Phone No.
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('phone')}
                        value={prop.extraInfo.phone} type='text' name='phone' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Email
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('email')}
                        value={prop.extraInfo.email} type='text' name='email' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>


                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Website
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('website')}
                        value={prop.extraInfo.website} type='text' name='website' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Instagram
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('instagram')}
                        value={prop.extraInfo.instagram} type='text' name='instagram' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Facebook
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('facebook')}
                        value={prop.extraInfo.facebook} type='text' name='facebook' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      Youtube
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('youtube')}
                        value={prop.extraInfo.youtube} type='text' name='youtube' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice width_info'>
                      TikTok
                    </label>
                    <div className="posReative">
                      <input onChange={inputExtraValue('tiktok')}
                        value={prop.extraInfo.tiktok} type='text' name='tiktok' autoComplete='off'
                        className='MB_EditName_Input inFoClient_Input MB_White' placeholder='' />
                    </div>
                  </div>




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
              saveExtraInfo()
            }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>SAVE</span>
            </button>






          </div>





        </div>

      </div >



    </div >
  )
}

export default _11ExtraInfo