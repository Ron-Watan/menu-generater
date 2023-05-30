import React, { useState } from "react";
import Slider from "react-touch-drag-slider";
// import styled, { createGlobalStyle, css } from "styled-components";

// import images from "..components/images";

// define some basic styles
// const GlobalStyles = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }
//   html,body {
//     padding: 0;
//     margin: 0;
//   }
// `;
// The slider will fit any size container, lets go full screen...
// const AppStyles = styled.main`
//   height: 100vh;
//   width: 100vw;
// `;

// const Button = styled.button`
//   font-size: 2rem;
//   z-index: 10;
//   position: fixed;
//   top: 50%;
//   ${(props) =>
//     props.right
//       ? css`
//           right: 0.5rem;
//         `
//       : css`
//           left: 0.5rem;
//         `}
// `;
// Whatever you render out in the Slider will be draggable 'slides'
function BannerExample() {
  // state should start with the index you want to start the slide on
  const [index, setIndex] = useState(1);

  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    setIndex(i);
  };

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const previous = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      {/* <GlobalStyles /> */}
      <div>
        <button onClick={previous} left disabled={index === 0}>
          〈
        </button>
        <button onClick={next} right disabled={index === images.length - 1}>
          〉
        </button>
        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
            console.clear();
            console.log("started dragging on slide", i);
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.2}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default BannerExample;
