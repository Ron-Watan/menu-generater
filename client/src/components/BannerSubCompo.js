import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
// import "../style/bannerMainForm.css"
import "../styleClient/bannerClient.css"

import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'
import iconPhoto from '../icon/downloadIcon.svg'
// here we are importing some images
// but the Slider children can be an array of any element nodes,
// or your own components

// import images from './images/'

import Resizer from 'react-image-file-resizer';
import { useParams } from 'react-router-dom'

//=
const BannerSubCompo = (prop) => {

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
    setIndexDot(i)
  };

  const dispath = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { link } = useParams()
  const [loadingManual, setLoadingManual] = useState(false)
  const [bannerImgArr, setBannerImgArr] = useState([])




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
          if (bannerImgArr.length > 6) return setLoadingManual(false)
          // setBannerImg(uri);
          setBannerImgArr([...bannerImgArr, uri])
          // getAllImageBanner()
          setIndexDot(bannerImgArr.length)
          setFinishedIndex(bannerImgArr.length)
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

  // GET ALL IMAGE

  const getAllImageBanner = () => {
    dispath(showLoading())
    axios
      .get(`${process.env.REACT_APP_API}/clients/allBanner/${link}`,)
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
        setLoadingManual(false)
      })
      .catch((err) => {
        console.error(err);
      });

  };

  useEffect(() => {
    getAllImageBanner()

  }, [user])



  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="bannerWrapperC">
      <div className="bannerSectionFormC" id='1'>

        <div className="boxImageFormC">

          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {

            }}
            activeIndex={indexDot}//prop.bannerImgArr.length - 1
            threshHold={20}
            transition={0.5}
            scaleOnDrag={false}
          >
            {
              bannerImgArr.map((el, index) => (
                <div className="" key={index}>

                  <img ref={(element) => {
                    elementRef.current[index] = element;
                  }} onClick={drag} key={index} src={el} className='imageBannerFormC' />

                </div>
              ))
            }

          </Slider >

          {/* DOT BUTTON*/}
          <div className="dotBarFlex">
            {Array.from({ length: bannerImgArr.length }).map((item, index) => (
              <button onClick={() => {
                setIndexDot(index)
                setFinishedIndex(index)

              }}
                className={indexDot === index ?  "dotActiveC" : "dotC"}
                // className={'dotC'}
                key={index}>{index + 1}</button>
            ))}

          </div>

        </div>


      </div >
    </div>

  )
}
export default BannerSubCompo