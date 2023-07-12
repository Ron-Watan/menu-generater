import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
import { setUser } from '../redux/userSlice';

import _MenuComponent from '../components/_MenuComponent';
// qqq

import NavbarComponent from './NavbarComponent';
import '../style/_main.css';
import '../style/mainForm.css';
import '../style/sideForm.css';
import '../style/addLanguage.css';
import '../style/iconPicker.css';
import '../style/colorPicker.css';
import '../style/themeSetup.css';
import '../style/_mediaPhone.css';
import '../style/_mediaPhone_Setting.css';

import { BsSquare, BsCheckSquare } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import Resizer from 'react-image-file-resizer';
import GenerateMenu from './GenerateMenu';
import BannerMainForm from './BannerMainForm';
import EditMenuName from './EditMenuName';
import TimePicker from './TimePicker';
import AddLanguage from './AddLanguage';
import AddLanguageSetup from './AddLanguageSetup';
import IconPickker from './IconPickker';

import IconPickkerMobile from './IconPickkerMobile';


import _01FeedBackMobile from './_01FeedBackMobile';
import _02QRCode from './_02QRCode';
import _TimePickerMobile from './_TimePickerMobile';
import _LanguageSetupMobile from './_LanguageSetupMobile';
import _ThemeSetupMobile from './_ThemeSetupMobile';
import _LanguageAddMobile from './_LanguageAddMobile';
import _10OnOffSettingMobile from './_10OnOffSettingMobile';



import ColorPickker from './ColorPickker';

import iconPhoto from '../icon/meal.svg';
import iconAddicIcon from '../icon/addIcon.svg';
import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';
import ThemeSetup from './ThemeSetup';


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
import MBicon_StarNoti from '../all-icon/mobile-bar/starnoti.svg'



import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconBack from '../all-icon/button-icon/MBback.svg'




import { MBBanner, MBMenu, MobileFormFood } from './_MobileSection';
const icon = '/static/media/food-color-SVG-sprite.c7acaa791b17c993c83fb8c054053b75.svg#food-tray`';
// import PreviewMyIcon from './PreviewMyIcon';

/*


001_getAllMenu



005_findOneMenu


901_chooseMenu
*/
//-///-///-///-///-///-///-///-///-///-


