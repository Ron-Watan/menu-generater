import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
import "../style/bannerMainForm.css"
import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
import iconPhoto from '../icon/meal.svg';

// import iconPhoto from '../icon/downloadIcon.svg'
// here we are importing some images
// but the Slider children can be an array of any element nodes,
// or your own components

// import images from './images/'

import Resizer from 'react-image-file-resizer';


const el = document.querySelector('#tester')

require.context('./images', false, /\.(png|jpe?g|svg)$/)

const BannerMainForm = (prop, ref) => {

  // function importAll(r) {
  //   let images = {};
  //   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  //   return images
  // }

  // let images = [];
  // function importAll(r) {
  //   r.keys().forEach((item, index) => images.push(item.slice(2)))
  //   return images
  // }
  // importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  // const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  const elementRef = useRef([]);

  useEffect(() => {
    // console.log(elementRef.current.offsetHeight);
  }, [elementRef.current[0]]);

  //
  // console.log(elementRef.current.offsetHeight);
  const drag = () => {
    // console.log(elementRef.current[0]);
  }
  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    // setIndexDot(i);
    prop.setIndexToBanner(i)

  };
  ///////////////////////////////
  // prop.indexToBanner
  // prop.setIndexToBanner 


  const dispath = useDispatch();

  const { user } = useSelector((state) => state.user);

  // const [prop.indexToBanner, prop.setIndexToBanner ] = useState(0)
  // const [prop.bannerImgArr, prop.prop.setBannerImgArr] = useState([]);
  // prop.setCloneBanner(prop.bannerImgArr)
  // console.log(prop.indexToBanner)

  // const [bannerImg, setBannerImg] = useState();
  // const addBanner = (uri) => {
  //   let newBannerImg = uri;
  //   setBannerImg([...bannerImg, newBannerImg]);
  // };
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
          // setBannerImg(uri);
          prop.setBannerImgArr([...prop.bannerImgArr, uri])
          // getAllImageBanner()
          prop.setIndexToBanner(prop.bannerImgArr.length)
          setFinishedIndex(prop.bannerImgArr.length)
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
    dispath(showLoading())
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('link', user.link);
    prop.bannerImgArr.forEach(bannerImg => {
      const newFile = dataURIToBlobBanner(bannerImg);
      formData.append('avatar', newFile);

    })

    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
      .then((result) => {
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });


    setTimeout(() => {
      dispath(hideLoading());
    }, 2000);


  };





  // GET ALL IMAGE

  const getAllImageBanner = () => {
    dispath(showLoading())
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

        dispath(hideLoading());
        setLoadingManual(false)
      })
      .catch((err) => {
        console.error(err);
      });

  };

  const deleteImageBanner = () => {
    if (prop.indexToBanner === 0) {
      prop.setIndexToBanner(prop.indexToBanner + 1)
      setFinishedIndex(prop.indexToBanner + 1)
      setTimeout(() => {
        prop.setIndexToBanner(prop.indexToBanner)
        setFinishedIndex(prop.indexToBanner)
      }, 1);

    } else {
      prop.setIndexToBanner(prop.indexToBanner - 1)
      setFinishedIndex(prop.indexToBanner - 1)

    }

    prop.bannerImgArr.splice(prop.indexToBanner, 1)
    prop.setBannerImgArr(prop.bannerImgArr)

  }


  useEffect(() => {
    if (prop.resizeFileBannerTG) {
      resizeFileBanner(prop.resizeFileBannerTG);
    }
  }, [prop.resizeFileBannerTG]);


  useEffect(() => {
    if (prop.saveImageBannerTG) {
      uploadImageBanner();
    }
  }, [prop.saveImageBannerTG]);

  useEffect(() => {
    if (prop.deleteImageBannerTG) {
      deleteImageBanner();
    }
  }, [prop.deleteImageBannerTG]);


  useEffect(() => {
    if (prop.getAllImageBannerTG) {
      getAllImageBanner();
    }
  }, [prop.getAllImageBannerTG]);



  useEffect(() => {
    getAllImageBanner()

  }, [user])


  const { loading } = useSelector((state) => state.alerts);


  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="bannerWrapper">

      <div className="bannerBoxLoading">
        {/* LOADING... */}
        {/* {loading && (<div className=" photoLoading">
          <div className="iconLoading">
            <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
          </div>
        </div>)} */}

      </div>

      {/* loadingManual */}
      <div className="bannerSectionForm" id='1'>
        {/* LOADING... */}
        {/* <div div className={`${true ? 'showMe' : 'hiddenMe'} photoLoading`}>
          <div className="iconLoadingBanner">
            <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
          </div>
        </div> */}

        <div className="boxImageForm">

          {/* DELETE BUTTON */}
          {/* <div className={`${prop.bannerImgArr.length === 0 && 'hidden'} trashBtn`}>
            <button onClick={
              deleteImageBanner

            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#444" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div> */}


          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {

            }}
            activeIndex={prop.indexToBanner}//prop.bannerImgArr.length - 1
            threshHold={20}
            transition={0.5}
            scaleOnDrag={false}
          >


            {
              prop.bannerImgArr.map((el, index) => (
                <div className="" key={index}>
                  {/* LOADING... 1 */}
                  {loading && (<div className={`${loading ? 'showMe' : 'hiddenMe'} bannerLoading`}>
                    <div className="iconLoadingBanner">
                      <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                    </div>
                  </div>)}


                  {/* LOADING... 2 */}
                  <div className={`${loadingManual ? 'showMe' : 'hiddenMe'} bannerLoading`}>
                    <div className="iconLoadingBanner">
                      <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                    </div>
                  </div>

                  <img ref={(element) => {
                    elementRef.current[index] = element;
                  }} onClick={drag} key={index} src={el} className='imageBannerForm' />


                </div>


              ))
            }


          </Slider >

          {/* DOT BUTTON*/}
          <div className="dotBarForm">
            {Array.from({ length: prop.bannerImgArr.length }).map((item, index) => (
              <button onClick={() => {
                prop.setIndexToBanner(index)
                setFinishedIndex(index)

              }}
                className={prop.indexToBanner === index ? "dotForm dotActiveForm" : "dotForm"}
                key={index}>{index + 1}</button>
            ))}

          </div>

        </div>


      </div >
      {/* <div className="saveAndCancelBox">
   
        <button onClick={() => {
          getAllImageBanner()
        }
        } className='saveBnerBtn btnhover btnactive'>
          <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
            <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>CANCEL</span>
        </button>

        <button onClick={() => {
          uploadImageBanner()
          getAllImageBanner()
        }
        } className='saveBnerBtn btnhover btnactive'>
          <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
            <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>SAVE</span>
        </button>
      </div> */}


    </div >

  )
}
export default BannerMainForm