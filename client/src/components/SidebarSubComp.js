import React, { useEffect, useState } from 'react';
// import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg'
// import icon2 from '../all-icon-client/food-color-SVG-sprite.svg'
import styled, { createGlobalStyle } from 'styled-components';
const SidebarSubComp = (prop) => {
  const [barActive, setBarActive] = useState(true);

  // const [trigA, setTrickA] = useState()
  // const trigger = (index, any) => {
  //   let newdata = [...trigA]
  //   newdata[index] = any
  //   setTrickA(newdata)

  // }

  // useEffect(() => {

  //   if (prop.triggerIcon) {
  //     trigger(prop.triggerIcon.index, true);
  //   } else trigger(prop.triggerIcon.index, false);

  const [themeIconLine, setThemeIconLine] = useState('black');
  const [themeIconRadius, serThemeIconRadius] = useState('3rem');
  const [themeIconBG, serThemeIconBG] = useState('#eee');
  const [themeIconBorder, serThemeIconBorder] = useState('2px');
  const [themeIconBorderColor, serThemeIconBorderColor] = useState('#777');

  const GlobalStyle = createGlobalStyle`
  .theme-icon-lineColor {
    fill: ${themeIconLine};
  }

  .theme-icon-styleRadius{
    border-radius: ${themeIconRadius};
  }
  .theme-icon-BG-Border{
    background-color: ${themeIconBG};
    border: solid ${themeIconBorder} ${themeIconBorderColor};
  }

`;

  return (
    <div className='sideBarPosition'>
      <GlobalStyle />
      <div className='circleBarClient '>
        {barActive &&
          prop.menuTime == 1 &&
          prop.iconMenu_1.map((el, index) => {
            return (
              <a href={prop.iconMenu_1[index]?.link} value={el.catagory} className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'}`} key={index}>
                <svg className={` circle-iconSize theme-icon-lineColor`}>
                  <use xlinkHref={`${prop.iconMenu_1[index]?.icon}`} />
                </svg>
              </a>
            );
          })}
        {barActive &&
          prop.menuTime == 2 &&
          prop.iconMenu_2.map((el, index) => {
            return (
              <a href={prop.iconMenu_2[index]?.link} value={el.catagory} className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'}`} key={index}>
              <svg className={` circle-iconSize theme-icon-lineColor`}>
                <use xlinkHref={`${prop.iconMenu_2[index]?.icon}`} />
              </svg>
            </a>
            );
          })}
        {barActive &&
          prop.menuTime == 3 &&
          prop.iconMenu_3.map((el, index) => {
            return (
              <a href={prop.iconMenu_3[index]?.link} value={el.catagory} className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'}`} key={index}>
              <svg className={` circle-iconSize theme-icon-lineColor`}>
                <use xlinkHref={`${prop.iconMenu_3[index]?.icon}`} />
              </svg>
            </a>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarSubComp;

// style = {
//   {
//   height: `${height}px`,
//     transition: 'all .3s',

//   }}

// :
// (<div className={`transition-all flex gap-x-4 h-0`} style={
//   {
//     // height: `0px`,

//     transition: 'height 4s'

//   }}>
//   <div className="min-w-0 flex-auto pl-20">
//     <p ref={elementRef} className="text-sm font-semibold leading-6 text-gray-900 border-t" >{content}r</p>
//   </div>

// </div>)
// }
