import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
import { setUser } from '../redux/userSlice';
import _MenuComponent from '../components/_MenuComponent';

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
import _20IconPickerMobile from './_20IconPickerMobile';

import _01FeedBackMobile from './_01FeedBackMobile';
import _02QRCode from './_02QRCode';
import _03BannerMobile from './_03BannerMobile';
import _04MenuForm from './_04MenuForm';
import _04MobileFormFood from './_04MobileFormFood';
import _04MobileLanguage from './_04MobileLanguage';
import _07TimePickerMobile from './_07TimePickerMobile';
import _08LanguageSetupMobile from './_08LanguageSetupMobile';
import _09ThemeSetupMobile from './_09ThemeSetupMobile';
import _10OnOffSettingMobile from './_10OnOffSettingMobile';
import FunctionalIFrameComponent from './zIframe.js'
// import _MenuComponent from '../../src/components/_MenuComponent'

import _SimulationApp from './simulattion/_SimulationApp'
// import _SimulationApp from '../../src/styleClient'


import iconPhoto from '../icon/meal.svg';
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
import IFrame from './zIframe'
import styled from '@emotion/styled';



const icon = '/static/media/food-color-SVG-sprite.c7acaa791b17c993c83fb8c054053b75.svg#food-tray`';


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
  const [originalClientMenu, setOriginalClientMenu] = useState([]);
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

  const [checkInputForm, setCheckInputForm] = useState(false)
  // console.log(checkInputForm)
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


  const inputRQuill = (index, name, event) => {
    setCheckInputForm(true)
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[name] = event
    setListMenu(dataSet);

  };
  const inputlistDescription = (index, name, event) => {
    const remark = event
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[name] = event
    setListMenu(dataSet);
    // let dataSet = [...listMenu];
    // let data = dataSet[index];
    // data[event.target.name] = event.target.value;
    // setListMenu(dataSet);
  };


  const [file, setFile] = useState();

  // const [description, setDescription] = useState("")
  // const [originalName, setOriginalName] = useState('');


  const [protectLoading, setProtectLoading] = useState(false);


  //- //= //-001_getAllMenu
  const getAllMenu = () => {
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {


          const getReult = result.data.userMenu;
          setOriginalClientMenu(getReult.menu);
          setCategoryList(getReult.menu);

          setMenuName(getReult.menuName);
          setTimeSetup(getReult.timeSetup);
          setLanguageSetup(getReult.languageSetup);
          // setThemeSetup(getReult.themeSetup);
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
          dispath(hideLoading())
          console.log('Server: Connected');
          setOnConnected(true);
        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
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


  //- //= //-
  const [checkEditImg, setCheckEditImg] = useState(false)
  const [oneClickCat, setOneClickCat] = useState(false)


  const submitCatagory = (e) => {
    dispath(showLoading())

    let imgId = uuidv4();
    if (checkMaximumLists() > 14) return alert('DDDD');
    // scrollToTop();
    // if (!state.catagory.trim()) return;

    // file && uploadImage();
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
          console.log('Submit Good !!!!!!!!!!!!!!')


          checkEditImg && uploadImage(imgId)
          // if (checkEditImg) {
          // const newFile = dataURIToBlob(file);
          // const formData = new FormData();

          // formData.append('avatar', newFile, imgId);
          // formData.append('userId', user.userId);
          // axios
          //   .post(`${process.env.REACT_APP_API}/user/images/uplaod`, formData)
          //   // .post(`${process.env.REACT_APP_API}/user/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          //   .then((result) => {
          //     dispath(hideLoading());
          //     setCheckEditImg(false)
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });
          // }


          // getAllMenu();
          // actionDelay();
          // Unchecked();
          // clearAllPage();
          // clearForm()
          // dispath(hideLoading());

          Swal.fire({
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          }).then(nothing => {
            setCheckInputForm(false)
            dispath(setUser(getReult));
            setStart(false)
            setMenuId('');
            setCheckEditImg(false)
            setOneClickCat(false)
            dispath(hideLoading())
          })

        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      })
      .catch((err) => {

        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };


  //- //= //-
  const resizeFile = (file) =>
    new Promise((resolve) => {
      dispath(showLoading())
      setImgLoading(true)
      // setLoadingManual(true)
      Resizer.imageFileResizer(
        file,
        390,
        693,
        'JPEG',
        100,
        0,
        (uri) => {
          setFile(uri);
          setCheckEditImg(true)
          setImgLoading(false)
          dispath(hideLoading())


        },
        'file'
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

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        setFile(e.target.result)
        // $('#blah')
        //   .attr('src', e.target.result)
        //   .width(150)
        //   .height(200);
      };

      reader.readAsDataURL(input.files[0]);

    }
  }



  //- //= //-// UPLOAD IMAGE
  const uploadImage = (imgId) => {
    dispath(showLoading())

    // const newFile = dataURIToBlob(file);
    const formData = new FormData();

    // formData.append('avatar', newFile, imgId);
    // formData.append('userId', user.userId);

    // console.log(file)
    // formData.append('avatar', file, imgId);
    // formData.append('userId', user.userId);
    // console.log('formData good')



    formData.append("avatar", file)
    formData.append('imgId', imgId);

    axios
      // .post(`${process.env.REACT_APP_API}/user/images/uplaod`, formData)
      .post(`${process.env.REACT_APP_API}/user/images/uplaod`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((result) => {
        dispath(hideLoading())

        console.log('UpLoad Good')

      })
      .catch((err) => {
        dispath(hideLoading())
        alert('Image TooLarge')
        console.error(err);
      });
  };


  //- //= //-
  const saveEditMenu = (e) => {
    dispath(showLoading())

    if (!menuId) return;
    checkEditImg && saveImage();

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
          setCheckEditImg(false)
          Swal.fire({
            title: 'Saved',
            // text: 'Your menu has been saved',
            toast: true,
            icon: 'success',

            showConfirmButton: false,

            timer: 1500,
          }).then(nothing => {
            !checkInputForm && setStart(false)
            setCheckInputForm(false)
            setCheckEditImg(false)
            setOneClickCat(false)

            dispath(hideLoading())

            // }, 1500);
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
  };



  // const [allImage, setAllImage] = useState([]);

  // const getAllImage = () => {
  //   setLoadingManual(true)

  //   console.log('all Img')
  //   console.log(user.userId)
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/images/all`, { userId: user.userId })
  //     .then((result) => {

  //       const getResult = result.data.images;
  //       const mapAllImage = getResult.map((el) => {
  //         const base64Flag = 'data:image/png;base64,';
  //         const imageStr = arrayBufferToBase64(el.img.data.data);
  //         const tagImage = base64Flag + imageStr;
  //         return {
  //           imgId: el.imgId,
  //           tagImage: tagImage,
  //         };
  //       });


  //       setLoadingManual(false)
  //       setCheckEditImg(false)

  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  //- //= //-
  const saveImage = () => {
    dispath(showLoading())

    const newFile = dataURIToBlob(file);
    const formData = new FormData();

    formData.append('avatar', newFile, state.imgId);
    formData.append('userId', user.userId);
    axios
      .post(`${process.env.REACT_APP_API}/user/images/save`, formData)
      .then((result) => {
        dispath(hideLoading())

      })
      .catch((err) => {
        alert('Image TooLarge')
        console.error(err);
      });
  };



  const saveReArangeList = () => {
    dispath(showLoading())

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
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(result => {
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



  // const [someValue, setSomeValue] = useState(0)
  // const heloooo = (() => {
  //   console.log('heloo2')
  // })
  // const getNumberWithMemo = useCallback(() => {
  //   console.log('hello')
  //   heloooo()
  // }, [someValue])

  // setSomeValue((prev) => ++prev)

  // const funrrr = () => {
  //   const resr = document.querySelector('#food-name')
  //   return resr.value
  //   console.log(resr)
  // }

  const [imgLoading, setImgLoading] = useState(false)
  const getImage = (imgId) => {
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: imgId })
      .then((result) => {
        if (!result.data.images) {

          dispath(hideLoading())
          return setFile('')

        }

        const getResult = result.data.images;
        const base64Flag = 'data:image/png;base64,';
        const imageStr = arrayBufferToBase64(getResult.img.data.data);
        const tagImage = base64Flag + imageStr;

        setFile(tagImage);
        dispath(hideLoading())
      })
      .catch((err) => {
        dispath(hideLoading())
        console.error(err);
      });
  };
  //=//=//=//=//=//=//=//=//=//=//=//=//=

  const findOneMenu = (menuId) => {

    setStart(true);
    setOnOffLangForm(false);
    scrollToTop();
    // const menuId = e.target.name;
    setMenuId(menuId);
    setFile('')
    // dispath(showLoading())

    categoryList.map(oneMennu => {

      if (oneMennu.menuId === menuId) {

        oneMennu.imgId && getImage(oneMennu.imgId)
        // allImage.map(el => {
        //   if (el.imgId === oneMennu.imgId) {
        //     setFile(el.tagImage)
        //     setLoadingManual(false)
        //   }

        // })

        setState({
          catagory: oneMennu.catagory,
          catagory_2: oneMennu.catagory_2,
          icon_catagory: oneMennu.icon_catagory,
          imgId: oneMennu.imgId,
        });
        setListMenu(oneMennu.listMenu);
        // setMemoIcon(oneMennu.icon_catagory)



      }



    })

    // const newData = [...categoryList]
    // console.log(newData === categoryList);


    // user.menu.map(oneMennu => {
    //   if (oneMennu.menuId === menuId) {

    //     allImage.map(el => {
    //       if (el.imgId === oneMennu.imgId) {
    //         setFile(el.tagImage)
    //       }
    //     })


    //     setMemoListMenu([...oneMennu.listMenu])

    //   }
    // })


  };





  const clearAllPage = () => {
    setStart(false);
    setMenuId('');
    setFile('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', imgId: '' });

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
      denyButtonText: `Don't delete`,
      confirmButtonColor: ' #dc3741',
      denyButtonColor: '#f56e4f',
    }).then((result) => {
      if (result.isConfirmed) {
        setCheckInputForm(true)
        let data = [...listMenu];
        data.splice(index, 1);
        setListMenu(data);
      }
    })

  };
  const [deleteLoading, setDeleteLoading] = useState(false)
  //- //= //-
  const delelteImage = () => {
    dispath(showLoading())
    setDeleteLoading(true)

    if (!file) {
      setDeleteLoading(false)
      setMenuId('');
      setStart(false);
    } else {

      axios
        .post(`${process.env.REACT_APP_API}/user/images/delete`, { imgId: state.imgId })
        .then((result) => {
          setTimeout(() => {
            setDeleteLoading(false)
            dispath(hideLoading())
            setMenuId('');
            setStart(false);
          }, 1000);

        })
        .catch((err) => {
          dispath(hideLoading())
          console.error(err);
        });
    }
  };


  const deleteMenu = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Do you want to delete Category?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
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
                setCheckInputForm(false)
                // dispath(hideLoading())

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

  function actionDelay() {
    setTimeout(() => {
      getAllMenu();
    }, 2000);
  }
  //=//=//=//=//=//=//=//=//=//=//=//=//=



  const openForm = () => {
    const promise = new Promise((resolve, reject) => {
      setListMenu([])
      setState({
        catagory: '', catagory_2: '', imgId: '', errCategory: false,
        icon_catagory: '/static/media/_empty.7b62bbf4b02d3d65f678e4361123ec76.svg#empty000',
      });
      setFile('');
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



  // const openForm1 = () => {

  //   setListMenu([listMenuModel])
  //   setState({ catagory: '', catagory_2: state.catagory_2, imgId: '' });
  //   setFile('');
  //   setStart(true)
  //   if (listMenu[0].food_name === '') return setNewForm(false)
  // };






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

  const [checkChangeTheme, setCheckChangeTheme] = useState(false)


  const [noSetTheme, setNoSetTheme] = useState('')
  const [nameTheme, setNameTheme] = useState('')

  //  ----------------------------------------------------------------------------------------------
  const [restaurantLogo, setRestaurantLogo] = useState('')
  // const imgId = user.link + 'restlogo'
  // const currentRestaurantName = user.restaurant_name
  // const inputRestaurantName = (e) => {
  //   setCheckChangeTheme(true)
  //   prop.setRestaurantName(e.target.value)
  // }
  // 1 ----------------------------------------------------------------------------------------------
  const [navAndFootBar, setNavAndFootBar] = useState({
    nameFontFamily: '', nameFontColor: '', nameFontSize: '',
    navBarColor: '', navBarFontColor: '',
    footBarStyle: ''
  })
  const { nameFontFamily, nameFontColor, nameFontSize, navBarColor, navBarFontColor, footBarStyle } = navAndFootBar

  const nameAllFontStyleFn = (name) => (e) => {
    setCheckChangeTheme(true)
    setNavAndFootBar({ ...navAndFootBar, [name]: e.target.value })
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

  const themeIconClientFn = (radius, colorLine, colorBg, solid, colorBorder) => {
    setCheckChangeTheme(true)
    setThemeIconNoBD({
      themeIconRadius: radius, themeIconColorLine: colorLine, themeIconBG: colorBg, themeIconSolid: solid, themeIconColorBorder: colorBorder
    })
    setExtraIcon(false)
  }
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












  //////=//=//=//=///////////////////////////////

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
    if (user.userId) getAllMenu()
  }, [user]);


  // useEffect(() => {
  //   getAllImage()
  // }, [user.userId]);


  //-///=///-///=///-///=///-///=///-   END FUNCTION   ///-///=///-///=///-///=///-///=///-

  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className=' mainAppMonitor '>
      {/* <div className='mainAppMonitor extraDit'> */}
      <div className={`${protectLoading && 'Full_Transparent_Loading'} `}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>
      <i className='x'>//- START MOBILE //------------------------------------------------</i>

      <div className="mobile-creator unselectable">



        <div className={`mobile_function ${!onOffFeedBAck_MB && 'MB_slide_Down'}`}>
          <_01FeedBackMobile setProtectLoading={setProtectLoading}
            setOnOffFeedBAck_MB={setOnOffFeedBAck_MB} setGetStarNotification={setGetStarNotification} />
        </div>

        <div className={`mobile_function ${!onOffQRCCode_MB && 'MB_slide_Down'}`}>
          <_02QRCode setProtectLoading={setProtectLoading}
            setOnOffQRCCode_MB={setOnOffQRCCode_MB} uploadImage={uploadImage} dataURIToBlob={dataURIToBlob} arrayBufferToBase64={arrayBufferToBase64}
          />
        </div>


        <i className="x"> Banner-----------------------------------------------</i>
        <div className={`mobile_function  ${!onOffBanner_MB && 'MB_slide_Down'}`}>

          <_03BannerMobile setProtectLoading={setProtectLoading}
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
            userId={user.userId}

          />
        </div>


        <i className="x"> Manu 1 111 -----------------------------------------------</i>
        <div className={`mobile_function ${(!onOffMenu1_MB && !onOffMenu2_MB && !onOffMenu3_MB) && 'MB_slide_Down'}`}>
          <_04MenuForm setProtectLoading={setProtectLoading}
            inputMenuTimeName={inputMenuTimeName}
            menuName={menuName}
            currentMenuName={currentMenuName}
            checkChangeName={checkChangeName}
            saveNameMenu={saveNameMenu}
            setCheckChangeName={setCheckChangeName}
            openForm={openForm}
            loadingManual={loadingManual}
            categoryList={categoryList}
            setCategoryList={setCategoryList}
            menuTime={menuTime} menuId={menuId}
            listMenu={listMenu}
            setListMenu={setListMenu}
            listMenuModel={listMenuModel}
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
            getAllMenu={getAllMenu}


          />

        </div>

        <div className={` mobile_formFood ${!start && 'MB_slide_Down'}`}>
          <_04MobileFormFood setProtectLoading={setProtectLoading}
            ref={ref} menuId={menuId} listMenu={listMenu} inputListValue={inputListValue} iconPhoto={iconPhoto} file={file}
            resizeFile={resizeFile} delelteImage={delelteImage} setFile={setFile} additem={additem} removeItem={removeItem}
            inputValue={inputValue} setState={setState} state={state} start={start} setStart={setStart} setMenuId={setMenuId} submitCatagory={submitCatagory} saveEditMenu={saveEditMenu} deleteMenu={deleteMenu}
            setActiveWindowIconPicker={setActiveWindowIconPicker} inputRQuill={inputRQuill} inputlistDescription={inputlistDescription}
            activeWindowIconPicker={activeWindowIconPicker} setListMenu={setListMenu} listMenuModel={listMenuModel}
            setCheckInputForm={setCheckInputForm} checkInputForm={checkInputForm} imgLoading={imgLoading}
            getAllMenu={getAllMenu} loadingManual={loadingManual} clearForm={clearForm} checkEditImg={checkEditImg}
            oneClickCat={oneClickCat}
            setOneClickCat={setOneClickCat}

          />

        </div>
        <div className={` mobile_formFood ${!onOffLangForm && 'MB_slide_Down'}`}>
          <_04MobileLanguage setProtectLoading={setProtectLoading}
            state={state} listMenu={listMenu} inputValue={inputValue} inputRQuill={inputRQuill}
            inputListValue={inputListValue} setOnOffLangForm={setOnOffLangForm} setStart={setStart} saveEditMenu={saveEditMenu}
            setCheckInputForm={setCheckInputForm} setListMenu={setListMenu} setMenuId={setMenuId} clearForm={clearForm} checkInputForm={checkInputForm} getAllMenu={getAllMenu}
          />
        </div>

        <div className={`mobile_function topColorPicker ${!activeWindowIconPicker && 'MB_slide_Down'}`}>
          <_20IconPickerMobile setProtectLoading={setProtectLoading}
            state={state} setState={setState} memoicon={memoicon} activeWindowIconPicker={activeWindowIconPicker}
            setActiveWindowIconPicker={setActiveWindowIconPicker} setCheckInputForm={setCheckInputForm} />
        </div>

        <div className={`mobile_function ${!onOffTimePicker_MB && 'MB_slide_Down'}`}>
          <_07TimePickerMobile setProtectLoading={setProtectLoading}
            navTime2TimePicker={navTime2TimePicker} setOnOffTimePicker_MB={setOnOffTimePicker_MB}
            menuName={menuName} onOffMenuTime={onOffMenuTime} timeSetup={timeSetup} setTimeSetup={setTimeSetup} />
        </div>

        <div className={`mobile_function ${!onOffLangSetup_MB && 'MB_slide_Down'}`}>
          <_08LanguageSetupMobile setProtectLoading={setProtectLoading}
            setOnOffLangSetup_MB={setOnOffLangSetup_MB} navLang2LangSetUp={navLang2LangSetUp} setOnOffLangSetup={setOnOffLangSetup}
            languageSetup={languageSetup} setLanguageSetup={setLanguageSetup} />

        </div>

        <div className={`mobile_ThemeFunction ${!onOffThemeSetup_MB && 'MB_slide_Left'}`}>
          <_09ThemeSetupMobile setProtectLoading={setProtectLoading}
            setOnOffThemeSetup_MB={setOnOffThemeSetup_MB} navTheme2ThemeSetUp={navTheme2ThemeSetUp}
            restaurantName={restaurantName} setRestaurantName={setRestaurantName}
            reloadIFrame={reloadIFrame} setMBnavIcon={setMBnavIcon} dataURIToBlob={dataURIToBlob} arrayBufferToBase64={arrayBufferToBase64}
            restaurantLogo={restaurantLogo}
            setRestaurantLogo={setRestaurantLogo}
            // setNameTheme={setNameTheme}
            // nameTheme={nameTheme}
            navAndFootBar={navAndFootBar}
            setNavAndFootBar={setNavAndFootBar}
            nameAllFontStyleFn={nameAllFontStyleFn}
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
            setExtraIcon={setExtraIcon}


          />
        </div>

        <div className="">
          <div className={`mobile_function ${!onOffSetting_MB && 'MB_slide_Down'}`}>
            <_10OnOffSettingMobile setProtectLoading={setProtectLoading}
              setOnOffSetting_MB={setOnOffSetting_MB} navOnOff2OnOffSetting={navOnOff2OnOffSetting} onOffSetting={onOffSetting} setOnOffSetting={setOnOffSetting} />
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





            {/* <div className={`MB_emptySm`}>&nbsp;</div> */}



            <i className='x'> 1 Feed Back -----------------------------------------------</i>
            <button onClick={() => {
              setOnOffFeedBAck_MB(!onOffFeedBAck_MB)

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



      </div>

      {/* style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}`, 'color': `${prop.themeSetup.body.bodyFonttColor}` }}

      styled={'backgroundColor': ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
          onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB)
        && 'fixed'}`} */}

      {/* <div className=""> */}
      <div className={`simulation ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
        onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB)
        && 'iframe_scale_Down'}`}
        style={{
          'position': `${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB || onOffThemeSetup_MB ||
            onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB)
            ? 'fixed' : 'sticky'}`
        }}

      >

        <_SimulationApp
          restaurantLogo={restaurantLogo}
          restaurantName={restaurantName}
          allMenuName={menuName}
          themeSetup={themeSetup}
          navAndFootBar={navAndFootBar}
          bodyStyle={bodyStyle}


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

          link={user.link}
          bannerImgArr={bannerImgArr}

          onOffSetting={onOffSetting}
          languageSetup={languageSetup}
          user={user}
          timeSetup={timeSetup}
        />

      </div>


      {/* </div> */}

      {/* <iframe id='iframe'
        className={`mobile_iframe  ${(onOffBanner_MB || onOffMenu1_MB || onOffMenu2_MB ||
          onOffMenu3_MB || onOffTimePicker_MB || onOffLangSetup_MB || onOffFeedBAck_MB || onOffSetting_MB || onOffQRCCode_MB)
          && 'iframe_scale_Down'}`}
        src="http://192.168.1.13:3000/customer/ce144dc5-undefined" /> */}


    </div>
  );
};

export default _AppMain;
