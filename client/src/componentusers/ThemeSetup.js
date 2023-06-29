import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import ColorPickker from './ColorPickker';
import { createGlobalStyle } from 'styled-components';


const ThemeSetup = (prop) => {
  // prop.setOnOffTheme
  // prop.restaurantName
  // prop.setRestaurantName
  const { user } = useSelector((state) => state.user);
  const currentRestaurantName = user.restaurant_name

  const [noSetTheme, setNoSetTheme] = useState('')
  const [nameTheme, setNameTheme] = useState('')
  const [navAndFootBar, setNavAndFootBar] = useState({
    nameFontSyle: '', nameFontColor: '', nameFontSize: '',
    navBarColor: '', navBarFontColor: '', navBarLogoColor: ''
  })
  const { nameFontSyle, nameFontColor, nameFontSize, navBarColor, navBarFontColor, navBarLogoColor } = navAndFootBar

  const inputRestaurantName = (e) => {
    prop.setRestaurantName(e.target.value)
  }
  // font-family: 'Merriweather', serif;

  const nameFontStyleFn = (e) => {
    setNavAndFootBar({ ...navAndFootBar, nameFontSyle: e.target.value })
  }

  const setupTheme = (e) => {
    e.preventDefault();


    axios
      .post(
        `${process.env.REACT_APP_API}/user/setupTheme`,
        {
          userId: user.userId,
          restaurentName: prop.restaurantName,
          themeSetup: {
            navAndFootBar: {
              nameFontSyle: nameFontSyle,
              nameFontColor: nameFontColor,
              nameFontSize: nameFontSize,
              navBarColor: navBarColor,
              navBarFontColor: navBarFontColor,
              navBarLogoColor: navBarLogoColor
            },
          }
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.themeMenu;
          Swal.fire({
            title: 'SAVED',
            text: 'Your menu has been saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            iconColor: '#cb2722',
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


  const [onOffColorPicker, setOnoffColorPicker] = useState(false)



  const GlobalStyle = createGlobalStyle`
  .nameFontStyle {
    font-family: ${nameFontSyle}, serif;
    font-weight: 700;
  }

`;
  console.log(navAndFootBar)
  return (
    <div className='themeContainer'>

      <div className='topbarWin'>
        <button
          onClick={() => {
            prop.setOnOffTheme(false);
          }}
          className='boxCancel'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='#fff' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
      <div className='themeTable'>
        <div className='themeLayout'>

          <div className='themeMenuList'>
            <div className=''>Quick Theme</div>
            <div className=''>Navigation/Foot Bar</div>
            <div className=''>Background</div>
            <div className=''>Side Bar</div>
            <div className=''>Bar Code</div>
            <button onClick={setupTheme} className='mainBtn saveBtnColor'>
              OK
            </button>
          </div>
          <GlobalStyle />
          <div className='themeSetupMain'>
            <div className='themeNavFootBar'>
              <div className='inputName'>
                <input onChange={inputRestaurantName} value={prop.restaurantName} type='text' maxLength="20"
                  name='' id='menuName' autoComplete='off' className='nameFontStyle' placeholder={currentRestaurantName} />

              </div>
              <div className='fontStyle'>
                <select onChange={nameFontStyleFn} id='' className=''>
                  < option value='Merriweather' > Merriweather</option>
                  <option value='Urbanist'>Urbanist</option>
                  <option value='Oleo Script Swash Caps'>Oleo Script</option>
                  <option value='Merriweather'>Merriweather</option>
                </select>

              </div>


              <div className='fontColor'>

                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('nameFontColor')
                }} className="colorPickerItem" style={{ 'backgroundColor': `${nameFontColor}` }} ></button>


              </div>
              <div className='fontSize'>
                <button className='pickFontSize'>XXXXX</button>
              </div>


              <div className='navbarColor'>

                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarColor')
                }} className="colorPickerItem" style={{ 'backgroundColor': `${navBarColor}` }} ></button>

              </div>

              <div className='navbarfontColor'>

                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarFontColor')
                }} className="colorPickerItem" style={{ 'backgroundColor': `${navBarFontColor}` }} ></button>

              </div>


              <div className='navbarfontColor'>

                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarLogoColor')
                }} className="colorPickerItem" style={{ 'backgroundColor': `${navBarLogoColor}` }} ></button>

              </div>


            </div>
          </div>

          {/* <div className='themeBackGround'>

            <div className="backGroundColor">
              <button className='pickColor'>XXXXX</button>
            </div>
            <div className="backGroundFontColor">
              <button className='pickColor'>XXXXX</button>
            </div>

          </div>

          <div className='themeSideBar'>Side Bar</div>

          <div className='themeCategory'>Category theme</div> */}
          {onOffColorPicker && <div className="colorPickerSection">
            <ColorPickker

              noSetTheme={noSetTheme}

              nameTheme={nameTheme}

              navAndFootBar={navAndFootBar}
              setNavAndFootBar={setNavAndFootBar}

            />
          </div>}
        </div>
      </div >
    </div >
  );
};

export default ThemeSetup;
{
  /* 
          <div className='themeFootBar'>Foot Bar</div>
          <div className='themeSideBar'>Side Bar</div> */
}
