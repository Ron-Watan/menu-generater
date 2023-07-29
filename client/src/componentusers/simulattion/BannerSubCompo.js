import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
// import "../style/bannerMainForm.css"
import "../../styleClient/bannerClient.css"

import axios from 'axios'
import { hideLoading, showLoading } from '../../redux/alertSlice'
import { useDispatch, useSelector } from 'react-redux'



//=
const BannerSubCompo = (prop) => {
  // prop.themeSetup
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

  const [loadingManual, setLoadingManual] = useState(false)
  const [bannerImgArr, setBannerImgArr] = useState([])



  // function arrayBufferToBase64Banner(buffer) {
  //   var binary = '';
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // }

  // GET ALL IMAGE

  // const getAllImageBanner = () => {
  //   dispath(showLoading())
  //   axios
  //     .get(`${process.env.REACT_APP_API}/clients/allBanner/${prop.link}`,)
  //     .then((result) => {

  //       if (result.data.success) {
  //         const getArrayBanner = result.data.images.bannerImage;
  //         const mapArrayBanner = getArrayBanner.map(el => {
  //           const base64Flag = 'data:image/png;base64,';
  //           const imageStr = arrayBufferToBase64Banner(el.data.data);
  //           const tagImage = base64Flag + imageStr;

  //           return tagImage
  //         })
  //         setBannerImgArr(mapArrayBanner)

  //         dispath(hideLoading());
  //         setLoadingManual(false)
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  // };

  // useEffect(() => {
  //   getAllImageBanner()

  // }, [user])



  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="bannerWrapperC"
      style={{ 'backgroundColor': `${prop.bodyStyle.bodyBgColor}` }}>
      <div className="bannerSectionFormC" >

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
              prop.bannerImgArr.map((el, index) => (
                <div className="unselectable" key={index}>

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
                className={indexDot === index ? "dotActiveC" : "dotC"}
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