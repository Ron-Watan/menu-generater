import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../style/editMenuName.css';
import { hideLoading, showLoading } from '../redux/alertSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import { setUser } from '../redux/userSlice';

const EditMenuName = (prop) => {

  const { user } = useSelector((state) => state.user);
  const dispath = useDispatch();
  // const [menuTimeName, setMenuTimeName] = useState(''); // timeSwitcher()

  const currentMenuName = 'menu_' + prop.menuTime
  const inputMenuTimeName = (e) => {
    prop.setMenuName({ ...prop.menuName, [currentMenuName]: e.target.value })
  }

  const saveNameMenu = () => {
    dispath(showLoading());
    axios
      .post(`${process.env.REACT_APP_API}/user/saveNameMenu`,
        {
          userId: user.userId,
          clientId:user.clientId,
          menuName: prop.menuName
        }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userMenu;
          console.log(getReult)
          dispath(setUser(getReult))
          prop.setMenuName(getReult.menuName)
          // Swal.fire(result.data.message)
          // setMenuName(result.data.nameMenu)
          // actionDelay();
          // setMenuTimeName('')

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
          dispath(hideLoading());
        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading());
        }
      })
      .catch((err) => {
        dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };
  /////////////////////////////////////////////////////


  const cancelEdit = () => {
    const menuNameEl = document.querySelector('#menuName')
    menuNameEl.value = user[currentMenuName]

  }


  ///////////////////////////////////


  return (
    <div className="menuNameBox" name='menuNameBox'>
      {/* ${activeInput ? 'showMe' : 'hiddenMe'}  */}
      <div className={`flexNameMenu`}>
        <input onChange={inputMenuTimeName} value={prop.menuName[currentMenuName]} type='text' maxLength="20"
          disabled={!prop.activeInputEn ? true : false} name='' id='menuName' autoComplete='off' className='inputMenuName' placeholder='' />
        <div className={`displayFlex ${prop.activeInputEn ? 'showMe' : 'hiddenMe'}`}
          name='menuNameBox'>
          <button onClick={() => {
            saveNameMenu()
            prop.setActiveInputEditName(false)

          }
          } name='menuNameBox'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eee" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>

          <button onClick={() => {
            cancelEdit()
            prop.setActiveInputEditName(false)

          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eee" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


        <label htmlFor='menuName' className={`btnAbs ${!prop.activeInputEn ? 'showMe' : 'hiddenMe'}`} onClick={() => {
          prop.setActiveInputEditName(true)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666" className="w6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </label>

      </div>




      {/* ${!true ? 'showMe' : 'hiddenMe'} */}
      {/* <div className={`flexNameMenuReal `}> */}
      {/* <div className='text'>&nbsp;{prop.menuName[currentMenuName]}</div> */}
      {/* <button className='btnAbs' onClick={() => {
          setactiveInput(true)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eee" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button> */}
      {/* </div> */}

    </div>
  )
}

export default EditMenuName