const _AppMain = () => {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  // const banner = useRef();

  const dispath = useDispatch();

  //1//
  const { user } = useSelector((state) => state.user);
  const [restaurantName, setRestaurantName] = useState('')
  //1// After Reload SET:
  const [categoryList, setCategoryList] = useState([]);

  const [menuName, setMenuName] = useState({
    menu_1: '',
    menu_2: '',
    menu_3: '',
  }); // timeSwitcher()

  const [timeSetup, setTimeSetup] = useState({});
  const [languageSetup, setLanguageSetup] = useState({});
  const [onOffSetting, setOnOffSetting] = useState({});
  // const [onOffSetting, setOnOffSetting] = useState({

  //   menuName: '', banner: '', sideBar: '', filter: '', vetgeterian: '', vegan: '', gluten_free: '', halal: '',
  //   footbar: '', langIcon: '', favoritHeart: '', feedBack: ''
  // })



  // const timeSetup = {
  //   timeType: timeType,
  //   allDayType: { menu_1: menuAllDayType.menu_1, menu_2: menuAllDayType.menu_2, menu_3: menuAllDayType.menu_3 },
  //   selectType: {
  //     menu_1: sumTimeM1, menu_2: sumTimeM2, menu_3: sumTimeM3,
  //   }
  // }

  const [menuId, setMenuId] = useState('');

  const [menuTime, setMenuTime] = useState(1); // timeSwitcher()

  const [state, setState] = useState({
    catagory: '',
    catagory_2: '',
    icon_catagory: '',
    imgId: '',
  });

  // input
  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value });
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
    favor: false,

    food_name_2: '',
    description_2: '',
    remark_2: '',
    price_2: '',

    food_name_3: '',
    description_3: '',
    remark_3: '',
    price_3: '',
  };

  const [listMenu, setListMenu] = useState([listMenuModel]);

  const inputListValue = (index, event) => {
    const option = event.target.value;
    if (option === 'vetgeterian' || option === 'vegan' || option === 'gluten_free' || option === 'halal') {
      let dataSet = [...listMenu];
      let data = dataSet[index];
      data[event.target.name] = event.target.checked;
      setListMenu(dataSet);
      return;
    }
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[event.target.name] = event.target.value;
    setListMenu(dataSet);
  };

  const [file, setFile] = useState();

  // const [description, setDescription] = useState("")
  const [originalName, setOriginalName] = useState('');


  const [themeSetup, setThemeSetup] = useState('');

  //- 001_getAllMenu
  const getAllMenu = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          const getReult = result.data.userMenu;

          setCategoryList(getReult.menu);

          setMenuName(getReult.menuName);
          setTimeSetup(getReult.timeSetup);
          setLanguageSetup(getReult.languageSetup);
          setThemeSetup(getReult.themeSetup);
          setOnOffSetting(getReult.onOffSetting)

          getAllImage()
          //   const checkTime = getReult.filter((el) => el.menuTime == menuTime;
          //   return el.menuTime == menuTime;
          // });

          // console.log(checkTime);
          // setCategoryList(result.data.userMenu.menu)
          // dispath(hideLoading())
          console.log('Server: Connected');
          setOnConnected(true);
        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      })
      .catch((err) => {
        dispath(hideLoading());
        // console.log("Can't not connect the server", err);
        console.log('Server: Connecting...');
        // Swal.fire("Can't not connect the server")
      });
  };

  const checkMaximumLists = () => {
    let countLists = 0;
    categoryList.forEach((el) => {
      if (el.menuTime === menuTime) countLists++;
    });
    return countLists;
  };
  // console.log(checkMaximumLists());
  let imgId = uuidv4();

  const submitCatagory = (e) => {
    e.preventDefault();

    if (checkMaximumLists() > 14) return alert('DDDD');

    scrollToTop();
    if (!state.catagory.trim()) return;

    file && uploadImage();
    // if(!file) imgId = 'a711e1b0-87ad-4156-bcac-52c05303c8fd'
    // dispath(showLoading())
    axios
      .post(
        `${process.env.REACT_APP_API}/user/create-manu`,
        {
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

          dispath(setUser(getReult));
          // getAllMenu();
          actionDelay();
          Unchecked();
          clearAllPage();
          dispath(hideLoading());

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
          // Swal.fire(result.data.message)
          dispath(hideLoading());
        }
      })
      .catch((err) => {
        dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };

  //-

  // const [originFile, setOriginFile] = useState('');
  const saveEditMenu = (e) => {
    if (!menuId) return;
    e.preventDefault();
    dispath(showLoading());

    file && saveImage();

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
          imgId: state.imgId,
          link: user.link,

          listMenu: [...listMenu],
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          dispath(setUser(result.data.userMenu));
          // console.log(result.data.userMenu)
          actionDelay();
          dispath(hideLoading());
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

  //- 005_findOneMenu

  // const findOneMenu = (e) => {
  //   e.preventDefault();
  //   setStart(true);
  //   setOnOffLangForm(false);
  //   const menuId = e.target.name;
  //   setMenuId(menuId);
  //   scrollToTop();
  //   dispath(showLoading());
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/findOneMenu`, { menuId: menuId, userId: user.userId }, ticketPass)
  //     .then((result) => {
  //       if (result.data.success) {
  //         dispath(hideLoading());
  //         chooseMenu(result.data.userMenu);
  //         actionDelay();
  //       } else {
  //         Swal.fire(result.data.message);
  //         dispath(hideLoading());
  //       }
  //     })
  //     .catch((err) => {
  //       // dispath(hideLoading())
  //       console.log("Can't not connect the server", err);
  //       Swal.fire("Can't not connect the server");
  //     });
  // };        


  // <button onClick={() => {
  //   setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1)
  //   prop.setTestTG((prop.testTG) => prop.testTG + 1)
  // }
  // const [triggerMemo, setTriggerMemo] = useState('')


  // useEffect(() => {
  //   if (triggerMemo) {
  //     setMemoListMenu([...categoryList]);
  //     console.log('meeeeeeeeeee')
  //   }
  // }, [triggerMemo]);


  const [memoListMenu, setMemoListMenu] = useState([])
  const [memoMenuId, setMemoMenuId] = useState('')


  const [someValue, setSomeValue] = useState(0)
  const heloooo = (() => {
    console.log('heloo2')
  })
  const getNumberWithMemo = useCallback(() => {
    console.log('hello')
    heloooo()
  }, [someValue])

  // setSomeValue((prev) => ++prev)

  const funrrr = () => {
    const resr = document.querySelector('#food-name')
    return resr.value
    console.log(resr)
  }

  const findOneMenu = (menuId) => {

    // e.preventDefault();
    setStart(true);
    setOnOffLangForm(false);
    scrollToTop();
    // const menuId = e.target.name;
    setMenuId(menuId);
    setFile('')
    dispath(showLoading())

    categoryList.map(oneMennu => {
      if (oneMennu.menuId === menuId) {
        allImage.map(el => {
          if (el.imgId === oneMennu.imgId) {
            setFile(el.tagImage)
          }
        })

        setState({
          catagory: oneMennu.catagory,
          catagory_2: oneMennu.catagory_2,
          icon_catagory: oneMennu.icon_catagory,
          imgId: oneMennu.imgId,
        });
        setListMenu(oneMennu.listMenu);
        setMemoIcon(oneMennu.icon_catagory)
        dispath(hideLoading())
        console.log(funrrr())

      }

    })

    // const newData = [...categoryList]
    // console.log(newData === categoryList);


    user.menu.map(oneMennu => {
      if (oneMennu.menuId === menuId) {

        // allImage.map(el => {
        //   if (el.imgId === oneMennu.imgId) {
        //     setFile(el.tagImage)
        //   }
        // })


        setMemoListMenu([...oneMennu.listMenu])
      }
    })


  };




  const clearAllPage = () => {
    setStart(false);
    // setMenuId('');
    setFile('');
    // setState({ catagory: '', imgId: '' });
    // const newData = [...user.menu]
    // console.log(newData === user.menu);
    // console.log(newData)

    // console.log(memoListMenu)
    // setCategoryList(memoListMenu)
    // setListMenu([...memoListMenu]);
    // console.log([listMenuModel])
    // const newUser = user.menu
    // setTriggerMemo((any) => triggerMemo + 1)

    // user.menu.map(oneMennu => {
    //   if (oneMennu.menuId === menuId) {

    // allImage.map(el => {
    //   if (el.imgId === oneMennu.imgId) {
    //     setFile(el.tagImage)
    //   }
    // })
    // const rrrr=user.menu[]
    // console.log(listMenu)
    // const test = {
    //   food_name: '',
    //   description: '',
    //   remark: '',
    //   price: '',
    //   vetgeterian: false,
    //   vegan: false,
    //   gluten_free: false,
    //   halal: false,
    //   favor: false,

    //   food_name_2: '',
    //   description_2: '',
    //   remark_2: '',
    //   price_2: '',

    //   food_name_3: '',
    //   description_3: '',
    //   remark_3: '',
    //   price_3: '',
    // }

    //     setListMenu(oneMennu.listMenu);
    //   }
    // })
  };




  const additem = () => {
    let newListMenu = listMenuModel;
    setListMenu([...listMenu, newListMenu]);

  };

  const removeItem = (index) => {
    let data = [...listMenu];
    data.splice(index, 1);
    setListMenu(data);
  };

  const deleteMenu = (e) => {
    e.preventDefault();
    // const menuId = e.target.value;
    console.log(menuId)
    dispath(showLoading());
    scrollToTop();

    axios
      .post(`${process.env.REACT_APP_API}/user/deleteMenu`, { menuId: menuId, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          dispath(setUser(result.data.userMenu));
          clearAllPage();
          actionDelay();
          // Swal.fire(result.data.message)
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
  // menus.forEach(menu => {
  //   menu.list.map(el => {

  //     // (console.log(el.food_name))

  //   })
  // })

  const [deleteBtn, setDeleteBtn] = useState(false);
  // function showDeleteBtn() { }
  // const [valuePhoto, setvaluePhoto] = useState('No file Chosen');
  // const valuePhotoFn = (e) => {
  //   setvaluePhoto(e.target.value);
  // };

  const [start, setStart] = useState(false);


  const ref = useRef([]);

  const Unchecked = () => {
    // console.log(ref.current.length)
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = false;
    }
  };
  const Checked = () => {
    // console.log(ref.current.length)
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = true;
    }
  };

  const [stateUp, setStateUp] = useState({
    file: null,
  });
  const fileHandler = (e) => {
    setStateUp({ ...stateUp, file: e.target.files[0] });
    document.getElementById('h1').textContent = e.target.files[0].name;
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      // dispath(showLoading())
      Resizer.imageFileResizer(
        file,
        390,
        693,
        'JPEG',
        100,
        0,
        (uri) => {
          setFile(uri);
          // setTimeout(() => {
          //   dispath(hideLoading());
          // }, 5000);
        },
        'base64'
      );
    });

  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  const uploadImage = () => {
    const newFile = dataURIToBlob(file);
    const formData = new FormData();

    formData.append('avatar', newFile, imgId);
    formData.append('userId', user.userId);
    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaod`, formData)
      // .post(`${process.env.REACT_APP_API}/user/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((result) => {
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const saveImage = () => {
    const newFile = dataURIToBlob(file);
    const formData = new FormData();

    formData.append('avatar', newFile, state.imgId);
    formData.append('userId', user.userId);
    axios
      .post(`${process.env.REACT_APP_API}/user/images/save`, formData)
      // .post(`${process.env.REACT_APP_API}/user/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((result) => {
        getAllImage();
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const [allImage, setAllImage] = useState([]);
  const getAllImage = () => {
    axios
      .post(`${process.env.REACT_APP_API}/user/images/all`, { userId: user.userId })
      .then((result) => {
        const getResult = result.data.images;
        const mapAllImage = getResult.map((el) => {
          const base64Flag = 'data:image/png;base64,';
          const imageStr = arrayBufferToBase64(el.img.data.data);
          const tagImage = base64Flag + imageStr;
          return {
            imgId: el.imgId,
            tagImage: tagImage,
          };
        });
        setAllImage(mapAllImage);
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // console.log(allImage)
  // const getImage = (imgId) => {
  //   dispath(showLoading());
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: imgId })
  //     .then((result) => {
  //       if (!result.data.images) {
  //         setFile('');
  //         return dispath(hideLoading());
  //       }

  //       const getResult = result.data.images;
  //       const base64Flag = 'data:image/png;base64,';
  //       const imageStr = arrayBufferToBase64(getResult.img.data.data);
  //       const tagImage = base64Flag + imageStr;

  //       // console.log(tagImage)

  //       setFile(tagImage);
  //       dispath(hideLoading());
  //       // setTimeout(() => {
  //       //   dispath(hideLoading());
  //       // }, 500);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // const getImage1 = (imgId) => {
  //   allImage.map((el) => {
  //     if (el.imgId === imgId) {
  //       setFile(el.tagImage);
  //     }
  //   });

  // };

  const delelteImage = () => {
    if (!file) return;

    axios
      .post(`${process.env.REACT_APP_API}/user/images/delete`, { imgId: state.imgId })
      .then((result) => { })
      .catch((err) => {
        console.error(err);
      });
  };

  function actionDelay() {
    setTimeout(() => {
      getAllMenu();
    }, 2000);
  }

  const openForm = () => {
    setStart(true);
    setMenuId('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', catagory_2: state.catagory_2, imgId: '' });
    setFile('');
    // window.location.reload(false)
  };

  const reloadDelay = () => {
    setTimeout(() => {
      window.location.reload(false)
    }, 500);


  }
  // const chooseMenu = (oneMennu) => {
  //   setState({
  //     catagory: oneMennu.catagory,
  //     catagory_2: oneMennu.catagory_2,
  //     icon_catagory: oneMennu.icon_catagory,
  //     imgId: oneMennu.imgId,
  //   });
  //   setMenuId(oneMennu.menuId);
  //   getImage(oneMennu.imgId);
  //   actionDelay();
  //   setListMenu(oneMennu.listMenu);
  //   setMemoIcon(oneMennu.icon_catagory);
  // };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [activeInput, setactiveInput] = useState(false);

  /////// CLOSE CONTROL /////////////////////////
  // function timeSwitcher(menuNo) {
  // setMenuTime(menuNo);
  // callmenuName(menuNo)
  // menuTimeNameFn(menuNo)
  // clearAllPage()

  // actionDelay();
  // };
  const [bannerImgArr, setBannerImgArr] = useState([]);

  // const [cloneBanner, setCloneBanner] = useState([])

  const [indexToBanner, setIndexToBanner] = useState(0);

  // UPLOAD IMAGE

  const dataURIToBlobBanner = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };


  const [menuNameChange, setMenuNameChange] = useState(false)
  const currentMenuName = 'menu_' + menuTime
  const inputMenuTimeName = (e) => {
    setMenuName({ ...menuName, [currentMenuName]: e.target.value })
    setMenuNameChange(true)
  }

  const saveNameMenu = () => {
    dispath(showLoading());
    axios
      .post(`${process.env.REACT_APP_API}/user/saveNameMenu`,
        {
          userId: user.userId,
          clientId: user.clientId,
          menuName: menuName
        }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userMenu;
          console.log(getReult)
          dispath(setUser(getReult))
          setMenuName(getReult.menuName)
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

  const [onOffQrCode, setOnoffQrCode] = useState(false);
  const [onOffBanner, setOnoffBanner] = useState(false);
  const [onOffMenu1, setOnoffMenu1] = useState({ switch: false, value: 1 });
  const [onOffMenu2, setOnoffMenu2] = useState({ switch: false, value: 2 });
  const [onOffMenu3, setOnoffMenu3] = useState({ switch: false, value: 3 });

  //-
  const [onOffTheme, setOnOffTheme] = useState(false);

  //- MOBILE  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-


  const [onOffFeedBAck_MB, setOnOffFeedBAck_MB] = useState(false);
  const [onOffQrCode_MB, setOnoffQrCode_MB] = useState(false);
  const [onOffBanner_MB, setOnoffBanner_MB] = useState(false);
  const [onOffMenu1_MB, setOnoffMenu1_MB] = useState(false);
  const [onOffMenu2_MB, setOnoffMenu2_MB] = useState(false);
  const [onOffMenu3_MB, setOnoffMenu3_MB] = useState(false);
  const [onOffTimePicker_MB, setOnOffTimePicker_MB] = useState(false);
  const [onOffLangSetup_MB, setOnOffLangSetup_MB] = useState(false);
  const [onOffThemeSetup_MB, setOnOffThemeSetup_MB] = useState(false);
  const [onOffSetting_MB, setOnOffSetting_MB] = useState(false);
  const [onOffQRCCode_MB, setOnOffQRCCode_MB] = useState(false);


  //-



  //-

  const [onOffMenuTime, setonOffMenuTime] = useState(false); //Time Picker
  const [onOffLangForm, setOnOffLangForm] = useState(false); // Lang Form
  const [onOffLangSetup, setOnOffLangSetup] = useState(false); // Lang Setup

  const [activeInputEn, setActiveInputEditName] = useState(false); // Edit Name
  // aaa
  //=
  const [deleteImageBannerTG, setDeleteImageBannerTG] = useState(0);
  const [saveImageBannerTG, setSaveImageBannerTG] = useState(0);
  const [resizeFileBannerTG, setResizeFileBannerTG] = useState(0);
  const [getAllImageBannerTG, setGetAllImageBannerTG] = useState(0);


  const [activeWindowIconPicker, setActiveWindowIconPicker] = useState(false);
  const [memoicon, setMemoIcon] = useState('');

  // <button onClick={() => {
  //   setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1)
  //   prop.setTestTG((prop.testTG) => prop.testTG + 1)
  // }
  //=
  const [navTime2TimePicker, setNavTime2TimePicker] = useState(0);
  const [navLang2LangSetUp, setNavLang2LangSetUp] = useState(0);
  const [navTheme2ThemeSetUp, setNavTheme2ThemeSetUp] = useState(0);
  const [navOnOff2OnOffSetting, setVavOnOff2OnOffSetting] = useState(0);

  //=

  const [onConnected, setOnConnected] = useState(false);




  const [mBnavIcon, setMBnavIcon] = useState(false)
  const mbIconColor = '#fff'
  const mbIconColorA = '#fff'
  const iconStrokeWidth = "3"

  const reloadIFrame = (e) => {
    // e.preventDefault()
    // contentDocument.location.reload(true)
    // contentWindow.location.reload()
    console.log('reloading..');
    document.getElementById('iframe').contentDocument.location.reload(true);
    document.getElementById('iframe').contentDocument.location.reload(true);
  }

  const [getStarNotification, setGetStarNotification] = useState('')

  // function usePrevious(value) {
  //   const ref = useRef();
  //   // useEffect(() => {
  //   ref.current = value; //assign the value of ref to the argument
  //   // }, [value]); //this code will run when the value of 'value' changes
  //   console.log(ref.current)
  //   return ref.current; //in the end, return the current ref value.
  // }

  useEffect(() => {
    getAllMenu();
  }, [user]);


  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-

  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className='mainAppMonitor'>

      {/* <div className='decorBar'>
        <div className={`containerEditMenuName ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && 'hiddenMe'}`}>
          <EditMenuName menuName={menuName} setMenuName={setMenuName} onOffMenu1={onOffMenu1} onOffMenu2={onOffMenu2} onOffMenu3={onOffMenu3} menuTime={menuTime} activeInputEn={activeInputEn} setActiveInputEditName={setActiveInputEditName} />
        </div>
      </div>

      <div className='decorBg'></div> */}
      <div className="">
        {/* <div className='monitor ' id='monitor'>
          <NavbarComponent className='sideBarTop'
            setStart={setStart}
            setMenuTime={setMenuTime}
            onOffQrCode={onOffQrCode}
            setOnoffQrCode={setOnoffQrCode}
            onOffBanner={onOffBanner}
            setOnoffBanner={setOnoffBanner}
            onOffMenu1={onOffMenu1}
            setOnoffMenu1={setOnoffMenu1}
            onOffMenu2={onOffMenu2}
            setOnoffMenu2={setOnoffMenu2}
            onOffMenu3={onOffMenu3}
            setOnoffMenu3={setOnoffMenu3}
            onOffMenuTime={onOffMenuTime}
            setonOffMenuTime={setonOffMenuTime}
            onOffLangSetup={onOffLangSetup}
            setOnOffLangSetup={setOnOffLangSetup}
            onOffTheme={onOffTheme}
            setOnOffTheme={setOnOffTheme}


            navTime2TimePicker={navTime2TimePicker}
            setNavTime2TimePicker={setNavTime2TimePicker}
            navLang2LangSetUp={navLang2LangSetUp}
            setNavLang2LangSetUp={setNavLang2LangSetUp}
            navTheme2ThemeSetUp={navTheme2ThemeSetUp}
            setNavTheme2ThemeSetUp={setNavTheme2ThemeSetUp}

          />

          <div className='monitor1'>


          </div>

          <div
            onClick={() => {
              setDeleteBtn(false);
              setActiveInputEditName(false);
            }}
            className='monitor2 '>
            <div className={`${onOffQrCode ? 'showMe' : 'hiddenMe'}`}>
              <GenerateMenu />
            </div>

            <div className={`bannerSection ${onOffBanner ? 'showAnimate' : 'hiddenAnimate'}`}>
              <BannerMainForm
                bannerImgArr={bannerImgArr}
                setBannerImgArr={setBannerImgArr}
                indexToBanner={indexToBanner}
                setIndexToBanner={setIndexToBanner}
                deleteImageBannerTG={deleteImageBannerTG}
                saveImageBannerTG={saveImageBannerTG}
                resizeFileBannerTG={resizeFileBannerTG}
                getAllImageBannerTG={getAllImageBannerTG}
              />
            </div>


            {onConnected && (
              <div className={`timePikerSection ${onOffMenuTime ? 'showMe' : 'displayNone'}`}>
                <TimePicker menuName={menuName} onOffMenuTime={onOffMenuTime} setonOffMenuTime={setonOffMenuTime} timeSetup={timeSetup} setTimeSetup={setTimeSetup} navTime2TimePicker={navTime2TimePicker} />
              </div>
            )}

            {onConnected && (
              <div className={`setupLangSection ${onOffLangSetup ? 'showMe' : 'displayNone'}`}>
                <AddLanguageSetup setOnOffLangSetup={setOnOffLangSetup} navLang2LangSetUp={navLang2LangSetUp} languageSetup={languageSetup} />
              </div>
            )}


            {activeWindowIconPicker && (
              <div className={`iconPickerSection`}>
                <IconPickker state={state} setState={setState} memoicon={memoicon} activeWindowIconPicker={activeWindowIconPicker} setActiveWindowIconPicker={setActiveWindowIconPicker} />
              </div>
            )}


            {onOffTheme && (
              <div className={`themeSetupSection`}>
                <ThemeSetup
                  setOnOffTheme={setOnOffTheme}
                  navTheme2ThemeSetUp={navTheme2ThemeSetUp}
                  restaurantName={restaurantName}
                  setRestaurantName={setRestaurantName}
                />
              </div>
            )}


            <div className={`formContainer ${start ? 'showMe' : 'displayNone'}`}>
              <form id='foodForm' encType='multipart/form-data' className={` formMenu`}>
                <div className='stickyBox1'></div>
                <i className="x">SWITCH LANGUAGE</i>
                <div className={`switchToLang ${onOffLangForm && 'displayNone'}`}>
                  <div className='stickyBox'>
                    {loading && (
                      <div className=' photoLoading'>
                        <div className='iconLoading'>
                          <span className='barOne'></span> <span className='barTwo'></span> <span className='barThree'></span>
                        </div>
                      </div>
                    )}

                    <div className='gridCat'>
                      <div
                        onClick={() => {
                          getAllMenu()
                          setStart(false);
                          setMenuId('');
                        }}
                        className='closeBtn'>
                        <i className='sr-only'>//-CLOSE//-</i>

                        <span className='boxCancel closeIconHover'>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='#000' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                          </svg>
                        </span>
                      </div>

                      <div className='flexIcoCat'>
                        <i className='sr-only'>//-!Icon//-</i>
                        <span className='iconCatForm'>
                          <svg
                            onClick={() => {
                              setActiveWindowIconPicker(!activeWindowIconPicker);

                            }}

                            className='itemSvg'>
                            {state.icon_catagory ? <use xlinkHref={`${state.icon_catagory}`} /> : <use xlinkHref={`/static/media/food-color-SVG-sprite.c7acaa791b17c993c83fb8c054053b75.svg#food-tray`} />}
                          </svg>
                        </span>
                        <div className='boxInputText'>
                          <input onChange={inputValue('catagory')} value={state.catagory} placeholder='Catagory' type='text' name='catagory' id='' autoComplete='off' className='inputText fontCat' required />
                        </div>
                      </div>

                      <i className='sr-only'>//-!Photo//-</i>
                      <div className='flexPhoto'>
                        <div className='xxx'>
                          <label htmlFor='file-upload' className='labelPhoto'>
                            <input
                              onChange={(e) => {
                                if (e.target.files.length === 0) return;
                                setOriginalName(e.target.files[0]?.name);
                                resizeFile(e.target.files[0]).then((res) => { });
                              }}
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='inputPhoto'
                            />

                            <div name='photo' className='photoFlex'>
                              <img className='boxPhoto' src={file ? file : iconPhoto} alt='' />
                            </div>
                          </label>

                          <div
                            onClick={() => {
                              delelteImage();
                              setFile('');
                            }}
                            className={`${file ? 'delPhoto' : 'hidden'} `}>
                            X
                          </div>
                        </div>

                        <p className='remarkPhoto'>
                          Upload a file PNG, JPG <br />
                          up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='layoutManu '>
                    {listMenu.map((el, index) => (
                      <div className={`layoutManu0 ${index % 2 !== 0 ? '' : 'light-Pgrey'}`} key={index}>
                        <div className='layoutManu1'>
                          <i className='sr-only'>!FOOD NAME</i>
                          <div className='flex'>
                            <span className='item'>{index + 1}</span>

                            <input onChange={(event) => inputListValue(index, event)} value={el.food_name} type='text' name='food_name' id='food-name' autoComplete='off' className='inputTextFood fontNormal' placeholder='Food name' />
                          </div>

                          <i className='sr-only'>!DESCRIPTION</i>
                          <div className=''>
                            <div className=''>
                              <textarea onChange={(event) => inputListValue(index, event)} value={el.description} id='description' name='description' rows='2' className='inputText fontSmall testAreaD' placeholder='Description'></textarea>
                            </div>
                          </div>

                          <i className='sr-only'>!REMARK</i>
                          <div className=''>
                            <div className=''>
                              <textarea onChange={(event) => inputListValue(index, event)} value={el.remark} name='remark' rows='1' id='remark' className='inputText fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                            </div>
                          </div>

                          <i className='sr-only'>!PRICE</i>

                          <div className='flex'>
                            <label htmlFor='price' className='labelPrice'>
                              Price
                            </label>
                            <div className=' '>
                              <input onChange={(event) => inputListValue(index, event)} value={el.price} type='text' name='price' id='price' autoComplete='off' className='inputTextFood fontCat' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                            </div>
                          </div>
                        </div>

                        <div className='layoutManu2'>
                          <fieldset>
                            <i className='sr-only'>!DIETARY</i>
                            <legend className='dietHeader'>
                              Filter <span className='dietOption'>(optional)</span>
                            </legend>
                            <span className='dietOption'>* Check marked if this menu recomened for:</span>
                            <div className=''>
                              <div className='flexDiet'>
                                <i className='sr-only'>!VEGETARIANT</i>
                                <label htmlFor={`vetgeterian_${index}`} className='relative flex gap-x-2'>
                                  <div className='flex h-6 items-center'>
                                    <input
                                      onChange={(event) => {
                                        inputListValue(index, event);
                                      }}
                                      ref={(element) => {
                                        ref.current[0] = element;
                                      }}
                                      value={'vetgeterian'}
                                      id={`vetgeterian_${index}`}
                                      checked={el.vetgeterian}
                                      name='vetgeterian'
                                      type='checkbox'
                                      className='hideCheckBox cursor-pointer  h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    {!el.vetgeterian && <BsSquare fill={'#444'} size={18} />}
                                    {el.vetgeterian && <BsCheckSquare fill={'#444'} size={18} />}
                                  </div>
                                  <div className='text-sm leading-6'>
                                    <label htmlFor={`vetgeterian_${index}`} className='cursor-pointer  font-medium text-gray-900'>
                                      Vetgeterian
                                    </label>
                                  </div>
                                </label>

                                <i className='sr-only'>!VEGAN</i>
                                <label htmlFor={`vegan${index}`} className='relative flex gap-x-2'>
                                  <div className='flex h-6 items-center'>
                                    <input
                                      onChange={(event) => {
                                        inputListValue(index, event);
                                      }}
                                      ref={(element) => {
                                        ref.current[1] = element;
                                      }}
                                      value={'vegan'}
                                      id={`vegan${index}`}
                                      checked={el.vegan}
                                      name='vegan'
                                      type='checkbox'
                                      className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    {!el.vegan && <BsSquare fill={'#444'} size={18} />}
                                    {el.vegan && <BsCheckSquare fill={'#444'} size={18} />}
                                  </div>
                                  <div className='text-sm leading-6'>
                                    <label htmlFor={`vegan${index}`} className='cursor-pointer font-medium text-gray-900'>
                                      Vegan
                                    </label>
                                  </div>
                                </label>

                                <i className='sr-only'>!GLUTEN FREE</i>
                                <label htmlFor={`gluten_free${index}`} className='relative flex gap-x-2'>
                                  <div className='flex h-6 items-center'>
                                    <input
                                      onChange={(event) => {
                                        inputListValue(index, event);
                                      }}
                                      ref={(element) => {
                                        ref.current[2] = element;
                                      }}
                                      value={'gluten_free'}
                                      id={`gluten_free${index}`}
                                      checked={el.gluten_free}
                                      name='gluten_free'
                                      type='checkbox'
                                      className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    {!el.gluten_free && <BsSquare fill={'#444'} size={18} />}
                                    {el.gluten_free && <BsCheckSquare fill={'#444'} size={18} />}
                                  </div>
                                  <div className='text-sm leading-6'>
                                    <label htmlFor={`gluten_free${index}`} className='cursor-pointer  font-medium text-gray-900'>
                                      Gluten-Free
                                    </label>
                                  </div>
                                </label>

                                <i className='sr-only'>!HALAL</i>
                                <label htmlFor={`halal${index}`} className='relative flex gap-x-2'>
                                  <div className='flex h-6 items-center'>
                                    <input
                                      onChange={(event) => {
                                        inputListValue(index, event);
                                      }}
                                      ref={(element) => {
                                        ref.current[3] = element;
                                      }}
                                      value={'halal'}
                                      id={`halal${index}`}
                                      checked={el.halal}
                                      name='halal'
                                      type='checkbox'
                                      className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    {!el.halal && <BsSquare fill={'#444'} size={18} />}
                                    {el.halal && <BsCheckSquare fill={'#444'} size={18} />}
                                  </div>
                                  <div className='text-sm leading-6'>
                                    <label htmlFor={`halal${index}`} className='cursor-pointer font-medium text-gray-900'>
                                      Halal
                                    </label>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <button onClick={() => removeItem(index)} className='boxRemoveItem boxCancel'>
                              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='#000' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                              </svg>
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    ))}

                    <i className='sr-only'> !ADD FOOD ITEM</i>

                    <div className='boxAddItem'>
                      <a href='#end' onClick={additem} type='' className='mainBtn saveBtnColor smallMainBtn'>
                        <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28 13V43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                          <path d="M13 28H43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                          <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="white" strokeWidth={iconStrokeWidth} />
                        </svg>
                        <span>ADD ITEM</span>
                      </a>

                    </div>
                  </div>
                </div>

                <i className='x'>LANGUAGE COMPONENT</i>

                <div className={`${!onOffLangForm && 'displayNone'}`}>
                  <AddLanguage state={state} listMenu={listMenu} inputValue={inputValue} inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} />
                </div>
              </form>



              <div onClick={() => setDeleteBtn(false)} className='buttonFormContainer '></div>
            </div>
          </div>

          <i className='x'>RIGHTBAR SECTION Position Fixedl</i>

          <div
            className={`sectionSideCat
        ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch || onOffBanner) && 'displayNone'}`}>
            <div className={`headCat`}>
              <div className={`headCat1 ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && 'displayNone'}`}>
                <button onClick={openForm} type='button' form='foodForm' className={`mainBtn newBtnRed newCatBtn`}>
                  <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 13V43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M13 28H43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="white" strokeWidth={iconStrokeWidth} />
                  </svg>
                  <span>NEW CATEGORY</span>
                </button>

                <button onClick={() => setDeleteBtn(!deleteBtn)} className='btnAbs'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </button>
              </div>

              <i className='x'>ADD PROMOTION PHOTO BUTTON Position Fixedl</i>

              <div className={`headCat1 ${(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch || !onOffBanner) && 'displayNone'}`}>
                <label htmlFor='file-uploadBanner' className='mainBtn newBtnRed newCatBtn'>
                  <svg width='25' height='25' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='1' y='1' width='63' height='63' rx='2' stroke='white' strokeWidth='2' />
                    <path d='M32 12L32 53' stroke='white' strokeWidth='2' strokeLinecap='round' />
                    <path d='M12 32L53 32' stroke='white' strokeWidth='2' strokeLinecap='round' />
                  </svg>
                  <input
                    onChange={(e) => {
                      if (e.target.files.length === 0) return;
                      setResizeFileBannerTG(e.target.files[0]);
                    }}
                    id='file-uploadBanner'
                    name='file-uploadBanner'
                    type='file'
                    className='inputPhoto'
                  />
                  <span className='disable-text-selection'>PROMOTION PHOTO</span>
                </label>
              </div>
            </div>

            <i className='x'>=== TAB START HERE ====</i>

            <i className='x'>CATEGORY LIST : Show List</i>

            <div className={`categoryStart ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && 'displayNone'}`}>
              {categoryList
                .filter((el) => el.menuTime == menuTime)
                .map((el, index) => (
                  <div key={index} className={`tabCat ${menuId === el.menuId ? 'chooseCat' : 'mini'}`}>
                    <button name={el.menuId} onClick={findOneMenu} className={`itemCat  ${menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>

                    <button name={el.menuId} onClick={findOneMenu} className='btnCat'>
                      {el.catagory}
                    </button>
                    <i className="x">EARTH BUTTON</i>

                    <div className={`iconSideBox  ${menuId === el.menuId ? '' : 'displayNone'}`}>
                      <button onClick={() => setOnOffLangForm(true)} value={el.menuId} type='submit' className={`langBtnL`}>
                        <svg fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-6 h-6'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                          />
                        </svg>
                      </button>
                    </div>
                    <i className="x">DELETE BUTTON</i>


                    <div className={`${deleteBtn ? 'dispBox' : 'dispNone'} iconSideBox`}>
                      <button onClick={deleteMenu} value={el.menuId} type='submit' className='deleteBtn'>
                        X
                      </button>
                    </div>
                  </div>
                ))}




            </div>




            <i className='x'>CATEGORY LIST New Save Cancel</i>

            <div className={`catSaveCancel ${menuId ? 'displayNone' : 'displayFlex'} ${start ? 'displayFlex' : 'displayNone'}`}>
              <i className='x'>SAVE BUTTON</i>
              <button onClick={submitCatagory} type='submit' form='foodForm' className='mainBtn saveBtnColor smallMainBtn xCatSave'>
                <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 13V43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                  <path d="M14 29L28 43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                  <path d="M28 43L42 29" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                  <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="white" strokeWidth={iconStrokeWidth} />
                </svg>
                <span>

                  SAVE NEW
                  <br />
                  CATEGORY
                </span>
              </button>

              <i className='x'>CANCEL BUTTON</i>
              <button
                onClick={() => {
                  setStart(false);
                  setMenuId('');
                }}
                className='mainBtn cancelBtnColor smallMainBtn smallMainBtnX '>
                <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 14L42 43" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                  <path d="M13 43L42 14" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                  <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} />
                </svg>
                <span>CANCEL</span>
              </button>
            </div>


            <i className='x'>CATEGORY LIST Edit Save Cancel</i>

            <div className={`catSaveCancelRemove ${!menuId ? 'displayNone' : 'displayFlex'}`}>
              <div className="catSaveCancel">
                <i className='x'>SAVE BUTTONT Edit Save Cancel</i>
                <button onClick={saveEditMenu} type='' className='mainBtn saveBtnColor smallMainBtn'>
                  <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 13V43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M14 29L28 43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M28 43L42 29" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="white" strokeWidth={iconStrokeWidth} />
                  </svg>
                  <span>SAVE</span>
                </button>

                <i className='x'>CANCEL BUTTON Edit Save Cancel</i>
                <button
                  onClick={() => {
                    setStart(false);
                    setMenuId('');
                  }}
                  className='mainBtn cancelBtnColor smallMainBtn'>
                  <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 14L42 43" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M13 43L42 14" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} />
                  </svg>
                  <span>CANCEL</span>
                </button>
              </div>

              <div className="catSaveCancel">
                <i className='x'>DELETE BUTTON REMOVE</i>
                <button
                  onClick={deleteMenu} value={menuId}
                  className='mainBtn cancelBtnColor smallMainBtn'>

                  <svg width='18' height='20' viewBox='0 0 27 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1 3.5L26.5 3.5' stroke='#8D6CE2' strokeLinecap='round' strokeWidth="2" />
                    <path d='M5.95338 28L3.55142 3.5H24.4592L22.5377 28H5.95338Z' stroke='#8D6CE2' strokeWidth="2" />
                    <rect x='9.5' y='0.5' width='9' height='3' rx='0.5' stroke='#8D6CE2' />
                    <path d='M8 8L10 24' stroke='#8D6CE2' strokeLinecap='round' strokeWidth="2" />
                    <path d='M18 24L20 8' stroke='#8D6CE2' strokeLinecap='round' strokeWidth="2" />
                    <path d='M14 8L14 24' stroke='#8D6CE2' strokeLinecap='round' strokeWidth="2" />
                  </svg>
                  <span>REMOVE</span>
                </button>
              </div>
            </div>



            <i className='x'>BANNER LIST : Show List</i>

            <div className={`bannerListContaner ${(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && 'displayNone'}`}>
              <div className='bannerWrapperList'>
                {bannerImgArr.map((el, index) => (
                  <div key={index} className={`tabCat ${indexToBanner === index ? 'chooseCat' : 'mini'}`}>
                    <button name={el.menuId} onClick={() => setIndexToBanner(index)} className='btnCat photoListBox'>
                      <img src={el} className='imageBannerForm photoList' />
                    </button>

                    <i className='x'>DELETE BUTTON : Trash icon</i>

                    <div className={`iconSideBox  ${indexToBanner === index ? '' : 'displayNone'}`}>
                      <button
                        onClick={() => {
                          setDeleteImageBannerTG((deleteImageBannerTG) => deleteImageBannerTG + 1);
                        }}
                        value={el.menuId}
                        type='submit'
                        className={`langBtnL trashPhoto`}>
                        <svg width='18' height='20' viewBox='0 0 27 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M1 3.5L26.5 3.5' stroke='#ddd' strokeLinecap='round' />
                          <path d='M5.95338 28L3.55142 3.5H24.4592L22.5377 28H5.95338Z' stroke='#ddd' />
                          <rect x='9.5' y='0.5' width='9' height='3' rx='0.5' stroke='#ddd' />
                          <path d='M8 8L10 24' stroke='#ddd' strokeLinecap='round' />
                          <path d='M18 24L20 8' stroke='#ddd' strokeLinecap='round' />
                          <path d='M14 8L14 24' stroke='#ddd' strokeLinecap='round' />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <i className='x'>BANNER LIST : Save Canecl Button</i>

              <div className='boxBtnPhotoList'>
                <i className="x">SAVE BUTTON</i>

                <button
                  onClick={() => {
                    setSaveImageBannerTG((saveImageBannerTG) => saveImageBannerTG + 1);
                  }}
                  className='mainBtn saveBtnColor smallMainBtn'>
                  <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 13V43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M14 29L28 43" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M28 43L42 29" stroke="white" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="white" strokeWidth={iconStrokeWidth} />
                  </svg>
                  <span>SAVE</span>
                </button>
                <i className="x">CANCEL BUTTON</i>

                <button
                  onClick={() => {
                    setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1);
                  }}
                  className='mainBtn cancelBtnColor smallMainBtn'>
                  <svg width="25" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 14L42 43" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <path d="M13 43L42 14" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} strokeLinecap="round" />
                    <rect x="1.5" y="1.5" width="53" height="53" rx="8.5" stroke="#8D6CE2" strokeWidth={iconStrokeWidth} />
                  </svg>
                  <span>CANCEL</span>
                </button>
              </div>
            </div>
          </div>
          <i className='x'>RIGHTBAR SECTION Finish</i>
        </div> */}
      </div>


      <i className='x'>//- START MOBILE //------------------------------------------------</i>



      <div className="mobile-creator unselectable">
        <i className="x"> Banner-----------------------------------------------</i>
        <div className={`mobile_function  ${!onOffBanner_MB && 'MB_slide_Down'}`}>
          <div className="topBar_function">
            <div className="GruopBtn">
              <button onClick={() => setOnoffBanner_MB(!onOffBanner_MB)} className="MB_Btn MB_Btn_Border">
                <img src={MBiconClose} alt="" />
              </button>
              <span className='MB_textBtn'>Close</span>

            </div>
            <div className="MB_title">Promotion/Banner Photo</div>
            <div className="GruopBtn">
              <label htmlFor='file-uploadBanner' className='MB_Btn MB_Btn_Color'>
                <img src={MBiconPlus} alt="" />
                <input
                  onChange={(e) => {
                    if (e.target.files.length === 0) return;
                    setResizeFileBannerTG(e.target.files[0]);
                  }}
                  id='file-uploadBanner'
                  name='file-uploadBanner'
                  type='file'
                  className='inputPhoto w_h_3'
                />
              </label>
              <span className='MB_textBtn'>Add Photo</span>
            </div>
          </div>

          <div className="Ab_in_MB_Funtion">
            <div className="topBar_blur">  </div>
            <MBBanner bannerImgArr={bannerImgArr} setIndexToBanner={setIndexToBanner} indexToBanner={indexToBanner} setResizeFileBannerTG={setResizeFileBannerTG} setDeleteImageBannerTG={setDeleteImageBannerTG} deleteImageBannerTG={deleteImageBannerTG}
              setSaveImageBannerTG={setSaveImageBannerTG} saveImageBannerTG={saveImageBannerTG} setGetAllImageBannerTG={setGetAllImageBannerTG} getAllImageBannerTG={getAllImageBannerTG} />
          </div>

        </div>



        {/* 111 */}

        <i className="x"> Manu 1 -----------------------------------------------</i>
        <div className={`mobile_function ${(!onOffMenu1_MB && !onOffMenu2_MB && !onOffMenu3_MB) && 'MB_slide_Down'}`}>
          <div className="topBar_function padding-right-5rem">
            <div className="GruopBtn">
              <button onClick={() => {
                setOnoffMenu1_MB(false)
                setOnoffMenu2_MB(false)
                setOnoffMenu3_MB(false)
              }} className="MB_Btn MB_Btn_Border">
                <img src={MBiconClose} alt="" />
              </button>
              <span className='MB_textBtn'>Close</span>
            </div>
            {/* <input value={'XXXXX'} type='text' maxLength="20"
              name='' id='menuName' autoComplete='off' className='MB_EditName_Input' placeholder='' /> */}


            <div className={`MB_flexStartBtn`}>
              <input onChange={inputMenuTimeName} value={menuName[currentMenuName]} type='text' maxLength="20"
                name='' id='menuName' autoComplete='off' className={`MB_EditName_Input `} placeholder='' />

              {menuNameChange && <div className={`MB_flex2Btn`}
                name='menuNameBox'>
                <button onClick={() => {
                  saveNameMenu()
                  setMenuNameChange(false)

                }
                } name='menuNameBox'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" className="w-5 h-5 iconEDName_SC">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>

                <button onClick={() => {
                  cancelEdit()
                  setMenuNameChange(false)


                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" className="w-5 h-5 iconEDName_SC">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>}


            </div>

            <div className="GruopBtn">
              <button onClick={openForm} type='button' form='foodForm' className={`MB_Btn MB_Btn_Color`}>
                <img src={MBiconPlus} alt="" />
              </button>
              <span className='MB_textBtn'>Add Category</span>
            </div>

            <div className="MB_flex2Btn">



            </div>

          </div>


          <div className="Ab_in_MB_Funtion">
            <div className="topBar_blur">  </div>



            <MBMenu categoryList={categoryList} menuTime={menuTime} menuId={menuId}
              findOneMenu={findOneMenu} setOnOffLangForm={setOnOffLangForm}
              deleteBtn={deleteBtn} deleteMenu={deleteMenu} saveEditMenu={saveEditMenu}
              start={start} setStart={setStart} />
          </div>
        </div>





        <div className={` mobile_formFood ${!start && 'MB_slide_Left'}`}>

          <div className="topBar_function flexStart">

            <div className="GruopBtn">

              <button onClick={() => setStart(false)} className="MB_Btn MB_Btn_Border">
                <img src={MBiconBack} alt="" />
              </button>
              <span className='MB_textBtn'>Back</span>

            </div>

            {/* 111 */}

            <input onChange={inputValue('catagory')} value={state.catagory} placeholder='Catagory name' type='text' name='catagory' id='' autoComplete='off'
              className='MB_EditName_Input widthInput' required />


            <div className="GruopBtn">
              <button type='button' form='foodForm' className={`MB_Btn`}>
                <svg
                  onClick={() => {
                    setActiveWindowIconPicker(!activeWindowIconPicker);
                  }}
                  className='MB_itemSvg'>
                  {state.icon_catagory ? <use xlinkHref={`${state.icon_catagory}`} /> : <use xlinkHref={`/static/media/food-color-SVG-sprite.c7acaa791b17c993c83fb8c054053b75.svg#food-tray`} />}
                </svg>
              </button>

              <span className='MB_textBtn'>Add Icon</span>

            </div>

          </div>


          <MobileFormFood ref={ref} menuId={menuId} listMenu={listMenu} inputListValue={inputListValue} iconPhoto={iconPhoto} file={file}
            setOriginalName={setOriginalName} resizeFile={resizeFile} delelteImage={delelteImage} setFile={setFile} additem={additem} removeItem={removeItem}
            start={start} setStart={setStart} setMenuId={setMenuId} submitCatagory={submitCatagory} saveEditMenu={saveEditMenu} deleteMenu={deleteMenu}
          />
        </div>



        <div className={` mobile_formFood ${!onOffLangForm && 'MB_slide_Left'}`}>
          <_LanguageAddMobile state={state} listMenu={listMenu} inputValue={inputValue}
            inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} />
        </div>

        <div className={`mobile_function topColorPicker ${!activeWindowIconPicker && 'MB_slide_Down'}`}>
          <IconPickkerMobile state={state} setState={setState} memoicon={memoicon} activeWindowIconPicker={activeWindowIconPicker}
            setActiveWindowIconPicker={setActiveWindowIconPicker} />
        </div>

        <div className={`mobile_function ${!onOffTimePicker_MB && 'MB_slide_Down'}`}>
          <_TimePickerMobile navTime2TimePicker={navTime2TimePicker} setOnOffTimePicker_MB={setOnOffTimePicker_MB}
            menuName={menuName} onOffMenuTime={onOffMenuTime} setonOffMenuTime={setonOffMenuTime} timeSetup={timeSetup} setTimeSetup={setTimeSetup} />
        </div>

        <div className={`mobile_function ${!onOffLangSetup_MB && 'MB_slide_Down'}`}>
          <_LanguageSetupMobile setOnOffLangSetup_MB={setOnOffLangSetup_MB} navLang2LangSetUp={navLang2LangSetUp} setOnOffLangSetup={setOnOffLangSetup}
            languageSetup={languageSetup} />
        </div>

        <div className={`mobile_ThemeFunction ${!onOffThemeSetup_MB && 'MB_slide_Left'}`}>
          <_ThemeSetupMobile setOnOffThemeSetup_MB={setOnOffThemeSetup_MB} navTheme2ThemeSetUp={navTheme2ThemeSetUp}
            restaurantName={restaurantName} setRestaurantName={setRestaurantName}
            reloadIFrame={reloadIFrame} setMBnavIcon={setMBnavIcon} />
        </div>



        <div className={`mobile_function ${!onOffFeedBAck_MB && 'MB_slide_Down'}`}>
          <_01FeedBackMobile setOnOffFeedBAck_MB={setOnOffFeedBAck_MB} setGetStarNotification={setGetStarNotification} />
        </div>

        <div className={`mobile_function ${!onOffQRCCode_MB && 'MB_slide_Down'}`}>
          <_02QRCode setOnOffQRCCode_MB={setOnOffQRCCode_MB} />
        </div>

        <div className={`mobile_function ${!onOffSetting_MB && 'MB_slide_Down'}`}>
          <_10OnOffSettingMobile setOnOffSetting_MB={setOnOffSetting_MB} navOnOff2OnOffSetting={navOnOff2OnOffSetting} onOffSetting={onOffSetting } />
        </div>


        <i className='x'>//- START MOBILE BAR //------------------------------------------------</i>

        <div className="MC_IconFixed">
          <i className='x'> Home -----------------------------------------------</i>
          <button onClick={() => setMBnavIcon(!mBnavIcon)} className={`MC_Tab MB_None_Adm ${mBnavIcon && 'adminActive'}  ${onOffThemeSetup_MB && 'displayNone'}  `}>
            <img src={MBicon_User} alt="" />
          </button>
        </div>


        <i className='x'> Scroll Navigation -----------------------------------------------</i>
        <i className='x'> 0-----------------------------------------------</i>

        <div className="MC_nav">



          <i className='x'> 10 On Off-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffSetting_MB(!onOffSetting_MB);
            setVavOnOff2OnOffSetting((testTG) => navOnOff2OnOffSetting + 1);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Onoff} alt="" />
          </button>














          <i className='x'> 9 Theme-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
            setMBnavIcon(false)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Theme} alt="" />
          </button>


          <div className={`MB_emptySm`}>&nbsp;</div>

          <i className='x'> 1 Feed Back -----------------------------------------------</i>
          <button onClick={() => {
            setOnOffFeedBAck_MB(!onOffFeedBAck_MB);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Feedback} alt="" />
            {getStarNotification > 0 && <span className={'starNotification'}>
              <img src={MBicon_StarNoti} alt="" />
              <span className={'starNotification starNotification_text'}>{getStarNotification}</span>
            </span>}
          </button>
          <i className='x'> 2 QR Code-----------------------------------------------</i>


          <button onClick={() => {
            setOnOffQRCCode_MB(!onOffQRCCode_MB);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Qrcode} alt="" />



          </button>














          <i className='x'> 3 Banner-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffBanner_MB(!onOffBanner_MB);
          }}
            name='bannerMB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Banner} alt="" />
          </button>

          <i className='x'> 4 Menu1-----------------------------------------------</i>

          <button onClick={() => {
            setOnoffMenu1_MB(!onOffMenu1_MB);
            setMenuTime(1)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >

            <img src={MBicon_Menu1} alt="" />
          </button>

          <i className='x'> 5 Menu2-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffMenu2_MB(!onOffMenu2_MB);
            setMenuTime(2)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Menu2} alt="" />
          </button>

          <i className='x'> 6 Menu3-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffMenu3_MB(!onOffMenu3_MB);
            setMenuTime(3)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Menu3} alt="" />
          </button>

          <i className='x'> 7 Time-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffTimePicker_MB(!onOffTimePicker_MB);
            setNavTime2TimePicker((testTG) => navTime2TimePicker + 1);

          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Time} alt="" />
          </button>

          <i className='x'> 8 Language-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffLangSetup_MB(!onOffLangSetup_MB);
            setNavLang2LangSetUp((testTG) => navLang2LangSetUp + 1);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Lang} alt="" />
          </button>




          {/* <i className='x'> 9 Theme-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
            setMBnavIcon(false)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Theme} alt="" />
          </button> */}



          <i className='x'> 11 Log Out-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffSetting_MB(!onOffSetting_MB);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <img src={MBicon_Logout} alt="" />
          </button>

          <i className='x'> 12 Empty-----------------------------------------------</i>
          <div className={`MB_empty`}>&nbsp;</div>

        </div>
        <i className='x'> END Navigation</i>


        <iframe id='iframe'
          className={`mobile_iframe  ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
            onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB||onOffSetting_MB||onOffQRCCode_MB)
            && 'iframe_scale_Down'}`}
          src="http://192.168.1.13:3000/customer/37f91f16-undefined" />





      </div>


    </div>
  );
};

export default _AppMain;
