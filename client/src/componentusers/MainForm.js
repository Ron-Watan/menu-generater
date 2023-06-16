import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
import { setUser } from '../redux/userSlice';
import NavbarComponent from './NavbarComponent';
import '../style/mainForm.css';
import '../style/sideForm.css';
import { BsSquare, BsCheckSquare } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import iconPhoto from '../icon/downloadIcon.svg'
import Resizer from 'react-image-file-resizer';
import GenerateMenu from './GenerateMenu';
import BannerMainForm from './BannerMainForm';
import EditMenuName from './EditMenuName';
import TimePicker from './TimePicker';
/*
qqq

001_getAllMenu



005_findOneMenu


901_chooseMenu

//-///-///-///-///-///-///-///-///-///-

<i className='sr-only'>//-!Photo//-</i>

*/




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

  // const ref = useRef()
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [categoryList, setCategoryList] = useState([]);
  const [menuId, setMenuId] = useState('');

  const [menuTime, setMenuTime] = useState(1); // timeSwitcher()


  const [menuName, setMenuName] = useState({
    menu_1: 'All Day Menu', menu_2: 'Lunch', menu_3: 'Dinner'
  }); // timeSwitcher()

  // const [menuTimeName, setMenuTimeName] = useState(''); // timeSwitcher()

  // const inputMenuTimeName = (e) => {
  //   setMenuTimeName(e.target.value)
  //   if (menuTime === 1) return setMenuName({ ...menuName, menu_1: e.target.value })
  //   if (menuTime === 2) return setMenuName({ ...menuName, menu_2: e.target.value })
  //   if (menuTime === 3) return setMenuName({ ...menuName, menu_3: e.target.value })

  // }

  // const callmenuName = (no) => {
  //   if (no === 1) return setMenuTimeName(menuName.menu_1)
  //   if (no === 2) return setMenuTimeName(menuName.menu_2)
  //   if (no === 3) return setMenuTimeName(menuName.menu_3)

  // }




  const [state, setState] = useState({
    catagory: '',
    imgId: '',
  });

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
  const [curImgId, setCurImgId] = useState('');

  // const [description, setDescription] = useState("")
  const [originalName, setOriginalName] = useState('')


  //- 001_getAllMenu
  const getAllMenu = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          const getReult = result.data.userMenu;
          // dispath(setUser(getReult))
          setCategoryList(getReult.menu);
          setMenuName({
            menu_1: getReult.menu_1, menu_2: getReult.menu_2, menu_3: getReult.menu_3
          })

          //   const checkTime = getReult.filter((el) => el.menuTime == menuTime;
          //   return el.menuTime == menuTime;
          // });



          // console.log(checkTime);
          // setCategoryList(result.data.userMenu.menu)
          // dispath(hideLoading())
          console.log("Server: Connected");

        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      })
      .catch((err) => {
        dispath(hideLoading());
        // console.log("Can't not connect the server", err);
        console.log("Server: Connecting...");
        // Swal.fire("Can't not connect the server")
      });
  };





  let imgId = uuidv4();

  const submitCatagory = (e) => {
    e.preventDefault();
    if (categoryList.length > 14) return alert('DDDD');
    componentDidMount();
    if (!state.catagory.trim()) return;

    file && uploadImage();
    // if(!file) imgId = 'a711e1b0-87ad-4156-bcac-52c05303c8fd'
    // dispath(showLoading())
    axios
      .post(
        `${process.env.REACT_APP_API}/user/create-manu`,
        {
          userId: user.userId,
          menuTime: menuTime,
          catagory: state.catagory,
          imgId: imgId,
          link: user.link,

          listMenu: [...listMenu],
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userMenu;

          dispath(setUser(getReult))
          getAllMenu();;
          actionDelay();
          Unchecked();
          setNothing();
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

  const [originFile, setOriginFile] = useState('')


  const saveEditMenu = (e) => {
    if (!menuId) return;
    e.preventDefault();
    dispath(showLoading());

    file && saveImage();

    axios
      .post(`${process.env.REACT_APP_API}/user/saveEditMenu`,
        {
          userId: user.userId,
          menuId: menuId,
          menuTime: menuTime,

          catagory: state.catagory,
          imgId: state.imgId,
          link: user.link,

          listMenu: [...listMenu],

        }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          dispath(setUser(result.data.userMenu));
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

  const findOneMenu = (e) => {
    e.preventDefault();
    setStart(true);
    const menuId = e.target.name;
    setMenuId(menuId);
    componentDidMount();
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/findOneMenu`, { menuId: menuId, userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          dispath(hideLoading())
          chooseMenu(result.data.userMenu);
          actionDelay();
        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())
        }
      })
      .catch((err) => {
        // dispath(hideLoading())
        console.log("Can't not connect the server", err);
        Swal.fire("Can't not connect the server");
      });
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
    const menuId = e.target.value;
    dispath(showLoading());
    componentDidMount();

    axios
      .post(`${process.env.REACT_APP_API}/user/deleteMenu`, { menuId: menuId, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          dispath(setUser(result.data.userMenu));
          setNothing();
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
  const startCreate = () => {
    setMenuId('');
  };

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


  //-///-///-///-///-///-///-///-///-///-///-


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
        getAllImage()
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


  const [allImage, setAllImage] = useState([])


  const getAllImage = () => {


    axios
      .post(`${process.env.REACT_APP_API}/user/images/all`, { userId: user.userId })
      .then((result) => {
        const getResult = result.data.images;
        const mapAllImage = getResult.map(el => {
          const base64Flag = 'data:image/png;base64,';
          const imageStr = arrayBufferToBase64(el.img.data.data);
          const tagImage = base64Flag + imageStr;
          return {
            imgId: el.imgId,
            tagImage: tagImage
          }
        })
        setAllImage(mapAllImage)
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // console.log(allImage)
  const getImage = (imgId) => {
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: imgId })
      .then((result) => {
        if (!result.data.images) {
          setFile('')
          return dispath(hideLoading());
        }

        const getResult = result.data.images;
        const base64Flag = 'data:image/png;base64,';
        const imageStr = arrayBufferToBase64(getResult.img.data.data);
        const tagImage = base64Flag + imageStr;

        // console.log(tagImage)

        setFile(tagImage);
        dispath(hideLoading());
        // setTimeout(() => {
        //   dispath(hideLoading());
        // }, 500);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getImage1 = (imgId) => {

    allImage.map(el => {
      if (el.imgId === imgId) {

        setFile(el.tagImage);
      }
    })
    //////////////////////

    //////////////////////

  };

  const delelteImage = () => {

    if (!file) return

    axios
      .post(`${process.env.REACT_APP_API}/user/images/delete`, { imgId: state.imgId })
      .then((result) => {
      })
      .catch((err) => {
        console.error(err);
      });
  }


  function actionDelay() {
    setTimeout(() => {
      getAllMenu();

    }, 2000);
  }

  const openForm = () => {
    setStart(true);
    setMenuId('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', imgId: '' });
    setFile('');

    // window.location.reload(false)
  };

  const setNothing = () => {
    setStart(false);
    setMenuId('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', imgId: '' });
    setFile('');

  };

  // 901_chooseMenu
  const chooseMenu = (oneMennu) => {

    setState({ catagory: oneMennu.catagory, imgId: oneMennu.imgId });
    setMenuId(oneMennu.menuId);
    getImage(oneMennu.imgId)
    actionDelay();
    setListMenu(oneMennu.listMenu)

  };





  useEffect(() => {
    getAllMenu();
    // getAllImage()
    // eslint-disable-next-line
  }, [user]);



  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };


  const [activeInput, setactiveInput] = useState(false)




  /////// CLOSE CONTROL /////////////////////////
  // function timeSwitcher(menuNo) {
  // setMenuTime(menuNo);
  // callmenuName(menuNo)
  // menuTimeNameFn(menuNo)
  // setNothing()

  // actionDelay();
  // };


  const [onOffQrCode, setOnoffQrCode] = useState(true)
  const [onOffBanner, setOnoffBanner] = useState(false)
  const [onOffMenu1, setOnoffMenu1] = useState({ switch: true, value: 1 })
  const [onOffMenu2, setOnoffMenu2] = useState({ switch: false, value: 2 })
  const [onOffMenu3, setOnoffMenu3] = useState({ switch: false, value: 3 })
  const [onOffMenuTime, setonOffMenuTime] = useState(false)


  const [activeInputEn, setActiveInputEn] = useState(false) // Edit Name


  // qqq
  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  const { loading } = useSelector((state) => state.alerts);

  return (

    <div>

      <div className='decorBar'>
        <div className={`containerEditMenuName ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && 'hiddenMe'}`}>

          <EditMenuName
            menuName={menuName}
            setMenuName={setMenuName}
            onOffMenu1={onOffMenu1}
            onOffMenu2={onOffMenu2}
            onOffMenu3={onOffMenu3}

            menuTime={menuTime}

            activeInputEn={activeInputEn}
            setActiveInputEn={setActiveInputEn}
          />
        </div>
      </div>

      <div className='decorBg'></div>

      <div className='monitor ' id='monitor'>
        <NavbarComponent
          // timeSwitcher={timeSwitcher}
          setMenuTime={setMenuTime}
          onOffQrCode={onOffQrCode} setOnoffQrCode={setOnoffQrCode}
          onOffBanner={onOffBanner} setOnoffBanner={setOnoffBanner}
          onOffMenu1={onOffMenu1} setOnoffMenu1={setOnoffMenu1}
          onOffMenu2={onOffMenu2} setOnoffMenu2={setOnoffMenu2}
          onOffMenu3={onOffMenu3} setOnoffMenu3={setOnoffMenu3}
          onOffMenuTime={onOffMenuTime} setonOffMenuTime={setonOffMenuTime}

        />

        <div className='monitor1'>

        </div>


        <div onClick={() => {
          setDeleteBtn(false)
          setActiveInputEn(false)
        }} className='monitor2 '>

          <div className={`${onOffQrCode ? 'showMe' : 'hiddenMe'}`}>
            <GenerateMenu />
          </div>

          <div className={`${onOffBanner ? 'showMe' : 'hiddenMe'}`}>
            <BannerMainForm />
          </div>

          <div className={`timePikerSection ${onOffMenuTime ? 'showMe' : 'hiddenMe'}`}>
            <TimePicker />
          </div>


          <div className={` formContainer ${start ? 'showMe' : 'hiddenMe'}`}>


            <form id='foodForm' encType='multipart/form-data' className={` formMenu`} onSubmit={submitCatagory}>


              <div className='stickyBox1'></div>

              <div className='stickyBox'>
                {loading && (<div className=" photoLoading">
                  <div className="iconLoading">
                    <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                  </div>
                </div>)}
                <div className='gridCat'>
                  <div
                    onClick={() => {
                      setStart(false);
                      setMenuId('');
                    }}
                    className='closeBtn'>
                    CLOSE
                  </div>
                  <div className='flexIcoCat'>
                    <div className='icon'>
                      <svg width='35' height='35' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M1.656 16.622C1.656 16.91 1.491 17.054 1.161 17.054C0.825 17.054 0.657 16.91 0.657 16.622V11.978C0.657 11.69 0.825 11.546 1.161 11.546C1.491 11.546 1.656 11.69 1.656 11.978V16.622ZM1.845 10.412C1.845 10.604 1.779 10.766 1.647 10.898C1.515 11.03 1.353 11.096 1.161 11.096C0.969 11.096 0.804 11.03 0.666 10.898C0.534 10.766 0.468 10.604 0.468 10.412C0.468 10.214 0.534 10.049 0.666 9.917C0.804 9.785 0.969 9.719 1.161 9.719C1.353 9.719 1.515 9.785 1.647 9.917C1.779 10.049 1.845 10.214 1.845 10.412ZM7.23558 15.569C7.23558 16.061 7.07358 16.424 6.74958 16.658C6.43158 16.886 6.11358 17 5.79558 17H4.28358C3.96558 17 3.65658 16.886 3.35658 16.658C3.21258 16.538 3.10158 16.388 3.02358 16.208C2.94558 16.022 2.90658 15.809 2.90658 15.569V13.004C2.90658 12.518 3.05658 12.158 3.35658 11.924C3.50658 11.816 3.65958 11.732 3.81558 11.672C3.97758 11.606 4.13358 11.573 4.28358 11.573H5.79558C5.93958 11.573 6.09858 11.603 6.27258 11.663C6.44658 11.717 6.60858 11.792 6.75858 11.888C6.90258 11.99 7.01658 12.131 7.10058 12.311C7.19058 12.491 7.23558 12.704 7.23558 12.95V13.4C7.23558 13.688 7.07058 13.832 6.74058 13.832C6.41058 13.832 6.24558 13.688 6.24558 13.4V13.013C6.24558 12.863 6.19758 12.728 6.10158 12.608C6.01158 12.482 5.85558 12.419 5.63358 12.419H4.50858C4.28658 12.419 4.12758 12.482 4.03158 12.608C3.94158 12.728 3.89658 12.863 3.89658 13.013V15.56C3.89658 15.704 3.94158 15.839 4.03158 15.965C4.12758 16.091 4.28658 16.154 4.50858 16.154H5.63358C5.85558 16.154 6.01158 16.091 6.10158 15.965C6.19758 15.839 6.24558 15.704 6.24558 15.56V15.146C6.24558 14.864 6.41058 14.723 6.74058 14.723C7.07058 14.723 7.23558 14.864 7.23558 15.146V15.569ZM11.2446 11.582C11.4006 11.582 11.5596 11.615 11.7216 11.681C11.8896 11.747 12.0516 11.831 12.2076 11.933H12.1986C12.3546 12.047 12.4746 12.197 12.5586 12.383C12.6426 12.563 12.6846 12.773 12.6846 13.013V15.569C12.6846 16.061 12.5226 16.424 12.1986 16.658C11.8806 16.886 11.5626 17 11.2446 17H9.80459C9.64859 17 9.48959 16.973 9.32759 16.919C9.16559 16.865 9.00659 16.778 8.85059 16.658C8.52659 16.43 8.36459 16.067 8.36459 15.569V13.013C8.36459 12.773 8.40659 12.563 8.49059 12.383C8.57459 12.197 8.69459 12.047 8.85059 11.933H8.84159C8.99159 11.831 9.15059 11.747 9.31859 11.681C9.48659 11.615 9.64859 11.582 9.80459 11.582H11.2446ZM11.0826 16.154C11.3046 16.154 11.4606 16.091 11.5506 15.965C11.6466 15.839 11.6946 15.704 11.6946 15.56V13.022C11.6946 12.872 11.6466 12.737 11.5506 12.617C11.4606 12.491 11.3046 12.428 11.0826 12.428H9.96659C9.74459 12.428 9.58559 12.491 9.48959 12.617C9.39959 12.737 9.35459 12.872 9.35459 13.022V15.56C9.35459 15.704 9.39959 15.839 9.48959 15.965C9.58559 16.091 9.74459 16.154 9.96659 16.154H11.0826ZM14.8126 16.622C14.8126 16.91 14.6476 17.054 14.3176 17.054C13.9876 17.054 13.8226 16.91 13.8226 16.622V13.004C13.8226 12.758 13.8616 12.545 13.9396 12.365C14.0176 12.185 14.1406 12.038 14.3086 11.924C14.6266 11.696 14.9446 11.582 15.2626 11.582H16.7116C17.0176 11.582 17.3356 11.696 17.6656 11.924C17.9896 12.152 18.1516 12.512 18.1516 13.004V16.622C18.1516 16.91 17.9866 17.054 17.6566 17.054C17.3266 17.054 17.1616 16.91 17.1616 16.622V13.085C17.1616 12.929 17.1136 12.779 17.0176 12.635L17.0266 12.644C16.9486 12.5 16.7896 12.428 16.5496 12.428H15.4246C15.1786 12.428 15.0166 12.5 14.9386 12.644C14.8546 12.77 14.8126 12.917 14.8126 13.085V16.622Z'
                          fill='#999'
                        />
                        <path
                          d='M7.75 4.375L4.375 4.375M4.375 4.375L1 4.375M4.375 4.375L4.375 7.75M4.375 4.375L4.375 1M15.25 1L13 1C12.4033 1 11.831 1.23705 11.409 1.65901C10.9871 2.08097 10.75 2.65326 10.75 3.25L10.75 5.5C10.75 6.09674 10.9871 6.66903 11.409 7.09099C11.831 7.51295 12.4033 7.75 13 7.75L15.25 7.75C15.8467 7.75 16.419 7.51295 16.841 7.09099C17.2629 6.66903 17.5 6.09674 17.5 5.5L17.5 3.25C17.5 2.65326 17.2629 2.08097 16.841 1.65901C16.419 1.23705 15.8467 1 15.25 1Z'
                          stroke='#999'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>

                    <div className='boxInputText'>
                      <input onChange={inputValue('catagory')} value={state.catagory} placeholder='Catagory' type='text' name='catagory' id='catagory' autoComplete='off' className='inputText fontCat' required />
                    </div>
                  </div>

                  <i className='sr-only'>//-!Photo//-</i>
                  <div className='flexPhoto'>

                    {/* <form onSubmit={uploadImage} encType="multipart/form-data" >
                    <input name='avatar' onChange={e => {
                      setOriginalName(e.target.files[0].name)
                      resizeFile(e.target.files[0]).then(res => {
                      })
                    }} type="file" />
                    <button type="submit">Submit</button>
                    <img src={file} alt="" />
                    <img src={curImg} />
                  </form>
                  <button onClick={getImage} type="button">Get Image</button> */}
                    <div className="xxx">
                      <label htmlFor='file-upload' className='labelPhoto'>
                        {/* {loading && (<div className=" photoLoading">
                          <div className="iconLoading">
                            <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                          </div>
                        </div>)} */}

                        <input
                          onChange={(e) => {

                            // setvaluePhoto('');
                            if (e.target.files.length === 0) return
                            setOriginalName(e.target.files[0]?.name);
                            resizeFile(e.target.files[0]).then((res) => { });

                          }}
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='inputPhoto'
                        />

                        <div name='photo' className='photoFlex'>
                          {/* <svg className='hidden' width="160" height="90" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M69.8812 70.1842C84.04 70.1547 98.1968 70.1547 112.352 70.1842C112.757 70.1858 113.146 70.3485 113.434 70.6369C113.721 70.9252 113.885 71.3161 113.888 71.7248C113.888 74.0294 112.922 78.5376 107.749 78.5376H74.49C69.3168 78.5376 68.3574 74.0294 68.3574 71.7248C68.3591 71.3178 68.5199 70.9278 68.8051 70.6395C69.0904 70.3511 69.477 70.1875 69.8812 70.1842ZM105.535 32.9318C117.343 42.0871 121.557 38.4755 128.323 35.1165C133.508 32.5467 135.534 30.1095 141.829 32.6793V23.3472H105.548V32.9318H105.535ZM128.586 20.5375L130.956 11.698C131.028 11.3858 131.167 11.0936 131.364 10.8424C131.562 10.5913 131.812 10.3874 132.097 10.2458L141.804 5.25142C142.308 4.9856 142.894 4.928 143.439 5.09086C143.984 5.25372 144.444 5.62419 144.722 6.12348C144.999 6.62277 145.073 7.21147 144.926 7.76435C144.779 8.31724 144.424 8.79069 143.936 9.08399L134.982 13.6679L133.101 20.5375L133.27 20.0071H143.616C143.978 20.0137 144.323 20.1616 144.578 20.4197C144.833 20.6778 144.979 21.0258 144.983 21.3899V39.2331C144.983 50.8193 138.713 59.8104 126.962 60.7006V77.0033H136.086C136.857 77.0033 137.471 78.2282 137.471 78.9985C137.471 79.7688 136.844 81 136.086 81H116.17L116.471 80.678C117.431 79.5987 118.189 78.3538 118.71 77.0033H121.08V60.7511C120.453 60.7511 119.826 60.6754 119.199 60.6059C119.028 60.0455 118.805 59.5022 118.534 58.9832C118.83 58.6085 119.095 58.2093 119.324 57.7899C119.907 56.7126 120.264 55.526 120.372 54.304C120.48 53.0819 120.337 51.8506 119.951 50.6867C119.32 48.7379 118.292 46.9426 116.935 45.4145C114.063 42.0808 109.003 38.6838 102.218 36.8275V21.3899C102.218 21.0198 102.364 20.6649 102.624 20.4032C102.884 20.1415 103.237 19.9945 103.604 19.9945H128.743L128.586 20.5249V20.5375ZM110.358 56.6092H72.3894C71.2252 56.6092 70.1088 56.1435 69.2856 55.3146C68.4625 54.4858 68 53.3616 68 52.1894C68 45.8754 80.447 41.3231 90.9063 41.222C111.474 41.0137 120.704 56.6029 110.345 56.6029L110.358 56.6092ZM101.579 46.4184C102.047 46.4172 102.504 46.5557 102.894 46.8165C103.283 47.0773 103.587 47.4487 103.767 47.8835C103.947 48.3183 103.995 48.7971 103.904 49.2593C103.814 49.7215 103.589 50.1462 103.259 50.4797C102.928 50.8133 102.507 51.0406 102.049 51.133C101.59 51.2253 101.114 51.1785 100.682 50.9986C100.249 50.8186 99.8799 50.5135 99.6199 50.1219C99.3598 49.7303 99.221 49.2699 99.221 48.7988C99.221 48.1686 99.4692 47.5641 99.9112 47.1179C100.353 46.6716 100.953 46.4201 101.579 46.4184ZM81.0051 46.5889C81.4734 46.5852 81.9323 46.7216 82.3236 46.9808C82.7148 47.2401 83.0207 47.6105 83.2025 48.0452C83.3843 48.4798 83.4338 48.959 83.3448 49.4219C83.2557 49.8849 83.032 50.3108 82.7022 50.6456C82.3723 50.9804 81.9511 51.209 81.4921 51.3024C81.033 51.3958 80.5567 51.3498 80.1237 51.1702C79.6906 50.9906 79.3203 50.6855 79.0597 50.2937C78.7991 49.9018 78.6599 49.4409 78.6599 48.9693C78.6599 48.3391 78.9081 47.7346 79.3501 47.2883C79.7921 46.8421 80.3918 46.5906 81.0176 46.5889H81.0051ZM91.2135 44.3222C91.6811 44.3222 92.1381 44.4618 92.5269 44.7234C92.9157 44.9849 93.2187 45.3567 93.3976 45.7916C93.5765 46.2266 93.6233 46.7052 93.5321 47.167C93.4409 47.6287 93.2157 48.0528 92.8851 48.3857C92.5545 48.7186 92.1333 48.9453 91.6747 49.0372C91.2162 49.129 90.7408 49.0819 90.3089 48.9017C89.8769 48.7216 89.5077 48.4165 89.248 48.025C88.9882 47.6336 88.8495 47.1734 88.8495 46.7026C88.8495 46.0713 89.0986 45.4658 89.5419 45.0194C89.9853 44.573 90.5866 44.3222 91.2135 44.3222ZM113.775 62.6706C113.838 62.7776 113.873 62.8995 113.875 63.0242C113.875 63.1062 113.875 63.1946 113.875 63.283C113.875 63.3714 113.875 63.4598 113.875 63.5356C113.873 63.6622 113.838 63.7862 113.775 63.8955C113.43 65.4235 112.032 67.4313 107.743 67.4313H74.49C70.201 67.4313 68.8089 65.4298 68.4577 63.8955C68.3942 63.7862 68.3597 63.6622 68.3574 63.5356C68.3574 63.4598 68.3574 63.3714 68.3574 63.283C68.3513 63.1968 68.3513 63.1103 68.3574 63.0242C68.3596 62.8995 68.3942 62.7776 68.4577 62.6706C68.8089 61.1363 70.2072 59.1348 74.49 59.1348H91.7215L98.0986 65.7392L104.369 59.1348H107.749C112.038 59.1348 113.436 61.1363 113.781 62.6706H113.775Z" fill="#AAAAAA" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.7612 4C48.2972 3.74733 48 3.26584 48 2.73757V1.74962C48 0.783333 48.7833 0 49.7496 0H156H158C159.105 0 160 0.895431 160 2V4V86V88C160 89.1046 159.105 90 158 90H156H4H2C0.895431 90 0 89.1046 0 88V86V49.7488V48.9006C0 47.8509 0.850918 47 1.90058 47C2.63759 47 3.30383 47.4284 3.64117 48.0836C3.75823 48.311 3.87785 48.5369 4 48.7612C9.5933 59.0309 20.4828 66 33 66C51.2254 66 66 51.2254 66 33C66 20.4828 59.0309 9.5933 48.7612 4ZM154 86C155.105 86 156 85.1046 156 84V6C156 4.89543 155.105 4 154 4H63.0311L63.0408 3.98083L57.1248 3.8539L59.8006 7.32741C59.8948 7.53071 60.0216 7.72356 60.1835 7.89873C60.3087 8.03428 60.4329 8.17076 60.5561 8.30817L60.736 8.54159L60.7461 8.5216C66.5054 15.0444 70 23.6138 70 33C70 53.4345 53.4345 70 33 70C23.3114 70 14.4939 66.2771 7.89882 60.1834C7.77669 60.0706 7.64597 59.9748 7.5091 59.8952L4.08114 56.9595L4.01124 61.5014C4.00382 61.5723 4 61.6448 4 61.7187V62.2321L3.98943 62.9189L4 62.9142V84C4 85.1046 4.89543 86 6 86H154Z" fill="#AAAAAA" />
                          <circle cx="33" cy="32" r="28" stroke="#AAAAAA" strokeWidth="4" />
                          <path d="M30.8444 13.4427C31.6378 12.2722 33.3622 12.2722 34.1556 13.4427L47.2715 32.7946C48.1716 34.1226 47.2202 35.9167 45.6159 35.9167H19.3841C17.7798 35.9167 16.8284 34.1226 17.7285 32.7946L30.8444 13.4427Z" fill="#AAAAAA" />
                          <rect x="26.5" y="32.6667" width="12" height="17.3333" rx="2" fill="#AAAAAA" />
                        </svg> */}


                          {/* <img className="boxPhoto" src={file} alt="" /> */}
                          <img className="boxPhoto" src={file ? file : iconPhoto} alt="" />
                          {/* <img className='boxPhoto' src={curImg} /> */}
                          {/* {file ? <img className="boxPhoto" src={file} alt="" /> : <svg className="iconPhoto" viewBox="0 0 24 24" fill="#999" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg>} */}
                          {/* <div className='photoText fontNormal'> */}
                          {/* <div className=''>{valuePhoto}</div> */}
                          {/* </div> */}

                        </div>

                      </label>

                      <div onClick={() => {
                        delelteImage()
                        setFile('')
                      }} className={`${file ? 'delPhoto' : 'hidden'} `}>X</div>
                    </div>

                    <p className='remarkPhoto'>Upload a file PNG, JPG <br />up to 5MB</p>

                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className='layoutManu'>
                {listMenu.map((el, index) => (
                  <div className={`layoutManu0 ${index % 2 !== 0 ? '' : 'light-grey'}`} key={index}>
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
                    {/* //-//-//-//- */}
                    <div className='layoutManu2'>
                      <fieldset>
                        <i className='sr-only'>!DIETARY</i>
                        <legend className='dietHeader'>
                          Filter <span className='dietOption'>(optional)</span>{' '}
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

                        <div className={`boxRemoveItem`}>
                          <button onClick={removeItem} type='button' className='removeItembtn'>
                            X
                          </button>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                ))}

                <i className='sr-only'> !ADD FOOD ITEM</i>
                {/* <ButtonAddFood /> */}
                <div className='boxAddItem'>
                  <a href='#end' onClick={additem} className='addItembtn' type='button'>
                    ADD ITEM
                  </a>
                </div>
              </div>{' '}
              <i className='sr-only'>!END CATAGORY</i>
              <i className='sr-only'>!END FORM</i>
            </form>

            {/* ${!start ? 'show' : 'hiddenMe'} ${menuId ? 'hiddenMe' : 'show'} */}
            {/* ${!menuId ? 'hiddenMe' : 'show'} */}

            <div onClick={() => setDeleteBtn(false)} className='buttonFormContainer '>


              <i className='sr-only'>!SAVE</i>
              <div className='saveBtnBox'>
                <div className={`${menuId ? 'displayNone' : 'displayFlex'} ${start ? 'displayFlex' : 'displayNone'}`}>
                  <button type='submit' form='foodForm' className='saveBtn btnhover btnactive'>
                    <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
                      <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span> SAVE NEW<br />CATEGORY</span>
                  </button>
                </div>

                <div className={` ${!menuId ? 'displayNone' : 'displayFlex'}`}>
                  <button onClick={saveEditMenu} type='' className='saveBtn btnhover btnactive'>
                    <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
                      <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span> SAVE</span>

                  </button>
                </div>
              </div>
            </div>

          </div>
        </div >



        {/* RIGHTBAR SECTION */}
        {/* translateSideCat */}
        <div className={`sectionSideCat 
        ${!(onOffMenu1.switch || onOffMenu2.switch || onOffMenu3.switch) && ''}`}>

          <div className='headCat'>

            <button onClick={openForm} type='button' form='foodForm' className='newCatBtn'>
              <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
                <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 32L53 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>NEW CATEGORY</span>
            </button>

          </div>

          <div className="">

            {categoryList.filter((el) => el.menuTime == menuTime).map((el, index) => (
              <div key={index} className={`tabCat ${menuId === el.menuId ? 'chooseCat' : 'mini'}`}>
                <button name={el.menuId} onClick={findOneMenu} className={`itemCat  ${menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                  {index + 1}
                </button>
                <button name={el.menuId} onClick={findOneMenu} className='btnCat'>
                  {el.catagory}
                </button>

                <div className={`${deleteBtn ? 'dispBox' : 'dispNone'} deleteBox`}>
                  <button onClick={deleteMenu} value={el.menuId} type='submit' className='deleteBtn'>
                    X
                  </button>
                </div>
              </div>
            ))}

          </div>




        </div>

      </div >
      <div id='end' className=''></div>
    </div >
  );
};

export default MainForm;
