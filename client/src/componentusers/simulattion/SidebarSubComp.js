import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

const SidebarSubComp = (prop) => {

  return (
    <div className='sideBarPosition unselectable'>
      {/* <GlobalStyle /> */}
      <div className='circleBarClient ' onClick={() => {
        prop.setOnOffOnOffFeature(false)
        prop.setMBnavIcon(false)
      }}>
        {
          prop.menuTime == 1 &&
          prop.iconMenu_1.map((el, index) => {
            return (
              <AnchorLink href={el.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeIconBG}`,
                  'border': `${prop.themeIconSolid} 0px ${prop.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeIconRadius}`

                }}

                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'}   ${prop.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeIconColorLine}` }}

                  className={` circle-iconSize theme-icon-lineColor ${prop.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${el.icon}`} />
                </svg>
              </AnchorLink>
            );
          })}
        {
          prop.menuTime == 2 &&
          prop.iconMenu_2.map((el, index) => {
            return (
              <a href={el.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeIconBG}`,
                  'border': `${prop.themeIconSolid} 0px ${prop.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeIconRadius}`

                }}
                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'} ${prop.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeIconColorLine}` }}
                  className={` circle-iconSize theme-icon-lineColor ${prop.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${el.icon}`} />
                </svg>
              </a>
            );
          })}
        {
          prop.menuTime == 3 &&
          prop.iconMenu_3.map((el, index) => {
            return (
              <a href={el.link} value={el.catagory}
                style={{
                  'backgroundColor': `${prop.themeIconBG}`,
                  'border': `${prop.themeIconSolid} 0px ${prop.themeIconColorBorder}`,
                  'borderRadius': `${prop.themeIconRadius}`

                }}

                className={` circle-iconButton theme-icon-styleRadius theme-icon-BG-Border ${prop.triggerIcon[index] && 'circle-iconButton-Active'} ${prop.extraIcon && 'extraIcon-client'}`} key={index}>
                <svg
                  style={{ 'fill': `${prop.themeIconColorLine}` }}
                  className={` circle-iconSize theme-icon-lineColor ${prop.extraIcon && 'extraIcon-client'}`}>
                  <use xlinkHref={`${el.icon}`} />
                </svg>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarSubComp;
