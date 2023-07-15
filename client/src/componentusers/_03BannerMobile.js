import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
import Resizer from 'react-image-file-resizer';
import SwipeToDelete from 'react-swipe-to-delete-ios'

const _03BannerMobile = (prop) => {


  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    prop.setIndexToBanner(i)
  };

  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [loadingManual, setLoadingManual] = useState(false)

  const resizeFileBanner = (file) =>
    new Promise((resolve) => {
      setLoadingManual(true)
      Resizer.imageFileResizer(
        file,
        585,
        1039,
        'JPEG',
        80,
        0,
        (uri) => {
          if (prop.bannerImgArr.length > 6) return setLoadingManual(false)
          prop.setBannerImgArr([...prop.bannerImgArr, uri])
          setChange(true)
          setLoadingManual(false)
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

  const dataURIToBlobBanner = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  // UPLOAD IMAGE

  const uploadImageBanner = () => {
    setChange(true)
    setLoadingManual(true)
    const newData = [...prop.bannerImgArr]
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('link', user.link);
    newData.forEach(bannerImg => {
      const newFile = dataURIToBlobBanner(bannerImg);
      formData.append('avatar', newFile);

    })

    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
      .then((result) => {
        console.log(result)
        setLoadingManual(false)
        // const getArrayBanner = result.data.images;
        // const mapArrayBanner = getArrayBanner.map(el => {
        //   const base64Flag = 'data:image/png;base64,';
        //   const imageStr = arrayBufferToBase64Banner(el.img.data.data);
        //   const tagImage = base64Flag + imageStr;
        //   return tagImage
        // })
        // prop.setBannerImgArr(mapArrayBanner)

      })
      .catch((err) => {
        console.error(err);
      });


    // setTimeout(() => {
    // dispath(hideLoading());
    // }, 2000);


  };





  // GET ALL IMAGE
  const [curBanner, setCurBanner] = useState([])


  // console.log(Boolean(prop.bannerImgArr === curBanner))
  const getAllImageBanner = () => {

    setChange(false)
    // dispath(showLoading())

    setLoadingManual(true)
    axios
      .post(`${process.env.REACT_APP_API}/user/images/allBanner`, { userId: user.userId })
      .then((result) => {

        const getArrayBanner = result.data.images;
        const mapArrayBanner = getArrayBanner.map(el => {
          const base64Flag = 'data:image/png;base64,';
          const imageStr = arrayBufferToBase64Banner(el.img.data.data);
          const tagImage = base64Flag + imageStr;
          return tagImage
        })
        prop.setBannerImgArr(mapArrayBanner)

        setCurBanner(mapArrayBanner)

        // dispath(hideLoading());
        setLoadingManual(false)
      })
      .catch((err) => {
        console.error(err);
      });

  };

  const deleteImageBanner = () => {
    const newData = [...prop.bannerImgArr]
    newData.splice(prop.indexToBanner, 1)
    prop.setBannerImgArr(newData)
    setChange(true)
  }



  // returns [2, 1, 3]

  // useEffect(() => {
  //   if (prop.resizeFileBannerTG) {
  //     resizeFileBanner(prop.resizeFileBannerTG);
  //   }
  // }, [prop.resizeFileBannerTG]);
  // const refresh = () => {
  //   prop.setBannerImgArr(prop.bannerImgArr)

  // }

  // useEffect(() => {
  //   refresh()
  // }, [prop.bannerImgArr]);

  // useEffect(() => {
  //   if (prop.saveImageBannerTG) {
  //     uploadImageBanner();
  //   }
  // }, [prop.saveImageBannerTG]);

  // useEffect(() => {
  //   if (prop.deleteImageBannerTG) {
  //     deleteImageBanner();
  //   }
  // }, [prop.deleteImageBannerTG]);

  function arrayMmove(arr, old_index, new_index) {
    setChange(true)

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
    // arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    // prop.setBannerImgArr(arr)
    // return arr;
  };

  // useEffect(() => {
  //   if (prop.getAllImageBannerTG) {
  //     getAllImageBanner();
  //   }
  // }, [prop.getAllImageBannerTG]);

  useEffect(() => {

    getAllImageBanner();

  }, [user]);

  // useEffect(() => {
  //   getAllImageBanner()
  // }, [user])
  const [chacnge, setChange] = useState(false)

  const checkChecnge = () => {
    if (!chacnge) return
    getAllImageBanner()
  }


  const { loading } = useSelector((state) => state.alerts);


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
            prop.setOnoffBanner_MB(false)
            checkChecnge()
            prop.setIndexToBanner('')
          }} className="MB_Btn MB_Btn_Border">
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

                // if (e.target.files.length === 0) return;
                resizeFileBanner(e.target.files[0]);
                e.target.value = ''
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

      {/* <div className="MB_banner_Section">  zindexUnder1 */}
      <div className="MB_Standard_0_FullAgain MB_SetGrid_ForBtn zindexUnderTop">


        {/* <div className="MB_InScroll_fullNew paddingBottom_8 overScroll_none "> */}
        <div className="MB_Standard_Section_canScroll MB_Make_PadingBanner MB_Wrap_ForBtn " >

          {/* <div className="MB_PaddingWrapper"> */}
          <div className="MB_bannerShow_Flex_Column">
            {prop.bannerImgArr.map((el, index) => (


              <div key={index} className={`bannerShow_list ${prop.indexToBanner === index && 'MB_bannerShow_chooseCat'}`}>
                <button name={el.menuId} onClick={() => prop.setIndexToBanner(index)} className={`btnCat MB_photoSize ${prop.indexToBanner === index && 'MB_sizeBigger'}`}>
                  <img src={el} className='MB_imageBannerForm photoList' />
                </button>
                <div onClick={() => { arrayMmove(prop.bannerImgArr, index, index - 1) }} className={index == 0 ? 'displayNone':""}>UPPPP</div>
                <div onClick={() => { arrayMmove(prop.bannerImgArr, index, index + 1) }} className={index == prop.bannerImgArr.length - 1 ? 'displayNone':''}>Doddw</div>


                <div className={` MB_smIconAB ${prop.indexToBanner === index ? '' : 'displayNone'}`}>

                  <button
                    onClick={() => {
                      deleteImageBanner()


                      // prop.setDeleteImageBannerTG((deleteImageBannerTG) => deleteImageBannerTG + 1);
                    }}
                    value={el.menuId}
                    type='submit'
                    className={`MB_Btn `}>

                    <img src={MBiconBin} alt="" />
                  </button>
                </div>

              </div>



            ))}
          </div>




        </div>
        <div className="MB_Positon_Bottom_btn">
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

      {/* <div className={`MB_AB_FullAgain MB_ShowSMS ${!openfeedBack && 'MB_slide_Left'}`}>
        <div className="topBar_function">
          <div className="GruopBtn">
            <button
              onClick={() => setOpenfeedBack(false)}
              className='MB_Btn MB_Btn_Border'>

              <img src={MBiconBack} alt="" />


            </button>
            <span className='MB_textBtn'>Back</span>
          </div>


          <div className="MB_Bigstar biggerStar Flex_AllCenter"><span className='MB_Bigstar_Point Flex_AllCenter'>{currentPointStar.pointStar}</span><img src={MBiconStarList} alt="" /></div>


          <div className="GruopBtn">
            <button className="MB_BtnEmpty ">

            </button>
          </div>
        </div>

        <div className="MB_2LangLayout_Grid gridRow_1fr">
          <div className="MB_Container_Sroll">
            <div className="MB_InScroll_2nd paddingTop_3">

              <div className="MB_SmsDetail">
                {currentPointStar.message}
              </div>



            </div>
          </div>
        </div>


      </div> */}


    </div>
  )
}

export default _03BannerMobile