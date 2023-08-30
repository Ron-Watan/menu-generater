import React, { useState } from 'react'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice';
import Resizer from 'react-image-file-resizer';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const _03BannerMobile = (prop) => {
  const loginCode = sessionStorage.getItem('temp')
  const navigate = useNavigate()
  const photoHostName = `${process.env.REACT_APP_API}/user/photos/`

  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [checkBannerChange, setCheckBannerChange] = useState(false)



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

          if (prop.bannerImgArr.length > 6) return dispath(hideLoading())
          prop.setBannerImgArr([...prop.bannerImgArr, uri])
          setCheckBannerChange(true)
          dispath(hideLoading())
        },
        'base64'
      );
    });


  const resizeFileBannerReal = (file) =>
    new Promise((resolve, reject) => {
      dispath(showLoading())
      Resizer.imageFileResizer(
        file,
        507,
        900,
        'JPG',
        80,
        0,
        (uri) => {
          if (prop.realBannerFile.length > 6) return dispath(hideLoading())
          prop.setRealBannerFile([...prop.realBannerFile, uri])
          setCheckBannerChange(true)

          dispath(hideLoading())
        },
        'file'
      );

    });




  //- //- //- //- //- //- //-
  const uploadImageBanner = () => {

    dispath(showLoading())
    // NO Photo RETURN
    if (prop.realBannerFile.length === 0) {
      return Swal.fire({
        title: 'Saved',
        toast: true,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      }).then(nothinh => {
        prop.setOnoffBanner_MB(false)
        prop.setIndexToBanner('')
        dispath(hideLoading())
      })
    }

    // NO CHANGE RETURN
    if (!checkBannerChange) {
      console.log('22')
      return Swal.fire({
        title: 'Saved',
        toast: true,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      }).then(nothinh => {

        prop.setOnoffBanner_MB(false)
        prop.setIndexToBanner('')
        dispath(hideLoading())
      })
    }




    let imgId = user.link + '-banner--'
    let linkDB = []
    for (let i = 0; i < prop.realBannerFile.length; i++) {
      linkDB.push(imgId + i)
    }


    axios
      .post(`${process.env.REACT_APP_API}/user/photos/dataBanner`,
        { loginCode, userId: user.userId, clientId: user.clientId, bannerImage: linkDB, banner: prop.bannerImgArr.length })
      .then((resultDB) => {
        if (resultDB.data.success) {
          //SAVE PHOTOS
          let formData = '';
          const newData = [...prop.realBannerFile] // File
          newData.forEach((bannerImg, index) => {

            if (bannerImg.slice(0, -10) === user.link) { // Same Photo

              axios
                .post(`${process.env.REACT_APP_API}/user/photos/rename`, { imgId: bannerImg, newImgId: imgId + index })

                .then((result) => {
                  Swal.fire({
                    title: 'Saved',
                    toast: true,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                  }).then(next => {

                    prop.getAllMenu()
                    // getAllImageBanner()

                    prop.setOnoffBanner_MB(false)
                    prop.setIndexToBanner('')
                    setCheckBannerChange(false)
                    // window.location.reload(false)
                    dispath(hideLoading())

                  })
                })
            }

            else if (bannerImg.slice(0, -10) !== user.link) { // New Photp

              formData = new FormData()
              formData.append('avatar', bannerImg, imgId + index);
              axios
                .post(`${process.env.REACT_APP_API}/user/photos/uplaod`, formData)
                .then((result) => {
                  // console.log(result)

                  Swal.fire({
                    title: 'Saved',
                    toast: true,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                  }).then(next => {

                    prop.getAllMenu()
                    // getAllImageBanner()

                    prop.setOnoffBanner_MB(false)
                    prop.setIndexToBanner('')
                    setCheckBannerChange(false)
                    // window.location.reload(false)
                    dispath(hideLoading())
                  })
                })
                .catch((err) => {
                  console.error(err);
                });
            }



          })
        } else {
          dispath(hideLoading())
          return navigate('/login')

        }




      })
      .catch((errDB) => {
        console.error(errDB);
      })

  };

  //- //- //- //- //- //- //-
  const deleteImageBanner = () => {

    let imgId = user.link + '-banner--'
    let linkDB = []
    for (let i = 0; i < prop.realBannerFile.length; i++) {
      linkDB.push(imgId + i)
    }
    linkDB.splice(prop.indexToBanner, 1)

    Swal.fire({
      title: 'Do you want to delete this Photo?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
      confirmButtonColor: ' #dc3741',
      denyButtonColor: '#f56e4f',
    }).then((resultFire) => {

      if (resultFire.isConfirmed) {

        //SAVE DB
        axios
          .post(`${process.env.REACT_APP_API}/user/photos/dataBanner`,
            { loginCode, userId: user.userId, clientId: user.clientId, bannerImage: linkDB, banner: prop.bannerImgArr.length })
          .then((resultDB) => {

            if (resultDB.data.success) {


              const newData = [...prop.bannerImgArr]
              newData.splice(prop.indexToBanner, 1)
              prop.setBannerImgArr(newData)
              //////////////////////////
              const newData2 = [...prop.realBannerFile]
              let dataDeleted = newData2.splice(prop.indexToBanner, 1)
              prop.setRealBannerFile(newData2)
              prop.setIndexToBanner('')
              if (dataDeleted[0].slice(0, -10) !== user.link) return
              axios
                .post(`${process.env.REACT_APP_API}/user/photos/delete`, { imgId: dataDeleted[0] })
                .then((result) => {

                  dispath(hideLoading())
                })


            } else {
              dispath(hideLoading())
              return navigate('/login')
            }
          })
          .catch((errDB) => {
            console.error(errDB);
          });



      }
    })

  }



  function arrayMmove(arr, old_index, new_index) {
    setCheckBannerChange(true)

    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);
    prop.setBannerImgArr(newData)


    if (old_index - new_index > 0) prop.setIndexToBanner(prop.indexToBanner - 1)
    else prop.setIndexToBanner(prop.indexToBanner + 1)

  };


  function arrayMmove2(arr, old_index, new_index) {
    setCheckBannerChange(true)

    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);

    prop.setRealBannerFile(newData)



    if (old_index - new_index > 0) prop.setIndexToBanner(prop.indexToBanner - 1)
    else prop.setIndexToBanner(prop.indexToBanner + 1)

  };







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
          prop.getAllMenu()
          // prop.setBannerImgArr(prop.originalBannerImgArr)
          // prop.setBannerPreviewArr(prop.originalBannerImgArr)

          setCheckBannerChange(false)
        }
      })

    } else {
      prop.setOnoffBanner_MB(false)
      prop.setIndexToBanner('')
      setCheckBannerChange(false)

    }
  }



  // useEffect(() => {
  //   // if(prop.bannerImgArr) return
  //   if (user.userId) getAllImageBanner()
  // }, [user])


  // useEffect(() => {
  //   if (prop.originalBannerImgArr.length === prop.bannerNumber) convertBanner()
  // }, [prop.originalBannerImgArr])

  // useEffect(() => {
  //   if (prop.getAllImageBannerTG) {

  //   }
  // }, [prop.getAllImageBannerTG]);



  return (
    <div className="">
      {prop.toggleScrollBanner ? <div className={`MC_Standard_0_FullPage`}>
        {/* <div className={`${loadingManual ? 'showMe' : 'hiddenMe'} photoLoading`}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div> */}
        <div className="topBar_function backdrop_blur">
          <div className="GruopBtn">
            <button onClick={() => {
              checkBannerChangeFn()
              prop.setToggleScrollBanner(false)

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
                    resizeFileBannerReal(e.target.files[0])
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
        <div className="MB_Standard_0_FullAgain  MB_SetGrid_Full zindexUnderTop">


          {/* <div className="MB_InScroll_fullNew paddingBottom_8 overScroll_none "> */}
          <div className={`MB_Standard_Section_canScroll  MB_Make_PadingBanner`}  >

            {/* <div className="MB_PaddingWrapper"> */}
            <div className="MB_bannerShow_Flex_Column">
              {prop.bannerImgArr.map((el, index) => (


                <div key={index} className={`bannerShow_list ${prop.indexToBanner === index && 'MB_bannerShow_chooseCat'}`}>
                  <button onClick={() => prop.setIndexToBanner(index)} className={`btnCat MB_photoSize ${prop.indexToBanner === index && 'MB_sizeBigger'}`}>

                    {/* //= */}

                    {/* <img src={el} className='MB_imageBannerForm photoList' /> */}

                    {/* {el.slice(0, -10) === user.link && <img src={`${photoHostName}${el}`} className='MB_imageBannerForm photoList' />}
                  {el.slice(0, -10) !== user.link && <img src={el} className='MB_imageBannerForm photoList' />} */}
                    {prop.toggleScrollBanner && <img src={`${el.slice(0, -10) === user?.link ? `${photoHostName}${el}?key=${prop.imageKey}` : el}`} className='MB_imageBannerForm photoList' alt='' />}


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
                      arrayMmove2(prop.realBannerFile, index, index - 1)

                    }}
                      className={`smallUpDown up ${index === 0 ? 'hiddenMe' : ''}
                  ${prop.indexToBanner === index ? '' : 'hiddenMe'}`}>
                      <img src={MBiconDown} alt="" /></button>

                    <button onClick={() => {
                      arrayMmove(prop.bannerImgArr, index, index + 1)
                      arrayMmove2(prop.realBannerFile, index, index + 1)
                    }}
                      className={`smallUpDown ${index === prop.bannerImgArr.length - 1 ? 'hiddenMe' : ''}
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

      </div> : ''}
    </div>
  )
}

export default _03BannerMobile