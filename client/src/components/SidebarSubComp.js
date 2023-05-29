import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'remixicon/fonts/remixicon.css'
import logo from '../img/vegetable.svg'

const SidebarSubComp = () => {


  const userSidebarLists = [
    {
      catagory: "c01",
      icon: 'ri-keyboard-line',
      link: '/#1'
    },
    { catagory: "c02", icon: 'ri-link-unlink-m', link: '/#2' },
    { catagory: "c03", icon: 'ri-shopping-basket-line', link: '/#3' },
    { catagory: "c04", icon: 'ri-keyboard-line', link: '/#4' },
    { catagory: "c05", icon: 'ri-coins-line', link: '/#5' },
    { catagory: "c06", icon: 'ri-keyboard-line', link: '/#6' },
    { catagory: "c07", icon: 'ri-link-unlink-m', link: '/#7' },
    { catagory: "c08", icon: 'ri-keyboard-line', link: '/#8' },
  ]


  const [isSideBarActive, setSideBarActive] = useState(userSidebarLists[0].catagory);


  return (

    <div className="fixed top-40 z-20 ">
      {/* {userSidebarLists.map(el => {
        return (
          <button href={el.link} value={el.catagory} onClick={() => { setSideBarActive(el.catagory) }} className={`${isSideBarActive === el.catagory ? 'translate-x-0' : '-translate-x-2'} hover:translate-x-0  origin-left bg-C_bgsidebar flex justify-center items-center w-12 h-12 p-1 rounded-r`} style={{ marginBottom: '1px' }} key={uuidv4()}>
            <i className={`block text-3xl text-C_fsidebar ${el.icon}`} ></i>
          </button >
        )
      })} */}
      {userSidebarLists.map(el => {
        return (
          <button href={el.link} value={el.catagory} onClick={() => { setSideBarActive(el.catagory) }} className={`${isSideBarActive === el.catagory ? 'translate-x-0' : '-translate-x-2'} hover:translate-x-0  shadow  shadow-blue origin-left bg-C_bgsidebar flex justify-center items-center w-12 h-12 p-2.5 rounded-r`} style={{ marginBottom: '1px' }} key={uuidv4()}>
            <img className="iconColor" src={logo} alt="" />

          </button >
        )
      })}

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
