import React, {  useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

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




  //   const GlobalStyle =
  //     createGlobalStyle`
  //   .theme-icon-lineColor {
  //     fill: ${prop.themeSetup.sideBar.themeIconColorLine};
  //   }

  //   .theme-icon-styleRadius{
  //     border-radius: ${prop.themeSetup.sideBar.themeIconRadius};
  //   }
  //   .theme-icon-BG-Border{
  //     background-color: ${prop.themeSetup.sideBar.themeIconBG};
  //     border:  ${prop.themeSetup.sideBar.themeIconSolid} 2px ${prop.themeSetup.sideBar.themeIconColorBorder};
  //   }

  // `;


  // useEffect(() => {
  //   GlobalStyle();
  // }, []);

  return (
    <div className='sideBarPosition unselectable'>
      {/* <GlobalStyle /> */}
      <div className='circleBarClient '>
        {barActive &&
          prop.menuTime == 1 &&
          prop.iconMenu_1.map((el, index) => {
            return (
              <AnchorLink href={prop.iconMenu_1[index]?.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeSetup.sideBar.themeIconBG}`,
                  'border': `${prop.themeSetup.sideBar.themeIconSolid} 0px ${prop.themeSetup.sideBar.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeSetup.sideBar.themeIconRadius}`

                }}
                // style={{
                //   'backgroundColor': `${prop.themeSetup.sideBar.themeIconBG}`,
                //   'borderRadius': `${prop.themeSetup.sideBar.themeIconRadius}`,
                //   'borderWidth': '0px',
                //   'borderStyle': `${prop.themeSetup.sideBar.themeIconSolid}`,
                //   'borderColor': `${prop.themeSetup.sideBar.themeIconColorBorder}`
                // }}

                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'}   ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeSetup.sideBar.themeIconColorLine}` }}

                  className={` circle-iconSize theme-icon-lineColor ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${prop.iconMenu_1[index]?.icon}`} />
                </svg>
              </AnchorLink>
            );
          })}
        {barActive &&
          prop.menuTime == 2 &&
          prop.iconMenu_2.map((el, index) => {
            return (
              <a href={prop.iconMenu_2[index]?.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeSetup.sideBar.themeIconBG}`,
                  'border': `${prop.themeSetup.sideBar.themeIconSolid} 0px ${prop.themeSetup.sideBar.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeSetup.sideBar.themeIconRadius}`

                }}
                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'} ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeSetup.sideBar.themeIconColorLine}` }}
                  className={` circle-iconSize theme-icon-lineColor ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${prop.iconMenu_2[index]?.icon}`} />
                </svg>
              </a>
            );
          })}
        {barActive &&
          prop.menuTime == 3 &&
          prop.iconMenu_3.map((el, index) => {
            return (
              <a href={prop.iconMenu_3[index]?.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeSetup.sideBar.themeIconBG}`,
                  'border': `${prop.themeSetup.sideBar.themeIconSolid} 0px ${prop.themeSetup.sideBar.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeSetup.sideBar.themeIconRadius}`

                }}

                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'} ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeSetup.sideBar.themeIconColorLine}` }}
                  className={` circle-iconSize theme-icon-lineColor ${prop.themeSetup.sideBar.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${prop.iconMenu_3[index]?.icon}`} />
                </svg>
              </a>
            );
          })}
      </div>
    </div >
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
