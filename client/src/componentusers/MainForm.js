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

import fileDownload from 'js-file-download';
import b64toBlob from 'b64-to-blob';
import { useParams } from 'react-router-dom';
// import MenuComponent from "../components/MenuComponent"
// import {theme} from "../components/MenuComponent"
// import { useForm } from 'react-hook-form';
// import { createTheme, ThemeProvider } from '@mui/material'
import Resizer from 'react-image-file-resizer';
import TimePicker from './TimePicker';

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

  const [menuTime, setMenuTime] = useState(1);


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

  const [file, setFile] = useState('');
  // const [description, setDescription] = useState("")
  const [originalName, setOriginalName] = useState('');

  //-
  const getAllMenu = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          const getReult = result.data.userMenu.menu;
          //   const checkTime = getReult.filter((el) => el.menuTime == menuTime;
          //   return el.menuTime == menuTime;
          // });

          setCategoryList(getReult);

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

  const imgId = uuidv4();

  const submitCatagory = (e) => {
    e.preventDefault();
    if (categoryList.length > 14) return alert('DDDD');
    componentDidMount();
    if (!state.catagory.trim()) return;

    file && uploadImage();

    // dispath(showLoading())
    axios
      .post(
        `${process.env.REACT_APP_API}/user/create-manu`,
        {
          menuTime: menuTime,
          catagory: state.catagory,
          imgId: imgId,
          listMenu: [...listMenu],
          userId: user.userId,
          link: user.link,
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          getAllMenu();
          dispath(setUser(result.data.userMenu));
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
  const saveEditMenu = (e) => {
    if (!menuId) return;
    e.preventDefault();
    dispath(showLoading());
    axios
      .post(`${process.env.REACT_APP_API}/user/saveEditMenu`, { menuId: menuId, catagory: state.catagory, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
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

  //- ////////////////////////////////////////////////////////

  const findOneMenu = (e) => {
    e.preventDefault();
    setStart(true);
    const menuId = e.target.name;
    setMenuId(menuId);
    componentDidMount();
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/findOneMenu`, { menuId: menuId, userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          // console.log(result.data.userMenu)
          // setMenus(result.data.userMenu.menu)
          // dispath(hideLoading())
          chooseMenu(result.data.userMenu);
          actionDelay();
        } else {
          Swal.fire(result.data.message);
          // dispath(hideLoading())
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

  const chooseMenu = (oneMennu) => {
    setState(oneMennu);
    setListMenu(oneMennu.listMenu);
    setMenuId(oneMennu.menuId);
    getImage();
    actionDelay();
  };

  const componentDidMount = () => {
    window.scrollTo(0, 0);
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
  function showDeleteBtn() { }
  const [valuePhoto, setvaluePhoto] = useState('No file Chosen');
  const valuePhotoFn = (e) => {
    setvaluePhoto(e.target.value);
  };

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

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        390,
        693,
        'JPEG',
        100,
        0,
        (uri) => {
          console.log('re' + Boolean(file));
          setFile(uri);
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

  // console.log(originalName)

  //-///-///-///-///-///-///-///-///-///-///-
  const uploadImage = (e) => {
    // e.preventDefault()
    // const formData = new FormData()
    // formData.append("avatar", file)
    // formData.append("description", description)
    // console.log('dsadadasdasdasdas')

    const newFile = dataURIToBlob(file);
    const formData = new FormData();

    formData.append('avatar', newFile, imgId);

    axios
      .post(`${process.env.REACT_APP_API}/user/images`, formData)

      // .post(`${process.env.REACT_APP_API}/user/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((result) => {
        // setImageName(result.data.imageName)
        // const data = res.data;
        // console.log(data);
        // const blob = b64toBlob(data.b64Data, data.contentType);
        // console.log(blob);
        // const [fileName] = stateUp.file.name.split('.');
        // fileDownload(blob, `${fileName}-resized.${data.extension}`);
      })
      .catch((err) => {
        console.error(err);
      });

    // const result = await axios.post('/api/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    // console.log(result.data)
  };

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const [curImg, setCurImg] = useState('');

  const getImage = () => {
    axios
      .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: state.imgId })
      .then((result) => {
        console.log(result.data.images);
        const getResult = result.data.images;
        const base64Flag = 'data:image/png;base64,';
        const imageStr = arrayBufferToBase64(getResult.img.data.data);
        const tagImage = base64Flag + imageStr;
        setCurImg(tagImage);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChangeImg = (e) => {
    e.preventDefault();
    resizeFile(file).then((res) => { });
  };

  function actionDelay() {
    setTimeout(() => {
      getAllMenu();
    }, 2000);
  }

  const reloadPage = () => {
    setStart(true);
    setMenuId('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', imgId: '' });
    setFile('');
    setCurImg('');
    // window.location.reload(false)
  };

  const setNothing = () => {
    setStart(false);
    setMenuId('');
    setListMenu([listMenuModel]);
    setState({ catagory: '', imgId: '' });
    setFile('');
    setCurImg('');
  };

  useEffect(() => {
    getAllMenu();
    // eslint-disable-next-line
  }, [user]);

  const timeSwitcher = (navIcon1) => {
    setMenuTime(navIcon1);
    setNothing()
    // actionDelay();
  };

  


  //-///-///-///-///-///-///-///-///-///-///-

  return (
    <div>
      <div className='decorBar'></div>
      <div className='monitor '>
        {/* <NavbarComponent timeSwitcher={timeSwitcher} /> */}

        <div className='monitor1'>


          <TimePicker />
        </div>

        <div onClick={() => setDeleteBtn(false)} className='monitor2 formContainer '>
          <form id='foodForm' encType='multipart/form-data' className={`formMenu ${start ? 'show' : 'hiddenMe'}`} onSubmit={submitCatagory}>
            <div className='stickyBox1'></div>
            <div className='stickyBox'>
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

                  <label htmlFor='file-upload' className='labelPhoto'>
                    <input
                      onChange={(e) => {
                        // setvaluePhoto(e.target.value)\
                        setvaluePhoto('');

                        setOriginalName(e.target.files[0]?.name);
                        resizeFile(e.target.files[0]).then((res) => { });
                      }}
                      id='file-upload'
                      name='file-upload'
                      type='file'
                      className='inputPhoto'
                    />

                    <div name='photo' className='photoFlex'>
                      {/* <svg className="iconPhoto" viewBox="0 0 24 24" fill="#999" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg> */}
                      {/* <img className="boxPhoto" src={file} alt="" /> */}
                      <img className='boxPhoto' src={curImg} />
                      {/* {file ? <img className="boxPhoto" src={file} alt="" /> : <svg className="iconPhoto" viewBox="0 0 24 24" fill="#999" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg>} */}
                      <div className='photoText fontNormal'>
                        <div className=''>{valuePhoto}</div>
                      </div>
                      <p className='remarkPhoto'>Upload a file PNG, JPG up to 5MB</p>
                    </div>
                  </label>

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
        </div>

        <div onClick={() => setDeleteBtn(false)} className='monitorSpace '>
          <div className='newCatBox'>
            <div className={``}>
              <button onClick={reloadPage} type='button' form='foodForm' className='newCatBtn'>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                  </svg>
                </span>
                <span>NEW CATEGORY</span>
              </button>
            </div>
          </div>

          <i className='sr-only'>!SAVE</i>
          <div className='saveBtnBox'>
            <div className={`${menuId ? 'hiddenMe' : 'show'} ${start ? 'show' : 'hiddenMe'}`}>
              <button type='submit' form='foodForm' className='saveBtn'>
                SAVE NEW CATEGORY
              </button>
            </div>

            <div className={` ${!menuId ? 'hiddenMe' : 'show'}`}>
              <button onClick={saveEditMenu} type='' className='saveBtn'>
                SAVE
              </button>
            </div>
          </div>
        </div>

        <div className='monitorSpace'></div>

        <i className='sr-only'>!SIDE CATEGORY</i>

        <div className='moitor3'>
          <div className='sectionSideCat'>
            <div className='headCat'>
              <div>CATEGORY</div>

              <div onClick={() => setDeleteBtn(!deleteBtn)} className='iconCat'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
            </div>

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
      </div>
      <div id='end' className=''></div>
    </div>
  );
};

export default MainForm;

//-
// const getAllMenu = () => {
//   dispath(showLoading())
//   axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
//     .then(result => {
//       if (result.data.success) {
//         // Swal.fire(result.data.message)
//         setMenus(result.data.userMenu.menu)
//         dispath(hideLoading())
//       } else {
//         // Swal.fire(result.data.message)
//         dispath(hideLoading())
//       }
//     }).catch(err => {
//       dispath(hideLoading())
//       console.log("Can't not connect the server", err)
//       // Swal.fire("Can't not connect the server")
//     })
// }
