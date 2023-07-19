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

import _20IconPickerMobile from './_20IconPickerMobile';


import _01FeedBackMobile from './_01FeedBackMobile';
import _02QRCode from './_02QRCode';
import _03BannerMobile from './_03BannerMobile';
import _04MenuForm from './_04MenuForm';
import _04MobileFormFood from './_04MobileFormFood';
import _08LanguageSetupMobile from './_08LanguageSetupMobile';
import _10OnOffSettingMobile from './_10OnOffSettingMobile';




import _TimePickerMobile from './_TimePickerMobile';
import _ThemeSetupMobile from './_ThemeSetupMobile';
import _LanguageAddMobile from './_LanguageAddMobile';



import ColorPickker from './ColorPickker';

import iconPhoto from '../icon/meal.svg';

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
  const [categoryList_1, setCategoryList_1] = useState([])
  const [categoryList_2, setCategoryList_2] = useState([])
  const [categoryList_3, setCategoryList_3] = useState([])
  // console.log(categoryList_1)
  // console.log(categoryList_2)
  // console.log(categoryList_3)
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

          const catList_menu_1 = getReult.menu.filter(el => el.menuTime === 1)
          const catList_menu_2 = getReult.menu.filter(el => el.menuTime === 2)
          const catList_menu_3 = getReult.menu.filter(el => el.menuTime === 3)


          setCategoryList_1(catList_menu_1)
          setCategoryList_2(catList_menu_2)
          setCategoryList_3(catList_menu_3)
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




  const saveReArangeList = () => {
    const newCategoryMoved = []
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
          // console.log(result.data.userMenu)

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
    // setLoadingManual(true)

    // e.preventDefault();
    setStart(true);
    setOnOffLangForm(false);
    scrollToTop();
    // const menuId = e.target.name;
    setMenuId(menuId);
    setFile('')
    // dispath(showLoading())

    categoryList.map(oneMennu => {
      if (oneMennu.menuId === menuId) {
        allImage.map(el => {
          if (el.imgId === oneMennu.imgId) {
            setFile(el.tagImage)
            // setLoadingManual(false)
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
    // setLoadingManual(true)
    dispath(showLoading())

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
        // setLoadingManual(false)
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

  //   else if (!languageTab && !listTab && !commentTab) {
  //   document.body.classList.remove('overflow-hidden');
  // }

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

  const [indexToBanner, setIndexToBanner] = useState('');

  // UPLOAD IMAGE

  const dataURIToBlobBanner = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };


  const [checkChangeName, setCheckChangeName] = useState(false)
  const currentMenuName = 'menu_' + menuTime
  const inputMenuTimeName = (e) => {
    setMenuName({ ...menuName, [currentMenuName]: e.target.value })
    setCheckChangeName(true)
  }

  const saveNameMenu = () => {
    // dispath(showLoading());
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

          // dispath(setUser(getReult))
          setMenuName(getReult.menuName)
          // Swal.fire(result.data.message)
          // setMenuName(result.data.nameMenu)
          // actionDelay();
          // setMenuTimeName('')

          // Swal.fire({
          //   title: 'SAVED',
          //   text: 'Your menu has been saved',
          //   toast: true,
          //   icon: 'success',
          //   // confirmButtonText: 'SAVED',
          //   showConfirmButton: false,
          //   // width: '16rem',
          //   // height: '5rem',
          //   iconColor: '#cb2722',
          //   // confirmButtonColor: '#cb2722',
          //   timer: 2000,
          // });
          // dispath(hideLoading());
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

  if (onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
    onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB) {
    document.body.classList.add('overflow-hidden')
  }
  const [loadingManual, setLoadingManual] = useState(false)


  useEffect(() => {
    getAllMenu();
  }, [user]);

  useEffect(() => {
    getAllImage()

  }, [user]);


  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-

  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className='mainAppMonitor'>
      <div className={`${loadingManual ? 'showMe' : 'hiddenMe'} photoLoading`}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>
      <i className='x'>//- START MOBILE //------------------------------------------------</i>



      <div className="mobile-creator unselectable">
        <i className="x"> Banner-----------------------------------------------</i>
        <div className={`mobile_function  ${!onOffBanner_MB && 'MB_slide_Down'}`}>

          <_03BannerMobile
            bannerImgArr={bannerImgArr}
            setBannerImgArr={setBannerImgArr}
            indexToBanner={indexToBanner}
            setIndexToBanner={setIndexToBanner}
            deleteImageBannerTG={deleteImageBannerTG}
            saveImageBannerTG={saveImageBannerTG}
            resizeFileBannerTG={resizeFileBannerTG}
            setResizeFileBannerTG={setResizeFileBannerTG}
            getAllImageBannerTG={getAllImageBannerTG}
            setOnoffBanner_MB={setOnoffBanner_MB}
            setDeleteImageBannerTG={setDeleteImageBannerTG}
            setSaveImageBannerTG={setSaveImageBannerTG}
            getAllImage={getAllImage}

          />
        </div>


        <i className="x"> Manu 1 111 -----------------------------------------------</i>
        <div className={`mobile_function ${(!onOffMenu1_MB && !onOffMenu2_MB && !onOffMenu3_MB) && 'MB_slide_Down'}`}>
          <_04MenuForm
            inputMenuTimeName={inputMenuTimeName}
            menuName={menuName}
            currentMenuName={currentMenuName}
            checkChangeName={checkChangeName}
            saveNameMenu={saveNameMenu}
            setCheckChangeName={setCheckChangeName}
            openForm={openForm}

            categoryList={categoryList}
            setCategoryList={setCategoryList}
            menuTime={menuTime} menuId={menuId}
            listMenu={listMenu}
            setListMenu={setListMenu}
            findOneMenu={findOneMenu} setOnOffLangForm={setOnOffLangForm}
            deleteBtn={deleteBtn} deleteMenu={deleteMenu} saveEditMenu={saveEditMenu}
            start={start} setStart={setStart}
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

          />

        </div>





        {/* <div className={` mobile_formFood ${!start && 'MB_slide_Left'}`}>

          <div className="topBar_function flexStart">

            <div className="GruopBtn">

              <button onClick={() => setStart(false)} className="MB_Btn MB_Btn_Border">
                <img src={MBiconBack} alt="" />
              </button>
              <span className='MB_textBtn'>Back</span>

            </div>



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
        </div> */}
        <div className={` mobile_formFood ${!start && 'MB_slide_Left'}`}>
          <_04MobileFormFood ref={ref} menuId={menuId} listMenu={listMenu} inputListValue={inputListValue} iconPhoto={iconPhoto} file={file}
            setOriginalName={setOriginalName} resizeFile={resizeFile} delelteImage={delelteImage} setFile={setFile} additem={additem} removeItem={removeItem}
            inputValue={inputValue} state={state} start={start} setStart={setStart} setMenuId={setMenuId} submitCatagory={submitCatagory} saveEditMenu={saveEditMenu} deleteMenu={deleteMenu}
            setActiveWindowIconPicker={setActiveWindowIconPicker}
            activeWindowIconPicker={activeWindowIconPicker} setListMenu={setListMenu} listMenuModel={listMenuModel} />

        </div>
        <div className={` mobile_formFood ${!onOffLangForm && 'MB_slide_Left'}`}>
          <_LanguageAddMobile state={state} listMenu={listMenu} inputValue={inputValue}
            inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} />
        </div>

        <div className={`mobile_function topColorPicker ${!activeWindowIconPicker && 'MB_slide_Down'}`}>
          <_20IconPickerMobile state={state} setState={setState} memoicon={memoicon} activeWindowIconPicker={activeWindowIconPicker}
            setActiveWindowIconPicker={setActiveWindowIconPicker} />
        </div>

        <div className={`mobile_function ${!onOffTimePicker_MB && 'MB_slide_Down'}`}>
          <_TimePickerMobile navTime2TimePicker={navTime2TimePicker} setOnOffTimePicker_MB={setOnOffTimePicker_MB}
            menuName={menuName} onOffMenuTime={onOffMenuTime} setonOffMenuTime={setonOffMenuTime} timeSetup={timeSetup} setTimeSetup={setTimeSetup} />
        </div>

        <div className={`mobile_function ${!onOffLangSetup_MB && 'MB_slide_Down'}`}>
          <_08LanguageSetupMobile setOnOffLangSetup_MB={setOnOffLangSetup_MB} navLang2LangSetUp={navLang2LangSetUp} setOnOffLangSetup={setOnOffLangSetup}
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
          <_10OnOffSettingMobile setOnOffSetting_MB={setOnOffSetting_MB} navOnOff2OnOffSetting={navOnOff2OnOffSetting} onOffSetting={onOffSetting} />
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

        <div className={`MC_nav ${!mBnavIcon && 'displayNone'}`}>





          <div className={`MB_emptySm`}>&nbsp;</div>



          <i className='x'> 1 Feed Back -----------------------------------------------</i>
          <button onClick={() => {
            setOnOffFeedBAck_MB(!onOffFeedBAck_MB);
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
            setOnOffQRCCode_MB(!onOffQRCCode_MB);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None `} >
            <img src={MBicon_Qrcode} alt="" />



          </button>





          <i className='x'> 3 Banner-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffBanner_MB(!onOffBanner_MB);
            setGetAllImageBannerTG((getAllImageBannerTG) => getAllImageBannerTG + 1)
          }}
            name='bannerMB'
            className={`MC_Tab MB_None `} >
            <img src={MBicon_Banner} alt="" />
          </button>












          <i className='x'> 4 Menu1-----------------------------------------------</i>

          <button onClick={() => {
            setOnoffMenu1_MB(!onOffMenu1_MB);
            setMenuTime(1)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None `} >

            <img src={MBicon_Menu1} alt="" />
          </button>

          <i className='x'> 5 Menu2-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffMenu2_MB(!onOffMenu2_MB);
            setMenuTime(2)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None `} >
            <img src={MBicon_Menu2} alt="" />
          </button>

          <i className='x'> 6 Menu3-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffMenu3_MB(!onOffMenu3_MB);
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



          <i className='x'> 9 Theme-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
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

          {/* <i className='x'> 9 Theme-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
            setMBnavIcon(false)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None `} >
            <img src={MBicon_Theme} alt="" />
          </button> */}



          <i className='x'> 11 Log Out-----------------------------------------------</i>
          <button onClick={() => {
            setOnOffSetting_MB(!onOffSetting_MB);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None `} >
            <img src={MBicon_Logout} alt="" />
          </button>

          <i className='x'> 12 Empty-----------------------------------------------</i>
          <div className={`MB_empty`}>&nbsp;</div>

        </div>
        <i className='x'> END Navigation</i>






      </div>
      <iframe id='iframe'
          className={`mobile_iframe  ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
            onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB)
            && 'iframe_scale_Down'}`}
          src="http://192.168.1.13:3000/customer/37f91f16-undefined" />


    </div>
  );
};

export default _AppMain;
