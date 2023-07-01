import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import ColorPickker from './ColorPickker';
import { createGlobalStyle } from 'styled-components';
import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';

const ThemeSetup = (prop) => {
  // prop.setOnOffTheme
  // prop.restaurantName
  // prop.setRestaurantName
  const { user } = useSelector((state) => state.user);

  // ----------------------------------------------------------------------------------------------
  const [noSetTheme, setNoSetTheme] = useState('')
  const [nameTheme, setNameTheme] = useState('')
  // ----------------------------------------------------------------------------------------------
  const currentRestaurantName = user.restaurant_name
  const inputRestaurantName = (e) => {
    prop.setRestaurantName(e.target.value)
  }
  // 1 ----------------------------------------------------------------------------------------------
  const [navAndFootBar, setNavAndFootBar] = useState({
    nameFontFamily: '', nameFontColor: '', nameFontSize: '',
    navBarColor: '', navBarFontColor: '', navBarLogoColor: ''
  })
  const { nameFontFamily, nameFontColor, nameFontSize, navBarColor, navBarFontColor, navBarLogoColor } = navAndFootBar

  const nameAllFontStyleFn = (name) => (e) => {
    console.log(e.target.value)
    setNavAndFootBar({ ...navAndFootBar, [name]: e.target.value })
  }
  // 2 ----------------------------------------------------------------------------------------------

  const [bodyStyle, setBodyStyle] = useState({
    bodyBgColor: '', bodyFontFamily: '', bodyFonttColor: '',
  })
  const { bodyBgColor, bodyFontFamily, bodyFonttColor } = bodyStyle

  const bodyAllFontStyleFn = (name) => (e) => {
    setBodyStyle({ ...bodyStyle, [name]: e.target.value })
  }
  // 3 ----------------------------------------------------------------------------------------------

  const [themeIconNoBD, setThemeIconNoBD] = useState({
    themeIconRadius: '1.5rem', themeIconColorLine: '', themeIconBG: '', themeIconSolid: 'none'
  })
  const { themeIconRadius, themeIconColorLine, themeIconBG, themeIconSolid } = themeIconNoBD

  const [themeIconColorBorder, setThemeIconColorBorder] = useState('')
  const [extraIcon, setExtraIcon] = useState(false)

  const themeIconClientFn = (radius, colorLine, colorBg, solid, colorBorder) => {
    setThemeIconNoBD({
      themeIconRadius: radius, themeIconColorLine: colorLine, themeIconBG: colorBg, themeIconSolid: solid, themeIconColorBorder: colorBorder
    })
    setExtraIcon(false)
  }
  // 4 ----------------------------------------------------------------------------------------------
  const [categoryMotion, setCategoryMotion] = useState({
    categoryFontColor: '',
    categoryBoxClass: '', categoryBoxColor: '',
    categorySpanClass: '', categorySpanColor: '',
    categoryActiveClass: ''

  })
  const { categoryFontColor, categoryBoxClass, categoryBoxColor, categorySpanClass, categorySpanColor, categoryActiveClass } = categoryMotion

  const [chooseCatTheme, seatChooseCatTheme] = useState('')

  const categoryMotionFn = (fontColor, boxClass, boxColor, sapnClass, spanColor, avtiveClass) => {
    setCategoryMotion({
      categoryFontColor: fontColor,
      categoryBoxClass: boxClass, categoryBoxColor: boxColor,
      categorySpanClass: sapnClass, categorySpanColor: spanColor,
      categoryActiveClass: avtiveClass
    })

  }


  // console.log(categoryMotion)
  // ----------------------------------------------------------------------------------------------
  const setupTheme = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API}/user/setupTheme`,
        {
          userId: user.userId,
          clientId: user.clientId,
          restaurantName: prop.restaurantName,
          themeSetup: {
            navAndFootBar: navAndFootBar,
            body: bodyStyle,
            sideBar: {
              extraIcon: extraIcon,
              themeIconRadius: themeIconRadius,
              themeIconColorLine: themeIconColorLine,
              themeIconBG: themeIconBG,
              themeIconSolid: themeIconSolid,
              themeIconColorBorder: themeIconColorBorder,
            },
            categoryMotion: categoryMotion
          }
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          // const getReult = result.data.userTheme;
          // prop.setRestaurantName(getReult.restaurantName)
          // setNavAndFootBar(getReult.themeSetup.navAndFootBar)
          // setBodyStyle(getReult.themeSetup.body)


          // setThemeIconNoBD({
          //   themeIconRadius: themeIconRadius, themeIconColorLine: themeIconColorLine,
          //   themeIconBG:themeIconBG, themeIconSolid:themeIconSolid
          // })
          // setThemeIconColorBorder(getReult.themeIconColorBorder)
          // setExtraIcon(getReult.extraIcon)

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

  const getTheme = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getTheme`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userTheme;
          // console.log(getReult)
          prop.setRestaurantName(getReult.restaurantName)
          setNavAndFootBar(getReult.themeSetup.navAndFootBar)
          setBodyStyle(getReult.themeSetup.body)
          setCategoryMotion(getReult.themeSetup.categoryMotion)

          const getSideBar = getReult.themeSetup.sideBar;
          // console.log(getSideBar)
          setThemeIconNoBD({
            themeIconRadius: getSideBar.themeIconRadius, themeIconColorLine: getSideBar.themeIconColorLine,
            themeIconBG: getSideBar.themeIconBG, themeIconSolid: getSideBar.themeIconSolid
          })
          setThemeIconColorBorder(getSideBar.themeIconColorBorder)
          setExtraIcon(getSideBar.extraIcon)



        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        // console.log("Can't not connect the server", err);

        // Swal.fire("Can't not connect the server")
      });
  };





  // useEffect(() => {
  //   if (prop.navTheme2ThemeSetUp) {
  //     getTheme();
  //   }
  // }, [prop.navTheme2ThemeSetUp]);

  useEffect(() => {

    getTheme();

  }, [user]);



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

          <div className='themeSetupMain'>
            <i className="x">1 -----------------------------------------------</i>
            <div className='themeNavFootBar'>


              <i className="x">restaurantName Section</i>
              <div className='inputName'>
                <input onChange={inputRestaurantName} value={prop.restaurantName} type='text' maxLength="20"
                  name='' id='menuName' autoComplete='off' className='' placeholder={currentRestaurantName}
                  style={{
                    'fontFamily': `${nameFontFamily}, serif`,
                    'color': `${nameFontColor}`,
                    'fontSize': `${nameFontSize}`,
                    'fontWeight': '700'
                  }}


                />

              </div>
              <i className="x">nameFontFamily Section</i>
              <div className='fontStyle'>
                fontStyle
                <select onChange={nameAllFontStyleFn('nameFontFamily')} id='' className=''>
                  < option value='Merriweather' > Merriweather</option>
                  <option value='Urbanist'>Urbanist</option>
                  <option value='Oleo Script Swash Caps'>Oleo Script</option>
                  <option value='Merriweather'>Merriweather</option>
                </select>
              </div>

              <i className="x">nameFontColor Section</i>
              <div className='fontColor'>
                FontColor
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('nameFontColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${nameFontColor}` }} ></button>

              </div>

              <i className="x">nameFontSize Section</i>
              <div className='pickFontSize'>
                FontSize
                <select onChange={nameAllFontStyleFn('nameFontSize')} id='' className=''>
                  < option value='1rem' > Extra-Small</option>
                  <option value='1.2rem'>Small</option>
                  <option value='1.6rem'>Medium</option>
                  <option value='1.8rem'>Large</option>
                  <option value='2.0rem'>Extra-Large</option>

                </select>

              </div>

              <i className="x">navBarColor Section</i>
              <div className='navbarColor'>
                NavbarColor
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${navBarColor}` }} ></button>

              </div>

              <i className="x">navBarFontColor Section</i>
              <div className='navbarfontColor'>
                NavbarfontColor
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarFontColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${navBarFontColor}` }} ></button>

              </div>


              <i className="x">navBarLogoColor Section</i>
              <div className='navbarfontColor'>
                NavBarLogoColor
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(1)
                  setNameTheme('navBarLogoColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${navBarLogoColor}` }} ></button>

              </div>


            </div>

            <i className="x">2 -----------------------------------------------</i>
            <div className='themeBody'>

              <div className="bodyBGColor">
                BodyBGColor
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(2)
                  setNameTheme('bodyBgColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${bodyBgColor}` }} >
                </button>

              </div>
              <div className="bodyFontStyle">
                BodyfontStyle
                <select onChange={bodyAllFontStyleFn('bodyFontFamily')} id='' className=''>
                  < option value='Merriweather' > Merriweather</option>
                  <option value='Urbanist'>Urbanist</option>
                  <option value='Oleo Script Swash Caps'>Oleo Script</option>
                  <option value='Merriweather'>Merriweather</option>
                </select>
              </div>
              <div className="bodyFontColr">
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(2)
                  setNameTheme('bodyFonttColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${bodyFonttColor}` }} >
                </button>
              </div>

            </div>

            <i className="x">3 -----------------------------------------------</i>
            <div className='themeSideBar'>

              <div className="">
                <input onChange={() => themeIconClientFn('1.5rem', themeIconColorLine, themeIconBG, 'none')} type="radio" name="selectIconSideBar" id="circleNoborder" />
                <label htmlFor='circleNoborder' className="circleNoborder">circleNoborder</label>

              </div>

              <div className="">
                <input onChange={() => {
                  themeIconClientFn('1.5rem', themeIconColorLine, themeIconBG, 'solid')

                }} type="radio" name="selectIconSideBar" id="circleWithBorder" />
                <label htmlFor='circleWithBorder' className="circleWithBorder">circleWithBorder</label>
                line
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(3)
                  setNameTheme('themeIconColorLine')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${themeIconColorLine}` }} >
                </button>
                BG
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(3)
                  setNameTheme('themeIconBG')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${themeIconBG}` }} >
                </button>
                border
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(31)
                  setNameTheme('themeIconColorBorder')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${themeIconColorBorder}` }} >
                </button>


              </div>
              <div className="">
                <input onChange={() => themeIconClientFn('1rem', themeIconColorLine, themeIconBG, 'none', '')} type="radio" name="selectIconSideBar" id="radiusNoborder" />
                <label htmlFor='radiusNoborder' className="radiusNoborder">radiusNoborder</label>
              </div>
              <div className="">
                <input onChange={() => themeIconClientFn('1rem', themeIconColorLine, themeIconBG, 'solid', themeIconColorBorder)} type="radio" name="selectIconSideBar" id="radiusWithborder" />
                <label htmlFor='radiusWithborder' className="radiusWithborder">radiusWithborder</label>
              </div>
              <div className="">
                <input onChange={() => themeIconClientFn('.2rem', themeIconColorLine, themeIconBG, 'none', '')} type="radio" name="selectIconSideBar" id="regtangNoBorder" />
                <label htmlFor='regtangNoBorder' className="regtangNoBorder">regtangNoBorder</label>
              </div>
              <div className="">
                <input onChange={() => themeIconClientFn('.2rem', themeIconColorLine, themeIconBG, 'solid', themeIconColorBorder)} type="radio" name="selectIconSideBar" id="regtangWithBorder" />
                <label htmlFor='regtangWithBorder' className="regtangWithBorder">regtangWithBorder</label>
              </div>
              <div className="">
                <input onChange={() => {
                  setExtraIcon(true)

                }} type="radio" name="selectIconSideBar" id="NoBGExtraSize" />
                <label htmlFor='NoBGExtraSize' className="NoBGExtraSize">NoBGExtraSize</label>
              </div>



              <a className={`circle-iconButton-user ${extraIcon && 'extraIcon-user'}`}
                style={{
                  'borderRadius': `${themeIconRadius}`,
                  'backgroundColor': `${themeIconBG}`,
                  'border': `${themeIconSolid} 2px ${themeIconColorBorder}`,
                }}>
                <svg className={` circle-iconSize-user ${extraIcon && 'extraIcon-user'}`}
                  style={{ 'fill': `${themeIconColorLine}` }}>
                  <use xlinkHref={`${icon1}#appetizer`} />
                </svg>
              </a>




            </div>

            <i className="x">4 -----------------------------------------------</i>

            <div className='themeCategory'>
              <div className="">
                <label htmlFor='themeCatFontColor' className="radiusNoborder">themeCatFontColor</label>
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(4)
                  setNameTheme('categoryFontColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${categoryFontColor}` }} >
                </button>
              </div>

              <div className="">
                <input
                  onChange={() => {
                    categoryMotionFn(categoryFontColor, 'category-Custom-BarLine', categoryBoxColor, 'category-Custom-Line', categorySpanColor, 'category-Custom-Line-Active')
                    seatChooseCatTheme('boxLine')
                  }}
                  type="radio" name="themeCategory" id="categoryClass-BoxLine" />
                <label htmlFor='categoryClass-BoxLine' className="radiusNoborder">categoryClass-Box</label>
              </div>

              <div className="">
                <input
                  onChange={() => {
                    categoryMotionFn(categoryFontColor, 'category-Custom-CircleSimple ', categoryBoxColor, 'category-Custom-Circle', categorySpanColor, 'category-Custom-Circle-Active')
                    seatChooseCatTheme('circle')
                  }
                  }
                  type="radio" value={'circle'} name="themeCategory" id="categoryClass-Circle" />
                <label htmlFor='categoryClass-Circle' className="radiusNoborder">categoryClass-Circle</label>
              </div>



              {chooseCatTheme === 'boxLine' && <div className="">
                <label htmlFor='catColorBox' className="radiusNoborder">Box</label>
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(4)
                  setNameTheme('categoryBoxColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${categoryBoxColor}` }} >
                </button>
              </div>}
              <div className="">
                <label htmlFor='catColorSpan' className="radiusNoborder">Cilie</label>
                <button onClick={() => {
                  setOnoffColorPicker(true)
                  setNoSetTheme(4)
                  setNameTheme('categorySpanColor')
                }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${categorySpanColor}` }} >
                </button>
              </div>
              <div className={categoryBoxClass}><span className={''}>Starter</span>
                <span className={`${categorySpanClass} ${true && categoryActiveClass}`}></span>

              </div>

            </div>
            {/* categoryFontColor: '',
            categoryBoxClass: '', categoryBoxColor: '',
            categorySpanClass: '', categorySpanColor: '',
            categoryActiveClass: '' */}


          </div>





          {onOffColorPicker && <div className="colorPickerSection">
            <ColorPickker
              noSetTheme={noSetTheme}
              nameTheme={nameTheme}

              navAndFootBar={navAndFootBar}
              setNavAndFootBar={setNavAndFootBar}

              bodyStyle={bodyStyle}
              setBodyStyle={setBodyStyle}

              themeIconNoBD={themeIconNoBD}
              setThemeIconNoBD={setThemeIconNoBD}
              setThemeIconColorBorder={setThemeIconColorBorder}

              categoryMotion={categoryMotion}
              setCategoryMotion={setCategoryMotion}

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
