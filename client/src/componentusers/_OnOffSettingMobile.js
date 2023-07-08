import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setUser } from '../redux/userSlice';
import { ticketPass } from '../protectors/authorize';





const _OnOffSettingMobile = () => {

  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [onOffSetting, setOnOffSetting] = useState({

    banner:true,sideBar: true, filter: true, vetgeterian: true, vegan: true, gluten_free: true, halal: true,
    footbar: true, favoritHeart: true, feedBack: true
  })


  const saveOnOffSetting = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveOnOffSetting`,
        {
          userId: user.userId,
          onOffSetting: onOffSetting
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userSetting;

          dispath(setUser(getReult));


          Swal.fire({
            title: 'SAVED',
            text: 'Your menu has been saved',
            toast: true,
            icon: 'success',
            // confirmButtonText: 'SAVED',
            showConfirmButton: false,
            // width: '16rem',
            // height: '5rem',
            iconColor: '#cb2722',
            // confirmButtonColor: '#cb2722',
            timer: 2000,
          });
        } else {
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };

  return (
    <div>
      <div onClick={saveOnOffSetting} className="">ppp</div>




    </div>
  )
}

export default _OnOffSettingMobile