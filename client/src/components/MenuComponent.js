
import logo from '../img/bp-logo.png'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';
import AcordionSubComp from './AcordionSubComp';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'
import SidebarSubComp from './SidebarSubComp';
import ListFavoriteSubComp from './ListFavoriteSubComp';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Slab',
      'roboto slab',
    ].join(','),
  },
});

const MenuComponent = () => {

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



  const [isSideBarActive, setSideBarActive] = useState(userSidebarLists[0].catagory);
  // const [isMenuActive, setMenuActive] = useState(userManuLists[0].tabCode);
  // const [height, setHeight] = useState(0);

  // const elementRef = useRef(null);


  return (
    <div className='relative'>

      <div className='max-w-lg'>

        <nav className="bg-C_navmain sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div className="relative flex items-center">
                <img className="block h-8 w-auto" src={logo} alt="Your Company" />
              </div>


              <div className="relative flex items-center pr-2 ">
                <button type="button" className="inline-flex items-center justify-center 
              rounded-md p-2 text-C_icon hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                <div className="relative ml-3">
                  <div>
                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
            </div>
          </div>
        </nav>

        {/* == SIDE BAR == */}
        < SidebarSubComp />

        {/* == MENU == */}
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
        </ThemeProvider>

        <ListFavoriteSubComp/>
        {/* <div className="mx-auto max-w-7xl" id='1'>

          <div className="h-40" style={{
            backgroundImage: `url(${catalog1})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'
          }}>
          </div>

          <ul role="list" className="divide-y divide-gray-100 px-2 sm:px-6 lg:px-8">



            {userManuLists.map(el => {

              <li onClick={() => setMenuActive(el.tabCode)} className='cssTransition flex flex-col justify-left gap-x-6 overflow-hidden' key={uuidv4()}>
                <div className='flex gap-x-4 py-2 '>
                  <div className='min-w-0 flex-auto pl-20'>
                    <div className='flex justify-between '>
                      <p className='text-sm font-semibold leading-6 text-gray-900 '>{el.title}</p>
                      <p>{isMenuActive === el.tabCode ? '-' : '+'}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={` transition-all h-0 `}
                  style={{
                    height: isMenuActive === el.tabCode ? `${height}px` : '0px',
                    transition: 'all .3s',
                  }}>
                  <div className={`flex gap-x-4`}>
                    <div className='min-w-0 flex-auto pl-20'>
                      <p ref={elementRef} className='text-sm font-semibold leading-6 text-gray-900 border-t'>
                        {el.content}
                      </p>
                    </div>
                  </div>
                </div>

              </li>
            })}

          </ul>
        </div> */}





        {/* <div className="mx-auto max-w-7xl" id='3'>
          <div className="h-40" style={{
            backgroundImage: `url(${catalog1})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'
          }}>
          </div>
          <ul role="list" className="divide-y divide-gray-100 px-2 sm:px-6 lg:px-8 cssTransition">

            {userManuLists.map(({ title, content, tabCode }) => (
              <AccordionList title={title} content={content} tabCode={tabCode} />
            ))}

          </ul>
        </div> */}













      </div>
    </div >
  )
}

export default MenuComponent



