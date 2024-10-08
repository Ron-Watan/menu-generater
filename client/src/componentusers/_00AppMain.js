import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
import { setUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import '../style/_main.css';
import '../style/mainForm.css';
import '../style/sideForm.css';
import '../style/addLanguage.css';
import '../style/iconPicker.css';
import '../style/colorPicker.css';
import '../style/themeSetup.css';
import '../style/_mediaPhone.css';
import '../style/_mediaPhone_Setting.css';

import { v4 as uuidv4 } from 'uuid';
import Resizer from 'react-image-file-resizer';


import Sect01FeedBackMobile from './_01FeedBackMobile';
import Sect02QRCode from './_02QRCode';
import Sect03BannerMobile from './_03BannerMobile';

import Sect04MenuForm from './_04MenuForm';
import Sect04MobileFormFood from './_04MobileFormFood';
import Sect20IconPickerMobile from './_20IconPickerMobile';

import Sect04MobileLanguage from './_04MobileLanguage';
import Sect07TimePickerMobile from './_07TimePickerMobile';
import Sect08LanguageSetupMobile from './_08LanguageSetupMobile';
import Sect09ThemeSetupMobile from './_09ThemeSetupMobile';
import Sect10OnOffSettingMobile from './_10OnOffSettingMobile';
import Sect11ExtraInfo from './_11ExtraInfo';
import Sect12Account from './_12Account';
import Sect12AccountPassword from './_12AccountPassword';

import Sect99RedSnaq from './_99RedSnaq';

import SectSimulationApp from './simulattion/_SimulationApp'


import iconPhoto from '../all-icon/button-icon/meal.svg';
import MBicon_User from '../all-icon/mobile-bar/user.svg'
import MBicon_Banner from '../all-icon/mobile-bar/banner.svg'
import MBicon_Menu1 from '../all-icon/mobile-bar/menu1.svg'
import MBicon_Menu2 from '../all-icon/mobile-bar/menu2.svg'
import MBicon_Menu3 from '../all-icon/mobile-bar/menu3.svg'
import MBicon_Qrcode from '../all-icon/mobile-bar/qrcode.svg'
import MBicon_Lang from '../all-icon/mobile-bar/lang.svg'
import MBicon_Feedback from '../all-icon/mobile-bar/feedback.svg'
import MBicon_Time from '../all-icon/mobile-bar/time.svg'
import MBicon_Theme from '../all-icon/mobile-bar/theme.svg'
import MBicon_Logout from '../all-icon/mobile-bar/logout.svg'
import MBicon_Onoff from '../all-icon/mobile-bar/onoff.svg'
import MBicon_Contact from '../all-icon/mobile-bar/contact.svg'
import MBicon_StarNoti from '../all-icon/mobile-bar/starnoti.svg'
import MBicon_SubPay from '../all-icon/mobile-bar/payment.svg'
import MBicon_Myqr from '../all-icon/mobile-bar/myqr.svg'

import * as Util from "../componentusers/_99Utility"
import UserPool from "../UserPool"

//-///-///-///-///-///-///-///-///-///-


const _AppMain = () => {
  const loginCode = sessionStorage.getItem('temp')
  const [redSnaq, setRedSnaq] = useState('')
  //1//
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  //1//

  const navigate = useNavigate()



  const ref = useRef([]);
  //1// After Reload SET:
  const [indexToBanner, setIndexToBanner] = useState('');

  const [originalBannerImgArr, setOriginalBannerImgArr] = useState([]);
  const [bannerImgArr, setBannerImgArr] = useState([]);
  const [realBannerFile, setRealBannerFile] = useState([])




  const [originalClientMenu, setOriginalClientMenu] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryList_1, setCategoryList_1] = useState([])
  const [categoryList_2, setCategoryList_2] = useState([])
  const [categoryList_3, setCategoryList_3] = useState([])

  const [menuName, setMenuName] = useState({
    menu_1: '',
    menu_2: '',
    menu_3: '',
  }); // timeSwitcher()

  const [timeSetup, setTimeSetup] = useState({});
  // const [languageSetup, setLanguageSetup] = useState({});
  const [onOffSetting, setOnOffSetting] = useState({});

  const [languageSetup, setLanguageSetup] = useState({
    onLanguage_2: '',
    language_1: 'English',
    code_1: 'EN',
    symbol_1: '$',
    style_1: false,
    followed_1: true,
    language_2: '',
    code_2: '',
    symbol_2: '',
    style_2: true,
    followed_2: true,
  });

  const [menuId, setMenuId] = useState('');

  const [menuTime, setMenuTime] = useState(1); // timeSwitcher()

  const [checkInputForm, setCheckInputForm] = useState(false)

  const [state, setState] = useState({
    catagory: '',
    catagory_2: '',
    icon_catagory: '/static/media/_empty.7b62bbf4b02d3d65f678e4361123ec76.svg#empty000',
    imgId: '',

    errCategory: false,
  });


  const inputValue = (name) => (even) => {
    setCheckInputForm(true)
    setState({ ...state, [name]: even.target.value, errCategory: false });

  };

  let listMenuModel = {
    food_name: '',
    description: '',
    remark: '',
    price: '',
    vetgeterian: false,
    vegan: false,
    gluten_free: false,
    halal: false,
    redTag: '',
    favor: false,

    food_name_2: '',
    description_2: '',
    remark_2: '',
    price_2: '',

    food_name_3: '',
    description_3: '',
    remark_3: '',
    price_3: '',

    errFoodname: false,
    errPrice: false,

  };

  const [listMenu, setListMenu] = useState([listMenuModel]);

  const inputListValue = (index, event) => {
    setCheckInputForm(true)
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[event.target.name] = event.target.value;
    // data[event.target.name] = data[event.target.name].replace(/\./g, "")
    setListMenu(dataSet);
  };

  const inputCheck = (index, event) => {
    setCheckInputForm(true)
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[event.target.name] = event.target.checked;
    setListMenu(dataSet);
  };



  const [file, setFile] = useState();
  const [filePreview, setFilePreview] = useState();

  const [startLoading, setStartLoading] = useState(true);

  const [imageKey, setImageKey] = useState(0);
  const handleClickImageKey = () => {
    setImageKey(prevKey => prevKey + 1);
  };



  //- //= //-001_getAllMenu
  const getAllMenu = () => {

    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {


          const getReult = result.data.userMenu;
          setOriginalBannerImgArr(getReult.bannerImage)
          setRealBannerFile(getReult.bannerImage)
          setBannerImgArr(getReult.bannerImage)

          // setOriginalClientMenu(getReult.menu);
          setCategoryList(getReult.menu);

          setMenuName(getReult.menuName);
          setTimeSetup(getReult.timeSetup);
          setLanguageSetup(getReult.languageSetup);
          setThemeSetup(getReult.themeSetup);
          setOnOffSetting(getReult.onOffSetting)

          const catList_menu_1 = getReult.menu.filter(el => el.menuTime === 1)
          const catList_menu_2 = getReult.menu.filter(el => el.menuTime === 2)
          const catList_menu_3 = getReult.menu.filter(el => el.menuTime === 3)


          setCategoryList_1(catList_menu_1)
          setCategoryList_2(catList_menu_2)
          setCategoryList_3(catList_menu_3)

          setExtraInfo(getReult.extraInfo)

          handleClickImageKey()

          setRedSnaq(getReult.redSnaq)
          dispath(hideLoading())
          console.log('Server: Connected');



          setTimeout(() => {
            setStartLoading(false)
          }, 1000);

        } else {

          dispath(hideLoading())
        }
      })
      .catch((err) => {

        console.log('Server: Connecting...');

      });
  };

  const [imgLoading, setImgLoading] = useState(false)

  const resizeFile = (file) =>
    new Promise((resolve) => {
      dispath(showLoading())
      setImgLoading(true)
      Resizer.imageFileResizer(
        file,
        507,
        900,
        'JPEG',
        80,
        0,
        (uri) => {
          setFile(uri);
          setCheckEditImg(true)
          setImgLoading(false)
          dispath(hideLoading())
        },
        'base64'
      );
    });

  const [checkEditImg, setCheckEditImg] = useState(false)
  const [oneClickCat, setOneClickCat] = useState(false)

  const checkMaximumLists = () => {
    let countLists = 0;
    categoryList.forEach((el) => {
      if (el.menuTime === menuTime) countLists++;
    });
    return countLists;
  };



  //- //- //- //- //- //- //-
  const submitCatagory = (e) => {

    let imgId = ''
    if (file) imgId = user.link + '-' + uuidv4().slice(-8);
    if (checkMaximumLists() > 14) return alert('Fullll');
    dispath(showLoading())
    axios
      .post(
        `${process.env.REACT_APP_API}/user/create-manu`,
        {
          loginCode,
          userId: user.userId,
          clientId: user.clientId,
          menuTime: menuTime,
          catagory: state.catagory,
          catagory_2: '',
          icon_catagory: state.icon_catagory,
          imgId: imgId,
          link: user.link,
          listMenu: [...listMenu],
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userMenu;

          // uploadImage
          if (file) {
            const newFile = Util.dataURIToBlob(file);
            const formData = new FormData();
            formData.append('avatar', newFile, imgId);
            formData.append('userId', user.userId);
            axios
              .post(`${process.env.REACT_APP_API}/user/photos/uplaodOne`, formData, ticketPass)
              .then((result) => {
                Swal.fire({
                  title: 'Saved',
                  toast: true,
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,
                }).then(nothing => {
                  setStart(false)
                  setMenuId('');
                  dispath(setUser(getReult));

                  setCheckEditImg(false)
                  setCheckInputForm(false)
                  setOneClickCat(false)
                  dispath(hideLoading())
                })


              })
              .catch((err) => console.error(err));


          } else {
            // NoImage

            Swal.fire({
              title: 'Saved',
              toast: true,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(nothing => {
              setStart(false)

              dispath(setUser(getReult));

              getAllMenu();
              setCheckInputForm(false)
              setCheckEditImg(false)
              setOneClickCat(false)
              dispath(hideLoading())
            })

          }

        } else {
          dispath(hideLoading());
          return navigate('/login')

        }
      })
      .catch((err) => {
        dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };



  //- //= //-

  const saveEditMenu = (e) => {

    if (!menuId) return;
    dispath(showLoading())
    let imgId = ''
    if (!state.imgId) imgId = user.link + '-' + uuidv4().slice(-8);
    else imgId = state.imgId
    checkEditImg && delelteImage();
    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveEditMenu`,
        {
          userId: user.userId,
          menuId: menuId,
          menuTime: menuTime,

          catagory: state.catagory,
          catagory_2: state.catagory_2,
          icon_catagory: state.icon_catagory,
          imgId: imgId,
          link: user.link,

          listMenu: [...listMenu],
        },
        ticketPass
      )
      .then((result) => {

        if (result.data.success) {


          if (checkEditImg) {
            const newFile = Util.dataURIToBlob(file);
            const formData = new FormData();
            formData.append('avatar', newFile, imgId);
            formData.append('userId', user.userId);
            axios
              .post(`${process.env.REACT_APP_API}/user/photos/uplaodOne`, formData, ticketPass)
              .then((next) => {
                Swal.fire({
                  title: 'Saved',
                  toast: true,
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,
                }).then(next => {
                  setStart(false)
                  setMenuId('');
                  // console.log('HelloSave')
                  getAllMenu();
                  setFile('')
                  dispath(setUser(result.data.userMenu));
                  setCheckInputForm(false)
                  setCheckEditImg(false)
                  setOneClickCat(false)


                });
              })
              .catch((err) => console.error(err));

          } else {

            Swal.fire({
              title: 'Saved',
              toast: true,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(next => {
              // getAllMenu();

              dispath(setUser(result.data.userMenu));
              setCheckInputForm(false)
              setCheckEditImg(false)
              setOneClickCat(false)
              dispath(hideLoading())
            });

          }

        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())
        }
      })
      .catch((err) => {
        console.log("Can not connect the server");
        Swal.fire("Can not connect the server");
      });
  };



  //=//=//=//=//=//=//=//=//=//=//=//=//=

  const findOneMenu = (menuId) => {
    dispath(showLoading())
    setImgLoading(true)
    setStart(true);
    setOnOffLangForm(false);
    // scrollToTop();
    setMenuId(menuId);
    // setFile('')

    categoryList.forEach(oneMennu => {
      if (oneMennu.menuId === menuId) {
        // oneMennu.imgId && getImage(oneMennu.imgId)
        setState({
          catagory: oneMennu.catagory,
          catagory_2: oneMennu.catagory_2,
          icon_catagory: oneMennu.icon_catagory,
          imgId: oneMennu.imgId,
        });
        setListMenu(oneMennu.listMenu);

        setFile(oneMennu.imgId);
        setFilePreview(oneMennu.imgId)
        handleClickImageKey()
      }

    })

    setTimeout(() => {
      dispath(hideLoading())
      setImgLoading(false)
    }, 500);

  };



  const additem = () => {
    let newListMenu = listMenuModel;
    setListMenu([...listMenu, newListMenu]);

  };

  const removeItem = (index) => {



    Swal.fire({
      title: 'Do you want to delete an item?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
      confirmButtonColor: ' #dc3741',
      denyButtonColor: '#f56e4f',
    }).then((result) => {
      if (result.isConfirmed) {
        setCheckInputForm(true)
        setOneClickCat(false)
        let data = [...listMenu];
        data.splice(index, 1);
        setListMenu(data);
      }
    })

  };

  //- //= //-
  const delelteImage = () => {

    if (!file) return
    if (!state.imgId) return

    axios
      .post(`${process.env.REACT_APP_API}/user/photos/delete`, { imgId: state.imgId }, ticketPass)
      .then((result) => {

      })
      .catch((err) => {
        console.error(err);
      });

  };


  const deleteMenu = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Do you want to delete Category?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
      confirmButtonColor: ' #dc3741',
      denyButtonColor: '#f56e4f',
    }).then((result) => {

      if (result.isConfirmed) {
        dispath(showLoading())
        delelteImage()
        axios
          .post(`${process.env.REACT_APP_API}/user/deleteMenu`, { menuId: menuId, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
          .then((result) => {
            if (result.data.success) {
              Swal.fire({
                title: 'Delete',
                toast: true,
                icon: 'success',
                showConfirmButton: false,
                timer: 1000,
              }).then(Fired => {
                dispath(setUser(result.data.userMenu));
                // getAllMenu();
                setCheckInputForm(false)
                setStart(false)
                setMenuId('');
                setCheckEditImg(false)
                setOneClickCat(false)
                dispath(hideLoading())

              });

            } else {
              Swal.fire(result.data.message);
              dispath(hideLoading())
            }
          })
          .catch((err) => {

            console.log("Can't not connect the server");
            Swal.fire("Can't not connect the server");
          });


      }
    })


  };
  const saveReArangeList = () => {
    dispath(showLoading())
    let newCategoryMoved = []
    newCategoryMoved.push(...categoryList_1, ...categoryList_2, ...categoryList_3)

    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveReArangeList`,
        {
          userId: user.userId,
          menu: [...newCategoryMoved],
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          Swal.fire({
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(result => {
            getAllMenu();
            dispath(hideLoading())

          });
        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())
        }
      })
      .catch((err) => {

        console.log("Can not connect the server");
        Swal.fire("Can not connect the server");
      });
  };
  // menus.forEach(menu => {
  //   menu.list.map(el => {

  //     // (console.log(el.food_name))

  //   })
  // })

  // const [deleteBtn, setDeleteBtn] = useState(false);





  //=//=//=//=/ Form Food

  const [start, setStart] = useState(false);

  const openForm = () => {
    const promise = new Promise((resolve, reject) => {
      setListMenu([])
      setState({
        catagory: '', catagory_2: '', imgId: '', errCategory: false,
        icon_catagory: '/static/media/_empty.7b62bbf4b02d3d65f678e4361123ec76.svg#empty000',
      });
      setFile('');
      setPreviewImg(iconPhoto)
      resolve(listMenu)

    });
    promise.then((value) => {
      let newListMenu = listMenuModel;
      setListMenu([newListMenu]);
      setStart(true)

    });
  };

  const clearForm = () => {
    const promise = new Promise((resolve, reject) => {
      setListMenu([])
      setState({
        catagory: '', catagory_2: '', imgId: '', errCategory: false,
        icon_catagory: '/static/media/_empty.7b62bbf4b02d3d65f678e4361123ec76.svg#empty000',
      });
      setFile('');
      resolve(listMenu)
      // Unchecked();
    });
    promise.then((value) => {
      let newListMenu = listMenuModel;
      setListMenu([newListMenu]);
      setCheckInputForm(false)
      setFile('');
    });
  }


  // UPLOAD IMAGE


  const [checkChangeName, setCheckChangeName] = useState(false)

  const currentMenuName = 'menu_' + menuTime
  const inputMenuTimeName = (e) => {
    setMenuName({ ...menuName, [currentMenuName]: e.target.value })
    setCheckChangeName(true)
  }
  const saveNameMenu = () => {
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/saveNameMenu`,
        {
          userId: user.userId,
          clientId: user.clientId,
          menuName: menuName
        }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // const getReult = result.data.userMenu;
          dispath(setUser(result.data.userMenu));
          // setMenuName(getReult.menuName)
          dispath(hideLoading())
        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())
        }
      })
      .catch((err) => {

        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };


  //=///////=//=//=//=//=//=////////////////////////////////////////////////
  const [themeSetup, setThemeSetup] = useState('')

  // eslint-disable-next-line 
  const [checkChangeTheme, setCheckChangeTheme] = useState(false)

  //  ----------------------------------------------------------------------------------------------
  const [restaurantName, setRestaurantName] = useState('')
  // const [logoRestaurant, setLogoRestaurant] = useState('') // for DB
  // 1 ----------------------------------------------------------------------------------------------
  const [navAndFootBar, setNavAndFootBar] = useState({
    nameFontFamily: '', nameFontColor: '', nameFontSize: '',
    navBarColor: '', navBarFontColor: '',
    footBarStyle: '', logoRestaurant: ''
  })
  const { nameFontFamily, nameFontColor, nameFontSize, navBarColor, navBarFontColor, footBarStyle, logoRestaurant } = navAndFootBar

  const nameAllFontStyleFn = (name) => (e) => {
    setCheckChangeTheme(true)
    setNavAndFootBar({ ...navAndFootBar, [name]: e.target.value })
  }
  const logoRestaurantFn = (name, value) => {
    setCheckChangeTheme(true)
    setNavAndFootBar({ ...navAndFootBar, [name]: value })
  }
  // 2 ----------------------------------------------------------------------------------------------

  const [bodyStyle, setBodyStyle] = useState({

    bodyBgColor: '', bodyFontFamily: '', bodyFonttColor: '', bodyFontSize: ''
  })
  const { bodyBgColor, bodyFontFamily, bodyFonttColor, bodyFontSize } = bodyStyle

  const bodyAllFontStyleFn = (name) => (e) => {
    setCheckChangeTheme(true)
    setBodyStyle({ ...bodyStyle, [name]: e.target.value })
  }
  // 3 ----------------------------------------------------------------------------------------------

  const [themeIconNoBD, setThemeIconNoBD] = useState({
    themeIconRadius: '1.5rem', themeIconColorLine: '', themeIconBG: '', themeIconSolid: 'none'
  })
  const { themeIconRadius, themeIconColorLine, themeIconBG, themeIconSolid } = themeIconNoBD

  const [themeIconColorBorder, setThemeIconColorBorder] = useState('')
  const [extraIcon, setExtraIcon] = useState(false)

  // const themeIconClientFn = (radius, colorLine, colorBg, solid, colorBorder) => {
  //   setCheckChangeTheme(true)
  //   setThemeIconNoBD({
  //     themeIconRadius: radius, themeIconColorLine: colorLine, themeIconBG: colorBg, themeIconSolid: solid, themeIconColorBorder: colorBorder
  //   })
  //   setExtraIcon(false)
  // }
  // 4 ----------------------------------------------------------------------------------------------
  const [categoryActiveTheme, setCategoryActiveTheme] = useState(false)
  const [categoryMotion, setCategoryMotion] = useState({
    categoryPhotoSize: '',
    categoryFontColor: '',
    categoryBoxClass: '', categoryBoxColor: '',
    categorySpanClass: '', categorySpanColor: '',
    categoryActiveClass: ''

  })
  const { categoryPhotoSize, categoryFontColor, categoryBoxClass, categoryBoxColor, categorySpanClass, categorySpanColor, categoryActiveClass } = categoryMotion

  const [chooseCatTheme, seatChooseCatTheme] = useState('')

  const categoryMotionFn = (photoSize, fontColor, boxClass, boxColor, sapnClass, spanColor, avtiveClass) => {
    setCheckChangeTheme(true)
    setCategoryMotion({
      categoryPhotoSize: photoSize,
      categoryFontColor: fontColor,
      categoryBoxClass: boxClass, categoryBoxColor: boxColor,
      categorySpanClass: sapnClass, categorySpanColor: spanColor,
      categoryActiveClass: avtiveClass
    })

  }

  const categoryMotionInput = (name) => (e) => {
    setCheckChangeTheme(true)
    setCategoryMotion({ ...categoryMotion, [name]: e.target.value })
  }
  //////=//=//=//=///////////////////////////////

  const [extraInfo, setExtraInfo] = useState({
    address_1: '', address_2: '', phone: '',
    email: '', website: '', instagram: '', facebook: '', youtube: '', tiktok: ''
  });



  //////=//=//=//=///////////////////////////////

  const [accountPassword, setAccountPassword] = useState(false)





  //- MOBILE  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-

  const [onOffFeature, setOnOffOnOffFeature] = useState(true);



  const [onOffQRCCode_MB, setOnOffQRCCode_MB] = useState(false);
  const [onOffFeedBAck_MB, setOnOffFeedBAck_MB] = useState(false);
  const [onOffBanner_MB, setOnoffBanner_MB] = useState(false);
  const [onOffMenu1_MB, setOnoffMenu1_MB] = useState(false);
  const [onOffMenu2_MB, setOnoffMenu2_MB] = useState(false);
  const [onOffMenu3_MB, setOnoffMenu3_MB] = useState(false);
  const [onOffTimePicker_MB, setOnOffTimePicker_MB] = useState(false);
  const [onOffLangSetup_MB, setOnOffLangSetup_MB] = useState(false);
  const [onOffExtra_MB, setOnOffExtra_MB] = useState(false);
  const [onOffThemeSetup_MB, setOnOffThemeSetup_MB] = useState(false);
  const [onOffSetting_MB, setOnOffSetting_MB] = useState(false);
  const [onOffAccount_MB, setOnOffAccount_MB] = useState(false);

  const [onOffRedSnaq_MB, setOnOffRedSnaq_MB] = useState(false);

  if (onOffQRCCode_MB || onOffFeedBAck_MB || onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
    onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffSetting_MB || onOffExtra_MB ||
    onOffThemeSetup_MB || onOffAccount_MB || onOffRedSnaq_MB) {
    document.body.classList.add('overflow-hidden')
  }

  //-


  const [onOffLangForm, setOnOffLangForm] = useState(false); // Lang Form



  //=

  const [getQRCodeTG, setGetQRCodeTG] = useState(0);

  const [activeWindowIconPicker, setActiveWindowIconPicker] = useState(false);


  // <button onClick={() => {
  //   setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1)
  //   prop.setTestTG((prop.testTG) => prop.testTG + 1)
  // }
  //=
  const [navTime2TimePicker, setNavTime2TimePicker] = useState(0);
  const [navLang2LangSetUp, setNavLang2LangSetUp] = useState(0);

  const [navOnOff2OnOffSetting, setVavOnOff2OnOffSetting] = useState(0);

  //=

  const [turnOnSection, setTurnOnSection] = useState(false)
  const [toggleScrollFeedBack, setToggleScrollFeedBack] = useState(false)

  const [toggleScrollQRCode, setToggleScrollQRCode] = useState(false)
  const [toggleScrollBanner, setToggleScrollBanner] = useState(false)
  const [toggleScrollExtrainfo, setToggleScrollExtrainfo] = useState(false)

  const [toggleScrollAccount, setToggleScrollAccount] = useState(false)




  const [mBnavIcon, setMBnavIcon] = useState(false)


  const [getStarNotification, setGetStarNotification] = useState('')



  const [oneTimeCheck, setOneTimeCheck] = useState(true)

  const [subscriptionFromDB, setSubscriptionFromDB] = useState({
    status: "",
    subscriptionCancel: false,
    subscriptionEnd: 0
  })

  const checkSubscription = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/checkSubscription`, { email: user.email }, ticketPass)
      .then((result) => {
        const getReult = result.data;

        if (getReult.status === "active") {
          setOneTimeCheck(false)
          // console.log(getReult.resDB)
          setSubscriptionFromDB(getReult.resDB)
        } else if (getReult.status === 'inActive') {
          setOneTimeCheck(false)
          navigate('/subscription')

        }
      })
      .catch((err) => {
        console.log('Server: Connecting...');
      });


  }


  useEffect(() => {
    if (oneTimeCheck && user.userId) {

      checkSubscription()
    }
    // eslint-disable-next-line 
  }, [user]);

  useEffect(() => {
    if (user.userId) return getAllMenu()
    // eslint-disable-next-line 
  }, [user]);

  const [previewImg, setPreviewImg] = useState(iconPhoto)











  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-


  return (
    <div className=' mainAppMonitor '>

      <div className={`${startLoading && 'Full_Start_Loading'} `}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>

      <i className='x'>START MOBILE -----------------------------------------------</i>
      <div className="mobile-creator unselectable">

        {onOffFeature && <div className={`mobile_function ${!onOffFeedBAck_MB && 'MB_slide_Down'}`}>
          <Sect01FeedBackMobile
            setOnOffFeedBAck_MB={setOnOffFeedBAck_MB}
            setGetStarNotification={setGetStarNotification}
            setToggleScrollFeedBack={setToggleScrollFeedBack}
            toggleScrollFeedBack={toggleScrollFeedBack}
            user={user}
          />
        </div>}


        {onOffFeature && <div className={`mobile_function ${!onOffQRCCode_MB && 'MB_slide_Down'}`}>
          <Sect02QRCode
            getQRCodeTG={getQRCodeTG}
            setOnOffQRCCode_MB={setOnOffQRCCode_MB}
            user={user}
            setToggleScrollQRCode={setToggleScrollQRCode}
            toggleScrollQRCode={toggleScrollQRCode}
          />
        </div>}


        <i className="x"> Banner-----------------------------------------------</i>
        {onOffFeature && <div className={`mobile_function  ${!onOffBanner_MB && 'MB_slide_Down'}`}>
          <Sect03BannerMobile
            bannerImgArr={bannerImgArr}
            setBannerImgArr={setBannerImgArr}
            // bannerNumber={bannerNumber}
            indexToBanner={indexToBanner}
            setIndexToBanner={setIndexToBanner}
            setOnoffBanner_MB={setOnoffBanner_MB}
            originalBannerImgArr={originalBannerImgArr}
            setOriginalBannerImgArr={setOriginalBannerImgArr}
            realBannerFile={realBannerFile}
            setRealBannerFile={setRealBannerFile}
            getAllMenu={getAllMenu}
            imageKey={imageKey}
            setToggleScrollBanner={setToggleScrollBanner}
            toggleScrollBanner={toggleScrollBanner}
          />
        </div>}


        <i className="x"> Manu 1 2 3 -----------------------------------------------</i>
        {onOffFeature && <div className={`mobile_function ${(!onOffMenu1_MB && !onOffMenu2_MB && !onOffMenu3_MB) && 'MB_slide_Down'}`}>
          <Sect04MenuForm
            inputMenuTimeName={inputMenuTimeName}
            menuName={menuName}
            currentMenuName={currentMenuName}
            checkChangeName={checkChangeName}
            saveNameMenu={saveNameMenu}
            setCheckChangeName={setCheckChangeName}
            openForm={openForm}

            categoryList={categoryList}
            setCategoryList={setCategoryList}
            menuTime={menuTime}
            setMenuId={setMenuId}
            menuId={menuId}
            listMenu={listMenu}
            setListMenu={setListMenu}
            listMenuModel={listMenuModel}
            findOneMenu={findOneMenu} setOnOffLangForm={setOnOffLangForm}
            deleteMenu={deleteMenu} saveEditMenu={saveEditMenu}
            start={start} setStart={setStart}
            // deleteBtn={deleteBtn}
            // file={file}
            setOnoffMenu1_MB={setOnoffMenu1_MB}
            setOnoffMenu2_MB={setOnoffMenu2_MB}
            setOnoffMenu3_MB={setOnoffMenu3_MB}
            categoryList_1={categoryList_1}
            categoryList_2={categoryList_2}
            categoryList_3={categoryList_3}
            setCategoryList_1={setCategoryList_1}
            setCategoryList_2={setCategoryList_2}
            setCategoryList_3={setCategoryList_3}
            saveReArangeList={saveReArangeList}
            getAllMenu={getAllMenu}

            setTurnOnSection={setTurnOnSection}
            turnOnSection={turnOnSection}
          />

        </div>}

        {turnOnSection && <div className={` mobile_formFood ${!start && 'MB_slide_Left'}`}>
          <Sect04MobileFormFood
            ref={ref} menuId={menuId} listMenu={listMenu}
            inputListValue={inputListValue} inputCheck={inputCheck}


            iconPhoto={iconPhoto} file={file}
            resizeFile={resizeFile} delelteImage={delelteImage} setFile={setFile} additem={additem} removeItem={removeItem}
            inputValue={inputValue} setState={setState} state={state} start={start} setStart={setStart} setMenuId={setMenuId} submitCatagory={submitCatagory} saveEditMenu={saveEditMenu} deleteMenu={deleteMenu}
            setActiveWindowIconPicker={setActiveWindowIconPicker}
            activeWindowIconPicker={activeWindowIconPicker} setListMenu={setListMenu} listMenuModel={listMenuModel}
            setCheckInputForm={setCheckInputForm} checkInputForm={checkInputForm} imgLoading={imgLoading}
            getAllMenu={getAllMenu} clearForm={clearForm} checkEditImg={checkEditImg}
            oneClickCat={oneClickCat}
            setOneClickCat={setOneClickCat}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            setCheckEditImg={setCheckEditImg}
            filePreview={filePreview}

          />
        </div>}
        {turnOnSection && <div className={` mobile_formFood ${!onOffLangForm && 'MB_slide_Left'}`}>
          <Sect04MobileLanguage
            state={state} listMenu={listMenu} inputValue={inputValue}
            inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} saveEditMenu={saveEditMenu}
            setCheckInputForm={setCheckInputForm} setListMenu={setListMenu} setMenuId={setMenuId} clearForm={clearForm} checkInputForm={checkInputForm} getAllMenu={getAllMenu}
          />
        </div>}
        {turnOnSection && <div className={`mobile_function topColorPicker ${!activeWindowIconPicker && 'MB_slide_Down'}`}>
          <Sect20IconPickerMobile
            state={state} setState={setState} activeWindowIconPicker={activeWindowIconPicker}
            setActiveWindowIconPicker={setActiveWindowIconPicker} setCheckInputForm={setCheckInputForm}

          />
        </div>}

        {onOffFeature && <div className={`mobile_function ${!onOffTimePicker_MB && 'MB_slide_Down'}`}>
          <Sect07TimePickerMobile
            navTime2TimePicker={navTime2TimePicker} setOnOffTimePicker_MB={setOnOffTimePicker_MB}
            menuName={menuName} timeSetup={timeSetup} setTimeSetup={setTimeSetup} />
        </div>}

        {onOffFeature && <div className={`mobile_function ${!onOffLangSetup_MB && 'MB_slide_Down'}`}>
          <Sect08LanguageSetupMobile
            setOnOffLangSetup_MB={setOnOffLangSetup_MB} navLang2LangSetUp={navLang2LangSetUp}
            languageSetup={languageSetup} setLanguageSetup={setLanguageSetup} />
        </div>}

        <div className={`mobile_ThemeFunction ${!onOffThemeSetup_MB && 'MB_slide_Left'}`}>
          <Sect09ThemeSetupMobile
            setOnOffThemeSetup_MB={setOnOffThemeSetup_MB}
            restaurantName={restaurantName} setRestaurantName={setRestaurantName}
            setMBnavIcon={setMBnavIcon}

            navAndFootBar={navAndFootBar}
            setNavAndFootBar={setNavAndFootBar}
            nameAllFontStyleFn={nameAllFontStyleFn}
            logoRestaurantFn={logoRestaurantFn}
            nameFontFamily={nameFontFamily}
            nameFontColor={nameFontColor}
            nameFontSize={nameFontSize}
            navBarColor={navBarColor}
            navBarFontColor={navBarFontColor}
            footBarStyle={footBarStyle}

            bodyStyle={bodyStyle}
            setBodyStyle={setBodyStyle}
            bodyAllFontStyleFn={bodyAllFontStyleFn}
            bodyBgColor={bodyBgColor}
            bodyFontFamily={bodyFontFamily}
            bodyFonttColor={bodyFonttColor}
            bodyFontSize={bodyFontSize}


            categoryMotion={categoryMotion}
            setCategoryMotion={setCategoryMotion}
            categoryPhotoSize={categoryPhotoSize}
            categoryFontColor={categoryFontColor}
            categoryBoxClass={categoryBoxClass}
            categoryBoxColor={categoryBoxColor}
            categorySpanClass={categorySpanClass}
            categorySpanColor={categorySpanColor}
            categoryActiveClass={categoryActiveClass}
            chooseCatTheme={chooseCatTheme}
            seatChooseCatTheme={seatChooseCatTheme}
            categoryMotionInput={categoryMotionInput}
            categoryMotionFn={categoryMotionFn}

            setCategoryActiveTheme={setCategoryActiveTheme}

            themeIconNoBD={themeIconNoBD}
            setThemeIconNoBD={setThemeIconNoBD}
            themeIconRadius={themeIconRadius}
            themeIconColorLine={themeIconColorLine}
            themeIconBG={themeIconBG}
            themeIconSolid={themeIconSolid}
            themeIconColorBorder={themeIconColorBorder}
            setThemeIconColorBorder={setThemeIconColorBorder}
            extraIcon={extraIcon}
            setExtraIcon={setExtraIcon} />
        </div>

        <i className="x"> Extra Info-----------------------------------------------</i>
        {onOffFeature && <div className={` mobile_function  ${!onOffExtra_MB && 'MB_slide_Down'}`}>
          <Sect11ExtraInfo
            setOnOffExtra_MB={setOnOffExtra_MB}
            setRestaurantName={setRestaurantName}
            restaurantName={restaurantName}
            extraInfo={extraInfo}
            setExtraInfo={setExtraInfo}
            toggleScrollExtrainfo={toggleScrollExtrainfo}
            setToggleScrollExtrainfo={setToggleScrollExtrainfo}
          />
        </div>}


        {onOffFeature && <div className={`mobile_function ${!onOffAccount_MB && 'MB_slide_Down'}`}>
          <Sect12Account
            user={user}
            onOffAccount_MB={onOffAccount_MB}
            setOnOffAccount_MB={setOnOffAccount_MB}
            accountPassword={accountPassword}
            setAccountPassword={setAccountPassword}
            subscriptionFromDB={subscriptionFromDB}
            toggleScrollAccount={toggleScrollAccount}
            setToggleScrollAccount={setToggleScrollAccount} />

        </div>}

        {toggleScrollAccount && <div className={`mobile_function ${!accountPassword && 'MB_slide_Left'}`}>

          <Sect12AccountPassword
            userEmail={user.email}
            setAccountPassword={setAccountPassword} />
        </div>}


        {onOffFeature && <div className={`mobile_function ${!onOffSetting_MB && 'MB_slide_Down'}`}>
          <Sect10OnOffSettingMobile
            setOnOffSetting_MB={setOnOffSetting_MB} navOnOff2OnOffSetting={navOnOff2OnOffSetting}
            onOffSetting={onOffSetting} setOnOffSetting={setOnOffSetting} />
        </div>}


        <i className='x'> START MOBILE ICON -----------------------------------------------</i>
        <div className="">

          <i className='x'> Home -----------------------------------------------</i>
          <div className="MC_IconFixed">
            <button onClick={() => {
              setMBnavIcon(!mBnavIcon)
              setOnOffOnOffFeature(true)
            }} className={`MC_Tab MB_None_Adm ${mBnavIcon && 'adminActive'}  ${onOffThemeSetup_MB && 'displayNone'}  `}>
              <img src={MBicon_User} alt="" />
            </button>
          </div>

          <i className='x'> Redsnaq----------------------------------------------</i>
          {redSnaq === "ronnarit" && <div className={`mobile_function ${!onOffRedSnaq_MB && 'MB_slide_Down'}`}>
            <Sect99RedSnaq user={user} setOnOffRedSnaq_MB={setOnOffRedSnaq_MB}
              originalBannerImgArr={originalBannerImgArr} />
          </div>}
          {redSnaq === "ronnarit" && <div className="MC_IconFixed MC_rq">
            <button onClick={() => {
              setOnOffRedSnaq_MB(true)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None_Adm `} >
              <img src={MBicon_Myqr} alt="" />
            </button>
          </div>}



          <i className='x'> Scroll Navigation -----------------------------------------------</i>
          <i className='x'> 0-----------------------------------------------</i>

          <div className={`MC_nav ${!mBnavIcon && 'displayNone'}`}>

            {/* <div className={`MB_emptySm`}>&nbsp;</div> */}

            <i className='x'> 1 Feed Back -----------------------------------------------</i>
            <button onClick={() => {

              setOnOffFeedBAck_MB(!onOffFeedBAck_MB)
              setToggleScrollFeedBack(true)

            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Feedback} alt="" />
              {getStarNotification > 0 && <span className={'starNotification'}>
                <img src={MBicon_StarNoti} alt="" />
                <span className={'starNotification starNotification_text'}>{getStarNotification}</span>
              </span>}
            </button>
            <i className='x'> 2 QR Code-----------------------------------------------</i>
            <button onClick={() => {

              setOnOffQRCCode_MB(!onOffQRCCode_MB)
              setGetQRCodeTG((getQRCodeTG) => getQRCodeTG + 1)
              setToggleScrollQRCode(true)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Qrcode} alt="" />

            </button>



            <i className='x'> 3 Banner-----------------------------------------------</i>
            <button onClick={() => {
              setOnoffBanner_MB(!onOffBanner_MB);
              // setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1)
              setToggleScrollBanner(true)
            }}
              name='bannerMB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Banner} alt="" />
            </button>






            <i className='x'> 4 Menu1-----------------------------------------------</i>

            <button onClick={() => {
              setOnoffMenu1_MB(!onOffMenu1_MB);
              setTurnOnSection(true)
              setMenuTime(1)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >

              <img src={MBicon_Menu1} alt="" />
            </button>

            <i className='x'> 5 Menu2-----------------------------------------------</i>
            <button onClick={() => {

              setOnoffMenu2_MB(!onOffMenu2_MB);

              setTurnOnSection(true)

              setMenuTime(2)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Menu2} alt="" />
            </button>

            <i className='x'> 6 Menu3-----------------------------------------------</i>
            <button onClick={() => {

              setOnoffMenu3_MB(!onOffMenu3_MB);

              setTurnOnSection(true)
              setMenuTime(3)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Menu3} alt="" />
            </button>

            <i className='x'> 7 Time-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffTimePicker_MB(!onOffTimePicker_MB);
              setNavTime2TimePicker((testTG) => navTime2TimePicker + 1);

            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Time} alt="" />
            </button>

            <i className='x'> 8 Language-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffLangSetup_MB(!onOffLangSetup_MB);
              setNavLang2LangSetUp((testTG) => navLang2LangSetUp + 1);
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Lang} alt="" />
            </button>

            <i className='x'> onOffExtra_MB-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffExtra_MB(!onOffExtra_MB)
              setToggleScrollExtrainfo(true)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Contact} alt="" />
            </button>



            <i className='x'> 9 Theme-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
              setCategoryActiveTheme(true)
              setMBnavIcon(false)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Theme} alt="" />
            </button>


            <i className='x'> 10 On Off-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffSetting_MB(!onOffSetting_MB);
              setVavOnOff2OnOffSetting((testTG) => navOnOff2OnOffSetting + 1);
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Onoff} alt="" />
            </button>


            <i className='x'> 12 Account-----------------------------------------------</i>
            <button onClick={() => {
              setOnOffAccount_MB(!onOffAccount_MB);
              setToggleScrollAccount(true)
            }}
              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_SubPay} alt="" />
            </button>



            <i className='x'> 11 Log Out-----------------------------------------------</i>
            <button onClick={() => {

              Swal.fire({
                title: 'Are you sure, you want to Logout?',
                showCancelButton: true,
                confirmButtonText: 'Logout',
                confirmButtonColor: '#d94100',

              }).then((result) => {
                if (result.isConfirmed) {
                  const user = UserPool.getCurrentUser()
                  if (user) {
                    user.signOut()
                    sessionStorage.clear()
                    localStorage.clear()
                    window.location.reload(false);
                  }

                }
              })

            }}

              name='Manu1MB'
              className={`MC_Tab MB_None `} >
              <img src={MBicon_Logout} alt="" />
            </button>


            <i className='x'> 99 Empty-----------------------------------------------</i>
            <div className={`MB_empty`}>&nbsp;</div>

          </div>
          <i className='x'> END Navigation</i>


        </div>



      </div>

      {onOffSetting.simulate && <div className={`simulation ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
        onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB || onOffExtra_MB || onOffAccount_MB
        || accountPassword)
        && 'iframe_scale_Down'}`}
        style={{
          'position': `${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB || onOffThemeSetup_MB ||
            onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB || onOffExtra_MB || onOffAccount_MB
            || accountPassword)
            ? 'fixed' : 'sticky'}`
        }}

      >

        <SectSimulationApp
          setOnOffOnOffFeature={setOnOffOnOffFeature}
          setMBnavIcon={setMBnavIcon}
          menuName={menuName}

          logoRestaurant={logoRestaurant}
          restaurantName={restaurantName}
          allMenuName={menuName}
          themeSetup={themeSetup}
          navAndFootBar={navAndFootBar}
          bodyStyle={bodyStyle}

          bannerImgArr={bannerImgArr}

          categoryList_1={categoryList_1}
          categoryList_2={categoryList_2}
          categoryList_3={categoryList_3}
          setCategoryList={setCategoryList}
          categoryList={categoryList}
          originalClientMenu={originalClientMenu}
          setOriginalClientMenu={setOriginalClientMenu}

          categoryActiveTheme={categoryActiveTheme}
          categoryMotion={categoryMotion}

          themeIconRadius={themeIconRadius}
          themeIconColorLine={themeIconColorLine}
          themeIconBG={themeIconBG}
          themeIconSolid={themeIconSolid}
          themeIconColorBorder={themeIconColorBorder}
          extraIcon={extraIcon}


          onOffSetting={onOffSetting}
          languageSetup={languageSetup}
          user={user}
          timeSetup={timeSetup}

          imageKey={imageKey}
          extraInfo={extraInfo}
        />

      </div>}



    </div>
  );
};

export default _AppMain;
