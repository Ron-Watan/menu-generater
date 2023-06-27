import React, { useEffect, useState } from 'react';

const SidebarSubComp = (prop) => {
  const [squareBar, setSquareBar] = useState(false);
  const [circleBar, setCircleBareBar] = useState(true);

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

  console.log(prop.colorTheme);

  // }, [prop.triggerIcon]);

  return (
    // fixed top-40 z-20
    <div>
      <div className='squareBarC'>
        {/* {squareBar && userSidebarLists.map((el, index) => {
          return (
            <a href={pngIcon[index].link} value={el.catagory} onClick={() => { setSideBarActive(el.catagory) }} className={`${isSideBarActive === el.catagory ? 'sidebarTrans1' : 'sidebarTrans2'} hover:translate-x-0  origin-left bg-C_bgsidebar flex justify-center items-center w-12 h-12 p-1 rounded-r sidebar`} key={index}>
              <i className={`block text-3xl text-C_fsidebar ${el.icon}`} ></i>
            </a >
          )
        })} */}
      </div>

      <div className='circleBarC '>
        {circleBar &&
          prop.menuTime == 1 &&
          prop.iconMenu_1.map((el, index) => {
            return (
              <a href={prop.iconMenu_1[index]?.link} value={el.catagory} className={`circleBarBox`} key={index}>
                <i className={`${prop.colorTheme} circleBarIcon circleBarSize circleBarColor ${prop.triggerIcon[index] && 'activeBaricon'}`}>
                  <img className={``} src={prop.triggerIcon[index] ? prop.iconMenu_1[index]?.iconAct : prop.iconMenu_1[index]?.icon} alt='' />
                </i>
              </a>
            );
          })}
        {circleBar &&
          prop.menuTime == 2 &&
          prop.iconMenu_2.map((el, index) => {
            return (
              <a href={prop.iconMenu_2[index]?.link} value={el.catagory} className={`circleBarBox`} key={index}>
                <i style={{ 'background-color': prop.colorTheme }} className={`circleBarIcon circleBarSize circleBarColor ${prop.triggerIcon[index] && 'activeBaricon'}`}>
                  <img className={``} src={prop.triggerIcon[index] ? prop.iconMenu_2[index]?.iconAct : prop.iconMenu_2[index]?.icon} alt='' />
                </i>
              </a>
            );
          })}
        {circleBar &&
          prop.menuTime == 3 &&
          prop.iconMenu_3.map((el, index) => {
            return (
              <a href={prop.iconMenu_3[index]?.link} value={el.catagory} className={`circleBarBox`} key={index}>
                <i className={`circleBarIcon circleBarSize circleBarColor ${prop.triggerIcon[index] && 'activeBaricon'}`}>
                  <img className={``} src={prop.triggerIcon[index] ? prop.iconMenu_3[index]?.iconAct : prop.iconMenu_3[index]?.icon} alt='' />
                </i>
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
