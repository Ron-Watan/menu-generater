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
import _TimePickerMobile from './_TimePickerMobile';
import _LanguageSetupMobile from './_LanguageSetupMobile';
import _ThemeSetupMobile from './_ThemeSetupMobile';
import _LanguageAddMobile from './_LanguageAddMobile';
import _OnOffSettingMobile from './_OnOffSettingMobile';



import ColorPickker from './ColorPickker';

import iconPhoto from '../icon/meal.svg';
import iconAddicIcon from '../icon/addIcon.svg';
import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';
import ThemeSetup from './ThemeSetup';


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


const MainForm = () => {
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
          setThemeSetup(getReult.setThemeSetup);

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

  //- MOBILE
  const [onOffQrCode_MB, setOnoffQrCode_MB] = useState(false);
  const [onOffBanner_MB, setOnoffBanner_MB] = useState(false);
  const [onOffMenu1_MB, setOnoffMenu1_MB] = useState(false);
  const [onOffMenu2_MB, setOnoffMenu2_MB] = useState(false);
  const [onOffMenu3_MB, setOnoffMenu3_MB] = useState(false);
  const [onOffTimePicker_MB, setOnOffTimePicker_MB] = useState(false);
  const [onOffLangSetup_MB, setOnOffLangSetup_MB] = useState(false);
  const [onOffThemeSetup_MB, setOnOffThemeSetup_MB] = useState(false);
  const [onOffSetting_MB, setOnOffSetting_MB] = useState(false);


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

  //=

  const [onConnected, setOnConnected] = useState(false);

  useEffect(() => {
    getAllMenu();
  }, [user]);

  // function usePrevious(value) {
  //   const ref = useRef();
  //   // useEffect(() => {
  //   ref.current = value; //assign the value of ref to the argument
  //   // }, [value]); //this code will run when the value of 'value' changes
  //   console.log(ref.current)
  //   return ref.current; //in the end, return the current ref value.
  // }

  const [mBnavIcon, setMBnavIcon] = useState(false)
  const mbIconColor = '#fff'
  const mbIconColorA = '#fff'
  const iconStrokeWidth = "3"
  // contentDocument.location.reload(true)
  // contentWindow.location.reload()
  function reloadIFrame(e) {
    // e.preventDefault()
    console.log('reloading..');
    document.getElementById('iframe').contentDocument.location.reload(true);
    document.getElementById('iframe').contentDocument.location.reload(true);

  }
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

      <div className='monitor ' id='monitor'>
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
      </div>
      {/* <div id='end' className=''></div> */}


      <i className='x'>//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>


      {/* 111 */}
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


              {/* <label htmlFor='menuName' className={`btnAbs ${!prop.activeInputEn ? 'showMe' : 'hiddenMe'}`} onClick={() => {
                prop.setActiveInputEditName(true)
              }}>
                <svg className="iconEditName" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#aaa">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </label> */}

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

            <i className="x">//-//-//-</i>

            <MBMenu categoryList={categoryList} menuTime={menuTime} menuId={menuId}
              findOneMenu={findOneMenu} setOnOffLangForm={setOnOffLangForm}
              deleteBtn={deleteBtn} deleteMenu={deleteMenu} saveEditMenu={saveEditMenu}
              start={start} setStart={setStart} />
          </div>
        </div>


        <i className="x">//-//-//----------------------------------------------------</i>



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


          <i className="x">//-//-//-</i>
          <MobileFormFood ref={ref} menuId={menuId} listMenu={listMenu} inputListValue={inputListValue} iconPhoto={iconPhoto} file={file}
            setOriginalName={setOriginalName} resizeFile={resizeFile} delelteImage={delelteImage} setFile={setFile} additem={additem} removeItem={removeItem}
            start={start} setStart={setStart} setMenuId={setMenuId} submitCatagory={submitCatagory} saveEditMenu={saveEditMenu} deleteMenu={deleteMenu}
          />
        </div>

        <div className={` mobile_formFood ${!onOffLangForm && 'MB_slide_Left'}`}>

          <_LanguageAddMobile state={state} listMenu={listMenu} inputValue={inputValue} inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} />


        </div>


        <div className={`mobile_function topColorPicker ${!activeWindowIconPicker && 'MB_slide_Down'}`}>
          <IconPickkerMobile state={state} setState={setState} memoicon={memoicon} activeWindowIconPicker={activeWindowIconPicker}
            setActiveWindowIconPicker={setActiveWindowIconPicker} />
        </div>

        <div className={`mobile_function ${!onOffTimePicker_MB && 'MB_slide_Down'}`}>

          <_TimePickerMobile navTime2TimePicker={navTime2TimePicker} setOnOffTimePicker_MB={setOnOffTimePicker_MB} menuName={menuName} onOffMenuTime={onOffMenuTime} setonOffMenuTime={setonOffMenuTime} timeSetup={timeSetup} setTimeSetup={setTimeSetup} />

        </div>

        <i className='x'> SYSTEM LANG SETUP  //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

        <div className={`mobile_function ${!onOffLangSetup_MB && 'MB_slide_Down'}`}>

          <_LanguageSetupMobile setOnOffLangSetup_MB={setOnOffLangSetup_MB} navLang2LangSetUp={navLang2LangSetUp} setOnOffLangSetup={setOnOffLangSetup}
            languageSetup={languageSetup} />

        </div>
        <i className='x'> SYSTEM THEME SETUP 111 //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

        <div className={`mobile_ThemeFunction ${!onOffThemeSetup_MB && 'MB_slide_Left'}`}>

          <_ThemeSetupMobile setOnOffThemeSetup_MB={setOnOffThemeSetup_MB} navTheme2ThemeSetUp={navTheme2ThemeSetUp} restaurantName={restaurantName} setRestaurantName={setRestaurantName}
            reloadIFrame={reloadIFrame} />
        </div>


        <div className={`mobile_function ${!onOffSetting_MB && 'MB_slide_Down'}`}>

          <_OnOffSettingMobile />

        </div>






        <i className='x'> ICON //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

        <div className="MC_IconFixed">
          <i className="x"> Home -----------------------------------------------</i>
          <button onClick={() => setMBnavIcon(!mBnavIcon)} className={`MC_Tab MB_None_Adm ${mBnavIcon && 'adminActive'}  ${onOffThemeSetup_MB && 'displayNone'}  `}>
            <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_231_53)">

                <g mask="url(#mask0_231_53)">
                  <path d="M48.5352 25C48.5352 37.9981 37.998 48.5352 25 48.5352C12.0017 48.5352 1.46484 37.9981 1.46484 25C1.46484 12.0017 12.0017 1.46485 25 1.46485C37.998 1.46485 48.5352 12.0017 48.5352 25Z" stroke={mbIconColorA} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M34.4142 21.8618C34.4142 27.061 30.1995 31.2759 25.0001 31.2759C19.8005 31.2759 15.5859 27.061 15.5859 21.8618C15.5859 16.6627 19.8005 12.4479 25.0001 12.4479C30.1995 12.4479 34.4142 16.6627 34.4142 21.8618Z" stroke={mbIconColorA} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.9583 43.8892C11.7112 36.7992 17.7104 31.2761 25 31.2761C32.2897 31.2761 38.2888 36.7996 39.0415 43.8894" stroke={mbIconColorA} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_231_53">
                  <rect width="50" height="50" fill={mbIconColor} />
                </clipPath>
              </defs>
            </svg>

          </button>

        </div>
        <div className="MC_nav">



          <div className={`MB_emptySm`}>&nbsp;</div>
          <i className="x"> QRCode -----------------------------------------------</i>
          {/* <button className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`}>
            <svg width="30" height="30" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14.7119V6.23729C2 3.89714 3.89714 2 6.23729 2H14.7119" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M39.2881 2H47.7627C50.1028 2 52 3.89714 52 6.23729V14.7119" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.7119 52H6.23729C3.89714 52 2 50.1028 2 47.7627V39.2881" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 39.2881V47.7627C52 50.1028 50.1028 52 47.7627 52H39.2881" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.7628 10.0508H10.0509V22.7626H22.7628V10.0508Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.9492 10.0508H31.2373V22.7626H43.9492V10.0508Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.7628 31.2373H10.0509V43.9492H22.7628V31.2373Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.9492 31.2373H31.2373V39.7119H43.9492V43.9492" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M35.4746 43.9492V39.7119" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>




          </button> */}

          <i className="x"> Banner-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffBanner_MB(!onOffBanner_MB);
          }}
            name='bannerMB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_193_199)">

                <g mask="url(#mask0_193_199)">
                  <path d="M55.5483 38.185C57.2694 37.1914 57.8591 34.9906 56.8654 33.2695L39.4393 3.08682C38.4457 1.36571 36.2449 0.776018 34.5238 1.76968C32.8028 2.76334 32.2131 4.96408 33.2068 6.68518L50.6328 36.8679C51.6264 38.589 53.8272 39.1787 55.5483 38.185Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.3648 50.2572C18.8963 49.373 19.4211 47.4147 18.5368 45.8833L9.35141 29.9737C8.46718 28.4421 6.50893 27.9174 4.97737 28.8016C3.44593 29.6859 2.92123 31.6441 3.80546 33.1756L12.9909 49.0852C13.875 50.6168 15.8334 51.1415 17.3648 50.2572Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4714 47.2088L11.7985 47.02L4.99771 35.2407L4.67068 35.4295C1.41789 37.3075 0.303366 41.4667 2.18138 44.7195C4.0594 47.9723 8.21864 49.0868 11.4714 47.2088Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.3382 14.3616L33.3634 6.95645L50.4763 36.5967L18.8609 46.4446L9.02734 29.4122L16.9422 22.1088" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50.9054 22.947C53.539 21.4265 54.4414 18.0588 52.9209 15.4252C51.4002 12.7915 48.0327 11.8893 45.399 13.4098" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.8609 46.4446L28.4738 63.0947C28.8152 63.6858 29.5712 63.8884 30.1624 63.5471L36.0077 60.1723C36.7485 59.7446 36.8414 58.7119 36.1889 58.1589L31.7734 54.4165L26.0057 44.4267" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M57.3383 12.9202L61.6262 10.4446" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M51.1299 7.24512L52.4428 2.34574" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M59.0526 21.1471L63.7309 22.4006" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_193_199">
                  <rect width="65" height="65" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <i className="x"> Manu 1 -----------------------------------------------</i>

          <button onClick={() => {
            setOnoffMenu1_MB(!onOffMenu1_MB);
            setMenuTime(1)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <svg width="34" height="32" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2882 21.5169C11.948 21.5169 10.0509 19.7336 10.0509 17.5338V13.5508H18.5255V17.5338C18.5255 19.7336 16.6283 21.5169 14.2882 21.5169Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2881 21.5168V29.4829" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 29.4832H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 37.4492H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 5.98305V45.0169C52 47.2076 50.0932 49 47.7627 49H31.2373C28.9068 49 27 47.2076 27 45.0169C27 47.2076 25.0932 49 22.7627 49H6.23729C3.90678 49 2 47.2076 2 45.0169V5.98305C2 3.79237 3.90678 2 6.23729 2H22.7627C25.0932 2 27 3.79237 27 5.98305C27 3.79237 28.9068 2 31.2373 2H47.7627C50.0932 2 52 3.79237 52 5.98305Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.3877 31.9277H37.5879V17.6748C36.9043 17.8311 36.2451 18.0361 35.6104 18.29C34.9854 18.5439 34.4141 18.8516 33.8965 19.2129L31.6113 15.9463C32.4512 15.4189 33.3057 14.9746 34.1748 14.6133C35.0537 14.2422 35.9375 13.9492 36.8262 13.7344C37.7246 13.5098 38.623 13.3486 39.5215 13.251C40.4297 13.1533 41.333 13.1045 42.2314 13.1045L42.2168 13.1338H42.2314V31.9277H47.1973V36H32.3877V31.9277Z" fill={mbIconColor} />
            </svg>

          </button>

          <i className="x">-----------------------------------------------</i>
          <button onClick={() => {
            setOnoffMenu2_MB(!onOffMenu2_MB);
            setMenuTime(2)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <svg width="34" height="32" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2882 21.5169C11.948 21.5169 10.0509 19.7336 10.0509 17.5338V13.5508H18.5255V17.5338C18.5255 19.7336 16.6283 21.5169 14.2882 21.5169Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2881 21.5168V29.4829" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 29.4832H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 37.4492H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 5.98305V45.0169C52 47.2076 50.0932 49 47.7627 49H31.2373C28.9068 49 27 47.2076 27 45.0169C27 47.2076 25.0932 49 22.7627 49H6.23729C3.90678 49 2 47.2076 2 45.0169V5.98305C2 3.79237 3.90678 2 6.23729 2H22.7627C25.0932 2 27 3.79237 27 5.98305C27 3.79237 28.9068 2 31.2373 2H47.7627C50.0932 2 52 3.79237 52 5.98305Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2882 21.5169C11.948 21.5169 10.0509 19.7336 10.0509 17.5338V13.5508H18.5255V17.5338C18.5255 19.7336 16.6283 21.5169 14.2882 21.5169Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2881 21.5168V29.4829" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 29.4832H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 37.4492H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 5.98305V45.0169C52 47.2076 50.0932 49 47.7627 49H31.2373C28.9068 49 27 47.2076 27 45.0169C27 47.2076 25.0932 49 22.7627 49H6.23729C3.90678 49 2 47.2076 2 45.0169V5.98305C2 3.79237 3.90678 2 6.23729 2H22.7627C25.0932 2 27 3.79237 27 5.98305C27 3.79237 28.9068 2 31.2373 2H47.7627C50.0932 2 52 3.79237 52 5.98305Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.2227 32.0156L36.2939 26.4785C37.5049 25.6484 38.4961 24.9258 39.2676 24.3105C40.0391 23.6953 40.6445 23.1484 41.084 22.6699C41.5234 22.1816 41.8262 21.7422 41.9922 21.3516C42.1582 20.9609 42.2412 20.5703 42.2412 20.1797C42.2412 19.7305 42.1484 19.3105 41.9629 18.9199C41.7773 18.5293 41.4844 18.1875 41.084 17.8945C40.6934 17.6016 40.1855 17.3721 39.5605 17.2061C38.9453 17.04 38.208 16.957 37.3486 16.957C36.0986 16.957 34.8535 17.1328 33.6133 17.4844C32.373 17.8359 31.1084 18.3975 29.8193 19.1689L27.6807 15.6533C29.1162 14.7646 30.6689 14.0713 32.3389 13.5732C34.0186 13.0752 35.7812 12.8262 37.627 12.8262C39.2383 12.8262 40.6348 13.0215 41.8164 13.4121C43.0078 13.793 43.9893 14.3154 44.7607 14.9795C45.542 15.6436 46.123 16.415 46.5039 17.2939C46.8848 18.1729 47.0752 19.1055 47.0752 20.0918C47.0752 20.8535 46.9482 21.5811 46.6943 22.2744C46.4404 22.9678 45.9961 23.6855 45.3613 24.4277C44.7266 25.1699 43.8672 25.9707 42.7832 26.8301C41.709 27.6797 40.3516 28.6465 38.7109 29.7305L35.3711 31.9277H47.9102V36H28.2227V32.0156Z" fill={mbIconColor} />
            </svg>





          </button>
          <button onClick={() => {
            setOnoffMenu3_MB(!onOffMenu3_MB);
            setMenuTime(3)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >
            <svg width="34" height="32" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2882 21.5169C11.948 21.5169 10.0509 19.7336 10.0509 17.5338V13.5508H18.5255V17.5338C18.5255 19.7336 16.6283 21.5169 14.2882 21.5169Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2881 21.5168V29.4829" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 29.4832H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 37.4492H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 5.98305V45.0169C52 47.2076 50.0932 49 47.7627 49H31.2373C28.9068 49 27 47.2076 27 45.0169C27 47.2076 25.0932 49 22.7627 49H6.23729C3.90678 49 2 47.2076 2 45.0169V5.98305C2 3.79237 3.90678 2 6.23729 2H22.7627C25.0932 2 27 3.79237 27 5.98305C27 3.79237 28.9068 2 31.2373 2H47.7627C50.0932 2 52 3.79237 52 5.98305Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2882 21.5169C11.948 21.5169 10.0509 19.7336 10.0509 17.5338V13.5508H18.5255V17.5338C18.5255 19.7336 16.6283 21.5169 14.2882 21.5169Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.2881 21.5168V29.4829" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 29.4832H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0509 37.4492H18.5255" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 5.98305V45.0169C52 47.2076 50.0932 49 47.7627 49H31.2373C28.9068 49 27 47.2076 27 45.0169C27 47.2076 25.0932 49 22.7627 49H6.23729C3.90678 49 2 47.2076 2 45.0169V5.98305C2 3.79237 3.90678 2 6.23729 2H22.7627C25.0932 2 27 3.79237 27 5.98305C27 3.79237 28.9068 2 31.2373 2H47.7627C50.0932 2 52 3.79237 52 5.98305Z" stroke={mbIconColor} strokeWidth={iconStrokeWidth} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.0576 30.5508C30.21 31.1172 31.4404 31.5322 32.749 31.7959C34.0674 32.0498 35.3516 32.1768 36.6016 32.1768C37.7148 32.1768 38.6768 32.0889 39.4873 31.9131C40.2979 31.7275 40.9668 31.4785 41.4941 31.166C42.0215 30.8535 42.4121 30.4824 42.666 30.0527C42.9199 29.623 43.0469 29.1592 43.0469 28.6611C43.0469 27.9873 42.8174 27.3867 42.3584 26.8594C41.8994 26.3223 41.2012 25.9219 40.2637 25.6582C39.3359 25.3848 38.1592 25.2773 36.7334 25.3359C35.3174 25.3945 33.6475 25.6729 31.7236 26.1709L31.7383 22.7432L40.293 17.1768H28.1787V13.1045H46.5039V17.0889L38.9746 21.8643C40.3516 21.8643 41.582 22.04 42.666 22.3916C43.75 22.7432 44.6631 23.2266 45.4053 23.8418C46.1475 24.457 46.7139 25.1846 47.1045 26.0244C47.4951 26.8643 47.6904 27.7676 47.6904 28.7344C47.6904 29.877 47.4365 30.917 46.9287 31.8545C46.4307 32.7822 45.7031 33.5781 44.7461 34.2422C43.7891 34.8965 42.6172 35.4043 41.2305 35.7656C39.8535 36.127 38.291 36.3076 36.543 36.3076C34.6875 36.3076 32.9736 36.1123 31.4014 35.7217C29.8291 35.3213 28.335 34.7695 26.9189 34.0664L29.0576 30.5508Z" fill={mbIconColor} />
            </svg>
          </button>





          <button onClick={() => {
            setOnOffTimePicker_MB(!onOffTimePicker_MB);
            setNavTime2TimePicker((testTG) => navTime2TimePicker + 1);

          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >Time</button>

          <i className='x'> ICON LANG SETUP  //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

          <button onClick={() => {
            setOnOffLangSetup_MB(!onOffLangSetup_MB);
            setNavLang2LangSetUp((testTG) => navLang2LangSetUp + 1);
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >Lang</button>

          <i className='x'> ICON THEME SETUP 111 //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

          <button onClick={() => {
            setOnOffThemeSetup_MB(!onOffThemeSetup_MB);
            setMBnavIcon(false)
          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >Theme</button>




          <i className='x'> onOffSetting_MB //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>

          <button onClick={() => {
            setOnOffSetting_MB(!onOffSetting_MB);

          }}
            name='Manu1MB'
            className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`} >OnOff</button>

          <i className='x'>  //-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-Finish</i>


          <div className={`MB_empty`}>&nbsp;</div>
          {/* <div className={`MC_Tab MB_None ${!mBnavIcon && 'displayNone'}`}></div> */}

        </div>


        <iframe id='iframe'
          className={`mobile_iframe  ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
            onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB)
            && 'iframe_scale_Down'}`}
          src="http://192.168.1.13:3000/customer/397ab613-undefined" />





      </div>


    </div>
  );
};

export default MainForm;
