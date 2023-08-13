import React, { useState } from 'react'
import Slider from 'react-touch-drag-slider'
import "../../styleClient/bannerClient.css"
import { useDispatch, useSelector } from 'react-redux'



//=
const BannerSubCompo = (prop) => {

  let photoHostName = `${process.env.REACT_APP_API}/user/photos/`

  const dispath = useDispatch();

  //1//
  const { user } = useSelector((state) => state.user);

  const [indexDot, setIndexDot] = useState(0)
  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    setIndexDot(i)
  };


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
                // ${photoHostName}${el}?key=${prop.imageKey}
                <img key={index} src={`${el.slice(0, -10) === user?.link ? `${photoHostName}${el}?key=${prop.imageKey}` : el}`} className='imageBannerFormC' />

                // <img key={index} src={`${photoHostName}${el}`} className='imageBannerFormC' />

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