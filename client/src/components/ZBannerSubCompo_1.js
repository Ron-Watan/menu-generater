import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-touch-drag-slider'

// here we are importing some images
// but the Slider children can be an array of any element nodes,
// or your own components

// import images from './images/'



const el = document.querySelector('#tester')

require.context('./images', false, /\.(png|jpe?g|svg)$/)

function BannerSubCompo() {

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


  return (

    <div className="bannerWrapperC" id='1'>
      <div className="boxImageC">
        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
          }}
          activeIndex={0}
          threshHold={20}
          transition={0.5}
          scaleOnDrag={false}
        >

          {images.map((el, index) => (
            <img ref={(element) => {
              elementRef.current[index] = element;
            }} onClick={drag} key={index} src={require(`./images/${el}`)} className='imageBannerC' />
          ))}

        </Slider >
        <div className="dotBarC">
          {Array.from({ length: 6 }).map((item, index) => (
            <div className={indexDot === index ? "dotC dotActiveC" : "dotC"} key={index}></div>
          ))}

        </div>

      </div>


    </div>

  )
}
export default BannerSubCompo