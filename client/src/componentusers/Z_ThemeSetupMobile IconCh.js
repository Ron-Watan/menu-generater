import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import _ColorPickkerMobile from './_ColorPickkerMobile';
import { createGlobalStyle } from 'styled-components';
import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';
import { NavbarBg } from './ThemePresent';



const _ThemeSetupMobile = (prop) => {
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
    // e.preventDefault();
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

  const [colorOnClick, setColorOnClick] = useState('')

  const clickColor = (e) => {
    setColorOnClick(e.target.style.backgroundColor)
  }


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
    <div className={`MB_themeWrapper ${themeTab === 'accord' && 'MB_themeWrapper_Ac'}`}>
      <div className={`MB_themeContainer ${themeTab === 'accord' && 'MB_themeContainer_Acc'}`}>

        <div className={`MB_themeMenuList `}>
          <div onClick={() => setThemeTab('quick')} className='MB_menuListBtn'>QT</div>
          {/* <div onClick={() => setThemeTab('themePage')} className='MB_menuListBtn'>TP</div> */}
          <div onClick={() => setThemeTab('navFoot')} className='MB_menuListBtn'>NF</div>
          <div onClick={() => setThemeTab('sidbar')} className='MB_menuListBtn'>SB</div>
          <div onClick={() => setThemeTab('accord')} className='MB_menuListBtn'>AC</div>
        </div>

        <div className="MB_AB_FullAgain">

          <div className='MB_themeLayout_Grid'>


            <div className='MB_Container_Sroll'>



              <i className="x">0 -----------------------------------------------</i>
              {themeTab === 'quick' && <div className='themeQuick'>



              </div>}

              <i className="x">1 -----------------------------------------------</i>
              {themeTab === 'navFoot' && <div className='MB_themeNavFootBar'>


                <i className="x">restaurantName Section</i>
                <div className="MB_themeRow">
                  <div className="MB_TC_name">Restaurant Name</div>
                </div>

                <div className='MB_themeRow'>
                  <input onChange={inputRestaurantName} value={prop.restaurantName} type='text' maxLength="20"
                    name='' id='menuName' autoComplete='off' className='MB_presentInput' placeholder={currentRestaurantName}
                    style={{
                      'fontFamily': `${''}, serif`,
                      'color': `${'black'}`,
                      'fontSize': `${'1rem'}`,
                      'fontWeight': '400'
                    }}
                  />
                </div>
                <div className='MB_themeRow'>
                  <i className="x">nameFontColor Section</i>
                  <div className='fontColor MB_themeGrid'>
                    <label htmlFor="FontColor1" className='MB_TC_small'>Font Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      clickColor(e)
                      setNoSetTheme(1)
                      setNameTheme('nameFontColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${nameFontColor}` }} id='FontColor1'></button>
                  </div>
                </div>
                <div className='MB_themeRow'>
                  <i className="x">nameFontFamily Section</i>
                  <div className='fontStyle MB_themeGrid'>
                    <label htmlFor="fontStyle1" className='MB_TC_small'>Font Style</label>

                    <select onChange={nameAllFontStyleFn('nameFontFamily')} id='fontStyle1' className='MB_labelFontR'>
                      < option value='Merriweather' > Merriweather</option>
                      <option value='Urbanist'>Urbanist</option>
                      <option value='Oleo Script Swash Caps'>Oleo Script</option>
                      <option value='Merriweather'>Merriweather</option>
                      <option value='Poppins'>Poppins</option>

                    </select>



                  </div>
                </div>
                <div className='MB_themeRow'>
                  <i className="x">nameFontSize Section</i>
                  <div className='fontStyle MB_themeGrid'>
                    <label htmlFor="FontSize1" className='MB_TC_small'>Font-Size</label>

                    <select onChange={nameAllFontStyleFn('nameFontSize')} id='FontSize1' className='MB_labelFontR'>
                      < option value='1rem' > Extra-Small</option>
                      <option value='1.2rem'>Small</option>
                      <option value='1.6rem'>Medium</option>
                      <option value='1.8rem'>Large</option>
                      <option value='2.0rem'>Extra-Large</option>
                    </select>


                  </div>

                </div>
                <i className="x">navBarColor Section</i>
                <div className='MB_themeRow'>
                  <div className="MB_TC_name mg-t-1">Top/Bottom Bar</div>



                </div>


                <div className='MB_themeRow'>

                  <div className='navbarColor MB_themeGrid'>
                    <label htmlFor="NavbarColor" className='MB_TC_small'>BG Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(1)
                      setNameTheme('navBarColor')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${navBarColor}` }} id='NavbarColor' ></button>

                  </div>

                </div>

                <div className='MB_themeRow'>
                  <i className="x">navBarFontColor Section</i>
                  <div className='navbarfontColor MB_themeGrid'>
                    <label htmlFor="navBarFontColor" className='MB_TC_small'>Font Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(1)
                      setNameTheme('navBarFontColor')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${navBarFontColor}` }} id='navBarFontColor'></button>

                  </div>


                </div>



                <div className='MB_themeRow'>

                  <div className="MB_TC_name mg-t-1">Body</div>


                </div>


                <div className='MB_themeRow'>
                  <div className="bodyBGColor MB_themeGrid">
                    <label htmlFor="bodyBgColor" className='MB_TC_small'>BG Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(2)
                      setNameTheme('bodyBgColor')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${bodyBgColor}` }} id='bodyBgColor'>
                    </button>

                  </div>

                </div>

                <div className='MB_themeRow'>

                  <div className="bodyFontColr MB_themeGrid">
                    <label htmlFor="bodyFonttColor" className='MB_TC_small'>Font Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(2)
                      setNameTheme('bodyFonttColor')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${bodyFonttColor}` }} id='bodyFonttColor'>
                    </button>
                  </div>
                </div>
                <div className='MB_themeRow'>


                </div>

                <div className='MB_themeRow'>


                  <div className="bodyFontStyle MB_themeGrid" >
                    <label htmlFor="BodyfontStyle" className='MB_TC_small'>Font Style</label>

                    <select onChange={bodyAllFontStyleFn('bodyFontFamily')} id='BodyfontStyle' className='MB_labelFontR'>
                      < option value='Merriweather' > Merriweather</option>
                      <option value='Urbanist'>Urbanist</option>
                      <option value='Oleo Script Swash Caps'>Oleo Script</option>
                      <option value='Merriweather'>Merriweather</option>
                      <option value='Poppins'>Poppins</option>

                    </select>

                  </div>


                </div>








              </div>}


              <i className="x">3 -----------------------------------------------</i>



              {themeTab === 'sidbar' && <div className='MB_themeNavFootBar'>
                <div className='MB_themeRow'>

                  <div className="MB_TC_name">Icon Style</div>

                </div>

                <div className='MB_themeRow'>
                  <div className='MB_setThemeGrid'>
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


                </div>
                <div className='MB_themeRow'>
                  <div className='MB_setThemeGrid'>

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


                </div>
                <div className='MB_themeRow'>
                  <div className='MB_setThemeGrid'>
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


                </div>
                <div className='MB_themeRow'>
                  <div className="MB_TC_name mg-t-1">Icon Color</div>


                </div>
                <div className='MB_themeRow'>
                  <div className="bodyFontColr MB_themeGrid">
                    <label htmlFor="themeIconColorLine" className='MB_TC_small'>Line color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(3)
                      setNameTheme('themeIconColorLine')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconColorLine}` }} id='themeIconColorLine' >
                    </button>

                  </div>
                </div>
                <div className='MB_themeRow'>

                  <div className="bodyFontColr MB_themeGrid">
                    <label htmlFor="themeIconBG" className='MB_TC_small'>BG Color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(3)
                      setNameTheme('themeIconBG')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconBG}` }} id='themeIconBG' >
                    </button>

                  </div>


                </div>
                <div className='MB_themeRow'>

                  <div className="bodyFontColr  MB_themeGrid">
                    <label htmlFor="themeIconColorBorder" className='MB_TC_small'>Border color</label>

                    <button onClick={(e) => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(31)
                      setNameTheme('themeIconColorBorder')
                      clickColor(e)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${themeIconColorBorder}` }} id='themeIconColorBorder'>
                    </button>

                  </div>

                </div>












              </div>}

              <i className="x">4 -----------------------------------------------</i>

              {themeTab === 'accord' && <div className='MB_themeNavFootBar'>
                <div className='MB_themeRow MB_themeRow_reverse'>
                  <div className="MB_TC_name">themeCategory</div>
                </div>

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


                <div className='MB_themeRow MB_themeRow_reverse'>
                  <div className="MB_TC_name mg-t-1">Category Style</div>
                </div>

                <div className='MB_themeRow '>
                  <div className="bodyFontColr MB_themeGrid MB_themeGrid_end">

                    <label htmlFor='themeCatFontColor' className='MB_TC_small'>Font Color</label>

                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(4)
                      setNameTheme('categoryFontColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categoryFontColor}` }} >
                    </button>

                  </div>

                </div>


                {chooseCatTheme === 'boxLine' &&
                  <div className='MB_themeRow'>
                    <div className="bodyFontColr MB_themeGrid MB_themeGrid_end">
                      <label htmlFor='catColorBox' className="MB_TC_small">BG Color</label>

                      <button onClick={() => {
                        setOnoffColorPicker(true)
                        setNoSetTheme(4)
                        setNameTheme('categoryBoxColor')
                      }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categoryBoxColor}` }} >
                      </button>
                    </div>
                  </div>}

                <div className='MB_themeRow'>

                  <div className="bodyFontColr MB_themeGrid MB_themeGrid_end">
                    <label htmlFor='catColorSpan' className="MB_TC_small">Animattion Color</label>

                    <button onClick={() => {
                      setOnoffColorPicker(true)
                      setNoSetTheme(4)
                      setNameTheme('categorySpanColor')
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${categorySpanColor}` }} >
                    </button>

                  </div>

                </div>



                {/* <div className={categoryBoxClass}><span className={''}>Starter</span>
                  <span className={`${categorySpanClass} ${true && categoryActiveClass}`}></span>

                </div> */}

              </div>}



            </div>

            <div className="MB_flexBTN_Around">
              <button onClick={() => {
                setupTheme()
                prop.reloadIFrame()
              }} className='MB_Sq_Btn MB_Btn_Border for_btn_theme'>
                OK
              </button>

              <button onClick={() => {
                prop.setOnOffThemeSetup_MB(false)
                prop.setMBnavIcon(true)

              }} className='MB_Sq_Btn MB_Btn_Border for_btn_theme'>
                cancel
              </button>
            </div>


          </div>



        </div>

        {onOffColorPicker && <div className="MB_AB_FullAgain z_ColorPallete">


          <_ColorPickkerMobile
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

            colorOnClick={colorOnClick}
            setOnoffColorPicker={setOnoffColorPicker}
          />




        </div>}
      </div>
    </div >
  );
};

export default _ThemeSetupMobile;
