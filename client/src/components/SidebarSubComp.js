import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import 'remixicon/fonts/remixicon.css'


const SidebarSubComp = (prop) => {


  const userSidebarLists = [
    { catagory: "c01", icon: 'ri-keyboard-line', link: '/#1' },
    { catagory: "c02", icon: 'ri-link-unlink-m', link: '/#2' },
    { catagory: "c03", icon: 'ri-shopping-basket-line', link: '/#3' },
    { catagory: "c04", icon: 'ri-keyboard-line', link: '/#4' },
    { catagory: "c05", icon: 'ri-coins-line', link: '/#5' },
    { catagory: "c06", icon: 'ri-keyboard-line', link: '/#6' },
    { catagory: "c07", icon: 'ri-link-unlink-m', link: '/#7' },
    { catagory: "c08", icon: 'ri-keyboard-line', link: '/#8' },
  ]
  const pngIcon = [
    { catagory: "c01", icon: 'g1-w/Group 1.svg', iconAct: 'g1-w2/Group 1.svg', link: '/#1', active: false },
    { catagory: "c02", icon: 'g1-w/Group 2.svg', iconAct: 'g1-w2/Group 2.svg', link: '/#2', active: false },
    { catagory: "c03", icon: 'g1-w/Group 3.svg', iconAct: 'g1-w2/Group 3.svg', link: '/#3', active: false },
    { catagory: "c04", icon: 'g1-w/Group 4.svg', iconAct: 'g1-w2/Group 4.svg', link: '/#4', active: false },
    { catagory: "c05", icon: 'g1-w/Group 5.svg', iconAct: 'g1-w2/Group 5.svg', link: '/#5', active: false },
    { catagory: "c06", icon: 'g1-w/Group 6.svg', iconAct: 'g1-w2/Group 6.svg', link: '/#6', active: false },
    { catagory: "c07", icon: 'g1-w/Group 7.svg', iconAct: 'g1-w2/Group 7.svg', link: '/#7', active: false },
    { catagory: "c08", icon: 'g1-w/Group 8.svg', iconAct: 'g1-w2/Group 8.svg', link: '/#8', active: false },
  ]

  const [isSideBarActive, setSideBarActive] = useState(userSidebarLists[0].catagory);
  const [squareBar, setSquareBar] = useState(false)
  const [circleBar, setCircleBareBar] = useState(true)


  const [trigA, setTrickA] = useState()
  const trigger = (index, any) => {
    let newdata = [...trigA]
    newdata[index] = any
    setTrickA(newdata)

  }


  // useEffect(() => {

  //   if (prop.triggerIcon) {
  //     trigger(prop.triggerIcon.index, true);
  //   } else trigger(prop.triggerIcon.index, false);



  // }, [prop.triggerIcon]);



  return (
    // fixed top-40 z-20
    <div className=" ">
      <div className="squareBarC">
        {squareBar && userSidebarLists.map((el, index) => {
          return (
            <span href={el.link} value={el.catagory} onClick={() => { setSideBarActive(el.catagory) }} className={`${isSideBarActive === el.catagory ? 'sidebarTrans1' : 'sidebarTrans2'} hover:translate-x-0  origin-left bg-C_bgsidebar flex justify-center items-center w-12 h-12 p-1 rounded-r sidebar`} key={index}>
              <i className={`block text-3xl text-C_fsidebar ${el.icon}`} ></i>
            </span >
          )
        })}
      </div>
      <div className="circleBarC">
        {circleBar && pngIcon.map((el, index) => {
          return (
            <span href={el.link} value={el.catagory} onClick={() => { setSideBarActive(el.catagory) }} className={`${isSideBarActive === el.catagory ? '' : ''} circleBarBox`} key={index}>
              <i className={`circleBarIcon circleBarSize circleBarColor ${prop.triggerIcon[index] && "activeBaricon"}`} >
                <img className={``} src={require(`../bar-icon/${prop.triggerIcon[index] ? pngIcon[index].iconAct : pngIcon[index].icon}`)} alt="" />

              </i>
            </span >
          )
        })}
      </div>

    </div>
  )
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
