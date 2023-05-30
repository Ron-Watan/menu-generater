
import logo from '../img/bp-logo.png'
import 'remixicon/fonts/remixicon.css'
import { useEffect, useState } from 'react';
import AcordionSubComp from './AcordionSubComp';
import { Button, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'
import SidebarSubComp from './SidebarSubComp';
import FooterComponent from './FooterComponent';
import BannerSubCompo from './BannerSubCompo';
import Texttest from './Text';
import i18n from './multiLanguage/i18n';

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


const MenuComponent = () => {


  const [started, setStarted] = useState(false)

  const switcher = (ev) => {
    setStarted(!started)
    console.log(ev)
  }


  const [language, setLanguage] = useState('th');

  const changeLocale = (lang) => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {

    i18n.changeLanguage(language);

  }, [])

  // changeLocale('en')
  return (
    <div className=''>

      <div className='relative max-w-lg'>

        <nav className="bg-C_navmain sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-2">
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
                  {/* <button type="button" className=" inline-flex items-center justify-center ml-4
                  rounded-md p-1 text-C_icon hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" class="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg> */}
                </button>

              </div>
            </div>
          </div>


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

        {/* <BannerExample /> */}

        {/* <LocaleContext.Provider value={{ locale, setLocale }}> */}

        {/* <Helmet htmlAttributes={{
            lang: locale,
            dir: locale === 'th' ? 'th' : 'th'
          }} /> */}

        <Texttest />


        {/* </LocaleContext.Provider> */}


        <BannerSubCompo />
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

        <div className="" >


          {/* <div className=" overaybg1">  sssssssssssssssssssssssssssssssssss </div> */}

          {/* <nav className=" fixed top-full -translate-y-full bg-C_navmain footerBar zIndex">

          <div className="grid grid-cols-3 content-center">

            <div className="flex items-center justify-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                stroke="#fff" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>

            <div onClick={() => switcher(true)} className="flex items-center justify-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1" stroke="white" className="w-7 h-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
            </div>

            <div className="flex items-center justify-center mt-1">
              <svg width="25" height="25" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08612 1.10833C5.12302 1.10833 6.74868 1.11712 7.78559 1.11712C7.89982 1.11712 8.01406 1.1259 
                8.12829 1.15227C8.23374 1.16984 8.33919 1.20499 8.44464 1.24893C8.5413 1.29286 8.63796 1.34559 8.73462 1.4071C8.8225 1.46861 8.91037 1.53891 8.98946 1.618C9.06854 1.69708 9.13884 1.78495 9.20035 1.87283C9.26186 1.9607 9.31459 2.05736 9.35852 2.16281C9.40246 2.25947
                9.42882 2.36492 9.45518 2.47916C9.47276 2.59339 9.49033 2.69884 9.49033 2.82186V6.25771C9.49033 6.37195 9.48155 6.48618 9.45518 6.60042C9.43761 6.71466 9.40246 6.81132 9.35852 6.91676C9.31459 7.01343 9.26186 7.11009 9.20035 7.20675C9.13884 7.29462 9.06854 7.38249
                8.98946 7.46158C8.90158 7.54067 8.81371 7.61975 8.72583 7.67248C8.63796 7.73399 8.5413 7.78671 8.44464 7.83065C8.34798 7.87459 8.24253 7.90095 8.13708 7.92731C8.03163 7.94488 7.9174 7.96246 7.79438 7.96246H6.48506C6.44112 7.96246 6.40598 7.97125 6.37083 7.98882C6.33568
                8.0064 6.30931 8.03276 6.28295 8.05912C6.1775 8.19093 6.07206 8.32274 5.95782 8.45455C5.84359 8.57757 5.72935 8.7006 5.59754 8.81483C5.47452 8.92907 5.34271 9.03452 5.2109 9.13996C5.07909 9.24541 4.93849 9.34207 4.79789 9.43873C4.66608 9.52661 4.5167 9.61448 4.36731
                9.69357C4.21793 9.77265 4.06854 9.84295 3.91916 9.91325C3.90158 9.92204 3.88401 9.92204 3.86643 9.91325C3.84007 9.89568 3.83128 9.86053 3.84007 9.83416C3.86643 9.78144 3.89279 9.7375 3.91916 9.68478C3.94552 9.64084 3.97188 9.58812 3.98946 9.53539C4.03339 9.43873 4.07733
                9.34207 4.11248 9.23662C4.15641 9.13118 4.19156 9.02573 4.22671 8.92028C4.26186 8.82362 4.29701 8.71817 4.32337 8.61272C4.35852 8.50727 4.38489 8.40183 4.41125 8.29638C4.42004 8.26123 4.42882 8.23487 4.42882 8.19972C4.42882 8.12942 4.40246 8.06791 4.34974 8.01518C4.3058
                7.97125 4.2355 7.9361 4.1652 7.9361H2.67135C2.55712 7.9361 2.44288 7.92731 2.32865 7.90095C2.2232 7.88337 2.11775 7.84822 2.02109 7.81307C1.92443 7.77792 1.82777 7.7252 1.73989 7.66369C1.64323 7.60218 1.55536 7.52309 1.46749 7.44401C1.3884 7.36492 1.3181 7.27705 1.25659
                7.18917C1.19508 7.1013 1.14235 7.00464 1.09842 6.89919C1.05448 6.80253 1.02812 6.69708 1.00176 6.58285C0.984183 6.46861 0.966608 6.36316 0.966608 6.24014V4.06967C0.966608 3.71817 0.509666 3.71817 0.439367 3.96422V6.24014C0.439367 6.38952 0.456942 6.53891 0.483304 6.67951C0.509666
                6.8201 0.553603 6.9607 0.606327 7.09251C0.659051 7.22432 0.72935 7.34734 0.808436 7.47037C0.887522 7.59339 0.984183 7.70763 1.08963 7.81307C1.19508 7.91852 1.30931 8.01518 1.43234 8.09427C1.54657 8.17336 1.67838 8.24365 1.81019 8.29638C1.942 8.3491 2.0826 8.39304 2.2232 8.4194C2.3638
                8.44576 2.51318 8.46334 2.66257 8.46334H3.74341C3.7522 8.46334 3.76098 8.46334 3.76098 8.46334C3.79613 8.47213 3.81371 8.50727 3.79613 8.54242C3.77856 8.61272 3.7522 8.67423 3.73462 8.74453C3.69947 8.84119 3.66432 8.93785 3.62917 9.03452C3.59402 9.12239 3.55009 9.21905 3.51494 9.30692C3.51494
                9.31571 3.51494 9.31571 3.51494 9.3245C3.47979 9.41237 3.43585 9.50024 3.38313 9.58812C3.3304 9.67599 3.27768 9.75508 3.20738 9.84295C3.14587 9.92204 3.06678 10.0099 2.9877 10.0978C2.90861 10.1857 2.82074 10.2647 2.72408 10.3526C2.67135 10.4053 2.64499 10.4669 2.6362 10.5372C2.6362 10.6075 2.65378
                10.669 2.7065 10.7217C2.74165 10.7568 2.78559 10.7832 2.82953 10.8008C2.87346 10.8183 2.92619 10.8183 2.97012 10.8008C3.16344 10.748 3.35677 10.6865 3.55009 10.625C3.73462 10.5635 3.91916 10.4932 4.0949 10.4141C4.27065 10.335 4.4464 10.256 4.61336 10.1681C4.78032 10.0802 4.93849 9.98355 5.09666
                9.8781C5.25483 9.78144 5.40422 9.6672 5.54482 9.55297C5.6942 9.43873 5.82601 9.31571 5.96661 9.19269C6.08084 9.08724 6.18629 8.973 6.29174 8.85877C6.39719 8.74453 6.50264 8.62151 6.5993 8.49849C6.60808 8.48091 6.62566 8.47213 6.65202 8.47213H7.79438C7.94376 8.47213 8.09315 8.45455 8.23374 8.42819C8.37434
                8.40183 8.51494 8.35789 8.64675 8.30517C8.77856 8.25244 8.90158 8.18214 9.0246 8.10306C9.14763 8.02397 9.26186 7.92731 9.36731 7.82186C9.47276 7.71641 9.56942 7.60218 9.64851 7.47915C9.72759 7.35613 9.79789 7.23311 9.85061 7.1013C9.90334 6.96949 9.94728 6.82889 9.97364 6.68829C10 6.5477 10.0176 6.39831
                10.0176 6.24893V2.80429C10.0176 2.6549 10 2.50552 9.97364 2.36492C9.94728 2.22432 9.90334 2.08372 9.85061 1.95191C9.79789 1.8201 9.72759 1.69708 9.64851 1.57406C9.56942 1.45104 9.47276 1.3368 9.36731 1.23135C9.26186 1.1259 9.14763 1.02924 9.0246 0.950157C8.91037 0.871071 8.77856 0.800772 8.64675 0.748048C8.51494
                0.695324 8.37434 0.651387 8.23374 0.625025C8.09315 0.598663 7.94376 0.581089 7.79438 0.581089C6.71353 0.581089 5.05272 0.572301 3.97188 0.572301C3.70826 0.651387 3.69069 1.10833 4.08612 1.10833ZM2.13532 3.44576C2.30228 3.49849 2.46924 3.55121 2.6362 3.60394C2.80316 3.65666 2.97012 3.71817 3.13708 3.7709C3.53251
                3.89392 3.7522 3.973 3.79613 3.98179C3.84007 3.99058 3.81371 3.81483 3.71705 3.42819L3.4007 2.22432L3.37434 2.19796L2.13532 3.44576ZM2.9174 1.73223L1.30931 0.0450605C1.25659 0.00112382 1.20387 -0.0164509 1.14235 0.0186985L0.0351494 1.09075C-0.00878735 1.14348 -0.0175747 1.20499 0.0439367 1.2665L1.67838 2.98003L2.9174
                1.73223ZM3.69947 6.4071C3.55887 6.4071 3.45343 6.30165 3.44464 6.16105C3.44464 6.02046 3.55009 5.91501 3.69069 5.90622L5.88752 5.87107L6.3884 5.83592C6.529 5.82713 6.64323 5.93258 6.65202 6.06439C6.66081 6.20499 6.55536 6.31923 6.42355 6.32801L5.92267 6.36316C5.92267 6.36316 3.91916 6.39831 3.69947 6.4071ZM4.48155
                4.84295C4.34095 4.84295 4.2355 4.72872 4.2355 4.59691C4.2355 4.45631 4.34974 4.35086 4.48155 4.35086H7.60984C7.75044 4.35086 7.85589 4.4651 7.85589 4.59691C7.85589 4.7375 7.74165 4.84295 7.60984 4.84295H4.48155ZM5.58875 3.35789C5.44815 3.35789 5.34271 3.24365 5.34271 3.11184C5.34271 2.98003 5.45694 2.8658 5.58875
                2.8658H7.60984C7.75044 2.8658 7.85589 2.98003 7.85589 3.11184C7.85589 3.25244
                7.74165 3.35789 7.60984 3.35789H5.58875Z" fill="white" />
              </svg>
            </div>

          </div>



        </nav> */}
          {/* <nav className=" fixed top-full -translate-y-full bg-C_navmain footerBarLeft zIndex">
          <div className="flex items-center justify-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
              stroke="#fff" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
        </nav> */}
        </div>


        {/* 
        <nav className=" fixed top-full -translate-y-full bg-C_navmain footerBarRight zIndex">
          <div className="flex items-center justify-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
              stroke="#fff" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
        </nav> */}


        {/* <ListFavoriteSubComp /> */}


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

export default MenuComponent



