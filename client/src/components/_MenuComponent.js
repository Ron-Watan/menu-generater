
import logo from '../img/bp-logo.png'
import 'remixicon/fonts/remixicon.css'
import { useEffect, useState } from 'react';
import AcordionSubComp from './AcordionSubComp';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'
import SidebarSubComp from './SidebarSubComp';
import FooterComponent from './FooterComponent';
import BannerSubCompo from './BannerSubCompo';
import Texttest from './Text';
import i18n from './multiLanguage/i18n';
import axios from 'axios';
import { ticketPass } from '../protectors/authorize';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import LocaleContext from './LocaleContext';
// import images from './images'
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Slab',
      'roboto slab',
    ].join(','),
  },
});


const _MenuComponent = () => {

  const [clientMenu, setClientMenu] = useState([])

  const { link } = useParams()

  const [started, setStarted] = useState(false)

  const switcher = (even) => {
    setStarted(!started)
  }

  const [language, setLanguage] = useState('th');

  const changeLocale = (lang) => {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {

    i18n.changeLanguage(language);

  }, [])



  const getClientMenu = () => {
    // dispath(showLoading())
    axios.get(`${process.env.REACT_APP_API}/clients/${link}`)
      .then(result => {
        if (result.data.success) {
          console.log(result.data)
          setClientMenu(result.data.clientMenu.menu)
          // setClentMenu(result.data.userMenu.menu)
          // dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {

        console.log("Can't not connect the server", err)
        // Swal.fire("Can't not connect the server")
      })
  }


  // const listMenu = clentMenu.listMenu
  console.log(clientMenu)






  
  useEffect(() => {
    getClientMenu()

  }, [])


  return (
    <div className=''>

      <div className='relative max-w-lg'>

        <nav className="bg-C_navmain  top-0 z-50">
          <div className="mx-auto">
            <div className="relative flex h-12 items-center justify-between">
              <div className="relative flex items-center">
                <img className="block h-6 w-auto" src={logo} alt="Your Company" />
              </div>

              <div className=" relative flex items-center ml-2">
                <div className=" flex justify-self-end text-sm text-white">
                  LUNCH MENU
                </div>

                <button type="button" className=" inline-flex items-center justify-center ml-2
                  rounded-md p-1 text-C_icon hover:bg-gray-700 hover:text-white focus:outline-none
                  focus:ring-1 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

                  <svg fill="#fff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

                    <path d="M29.555 2.843c-0.072-0.276-0.291-0.486-0.565-0.546l-0.005-0.001c-0.046-0.010-0.099-0.016-0.153-0.016-0.238 0-0.451 0.109-0.59 0.281l-0.001 0.001c-1.698 2.005-3.923 3.515-6.462 4.32l-0.099 0.027c-1.693 0.552-3.662 0.946-5.697 1.103l-0.088 0.005c-2.231 0.083-4.325 0.58-6.236 1.417l0.11-0.043c-3.3 1.788-5.502 5.225-5.502 9.176 0 0.062 0.001 0.124 0.002 0.186l-0-0.009c0.009 0.303 0.030 0.602 0.064 0.9 0.154 1.198 0.484 2.285 0.966 3.285l-0.028-0.064c-1.539 1.982-2.868 4.245-3.886 6.67l-0.073 0.197c-0.038 0.087-0.060 0.188-0.060 0.295 0 0.414 0.336 0.75 0.75 0.75 0.308 0 0.572-0.185 0.688-0.45l0.002-0.005c0.964-2.307 2.092-4.294 3.425-6.123l-0.059 0.085c1.137 1.755 2.709 3.14 4.567 4.021l0.067 0.029c1.421 0.649 3.083 1.028 4.833 1.028 0.027 0 0.053-0 0.079-0l-0.004 0c1.889-0.009 3.686-0.392 5.324-1.081l-0.092 0.034c5.262-2.385 9.002-7.306 9.678-13.16l0.007-0.077c0.147-1.13 0.231-2.436 0.231-3.762 0-3.018-0.436-5.935-1.247-8.69l0.055 0.217zM29.031 14.855c-0.604 5.397-3.991 9.883-8.674 12.030l-0.094 0.038c-1.334 0.593-2.891 0.939-4.528 0.939-1.599 0-3.121-0.329-4.501-0.924l0.074 0.028c-1.81-0.853-3.27-2.198-4.242-3.864l-0.024-0.045c3.317-3.812 7.63-5.711 13.801-6.312 0.38-0.040 0.674-0.358 0.674-0.746 0-0.414-0.336-0.75-0.75-0.75-0.024 0-0.048 0.001-0.072 0.003l0.003-0c-5.639 0.209-10.681 2.598-14.343 6.343l-0.004 0.004c-0.244-0.617-0.431-1.336-0.526-2.083l-0.005-0.045c-0.030-0.256-0.048-0.512-0.055-0.768-0.001-0.049-0.002-0.108-0.002-0.166 0-3.358 1.869-6.279 4.623-7.78l0.046-0.023c1.65-0.708 3.565-1.152 5.575-1.225l0.028-0.001c2.247-0.173 4.33-0.592 6.313-1.232l-0.192 0.054c2.448-0.8 4.547-2.082 6.279-3.744l-0.006 0.005c0.523 2.020 0.823 4.338 0.823 6.727 0 1.247-0.082 2.475-0.24 3.678l0.015-0.142z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* == SIDE BAR == */}
        < SidebarSubComp />

        {/* == <BannerExample /> == */}
        <BannerSubCompo />
        {/* == MENU == */}
        <CssBaseline />
        <ThemeProvider theme={theme}>

          {clientMenu.map((el, index) => (

            <AcordionSubComp listMunu={el}  />

          ))}

          {/* <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp />
          <AcordionSubComp /> */}
        </ThemeProvider>




        <Texttest />
        <div className="footerSpace"></div>
        <FooterComponent />


        <div>
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


      </div>
    </div >
  )
}

export default _MenuComponent



