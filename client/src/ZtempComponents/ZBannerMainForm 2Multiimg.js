import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
import "../style/bannerMainForm.css"
import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
// here we are importing some images
// but the Slider children can be an array of any element nodes,
// or your own components

// import images from './images/'
import { v4 as uuidv4 } from 'uuid';
import Resizer from 'react-image-file-resizer';
import { setUser } from '../redux/userSlice'

const el = document.querySelector('#tester')

require.context('./images', false, /\.(png|jpe?g|svg)$/)

const BannerMainForm = (prop) => {

  // function importAll(r) {
  //   let images = {};
  //   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  //   return images
  // }

  let images = [];
  function importAll(r) {
    r.keys().forEach((item, index) => images.push(item.slice(2)))
    // return images
  }
  importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  // const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  const elementRef = useRef([]);

  useEffect(() => {
    // console.log(elementRef.current.offsetHeight);
  }, [elementRef.current[0]]);


  // console.log(elementRef.current.offsetHeight);
  const drag = () => {
    // console.log(elementRef.current[0]);
  }
  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    console.log("finished dragging on slide", i);
    setIndexDot(i);

  };
  ///////////////////////////////
  const dispath = useDispatch();

  const { user } = useSelector((state) => state.user);
  const [bannerImgArr, setBannerImgArr] = useState([]);

  // const [bannerImg, setBannerImg] = useState();
  // const addBanner = (uri) => {
  //   let newBannerImg = uri;
  //   setBannerImg([...bannerImg, newBannerImg]);
  // };

  const resizeFileBanner = (file) =>
    new Promise((resolve) => {
      // dispath(showLoading())
      Resizer.imageFileResizer(
        file,
        585,
        1039,
        'JPEG',
        80,
        0,
        (uri) => {
          // setBannerImg(uri);
          setBannerImgArr([...bannerImgArr, uri])
          // getAllImageBanner()
          // dispath(showLoading())
          setFinishedIndex(bannerImgArr.length)
          //  dispath(showLoading())
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


  let imgIdBanner = 'banner-' + uuidv4();





  // const uploadImageBanner = () => {

  //   dispath(showLoading())

  //   bannerImgArr.map(bannerImg => {
  //     const newFile = dataURIToBlobBanner(bannerImg);
  //     const formData = new FormData();

  //     formData.append('avatar', newFile, imgIdBanner);
  //     formData.append('userId', user.userId);


  //     axios
  //       .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
  //       .then((result) => {
  //         // dispath(hideLoading());
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   })

  //   // dispath(hideLoading());

  //   setTimeout(() => {
  //     // window.location.reload(false);
  //     dispath(hideLoading());
  //   }, 2000);

  //   setTimeout(() => {
  //     getAllImageBanner()

  //   }, 3000);

  // };

  // testArray.forEach((value) => {
  //   formData.append('fieldName[]', value);
  // });
  const uploadImageBanner = () => {

    dispath(showLoading())
    const formData = new FormData();
    formData.append('userId', user.userId);
    bannerImgArr.forEach(bannerImg => {
      const newFile = dataURIToBlobBanner(bannerImg);

      formData.append('avatar', newFile);

    })

    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
      .then((result) => {
        // dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });


    // dispath(hideLoading());

    setTimeout(() => {
      // window.location.reload(false);
      dispath(hideLoading());
    }, 2000);

    setTimeout(() => {
      getAllImageBanner()

    }, 3000);

  };








  const getAllImageBanner = () => {
    // dispath(showLoading())
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
        setBannerImgArr(mapArrayBanner)
        dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };




  // console.log(indexDot)
  // console.log(bannerImgArr)
  const deleteImageBanner = () => {
    bannerImgArr.splice(indexDot, 1)
    setBannerImgArr(bannerImgArr)
    setFinishedIndex(bannerImgArr.length - 1)
  }
  // if (prop.test) {
  //   getAllImageBanner()
  // }
  console.log(bannerImgArr)
  useEffect(() => {
    getAllImageBanner()

  }, [user])

  // useEffect(() => {
  //   getAllImageBanner()

  // }, [bannerImg])

  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className="topbox">

      <div className="bannerBoxLoading">
        {loading && (<div className=" photoLoading">
          <div className="iconLoading">
            <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
          </div>
        </div>)}

      </div>

      <div className="bannerSectionForm" id='1'>

        <div className="boxImageForm">
          {/* <div className=" photoLoading">
            <div className="iconLoading">
              <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
            </div>
          </div> */}
          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {

            }}
            activeIndex={bannerImgArr.length - 1}
            threshHold={20}
            transition={0.5}
            scaleOnDrag={false}
          >

            {bannerImgArr.map((el, index) => (


              <img ref={(element) => {
                elementRef.current[index] = element;
              }} onClick={drag} key={index} src={el} className='imageBannerForm' />
            ))


            }

          </Slider >
          <div className="dotBarForm">
            {Array.from({ length: bannerImgArr.length }).map((item, index) => (
              <div className={indexDot === index ? "dotForm dotActiveForm" : "dotForm"} key={index}>{index + 1}</div>

            ))}

          </div>

        </div>

      </div>
      <div className="yyyyyy">

        <label htmlFor='file-uploadBanner' className='labelPhoto'>
          <input
            onChange={(e) => {

              // setvaluePhoto('');
              if (e.target.files.length === 0) return
              resizeFileBanner(e.target.files[0]).then((res) => { });

            }}
            id='file-uploadBanner'
            name='file-uploadBanner'
            type='file'
            className='inputPhoto'
          />fdfdfdfdfsssssssssssssssssss
        </label>
        <button onClick={() => {
          uploadImageBanner()
          getAllImageBanner()
        }
        }>Save</button>
        <button onClick={() => {
          deleteImageBanner()

        }
        }>Deleteeeeeeeee</button>
      </div>

    </div >

  )
}
export default BannerMainForm