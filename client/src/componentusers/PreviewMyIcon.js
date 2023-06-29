import React from 'react';
// import * as icon from '../iconPicker/iconFiles';
import styled, { createGlobalStyle } from 'styled-components';
// import iconA from '../iconPicker/Black-Food.svg';
// import iconB from '../iconPicker/Collor Food.svg';

const PreviewMyIcon = () => {
  const GlobalStyle = createGlobalStyle`

  .icon4{
    fill:#003879;
  }
`;

  return (
    <div>
      <GlobalStyle />
      <div className='colorPickerGridRow'>
        <div className='colorPickerName'>My Icon</div>
        <svg class='icon'>
          <use xlinkHref='#salad' />
        </svg>
        <i class='flaticon-airplane49'></i> or <span class='salad'></span>
        <div className='colorPickerName'>My Icon</div>
      
          {/* <svg class='icon4'>
            <use xlinkHref={`${iconB}#fast-food`} />
          </svg>
          <svg class='icon4'>
            <use xlinkHref={`${iconA}#fast-food`} />
          </svg> */}
        {/* {Array.from({ length: 2 }).map((el, index) => (
          <div className='myIconFlex'>
            <span className='myIconFlexItem' key={index}>
              {index + 1}
            </span>
            <span className='myIconFlexItem' key={index}>
              {icon.food(index + 1)}
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default PreviewMyIcon;
