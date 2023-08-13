import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'
import "../styleClient/bannerClient.css"




//=
const BannerSubCompo = (prop) => {
  let photoHostName = `${process.env.REACT_APP_API}/user/photos/`

  // prop.themeSetup
  // const elementRef = useRef([]);

  // useEffect(() => {
  // console.log(elementRef.current.offsetHeight);
  // }, [elementRef.current[0]]);


  const drag = () => {
    // console.log(elementRef.current[0]);
  }
  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    setIndexDot(i)
  };





  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="bannerWrapperC unselectable"
      style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}` }}>
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

                // <img ref={(element) => {
                //   elementRef.current[index] = element;
                // }} onClick={drag} key={index} src={el} className='imageBannerFormC' />
                 // <img key={index} src={el} className='imageBannerFormC' />
                <img key={index} src={`${el.slice(0, -10) === prop.link ? photoHostName + el : el}`} className='imageBannerFormC' />
               



              ))
            }
          </Slider >

          {/* DOT BUTTON*/}
          <div className="dotBarFlex">
            {Array.from({ length: prop.bannerImgArr.length }).map((item, index) => (
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