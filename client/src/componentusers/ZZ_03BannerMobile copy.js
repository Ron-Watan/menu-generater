import React, { useEffect, useRef, useState } from 'react'
// import Slider from 'react-touch-drag-slider'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice';
import Resizer from 'react-image-file-resizer';
// import SwipeToDelete from 'react-swipe-to-delete-ios'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';

import * as Util from "../componentusers/_99Utility"

const _03BannerMobile = (prop) => {


  const [indexDot, setIndexDot] = useState(0)
  function setFinishedIndex(i) {
    prop.setIndexToBanner(i)
  };

  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [loadingManual, setLoadingManual] = useState(false)

  const [checkBannerChange, setCheckBannerChange] = useState(false)



  const [file, setFile] = useState('')
  const resizeFileBanner = (file) =>
    new Promise((resolve) => {
      dispath(showLoading())
      Resizer.imageFileResizer(
        file,
        390,
        693,
        'JPG',
        90,
        0,
        (uri) => {
          if (prop.bannerImgArr.length > 6) return setLoadingManual(false)
          prop.setBannerImgArr([...prop.bannerImgArr, uri])
          setCheckBannerChange(true)
          // setFile(uri)
          dispath(hideLoading())
        },
        'base64'
      );
    });


  function arrayBufferToBase64Banner(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }



  const [realBanner64, setRealBanner64] = useState([])
  //-
  console.log(prop.bannerImgArr)
  console.log(realBanner64)
  const uploadImageBanner = () => {

    dispath(showLoading())
    if (!checkBannerChange) {
      return Swal.fire({
        title: 'Saved',
        toast: true,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      }).then(nothinh => {
        // prop.setOnoffBanner_MB(false)
        // prop.setIndexToBanner('')
        dispath(hideLoading())
      })
    }

    let imgId = user.link + '-banner--'
    // let linkDelete = []
    // for (let i = 0; i < prop.bannerImgArr.length; i++) {
    //   linkDelete.push(imgId + i)
    // }
    // console.log(linkDelete)
    //DELETE
    // axios
    //   .post(`${process.env.REACT_APP_API}/user/photos/deleteArray`, { imgId: linkDelete })
    //   .then((result) => {

    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });


    // let imgId = user.link + '-banner--'
    let linkDB = []
    for (let i = 0; i < prop.bannerImgArr.length; i++) {
      linkDB.push(imgId + i)
    }

    //SAVE PHOTOS
    let formData = '';
    // await promise()
    const newData = [...realBanner64]
    newData.forEach((bannerImg, index) => {

      axios
        .post(`${process.env.REACT_APP_API}/user/photos/delete`, { imgId: imgId + index })
        .then((result) => {
          console.log("dele")
          console.log(imgId + index)
          // if (result.data.success) {
          console.log("save")
          console.log(imgId + index)
          formData = new FormData()
          // const newFile = Util.dataURIToBlob(bannerImg);
          formData.append('avatar', bannerImg, imgId + index);
          /////////////////////

          axios
            .post(`${process.env.REACT_APP_API}/user/photos/uplaod`, formData)
            .then((result) => {
              // console.log(result)
              // Swal.fire({
              //   title: 'Saved',
              //   toast: true,
              //   icon: 'success',
              //   showConfirmButton: false,
              //   timer: 1000,
              // }).then(nothinh => {
              //   // prop.setOnoffBanner_MB(false)
              //   prop.setIndexToBanner('')
              //   setCheckBannerChange(false)
              //   dispath(hideLoading())
              // })

            })
            .catch((err) => {
              console.error(err);
            });

          // }

        })
        .catch((err) => {
          console.error(err);
        })
      // console.log(result);
      // console.log(element);

      // formData = new FormData()
      // const newFile = Util.dataURIToBlob(bannerImg);
      // formData.append('avatar', newFile, imgId + index);
      // /////////////////////
      // console.log(imgId + index)
      // axios
      //   .post(`${process.env.REACT_APP_API}/user/photos/uplaod`, formData)
      //   .then((result) => {


      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });

    })

    //SAVE DB
    axios
      .post(`${process.env.REACT_APP_API}/user/photos/uplaodBanner`, { userId: user.userId, bannerImage: linkDB, banner: prop.bannerImgArr.length })
      .then((result) => {
        // dispath(hideLoading())
      })
      .catch((err) => {
        console.error(err);
      });


  };


  const delelteAllBanner = () => {


    let imgId = user.link + '-banner--'
    let linkDelete = []
    for (let i = 0; i < prop.bannerImgArr.length; i++) {
      linkDelete.push(imgId + i)
    }
    console.log(linkDelete)
    //DELETE
    axios
      .post(`${process.env.REACT_APP_API}/user/photos/deleteArray`, { imgId: linkDelete })
      .then((result) => {

      })
      .catch((err) => {
        console.error(err);
      });


  };


  // const [previewBanner, setPreviewBanner] = useState([])

  const photoHostName = `http://192.168.1.13:5500/api/user/photos/`



  const convertBanner =   () => {
    let newPreviewBanner = []
    let newPreviewBannerFile = []

    const promises = prop.bannerImgArr.map(async (el, index) => {

      await Util.toDataURL(`${photoHostName}${el}`)
        .then(base64 => {
          // newPreviewBanner.splice(index, 0, base64)
          newPreviewBanner.push(base64)
          prop.setBannerImgArr(newPreviewBanner)
         
          console.log(index)

          const newFile = Util.dataURIToBlob(base64)
          // // newPreviewBannerFile.splice(index, 0, newFile)
          newPreviewBannerFile.push(newFile)
          setRealBanner64(newPreviewBannerFile)
        })

    });
   

  }
  // const convertBanner1 = () => {
  //   let newPreviewBanner = []
  //   let newPreviewBannerFile = []
  //   prop.bannerImgArr.map((el, index) => {

  //     Util.toDataURL(`${photoHostName}${el}`)
  //       .then(base64 => {
  //         // newPreviewBanner.splice(index, 0, base64)
  //         newPreviewBanner.push(base64)
  //         prop.setBannerImgArr(newPreviewBanner)

  //         console.log(index)

  //         const newFile = Util.dataURIToBlob(base64)
  //         // newPreviewBannerFile.splice(index, 0, newFile)
  //         newPreviewBannerFile.push(newFile)
  //         setRealBanner64(newPreviewBannerFile)
  //       })

  //   });

  // }

  // useEffect(() => {
  //   if (prop.originalBannerImgArr.length === prop.bannerNumber) convertBanner()
  // }, [prop.originalBannerImgArr])








  // const uploadImageBanner1 = () => {
  //   setCheckBannerChange(true)
  //   dispath(showLoading())

  //   const newData = [...prop.bannerImgArr]
  //   const formData = new FormData();
  //   formData.append('userId', user.userId);
  //   formData.append('link', user.link);
  //   newData.forEach(bannerImg => {
  //     const newFile = dataURIToBlobBanner(bannerImg);
  //     formData.append('avatar', newFile);
  //   })
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
  //     .then((result) => {
  //       Swal.fire({
  //         title: 'Saved',
  //         toast: true,
  //         icon: 'success',
  //         showConfirmButton: false,
  //         timer: 1000,
  //       }).then(nothinh => {
  //         prop.setOnoffBanner_MB(false)
  //         prop.setIndexToBanner('')
  //         setCheckBannerChange(false)
  //         dispath(hideLoading())

  //       })

  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });


  // };






  // GET ALL IMAGE
  const [curBanner, setCurBanner] = useState([])

  const getAllImageBanner = () => {
    dispath(showLoading())

    setCheckBannerChange(false)

    axios
      .post(`${process.env.REACT_APP_API}/user/images/allBanner`, { userId: user.userId })
      .then((result) => {
        if (result.data.success) {
          const getArrayBanner = result.data.images.bannerImage;


          const mapArrayBanner = getArrayBanner.map(el => {
            const base64Flag = 'data:image/png;base64,';
            // const imageStr = arrayBufferToBase64Banner(el.img.data.data);
            const imageStr = arrayBufferToBase64Banner(el.data.data);
            const tagImage = base64Flag + imageStr;
            return tagImage
          })
          prop.setBannerImgArr(mapArrayBanner)

          dispath(hideLoading())
          console.log('BannerPhoto Completed');

        }
      })
      .catch((err) => {
        console.log('BannerPhoto Loading...');
      });

  };

  const deleteImageBanner = () => {
    const newData = [...prop.bannerImgArr]
    newData.splice(prop.indexToBanner, 1)
    prop.setBannerImgArr(newData)
    setCheckBannerChange(true)

  }


  function arrayMmove(arr, old_index, new_index) {
    setCheckBannerChange(true)
    setLoadingManual(true)
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);
    prop.setBannerImgArr(newData)


    setLoadingManual(false)

    if (old_index - new_index > 0) prop.setIndexToBanner(prop.indexToBanner - 1)
    else prop.setIndexToBanner(prop.indexToBanner + 1)

  };


  function arrayMmove2(arr, old_index, new_index) {
    setCheckBannerChange(true)
    setLoadingManual(true)
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);

    setRealBanner64(newData)

    setLoadingManual(false)

    if (old_index - new_index > 0) prop.setIndexToBanner(prop.indexToBanner - 1)
    else prop.setIndexToBanner(prop.indexToBanner + 1)

  };
  // useEffect(() => {
  //   if (prop.getAllImageBannerTG) {
  //     getAllImageBanner();
  //   }
  // }, [prop.getAllImageBannerTG]);

  // useEffect(() => {
  //   // if(prop.bannerImgArr) return
  //   if (user.userId) getAllImageBanner()
  // }, [user])





  const { loading } = useSelector((state) => state.alerts);

  const checkBannerChangeFn = () => {

    if (checkBannerChange) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {
          uploadImageBanner()


        } else if (result.isDenied) {
          prop.setOnoffBanner_MB(false)
          prop.setIndexToBanner('')
          prop.setBannerImgArr(prop.originalBannerImgArr)
          prop.setBannerPreviewArr(prop.originalBannerImgArr)

          setCheckBannerChange(false)
        }
      })

    } else {
      prop.setOnoffBanner_MB(false)
      prop.setIndexToBanner('')
      setCheckBannerChange(false)

    }
  }



  return (
    <div className="MC_Standard_0_FullPage">
      <div className={`${loadingManual ? 'showMe' : 'hiddenMe'} photoLoading`}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button onClick={() => {
            checkBannerChangeFn()
            // prop.setOnoffBanner_MB(false)
            // checkChecnge()
            // prop.setIndexToBanner('')
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>

        </div>
        <div className="MB_title">Promotion/Banner Photo</div>

        <div className={`GruopBtn ${prop.bannerImgArr.length === 7 && 'hiddenMe'}`}>
          <label htmlFor='file-uploadBanner' className='MB_Btn MB_Btn_Color'>
            <img src={MBiconPlus} alt="" />
            <form action="" encType='multipart/form-data' >
              <input
                onChange={(e) => {
                  resizeFileBanner(e.target.files[0]);
                  e.target.value = ''
                }}
                id='file-uploadBanner'
                name='file-uploadBanner'
                type='file'
                className='inputPhoto w_h_3'
              />
            </form>
          </label>
          <span className='MB_textBtn'>Add Photo</span>
        </div>


      </div>

      {/* <div className="MB_banner_Section">  zindexUnder1 */}
      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full zindexUnderTop">


        {/* <div className="MB_InScroll_fullNew paddingBottom_8 overScroll_none "> */}
        <div className="MB_Standard_Section_canScroll MB_Make_PadingBanner " >

          {/* <div className="MB_PaddingWrapper"> */}
          <div className="MB_bannerShow_Flex_Column">
            {prop.bannerImgArr.map((el, index) => (


              <div key={index} className={`bannerShow_list ${prop.indexToBanner === index && 'MB_bannerShow_chooseCat'}`}>
                <button onClick={() => prop.setIndexToBanner(index)} className={`btnCat MB_photoSize ${prop.indexToBanner === index && 'MB_sizeBigger'}`}>
                  
                  {/* //= */}

                  {/* <img src={el} className='MB_imageBannerForm photoList' /> */}
                  
                  <img src={`${photoHostName}${el}`} className='MB_imageBannerForm photoList' />

                </button>

                <div className={` MB_smIconAB ${prop.indexToBanner === index ? '' : 'displayNone'}`}>
                  <button
                    onClick={() => {
                      deleteImageBanner()
                      // prop.setDeleteImageBannerTG((deleteImageBannerTG) => deleteImageBannerTG + 1);
                    }}
                    // value={el.menuId}
                    type='submit'
                    className={`MB_Btn forBinWhite`}>

                    <img src={MBiconBin} alt="" />
                  </button>
                </div>

                <div className="MB_postUpDown">
                  <button onClick={() => {
                    arrayMmove(prop.bannerImgArr, index, index - 1)
                    arrayMmove2(realBanner64, index, index - 1)

                  }}
                    className={`smallUpDown up ${index === 0 ? 'hiddenMe' : ''}
                  ${prop.indexToBanner === index ? '' : 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" /></button>

                  <button onClick={() => {
                    arrayMmove(prop.bannerImgArr, index, index + 1)
                    arrayMmove2(realBanner64, index, index + 1)
                  }}
                    className={`smallUpDown ${index == prop.bannerImgArr.length - 1 ? 'hiddenMe' : ''}
                    ${prop.indexToBanner === index ? '' : 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" /></button>

                </div>


              </div>



            ))}
          </div>




        </div>
        <div className="MB_Positon_Bottom_btn_New">
          <div className="MB_Frid_3Btn">

            {/* SAVE BUTTON */}
            <button
              onClick={() => {
                // prop.setSaveImageBannerTG((saveImageBannerTG) => prop.saveImageBannerTG + 1);
                uploadImageBanner()
              }}
              className='MB_Sq_Btn SaveBtnSize MB_Btn_Color  MB_G2'>
              <span>SAVE</span>
            </button>

            <div
              className='MB_Sq_Btn SaveBtnSize MB_Btn_Count  MB_G3'>
              <span>{prop.bannerImgArr.length}/7</span>
            </div>
            {/* 
            <i className="x">CANCEL BUTTON</i>
            <button
              onClick={() => {
                getAllImageBanner()
              }}
              className='MB_Sq_Btn CancelPadding MB_Btn_Border MB_G3'>
              <span>CANCEL</span>
            </button> */}


          </div>
        </div>

      </div>


    </div>
  )
}

export default _03BannerMobile