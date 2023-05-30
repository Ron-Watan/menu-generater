import React, { useEffect, useRef } from 'react'
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


  const arr = [1, 2, 3, 4, 5, 6]

  const elementRef = useRef([]);

  useEffect(() => {
    // console.log(elementRef.current.offsetHeight);
  }, [elementRef.current[0]]);


  // console.log(elementRef.current.offsetHeight);
  const drag = () => {
    console.log(elementRef.current[0]);

  }

  return (
    // <div className="bannerSection">
    //   <div className="boxImage">
    //     {images.map(el => {
    //       return <img className='imageBanner' src={require(`./images/${el}`)} />
    //     })}
    // <div className="">
    //   <img className='imageBanner' src={require(`./images/288747.jpg`)} />
    //   <img className='imageBanner' src={require(`./images/288747.jpg`)} />
    //   <img className='imageBanner' src={require(`./images/288747.jpg`)} />

    // </div>
    //   </div>
    // </div>

    <div className="bannerSection">
      <div className="boxImage">
        <Slider
          onSlideComplete={(i) => {
            console.log(i)
          }}
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
            }} onClick={drag} key={index} src={require(`./images/${el}`)} className='imageBanner' />
          ))}

        </Slider >

      </div>
    </div>

  )
}
export default BannerSubCompo