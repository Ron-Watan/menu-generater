import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
import "../style/bannerMainForm.css"
import axios from 'axios'
import { hideLoading } from '../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
// here we are importing some images
// but the Slider children can be an array of any element nodes,
// or your own components

// import images from './images/'
import { v4 as uuidv4 } from 'uuid';
import Resizer from 'react-image-file-resizer';

const el = document.querySelector('#tester')

require.context('./images', false, /\.(png|jpe?g|svg)$/)

const BannerMainForm = () => {

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
  const [indexDot, setIndexDot] = useState(1)
  const setFinishedIndex = (i) => {
    // console.log("finished dragging on slide", i);
    setIndexDot(i);

  };
  ///////////////////////////////
  const dispath = useDispatch();

  const { user } = useSelector((state) => state.user);
  const [bannerImg1, setBannerImg1] = useState([]);

  const [bannerImg, setBannerImg] = useState();
  // const addBanner = (uri) => {
  //   let newBannerImg = uri;
  //   setBannerImg([...bannerImg, newBannerImg]);
  // };


  const resizeFileBanner = (file) =>
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
          console.log('re' + Boolean(file));
          setBannerImg(uri);
          // setTimeout(() => {
          //   dispath(hideLoading());
          // }, 5000);


        },
        'base64'
      );
    });
  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };


  let imgIdBanner = 'banner-' + uuidv4();

  const uploadImageBanner = () => {
    // console.log(user.userId)
    const newFile = dataURIToBlob(bannerImg);
    const formData = new FormData();

    formData.append('avatar', newFile, imgIdBanner);
    formData.append('userId', user.userId);
    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaodBanner`, formData)
      .then((result) => {

        // dispath(hideLoading());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getAllImageBanner = () => {
    axios
      .post(`${process.env.REACT_APP_API}/user/images/all`, { userId: user.userId })
      .then((result) => {

        const getArrayBanner = result.data.images;

        console.log(getArrayBanner)

        const mapArrayBanner = getArrayBanner.map(el => {
          const base64Flag = 'data:image/png;base64,';
          const imageStr = arrayBufferToBase64(el.img.data.data);
          const tagImage = base64Flag + imageStr;
          console.log(tagImage)
          return {
            imgId: el.imgId,
            tagImage: tagImage
          }
        })
        setBannerImg1(mapArrayBanner)


      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllImageBanner()

  }, [])

  console.log(bannerImg1)

  return (
    <div className="">
      <div className="bannerSectionForm" id='1'>
        <div className="boxImageForm">
          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {
            }}
            activeIndex={0}
            threshHold={20}
            transition={0.5}
            scaleOnDrag={false}
          >

            {bannerImg1.map((el, index) => (

              
              <img ref={(element) => {
                elementRef.current[index] = element;
              }} onClick={drag} key={index} src={require(`./images/${el}`)} className='imageBannerForm' />
            ))
            
            
            }

          </Slider >
          <div className="dotBarForm">
            {Array.from({ length: 7 }).map((item, index) => (
              <div className={indexDot === index ? "dotForm dotActiveForm" : "dotForm"} key={index}>{index + 1}</div>

            ))}

          </div>

        </div>

      </div>
      <div className="yyyyyy">
        <label htmlFor='file-upload' className='labelPhoto'>
          <input
            onChange={(e) => {

              // setvaluePhoto('');
              if (e.target.files.length === 0) return
              resizeFileBanner(e.target.files[0]).then((res) => { });

            }}
            id='file-upload'
            name='file-upload'
            type='file'
            className='inputPhoto'
          />fdfdfdfdfsssssssssssssssssss
        </label>
        <button onClick={uploadImageBanner}>Save</button>
      </div>

    </div>

  )
}
export default BannerMainForm