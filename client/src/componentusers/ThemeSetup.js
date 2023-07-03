import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import ColorPickker from './ColorPickker';
import { createGlobalStyle } from 'styled-components';
import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';
import { NavbarBg } from './ThemePresent';

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
    navBarColor: '', navBarFontColor: ''
  })
  const { nameFontFamily, nameFontColor, nameFontSize, navBarColor, navBarFontColor } = navAndFootBar

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


  const [themeTab, setThemeTab] = useState('quick')

  useEffect(() => {

    getTheme();

  }, [user]);

  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------
  return (
    <div className='themeContainer'>
      <NavbarBg restaurantName={prop.restaurantName} nameFontFamily={nameFontFamily} nameFontColor={nameFontColor} nameFontSize={nameFontSize} navBarColor={navBarColor} navBarFontColor={navBarFontColor}
        bodyBgColor={bodyBgColor}
        bodyFontFamily={bodyFontFamily}
        bodyFonttColor={bodyFonttColor}
        themeIconRadius={themeIconRadius}
        themeIconColorLine={themeIconColorLine}
        themeIconBG={themeIconBG}
        themeIconSolid={themeIconSolid}
        themeIconColorBorder={themeIconColorBorder}
        extraIcon={extraIcon}

        categoryFontColor={categoryFontColor}
        categoryBoxClass={categoryBoxClass}
        categoryBoxColor={categoryBoxColor}
        categorySpanClass={categorySpanClass}
        categorySpanColor={categorySpanColor}
        categoryActiveClass={categoryActiveClass}



      />

      {/* <div className='topbarWin'>
        <button
          onClick={() => {
            prop.setOnOffTheme(false);
          }}
          className='boxCancel'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='#fff' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div> */}
      <div className="splitThemeGrid">
        <div className='themeTable'>
          <div className='themeLayout'>

            <div className='themeMenuList'>
              <div onClick={() => setThemeTab('quick')} className='menuListBtn'>Quick Theme</div>
              <div onClick={() => setThemeTab('navFoot')} className='menuListBtn'>Navigation/Foot Bar</div>
              {/* <div onClick={() => setThemeTab('body')} className='menuListBtn'>Background</div> */}
              <div onClick={() => setThemeTab('sidbar')} className='menuListBtn'>Side Bar</div>
              <div onClick={() => setThemeTab('accord')} className='menuListBtn'>Accord</div>
              {/* <div className='menuListBtn'>QRcode</div> */}


            </div>

            <div className='themeSetupMain'>



              <i className="x">0 -----------------------------------------------</i>
              {themeTab === 'quick' && <div className='themeQuick'>



              </div>}

              <i className="x">1 -----------------------------------------------</i>
              {themeTab === 'navFoot' && <div className='themeNavFootBar'>




                <div className="TC-name">Restaurant Name</div>
                <i className="x">restaurantName Section</i>
                <div className=''>
                  <input onChange={inputRestaurantName} value={prop.restaurantName} type='text' maxLength="20"
                    name='' id='menuName' autoComplete='off' className='presentInput' placeholder={currentRestaurantName}
                    style={{
                      'fontFamily': `${'Lato'}, serif`,
                      'color': `${'black'}`,
                      'fontSize': `${'1.2rem'}`,
                      'fontWeight': '700'
                    }}
                  />
                </div>

                <div className="setThemesec">
                  <div className="setThemeFlex">

                    <i className="x">nameFontColor Section</i>
                    <div className='fontColor labelColor'>
                      <button onClick={() => {
                        setOnoffColorPicker(true)
                        setNoSetTheme(1)
                        setNameTheme('nameFontColor')
                      }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${nameFontColor}` }} id='FontColor1'></button>
                      <label htmlFor="FontColor1">Font</label>
                    </div>

                    <i className="x">nameFontFamily Section</i>
                    <div className='fontStyle labelColor'>
                      <select onChange={nameAllFontStyleFn('nameFontFamily')} id='fontStyle1' className='labelFontR'>
                        < option value='Merriweather' > Merriweather</option>
                        <option value='Urbanist'>Urbanist</option>
                        <option value='Oleo Script Swash Caps'>Oleo Script</option>
                        <option value='Merriweather'>Merriweather</option>
                      </select>
                      <label htmlFor="fontStyle1">Style</label>

                    </div>

                    <i className="x">nameFontSize Section</i>
                    <div className='fontStyle labelColor'>
                      <select onChange={nameAllFontStyleFn('nameFontSize')} id='FontSize1' className='labelFontR'>
                        < option value='1rem' > Extra-Small</option>
                        <option value='1.2rem'>Small</option>
                        <option value='1.6rem'>Medium</option>
                        <option value='1.8rem'>Large</option>
                        <option value='2.0rem'>Extra-Large</option>
                      </select>
                      <label htmlFor="FontSize1">Font-Size</label>


                    </div>

                  </div>
                </div>



                <div className="TC-name mg-t-1">Navigation Bar</div>
                <i className="x">navBarColor Section</i>

                <div className="setThemeFlex">
                  <div className='navbarColor labelColor'>

                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(1)
                      setNameTheme('navBarColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${navBarColor}` }} id='NavbarColor' ></button>
                    <label htmlFor="NavbarColor">Background</label>

                  </div>
                  <i className="x">navBarFontColor Section</i>
                  <div className='navbarfontColor labelColor'>
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(1)
                      setNameTheme('navBarFontColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${navBarFontColor}` }} id='navBarFontColor'></button>
                    <label htmlFor="navBarFontColor">Font</label>

                  </div>

                </div>
                {/* <i className="x">navBarLogoColor Section</i>
                  <div className='navbarfontColor'>
                    NavBarLogoColor
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(1)
                      setNameTheme('navBarLogoColor')
                    }} className="colorPickerItem borderPickC" style={{ 'backgroundColor': `${navBarLogoColor}` }} ></button>
                  </div>
                   */}

                <div className="TC-name">Body</div>

                <div className='setThemeFlex'>

                  <div className="bodyBGColor labelColor">

                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(2)
                      setNameTheme('bodyBgColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${bodyBgColor}` }} id='bodyBgColor'>
                    </button>
                    <label htmlFor="bodyBgColor">Background</label>

                  </div>
                  <div className="bodyFontColr labelColor">
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(2)
                      setNameTheme('bodyFonttColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${bodyFonttColor}` }} id='bodyFonttColor'>
                    </button>
                    <label htmlFor="bodyFonttColor">Font</label>

                  </div>
                  <div className="bodyFontStyle labelColor" >

                    <select onChange={bodyAllFontStyleFn('bodyFontFamily')} id='BodyfontStyle' className='labelFontR'>
                      < option value='Merriweather' > Merriweather</option>
                      <option value='Urbanist'>Urbanist</option>
                      <option value='Oleo Script Swash Caps'>Oleo Script</option>
                      <option value='Merriweather'>Merriweather</option>
                    </select>
                    <label htmlFor="BodyfontStyle">Style</label>

                  </div>
                </div>






              </div>}


              <i className="x">3 -----------------------------------------------</i>

              {themeTab === 'sidbar' && <div className='themeNavFootBar'>
                <div className="TC-name">Navigation Bar</div>

                <div className='setThemeGrid'>
                  <div className="labelFlexCol">

                    <label htmlFor='circleNoborder' className={`circle-iconButton-user`}
                      style={{
                        'borderRadius': `1.5rem`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${'none'} 2px ${''}`,
                      }}>
                      <svg className={` circle-iconSize-user`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>

                    <input onChange={() => themeIconClientFn('1.5rem', themeIconColorLine, themeIconBG, 'none')} type="radio" name="selectIconSideBar" id="circleNoborder" />
                  </div>
                  <div className="labelFlexCol">

                    <label htmlFor='radiusNoborder' className={`circle-iconButton-user }`}
                      style={{
                        'borderRadius': `${'1rem'}`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${'none'} 2px ${''}`,
                      }}>
                      <svg className={` circle-iconSize-user }`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => themeIconClientFn('1rem', themeIconColorLine, themeIconBG, 'none', '')} type="radio" name="selectIconSideBar" id="radiusNoborder" />
                  </div>
                  <div className="labelFlexCol">
                    <label htmlFor='regtangNoBorder' className={`circle-iconButton-user }`}
                      style={{
                        'borderRadius': `${'.2rem'}`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${'none'} 2px ${''}`,
                      }}>
                      <svg className={` circle-iconSize-user }`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => themeIconClientFn('.2rem', themeIconColorLine, themeIconBG, 'none', '')} type="radio" name="selectIconSideBar" id="regtangNoBorder" />
                  </div>
                </div>
                {/* <div className="mg-t-1"></div> */}

                <div className='setThemeGrid'>

                  <div className="labelFlexCol">
                    <label htmlFor='circleWithBorder' className={`circle-iconButton-user }`}
                      style={{
                        'borderRadius': `${'1.5rem'}`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${'solid'} 2px ${'#000'}`,
                      }}>
                      <svg className={` circle-iconSize-user }`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => {
                      themeIconClientFn('1.5rem', themeIconColorLine, themeIconBG, 'solid')

                    }} type="radio" name="selectIconSideBar" id="circleWithBorder" />

                  </div>

                  <div className="labelFlexCol">
                    <label htmlFor='radiusWithborder' className={`circle-iconButton-user }`}
                      style={{
                        'borderRadius': `${'1rem'}`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${'solid'} 2px ${'#000'}`,
                      }}>
                      <svg className={` circle-iconSize-user }`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => themeIconClientFn('1rem', themeIconColorLine, themeIconBG, 'solid', themeIconColorBorder)} type="radio" name="selectIconSideBar" id="radiusWithborder" />
                  </div>

                  <div className="labelFlexCol">
                    <label htmlFor='regtangWithBorder' className={`circle-iconButton-user }`}
                      style={{
                        'borderRadius': `${'.2rem'}`,
                        'backgroundColor': `${'#fff'}`,
                        'border': `${themeIconSolid} 2px ${'#000'}`,
                      }}>
                      <svg className={` circle-iconSize-user }`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => themeIconClientFn('.2rem', themeIconColorLine, themeIconBG, 'solid', themeIconColorBorder)} type="radio" name="selectIconSideBar" id="regtangWithBorder" />
                  </div>
                </div>

                <div className='setThemeGrid'>
                  <div className="labelFlexCol">
                    <label htmlFor='NoBGExtraSize' className={`circle-iconButton-user extraIcon-user PSextraS`}
                      style={{
                        'borderRadius': `${''}`,
                        'backgroundColor': `${'transparent'}`,
                        'border': `${'none'} 2px ${''}`,
                      }}>
                      <svg className={` circle-iconSize-user extraIcon-user`}
                        style={{ 'fill': `${'#000'}` }}>
                        <use xlinkHref={`${icon1}#appetizer`} />
                      </svg>
                    </label>
                    <input onChange={() => {
                      setExtraIcon(true)
                    }} type="radio" name="selectIconSideBar" id="NoBGExtraSize" />

                  </div>
                </div>
                <div className="TC-name mg-t-1">Navigation Bar</div>

                <div className="setThemeFlex">
                  <div className="bodyFontColr labelColor">

                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(3)
                      setNameTheme('themeIconColorLine')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconColorLine}` }} id='themeIconColorLine' >
                    </button>
                    <label htmlFor="themeIconColorLine">Line color</label>

                  </div>
                  <div className="bodyFontColr labelColor">
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(3)
                      setNameTheme('themeIconBG')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconBG}` }} id='themeIconBG' >
                    </button>
                    <label htmlFor="themeIconBG">Background color</label>

                  </div>
                  <div className="bodyFontColr labelColor">
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(31)
                      setNameTheme('themeIconColorBorder')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconColorBorder}` }} id='themeIconColorBorder'>
                    </button>
                    <label htmlFor="themeIconColorBorder">Border color</label>

                  </div>

                </div>








                {/* <a className={`circle-iconButton-user ${extraIcon && 'extraIcon-user'}`}
                  style={{
                    'borderRadius': `${themeIconRadius}`,
                    'backgroundColor': `${themeIconBG}`,
                    'border': `${themeIconSolid} 2px ${themeIconColorBorder}`,
                  }}>
                  <svg className={` circle-iconSize-user ${extraIcon && 'extraIcon-user'}`}
                    style={{ 'fill': `${themeIconColorLine}` }}>
                    <use xlinkHref={`${icon1}#appetizer`} />
                  </svg>
                </a> */}




              </div>}

              <i className="x">4 -----------------------------------------------</i>

              {themeTab === 'accord' && <div className='themeNavFootBar'>
                <div className="TC-name">themeCategory</div>

                <div className='setThemeGrid setThemeGrid__Acc'>

                  <div className=" labelFlexCol-Acc">

                    <label htmlFor='categoryClass-BoxLine' className={'category-PS-BarLine '} style={{ 'backgroundColor': `${'#444'}`, 'transition': 'all 0s' }}>
                      <span className={`category-Custom-Title`} style={{ 'color': `${prop.categoryFontColor}` }}> {''}</span>
                      <span className={`${'category-Custom-Line'} ${'category-Custom-Line-Active'}`} style={{ 'backgroundColor': `${'#fff'}`, 'transition': 'all 0s' }}></span>
                    </label>
                    <input className=" grid-self-ct"
                      onChange={() => {
                        categoryMotionFn(categoryFontColor, 'category-Custom-BarLine', categoryBoxColor, 'category-Custom-Line', categorySpanColor, 'category-Custom-Line-Active')
                        seatChooseCatTheme('boxLine')
                      }}
                      type="radio" name="themeCategory" id="categoryClass-BoxLine" />
                  </div>

                  <div className=" labelFlexCol-Acc">

                    {/* <label htmlFor='categoryClass-Circle' className={'category-PS-CircleSimple'} style={{ 'transition': 'all 0s' }}>
                      <span className={`${'category-Custom-Circle'} ${'category-Custom-Circle-Active'}`} style={{ 'backgroundColor': `${'#444'}`, 'transition': 'all 0s' }}></span>
                    </label> */}
                    <label htmlFor='categoryClass-Circle' className='PS_CircleAcc grid-self-ct'>
                    </label>
                    <input className=" grid-self-ct"
                      onChange={() => {
                        categoryMotionFn(categoryFontColor, 'category-Custom-CircleSimple ', categoryBoxColor, 'category-Custom-Circle', categorySpanColor, 'category-Custom-Circle-Active')
                        seatChooseCatTheme('circle')
                      }
                      }
                      type="radio" value={'circle'} name="themeCategory" id="categoryClass-Circle" />
                  </div>

                </div>



                <div className="TC-name mg-t-1">themeCategory</div>

                <div className="setThemeFlex">

                  <div className="bodyFontColr labelColor">
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(4)
                      setNameTheme('categoryFontColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categoryFontColor}` }} >
                    </button>
                    <label htmlFor='themeCatFontColor' className="radiusNoborder">themeCatFontColor</label>

                  </div>



                  {chooseCatTheme === 'boxLine' &&
                    <div className="bodyFontColr labelColor">
                      <button onClick={() => {
                        setOnoffColorPicker(true)
                        setNoSetTheme(4)
                        setNameTheme('categoryBoxColor')
                      }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categoryBoxColor}` }} >
                      </button>
                      <label htmlFor='catColorBox' className="radiusNoborder">Box</label>

                    </div>}

                  <div className="bodyFontColr labelColor">
                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(4)
                      setNameTheme('categorySpanColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categorySpanColor}` }} >
                    </button>
                    <label htmlFor='catColorSpan' className="radiusNoborder">Cilie</label>

                  </div>

                </div>


                {/* <div className={categoryBoxClass}><span className={''}>Starter</span>
                  <span className={`${categorySpanClass} ${true && categoryActiveClass}`}></span>

                </div> */}

              </div>}



            </div>

            <button onClick={setupTheme} className='mainBtn saveBtnColor'>
              OK
            </button>




          </div>
        </div >
        <div className="colorPickerPosition">
          <div className="colorPickerSection ">
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
          </div>
        </div>
      </div>
    </div >
  );
};

export default ThemeSetup;
{
  /* 
          <div className='themeFootBar'>Foot Bar</div>
          <div className='themeSideBar'>Side Bar</div> */
}
