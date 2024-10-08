
import 'remixicon/fonts/remixicon.css';
import { useEffect, useState } from 'react';
import AcordionSubComp from './AcordionSubComp';
import SidebarSubComp from './SidebarSubComp';
import FooterComponent from './FooterComponent';
import BannerSubCompo from './BannerSubCompo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styleClient/mainClient.css';
import '../styleClient/sidebarClient.css';
import '../styleClient/footerClient.css';
import '../styleClient/accordianClient.css';
import Swal from 'sweetalert2';
import SoLogo from '../all-icon/social-icon/social.svg'


//= //=
const _MenuComponent = () => {

  //= Set Data\
  const dateTime = new Date();
  const h = dateTime.getHours();
  const m = dateTime.getMinutes();
  const s = dateTime.getSeconds();
  const nowTime = h * 60 * 60 + m * 60 + s;

  const [bannerImgArr, setBannerImgArr] = useState([])

  const [originalClientMenu, setOriginalClientMenu] = useState([]);
  const [clientMenu, setClientMenu] = useState([]);


  const [allMenuName, setAllMenuName] = useState('');

  const [chooseMenu, setChooseMenu] = useState('');
  const [menuTime, setMenuTime] = useState(0);
  const [counttype, setCounttype] = useState(1);

  const [language, setLanguage] = useState(1);
  const [languageSetup, setLanguageSetup] = useState({});

  const [favorList, setFavorList] = useState([]);
  const { link } = useParams();

  const [iconMenu_1, setIconMenu_1] = useState([]);
  const [iconMenu_2, setIconMenu_2] = useState([]);
  const [iconMenu_3, setIconMenu_3] = useState([]);


  const [restaurantName, setRestaurantName] = useState('');


  const [themeSetup, setThemeSetup] = useState({
    navAndFootBar: {
      nameFontFamily: 'Restaurant', nameFontColor: '#fff', nameFontSize: '1.2rem', navBarColor: '#000', navBarFontColor: '#fff', navBarLogoColor: '#fff', footBarStyle: 'box'
    },
    body: {
      bodyBgColor: '#fff', bodyFontFamily: 'Roboto', bodyFonttColor: '#000', bodyFontSize: '1'
    },
    sideBar: {
      extraIcon: '', themeIconRadius: '3rem', themeIconColorLine: '', themeIconBG: '', themeIconSolid: '', themeIconColorBorder: '',
    },
    categoryMotion: {
      categoryPhotoSize: '10rem', categoryFontColor: '#fff', categoryBoxClass: 'category-Custom-BarLine', categoryBoxColor: '', categorySpanClass: 'category-Custom-Line', categorySpanColor: '', categoryActiveClass: 'category-Custom-Line-Active'
    }

  })

  const [timeSetup, setTimeSetup] = useState({
    timeType: true,
    allDayType: { menu_1: true, menu_2: false, menu_3: false },
    codeSelectType: {},
    selectType: {
      menu_1: '',
      menu_2: '',
      menu_3: ''
    }
  })

  const [onOffSetting, setOnOffSetting] = useState({

    menuName: true, banner: true, sideBar: true, filter: true, vetgeterian: true, vegan: true, gluten_free: true, halal: true,
    description: true, accordian: true, footbar: true, langIcon: true, favoritHeart: true, feedBack: true
  })
  const { menuName, banner, sideBar, filter, vetgeterian, vegan, gluten_free, halal, description, accordian, footbar, langIcon, favoritHeart, feedBack } = onOffSetting
  //=-----------------------------------------------

  const [extraInfo, setExtraInfo] = useState({});
  // const [extraInfo, setExtraInfo] = useState({
  //   address_1: '', address_2: '', phone: '',
  //   email: '', website: '', instagram: '', facebook: '', youtube: '', tiktok: ''
  // });


  //=-----------------------------------------------


  const [startLoading, setStartLoading] = useState(true);

  const onOffSideBarFn = (bol) => {
    setOnOffSetting({ ...onOffSetting, sideBar: bol })
  }
  const getClientMenu = () => {
    setStartLoading(true);
    // console.log(co++)
    // dispath(showLoading())

    axios
      .get(`${process.env.REACT_APP_API}/clients/${link}`)

      .then((result) => {
        if (result.data.success) {
          const getResult = result.data.clientMenu;
          // setClientData(getResult);
          setBannerImgArr(getResult.bannerImage)
          setOriginalClientMenu(getResult.menu);
          setClientMenu(getResult.menu);
          setAllMenuName(getResult.menuName);
          setLanguageSetup(getResult.languageSetup);
          setThemeSetup(getResult.themeSetup)
          setRestaurantName(getResult.restaurantName)
          // setRestaurantLogo(getResult.themeSetup.restaurantLogo)
          setTimeSetup(getResult.timeSetup)
          setOnOffSetting(getResult.onOffSetting)
          setExtraInfo(getResult.extraInfo)

          // console.log(getResult.onOffSetting)
          const allDayType = getResult.timeSetup.allDayType;

          let allDayFirstMenu = 3
          let counttype = [];
          for (let x in allDayType) {
            if (allDayType[x]) {
              counttype.push(getResult.menuName[x])
              if (Number(x.slice(-1)) < allDayFirstMenu) {
                allDayFirstMenu = Number(x.slice(-1))

              }

            };
          }
          setCounttype(counttype.length);


          if (getResult.timeSetup.timeType) {
            setMenuTime(allDayFirstMenu);
            setChooseMenu(counttype[0]);
            setLoadingManual(false);
          } else if (getResult.timeSetup.codeSelectType.menu_1 === '1' && nowTime >= Number(getResult.timeSetup.selectType?.menu_1.start) && nowTime <= Number(getResult.timeSetup.selectType?.menu_1.end)) {
            setMenuTime(1);
            setChooseMenu(getResult.menuName.menu_1);
            setLoadingManual(false)
          } else if (getResult.timeSetup.codeSelectType.menu_2 === '2' && nowTime >= Number(getResult.timeSetup.selectType?.menu_2.start) && nowTime <= Number(getResult.timeSetup.selectType?.menu_2.end)) {
            setMenuTime(2);
            setChooseMenu(getResult.menuName.menu_2);
            setLoadingManual(false)
          } else if (getResult.timeSetup?.codeSelectType.menu_3 === '3' && nowTime >= Number(getResult.timeSetup.selectType?.menu_3.start) && nowTime <= Number(getResult.timeSetup.selectType?.menu_3.end)) {
            setMenuTime(3);
            setChooseMenu(getResult.menuName.menu_3);
            setLoadingManual(false)
          }

          let iconMenu_1 = [];
          let iconMenu_2 = [];
          let iconMenu_3 = [];
          let newIndex1 = 0;
          let newIndex2 = 0;
          let newIndex3 = 0;

          getResult.menu.forEach((el, index) => {
            if (!el.icon_catagory) return;
            if (el.menuTime === 1) {
              iconMenu_1.push({ icon: el.icon_catagory, iconAct: el.icon_catagory, link: `#${newIndex1}` })
              newIndex1++;
            }
            if (el.menuTime === 2) {
              iconMenu_2.push({ icon: el.icon_catagory, iconAct: el.icon_catagory, link: `#${newIndex2}` })
              newIndex2++;
            }
            if (el.menuTime === 3) {
              iconMenu_3.push({ icon: el.icon_catagory, iconAct: el.icon_catagory, link: `#${newIndex3}` })
              newIndex3++;
            }
            setIconMenu_1(iconMenu_1);
            setIconMenu_2(iconMenu_2);
            setIconMenu_3(iconMenu_3);
          });


          setLoadingManual(false);
          // console.log(nowTimeState)
          setTimeout(() => {
            setStartLoading(false)
          }, 600);
          // dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      })
      .catch((err) => {
        console.log("Can't not connect the server", err);
        // Swal.fire("Can't not connect the server")
      });
  };

  //=-----------------------------------------------
  const addFavorite = (index, objFromAccord, catagory, indexM) => {
    // let copyFavorList = [...favorList]
    let dataSet = objFromAccord;
    let data = dataSet[index];
    let favor = {
      key: indexM + '-' + index + '-' + data.panelCode,
      category: catagory,
      code: indexM,
      name: data['food_name'],
      price: data['price'],
    };

    let newFavorList = favor;
    data.favor = true;
    // copyFavorList.push(favor)
    setFavorList([...favorList, newFavorList]);
    // setFavorList(copyFavorList);

  };

  //=-----------------------------------------------
  const removeFavorite = (index, objFromAccord, indexM) => {
    let dataSet = objFromAccord;
    let data = dataSet[index];
    let favor = favorList.filter((item) => item.key !== indexM + '-' + index + '-' + data.panelCode);
    data.favor = false;
    setFavorList(favor);
  };
  //=-----------------------------------------------
  const [switchManuBtn, setSwitchManuBtn] = useState(false);
  const [triggerIcon, setTriggerIcon] = useState([]);
  const [switchFilterBtn, setSwitchFilterBtn] = useState(false);

  //=-----------------------------------------------
  const filterSerach = (filterName) => {
    const memoTime = menuTime;
    let cutomerFilter = [];
    originalClientMenu.forEach((el) => {
      let catagory = el.catagory;
      let menuTime = el.menuTime;
      let imgId = el.imgId;
      let newlistMenu = [];
      el.listMenu.forEach((el1) => {
        if (el1[filterName]) {
          newlistMenu.push(el1);
        }
      });
      if (newlistMenu.length === 0) return;
      cutomerFilter.push({ catagory: catagory, menuTime: menuTime, imgId: imgId, listMenu: newlistMenu });
    });

    setClientMenu(cutomerFilter);
    setMenuTime(0);
    setTimeout(() => {
      setMenuTime(memoTime);
    }, 2);
  };

  //=-----------------------------------------------
  const [iconFilter, setIconFilter] = useState('food_name');


  //=-----------------------------------------------

  const [feedBackSMS, setFeedBackSMS] = useState({
    pointStar: 0,
    message: ''
  })
  const feedBackSMSFn = (e) => {

    setFeedBackSMS({ ...feedBackSMS, 'message': e.target.value })
  }
  const feedBackStarFn = (index) => {

    setFeedBackSMS({ ...feedBackSMS, 'pointStar': index })
  }
  const sentfeedBack = (e) => {
    // e.preventDefault()

    axios.post(`${process.env.REACT_APP_API}/clients/feedBack/${link}`, {
      feedBack: {
        pointStar: feedBackSMS.pointStar,
        message: feedBackSMS.message,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        readMessage: true
      }
    })
      .then(result => {
        if (result.data.success) {

          Swal.fire({
            title: 'Thank You!',
            text: 'for leaving feedback for us',
            toast: true,
            // icon: 'success',
            // confirmButtonText: 'SAVED',
            showConfirmButton: false,
            // width: '16rem',
            // height: '5rem',
            iconColor: '#61b265',
            // confirmButtonColor: '#cb2722',
            timer: 2500,
          })
          setFeedBackSMS({
            pointStar: 0,
            message: ''
          })


        } else {
          // Swal.fire(result.data.message)
        }
      }).catch(err => {
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }



  //=-----------------------------------------------
  // function arrayBufferToBase64(buffer) {
  //   var binary = '';
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // }

  // const getImage = () => {
  //   const imgId = link + 'restlogo'
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: imgId })
  //     .then((result) => {

  //       if (!result.data.images) {
  //         return setRestaurantLogo('')
  //         // return dispath(hideLoading());
  //       }

  //       const getResult = result.data.images;
  //       const base64Flag = 'data:image/png;base64,';
  //       const imageStr = arrayBufferToBase64(getResult.img.data.data);
  //       const tagImage = base64Flag + imageStr;

  //       // console.log(tagImage)

  //       setRestaurantLogo(tagImage);
  //       // dispath(hideLoading());
  //       // setTimeout(() => {
  //       //   dispath(hideLoading());
  //       // }, 500);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };











  //=-----------------------------------------------

  // useEffect(() => {
  //   if(link)getClientMenu();
  // }, [link]);
  useEffect(() => {
    getClientMenu();
    // eslint-disable-next-line
  }, []);
  // document.body.style.backgroundColor = themeSetup.body.bodyBgColor
  // document.body.style.backgroundColor = 'red'

  // useEffect(() => {
  //   getImage();
  // }, []);
  // const navIcon = {
  //   filter: 'filter.svg',
  //   dropDown: 'down-chevron.svg',
  //   dropUp: 'up-chevron.svg',
  //   cancel: 'cancel.svg',
  //   vegetarian: 'vegetarian.svg',
  //   vegan: 'vegan.svg',
  //   glutenfree: 'glutenfree.svg',
  //   halal: 'halal.svg',
  // };


  // font-family: 'Roboto Slab', serif;
  // document.body.style.backgroundColor = '#000'


  // eslint-disable-next-line 
  const [loadingManual, setLoadingManual] = useState(true);
  const [scrollBlock, setScrollBlock] = useState(false)



  //=-----------------------------------------------
  return (

    <div className={`mobileViewport unselectable`}
      style={{
        'fontFamily': `${themeSetup.body.bodyFontFamily} , serif`,
        'backgroundColor': `${themeSetup.body.bodyBgColor}`
      }}

    >



      <div className={`${startLoading && 'Full_Start_Loading'} `}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>


      <div className=' mobileViewport_Wrapper'>
        <i className="x">!Theme Nav BG Color 1/10</i>
        <nav className='navBar_Client'
          style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>

          {/* <div className=' mx-auto'> */}
          <div className='navFlexLogoandName'>

            <div className='navSlit1'>
              {/* <i className="x">!Theme</i> */}
              {themeSetup.navAndFootBar.logoRestaurant && <div className="logoResta"><img className='logoRestaImg' alt='' src={themeSetup.navAndFootBar.logoRestaurant} /></div>}

              <span style={{
                'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}`,
                'fontFamily': `${themeSetup.navAndFootBar.nameFontFamily}`,
                'color': `${themeSetup.navAndFootBar.nameFontColor}`,
                'fontSize': `${themeSetup.navAndFootBar.nameFontSize}`,
                'fontWeight': '600'
              }}>{restaurantName}</span>
              {/* <img className='block h-6 w-auto' src={logo} alt='Your Company' /> */}
            </div>
            <i className="x">!Theme NavBGColor 2/10  NavFontColor 1</i>
            <div className=' navSlit2 navNameAndFilter'
              style={{
                'fontFamily': `${themeSetup.body.bodyFontFamily}`,
                'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}`,
                'color': `${themeSetup.navAndFootBar.navBarFontColor}`,
              }}>
              {/* //- MenuTime */}


              {menuName && <div className="menuNameNavBox">
                {/* <div className="ttttttttttttttttt"></div> */}
                {!timeSetup?.timeType && (
                  <div
                    onClick={() => {
                      setSwitchManuBtn(!switchManuBtn);
                      setSwitchFilterBtn(false);
                    }}
                    className='flexNavMenuName'>
                    <div className=' menuNameNavBox navMenuNameText'>
                      <div className='navMenuNameText-top'>{chooseMenu}</div>
                    </div>
                  </div>
                )}
                <i className="x">!Theme Nav BG Color 3-5/10</i>
                {timeSetup?.timeType && (
                  <div
                    onClick={() => {
                      setSwitchManuBtn(!switchManuBtn);
                      setSwitchFilterBtn(false);
                    }}
                    className='flexNavMenuName'>

                    <div className=' menuNameNavBox navMenuNameText'>
                      <div className='navMenuNameText-top'

                        style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>


                        {chooseMenu}</div>

                      <div className={`navMenuNameText-Ab ${!switchManuBtn && 'navMenuNameText-move'}`}>
                        {timeSetup.allDayType.menu_1 && (
                          <div
                            onClick={() => {
                              setChooseMenu(allMenuName.menu_1);
                              setMenuTime(1);
                            }}
                            className={` ${chooseMenu === allMenuName.menu_1 && 'displayNone'} navMenuNameText-tab`}
                            style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                            {allMenuName.menu_1}
                          </div>
                        )}

                        {timeSetup.allDayType.menu_2 && (
                          <div
                            onClick={() => {
                              setChooseMenu(allMenuName.menu_2);
                              setMenuTime(2);
                            }}
                            className={` ${chooseMenu === allMenuName.menu_2 && 'displayNone'} 
                          navMenuNameText-tab`}
                            style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                            {allMenuName.menu_2}
                          </div>
                        )}

                        {timeSetup.allDayType.menu_3 && (
                          <div
                            onClick={() => {
                              setChooseMenu(allMenuName.menu_3);
                              setMenuTime(3);
                            }}
                            className={` ${chooseMenu === allMenuName.menu_3 && 'displayNone'} 
                          navMenuNameText-tab`}
                            style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                            {allMenuName.menu_3}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* {counttype > 1 && <div>{switchManuBtn ? <img src={require(`../all-icon/footbar-icon/${navIcon.dropUp}`)} alt='' srcSet='' /> : <img src={require(`../all-icon/footbar-icon/${navIcon.dropDown}`)} alt='' srcSet='' />}</div>} */}
                    <i className="x">!Theme NavFontColor 1-2/8</i>
                    {counttype > 1 && <div>{switchManuBtn ? <svg width="10" height="5" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="23.1213" y1="2" x2="44" y2="22.8787" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                      <line x1="1.5" y1="-1.5" x2="31.0269" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 25 2)" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                      : <svg width="10" height="5" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.5" y1="-1.5" x2="31.0269" y2="-1.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 21 23)" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                        <line x1="22.8787" y1="23" x2="2" y2="2.12132" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    }</div>}
                  </div>
                )}
              </div>}


              {/* //- Filter */}

              {filter && <div
                onClick={() => {
                  setSwitchFilterBtn(!switchFilterBtn);
                  setSwitchManuBtn(false);
                }}
                className='filterBtn'>
                <i className="x">!Theme NavFontColor 3-7/8</i>
                <div className='navFilterNameText '>
                  {/* <div className='filterBtn-main'>
                      {iconFilter === 'food_name' && <img src={require(`../all-icon/footbar-icon/${navIcon.filter}`)} alt='' srcSet='' />}
                      {iconFilter === 'vetgeterian' && <img src={require(`../all-icon/footbar-icon/${navIcon.vegetarian}`)} alt='' srcSet='' />}
                      {iconFilter === 'vegan' && <img src={require(`../all-icon/footbar-icon/${navIcon.vegan}`)} alt='' srcSet='' />}
                      {iconFilter === 'gluten_free' && <img src={require(`../all-icon/footbar-icon/${navIcon.glutenfree}`)} alt='' srcSet='' />}
                      {iconFilter === 'halal' && <img src={require(`../all-icon/footbar-icon/${navIcon.halal}`)} alt='' srcSet='' />}
                    </div> */}
                  <div className='filterBtn-main'>
                    {iconFilter === 'food_name' && <svg width="21" height="21" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.375H9.75" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M31.625 5.375H52.625" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 22.875H31.625" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M44.75 22.875H52.625" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 40.375H9.75" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.875 40.375H52.625" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.5 9.75H14.125C11.7088 9.75 9.75 7.7912 9.75 5.375C9.75 2.9588 11.7088 1 14.125 1H18.5C20.9162 1 22.875 2.9588 22.875 5.375C22.875 7.7912 20.9162 9.75 18.5 9.75Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.5 44.75H14.125C11.7088 44.75 9.75 42.7912 9.75 40.375C9.75 37.9588 11.7088 36 14.125 36H18.5C20.9162 36 22.875 37.9588 22.875 40.375C22.875 42.7912 20.9162 44.75 18.5 44.75Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M40.375 27.25H36C33.5838 27.25 31.625 25.2912 31.625 22.875C31.625 20.4588 33.5838 18.5 36 18.5H40.375C42.7912 18.5 44.75 20.4588 44.75 22.875C44.75 25.2912 42.7912 27.25 40.375 27.25Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                    {iconFilter === 'vetgeterian' && <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">

                      <g mask="url(#mask0_61_54)">
                        <path d="M31.7645 19.9176C29.3194 16.7913 25.4927 14.8003 21.1976 14.8772C14.3429 14.9998 8.59993 20.6063 8.32354 27.4565C8.02101 34.9526 14.0084 41.125 21.4375 41.125H37.2969C42.4314 41.125 46.5938 36.9626 46.5938 31.8281C46.5938 26.6936 42.4314 22.5312 37.2969 22.5312C35.1543 22.5312 33.0844 21.6053 31.7645 19.9176Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M54.3594 28C54.3594 42.5579 42.5579 54.3594 28 54.3594C13.4421 54.3594 1.64062 42.5579 1.64062 28C1.64062 13.4421 13.4421 1.64062 28 1.64062C42.5579 1.64062 54.3594 13.4421 54.3594 28Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46.6389 9.36112L9.36108 46.6389" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.8125 28C25.8125 30.4162 23.8537 32.375 21.4375 32.375C19.0213 32.375 17.0625 30.4162 17.0625 28C17.0625 25.5838 19.0213 23.625 21.4375 23.625C23.8537 23.625 25.8125 25.5838 25.8125 28Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>}
                    {iconFilter === 'vegan' && <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">

                      <g mask="url(#mask0_61_69)">
                        <path d="M6.64357 44.813C11.6207 51.1263 19.3369 55.1796 28 55.1796C43.0109 55.1796 55.1797 43.0109 55.1797 28C55.1797 12.989 43.0109 0.820274 28 0.820274C12.9891 0.820274 0.820333 12.989 0.820333 28C0.820333 32.7889 2.06054 37.2875 4.2348 41.1952" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.3935 31.2534C10.3935 31.2534 12.0749 28.7302 15.8953 27.4288C19.5163 26.1954 24.2194 27.0244 25.3863 30.8767C26.4555 34.4062 23.5232 38.0105 19.8113 37.5654C14.7961 36.9642 14.7809 31.8573 10.3935 31.2534Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.8532 31.2888C22.7917 31.9281 27.0186 35.8296 28.1363 39.8913" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40.4721 18.1785C41.3423 16.5551 42.6426 15.2333 44.1332 14.1679" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44.1332 14.1679C40.5259 12.8033 36.3886 12.3001 32.6328 13.337C29.7978 14.1197 27.2941 15.9684 25.864 18.5581C24.7415 20.5912 24.2445 23.2015 25.268 25.3766C26.469 27.9289 29.3546 29.4828 32.1359 29.2364C35.2016 28.9646 37.424 26.6455 38.4679 23.8816C38.5847 23.5724 38.69 23.2592 38.789 22.944" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.3594 20.1878C32.3594 20.1878 28.2921 22.192 28.2921 29.8334V45.3916" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>}
                    {iconFilter === 'gluten_free' && <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">

                      <g mask="url(#mask0_61_11)">
                        <path d="M23.4332 16.1421C23.4332 20.5267 28 24.0811 28 24.0811C28 24.0811 32.5669 20.5267 32.5669 16.1421C32.5669 11.7575 28 8.20312 28 8.20312C28 8.20312 23.4332 11.7575 23.4332 16.1421Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.4856 21.533C27.3852 24.6334 28.1011 30.3761 28.1011 30.3761C28.1011 30.3761 33.8438 31.0919 36.9441 27.9916C40.0445 24.8911 39.3286 19.1486 39.3286 19.1486C39.3286 19.1486 33.586 18.4326 30.4856 21.533Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.5144 21.533C28.6148 24.6334 27.8989 30.3761 27.8989 30.3761C27.8989 30.3761 22.1563 31.0919 19.0559 27.9916C15.9555 24.8911 16.6714 19.1486 16.6714 19.1486C16.6714 19.1486 22.414 18.4326 25.5144 21.533Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.4856 31.9176C27.3852 35.018 28.1011 40.7606 28.1011 40.7606C28.1011 40.7606 33.8438 41.4766 36.9441 38.3761C40.0445 35.2758 39.3286 29.5332 39.3286 29.5332C39.3286 29.5332 33.586 28.8172 30.4856 31.9176Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.5144 31.9176C28.6148 35.018 27.8989 40.7606 27.8989 40.7606C27.8989 40.7606 22.1563 41.4766 19.0559 38.3761C15.9555 35.2758 16.6714 29.5332 16.6714 29.5332C16.6714 29.5332 22.414 28.8172 25.5144 31.9176Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 24.0811V47.7969" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M54.3594 28C54.3594 42.5579 42.5579 54.3594 28 54.3594C13.4421 54.3594 1.64062 42.5579 1.64062 28C1.64062 13.4421 13.4421 1.64062 28 1.64062C42.5579 1.64062 54.3594 13.4421 54.3594 28Z" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.1068 19.1068L9.36134 9.36134" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46.6386 46.6386L37.6031 37.6031" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.0526 28.0526L28.0001 28.0001L27.9409 27.9409" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>}
                    {iconFilter === 'halal' && <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">

                      <g mask="url(#mask0_61_38)">
                        <path d="M15.1975 8.97441H8.97447V20.1193L1.09378 28L8.97447 35.8807V47.0255H20.1193L28 54.9062L35.8807 47.0255H47.0256V35.8807L54.9063 28L47.0256 20.1193V8.97441H35.8807L28 1.09372L23.5997 5.49421" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.6047 18.8105V30.9519C20.6047 33.3095 18.6936 35.2206 16.3361 35.2206C13.7667 35.2206 11.7795 32.9671 12.1009 30.4178L12.3997 28.0493" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.6047 21.3396L23.4032 23.0255C25.3027 24.1698 26.6673 26.0246 27.1946 28.1784" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22.3232 35.2206L23.8576 34.7975C27.1785 33.8818 29.6943 31.1641 30.3516 27.7826L32.0956 18.8106V31.7258C32.0956 34.0013 34.3045 35.6226 36.4754 34.9405L43.4726 32.7422C44.0416 32.5635 44.0979 31.7805 43.5604 31.5221L40.0847 29.8513C38.8377 29.2519 37.3591 29.4096 36.2664 30.2583" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>}
                  </div>

                  <i className="x">!Theme Nav BG Color 5-10/10</i>
                  <div className={`filterBtn-Ab ${!switchFilterBtn && 'filterBtn-move'}`}>
                    {vetgeterian && <div
                      onClick={() => {
                        filterSerach('vetgeterian');
                        setIconFilter('vetgeterian');
                        onOffSideBarFn(false)
                      }}
                      className={` filterBtn-tab`}
                      style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                      Vegetarian
                    </div>}

                    {vegan && <div
                      onClick={() => {
                        filterSerach('vegan');
                        setIconFilter('vegan');
                        onOffSideBarFn(false)
                      }}
                      className={` filterBtn-tab`}
                      style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                      Vegan
                    </div>}

                    {gluten_free && <div
                      onClick={() => {
                        filterSerach('gluten_free');
                        setIconFilter('gluten_free');
                        onOffSideBarFn(false)
                      }}
                      className={` filterBtn-tab`}
                      style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                      Gluten-Free
                    </div>}

                    {halal && <div
                      onClick={() => {
                        filterSerach('halal');
                        setIconFilter('halal');
                        onOffSideBarFn(false)
                      }}
                      className={` filterBtn-tab`}
                      style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                      Halal
                    </div>}

                    {(vetgeterian || vegan || gluten_free || halal) && <div
                      onClick={() => {
                        filterSerach('food_name');
                        setIconFilter('food_name');
                        onOffSideBarFn(true)
                      }}
                      className={` filterBtn-tab`}
                      style={{ 'backgroundColor': `${themeSetup.navAndFootBar.navBarColor}` }}>
                      {/* <img src={require(`../all-icon/footbar-icon/${navIcon.cancel}`)} alt='' srcSet='' /> */}
                      <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.12132" y1="2" x2="23" y2="22.8787" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                        <line x1="1.5" y1="-1.5" x2="31.0269" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 25 2)" stroke={themeSetup.navAndFootBar.navBarFontColor} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      &nbsp;Clear filter
                    </div>}
                  </div>
                </div>
              </div>}


              {/* <button onClick={() => filterSerach('vegan')} type="button" className="filterBtn" aria-controls="" aria-expanded="false">
                  <img src={require(`../all-icon/footbar-icon/${navIcon.filter}`)} alt="" srcSet="" />
                </button> */}

              {/* <button onClick={() => filterSerach('vetgeterian')} type="button" className="filterBtn" aria-controls="" aria-expanded="false">
                  <img src={require(`../all-icon/footbar-icon/${navIcon.dropUp}`)} alt="" srcSet="" />
                </button> */}
            </div>
          </div>
          {/* </div> */}
        </nav>

        <div
          onClick={() => {
            setSwitchManuBtn(false);
            setSwitchFilterBtn(false);
          }}
          onTouchStart={() => {
            setSwitchManuBtn(false);
            setSwitchFilterBtn(false);
          }}
          className={`${switchManuBtn || switchFilterBtn ? 'overlayForNav' : 'displayNone'}`}></div>

        {/* == SIDE BAR == sideBarSectionC */}
        {sideBar && <div className=' sideBarSectiontest'>
          <SidebarSubComp triggerIcon={triggerIcon} menuTime={menuTime} iconMenu_1={iconMenu_1} iconMenu_2={iconMenu_2} iconMenu_3={iconMenu_3} themeSetup={themeSetup} />
        </div>}
        {/* == <BannerExample /> == */}
        {(banner && bannerImgArr.length > 0) && <div className={`bannerSectionC`}
          // {banner && <div className={`bannerSectionC ${bannerImgArr.length===0&& 'displayNone'}`}

          style={{ 'backgroundColor': `${themeSetup.body.bodyBgColor}` }}
        >
          <BannerSubCompo themeSetup={themeSetup} bannerImgArr={bannerImgArr} link={link} />
        </div>}
        {/* == MENU == */}
        {/* <CssBaseline /> */}
        {/* <ThemeProvider theme={theme} > */}
        {/* <ThemeProvider  > */}

        {menuTime === 1 &&
          clientMenu
            .filter((el) => el.menuTime === 1)
            .map((el, index) => (
              <AcordionSubComp
                listMunu={el}
                indexM={index}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                triggerIcon={triggerIcon}
                setTriggerIcon={setTriggerIcon}
                key={index}
                languageSetup={languageSetup}
                setLanguage={setLanguage}
                language={language}
                themeSetup={themeSetup}
                favoritHeart={favoritHeart}
                sideBar={sideBar}
                description={description}
                accordian={accordian}
                footbar={footbar}
                menuTime={menuTime}
              />
            ))}
        {menuTime === 2 &&
          clientMenu
            .filter((el) => el.menuTime === 2)
            .map((el, index) => (
              <AcordionSubComp
                listMunu={el}
                indexM={index}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                triggerIcon={triggerIcon}
                setTriggerIcon={setTriggerIcon}
                key={index}
                languageSetup={languageSetup}
                setLanguage={setLanguage}
                language={language}
                themeSetup={themeSetup}
                favoritHeart={favoritHeart}
                sideBar={sideBar}
                description={description}
                accordian={accordian}
                footbar={footbar}
                menuTime={menuTime}
              />
            ))}
        {menuTime === 3 &&
          clientMenu
            .filter((el) => el.menuTime === 3)
            .map((el, index) => (
              <AcordionSubComp
                listMunu={el}
                indexM={index}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                triggerIcon={triggerIcon}
                setTriggerIcon={setTriggerIcon}
                key={index}
                languageSetup={languageSetup}
                setLanguage={setLanguage}
                language={language}
                themeSetup={themeSetup}
                favoritHeart={favoritHeart}
                sideBar={sideBar}
                description={description}
                accordian={accordian}
                footbar={footbar}
                menuTime={menuTime}
              />
            ))}
        {/* </ThemeProvider> */}

        {/* <div className="footerSpace"></div> */}

        {footbar && <div className=''>
          <FooterComponent favorList={favorList}
            languageSetup={languageSetup}
            setLanguage={setLanguage}
            language={language}
            themeSetup={themeSetup}
            setThemeSetup={setThemeSetup}
            langIcon={langIcon}
            favoritHeart={favoritHeart}
            feedBack={feedBack}


            feedBackSMSFn={feedBackSMSFn}
            feedBackStarFn={feedBackStarFn}
            sentfeedBack={sentfeedBack}
            feedBackSMS={feedBackSMS}
            scrollBlock={scrollBlock}
            setScrollBlock={setScrollBlock}
          />


        </div>}



      </div>


      <div className='extraSpace'
        style={{
          'color': `${themeSetup.body.bodyFonttColor}`,
        }}
      >
        <div className="inFoClient">
          <div className="inFoClient_Name">{restaurantName}</div>
          {extraInfo?.address_1 && <div className="">{extraInfo?.address_1}</div>}
          {extraInfo?.address_2 && <div className="">{extraInfo?.address_2}</div>}

          {extraInfo?.phone && <div className="flex">
            <div className="">{extraInfo?.phone}</div>
          </div>}
          {extraInfo?.email && <div className="">{extraInfo?.email}</div>}
          <div className="flex_sologo">
            {extraInfo?.website && <a href={extraInfo?.website} target="_blank" rel="noreferrer" className="box_soLogo"
              style={{
                'border': `.5px solid ${themeSetup.body.bodyFonttColor}`
              }}>

              <svg className='itemSvg_so' fill={themeSetup.body.bodyFonttColor}>
                <use xlinkHref={`${SoLogo}#social-1`} />
              </svg>
            </a>}
            {extraInfo?.instagram && <a href={extraInfo?.instagram} target="_blank" rel="noreferrer" className="box_soLogo"
              style={{
                'border': `.5px solid ${themeSetup.body.bodyFonttColor}`
              }}>
              <svg className='itemSvg_so' fill={themeSetup.body.bodyFonttColor}>
                <use xlinkHref={`${SoLogo}#social-2`} />
              </svg>
            </a>}
            {extraInfo?.facebook && <a href={extraInfo?.facebook} target="_blank" rel="noreferrer" className="box_soLogo"
              style={{
                'border': `.5px solid ${themeSetup.body.bodyFonttColor}`
              }}>
              <svg className='itemSvg_so' fill={themeSetup.body.bodyFonttColor}>
                <use xlinkHref={`${SoLogo}#social-3`} />
              </svg>
            </a>}
            {extraInfo?.youtube && <a href={extraInfo?.youtube} target="_blank" rel="noreferrer" className="box_soLogo"
              style={{
                'border': `.5px solid ${themeSetup.body.bodyFonttColor}`
              }}>
              <svg className='itemSvg_so' fill={themeSetup.body.bodyFonttColor}>
                <use xlinkHref={`${SoLogo}#social-4`} />
              </svg>
            </a>}
            {extraInfo?.tiktok && <a href={extraInfo?.tiktok} target="_blank" rel="noreferrer" className="box_soLogo"
              style={{
                'border': `.5px solid ${themeSetup.body.bodyFonttColor}`
              }}>
              <svg className='itemSvg_so' fill={themeSetup.body.bodyFonttColor}>
                <use xlinkHref={`${SoLogo}#social-5`} />
              </svg>
            </a>}
          </div>
        </div>
      </div>










    </div>
  );
};

export default _MenuComponent;
