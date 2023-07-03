import { useEffect, useState } from 'react';
import '../style/navigationBar.css';
import icon from '../all-icon/icon-app-user-SVG-sprite.svg'
const NavbarComponent = (prop) => {
  const [avtiveIconWhite, setActiveIconWhite] = useState('menu1');
  // const buttunSwitcher = (name) => {
  // if(avtiveIconWhite === name) return setActiveIconWhite('')
  // setActiveIconWhite(name)

  // }

  const checkOnOff = (name) => {
    if (name == 'qrCode') {
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)
    } else if (name === 'banner') {
      prop.setOnoffQrCode(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    } else if (name === 'menu1') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    } else if (name === 'menu2') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    } else if (name === 'menu3') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    } else if (name === 'menuTime') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setOnOffLangSetup(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    } else if (name === 'menuLang') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffTheme(false)
      prop.setStart(false)

    }
    else if (name === 'menuTheme') {
      prop.setOnoffQrCode(false);
      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
      prop.setStart(false)

    }
  };

  const myIcon = { theme: 'myTheme.svg' }
  return (
    <div className='sectionNavigation'>
      <div className='section1'>
        <button
          onClick={() => {
            prop.setOnoffQrCode(!prop.onOffQrCode);
            checkOnOff('qrCode');
          }}
          name='qrCode'
          className={`iconBarcode ${prop.onOffQrCode && 'qrCodeTabActive'}`} >

          <svg className={`${prop.onOffQrCode && 'qrCodeActive'}`} width="32" height="32" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1H26V26H1V7C1 3.68629 3.68629 1 7 1Z" stroke="#BBBBBB" strokeWidth="2" />
            <rect x="8" y="8" width="11" height="11" rx="2" fill="#BBBBBB" />
            <rect x="46" y="8" width="11" height="11" rx="2" fill="#BBBBBB" />
            <rect x="8" y="46" width="11" height="11" rx="2" fill="#BBBBBB" />
            <rect x="57" y="38" width="8" height="8" rx="1" fill="#BBBBBB" />
            <rect x="48" y="57" width="8" height="8" rx="1" fill="#BBBBBB" />
            <rect x="57" y="47" width="8" height="8" rx="1" fill="#BBBBBB" />
            <rect x="38" y="38" width="8" height="8" rx="1" fill="#BBBBBB" />
            <rect x="38" y="57" width="8" height="8" rx="1" fill="#BBBBBB" />
            <rect x="48" y="47" width="8" height="8" rx="1" fill="#BBBBBB" />
            <path d="M39 1H58C61.3137 1 64 3.68629 64 7V26H39V1Z" stroke="#BBBBBB" strokeWidth="2" />
            <path d="M1 39H26V64H7C3.68629 64 1 61.3137 1 58V39Z" stroke="#BBBBBB" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className='section2'>
        <button
          onClick={() => {
            // prop.timeSwitcher(0)
            // buttunSwitcher('banner')
            prop.setOnoffBanner(!prop.onOffBanner);
            checkOnOff('banner');
          }}
          name='banner'
          className={`myIconTab ${prop.onOffBanner && 'myIconTabActive'}`} >
          <svg className={`${prop.onOffBanner && 'bannerActive'}`} width="30" height="30" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_193_199)">
              <g mask="url(#mask0_193_199)">
                <path d="M55.5483 38.185C57.2694 37.1914 57.8591 34.9906 56.8654 33.2695L39.4393 3.08682C38.4457 1.36571 36.2449 0.776018 34.5238 1.76968C32.8028 2.76334 32.2131 4.96408 33.2068 6.68518L50.6328 36.8679C51.6264 38.589 53.8272 39.1787 55.5483 38.185Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.3648 50.2572C18.8963 49.373 19.4211 47.4147 18.5368 45.8833L9.35141 29.9737C8.46718 28.4421 6.50893 27.9174 4.97737 28.8016C3.44593 29.6859 2.92123 31.6441 3.80546 33.1756L12.9909 49.0852C13.875 50.6168 15.8334 51.1415 17.3648 50.2572Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.4714 47.2088L11.7985 47.02L4.99771 35.2407L4.67068 35.4295C1.41789 37.3075 0.303366 41.4667 2.18138 44.7195C4.0594 47.9723 8.21864 49.0868 11.4714 47.2088Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.3382 14.3616L33.3634 6.95645L50.4763 36.5967L18.8609 46.4446L9.02734 29.4122L16.9422 22.1088" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50.9054 22.947C53.539 21.4265 54.4414 18.0588 52.9209 15.4252C51.4002 12.7915 48.0327 11.8893 45.399 13.4098" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.8609 46.4446L28.4738 63.0947C28.8152 63.6858 29.5712 63.8884 30.1624 63.5471L36.0077 60.1723C36.7485 59.7446 36.8414 58.7119 36.1889 58.1589L31.7734 54.4165L26.0057 44.4267" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M57.3383 12.9202L61.6262 10.4446" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M51.1299 7.24512L52.4428 2.34574" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M59.0526 21.1471L63.7309 22.4006" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_193_199">
                <rect width="65" height="65" fill="white" />
              </clipPath>
            </defs>
          </svg>



        </button>

        {/* MENU 1 */}
        <button
          onClick={() => {
            prop.setMenuTime(1);
            // buttunSwitcher('menu1')
            prop.setOnoffMenu1({ switch: true });
            checkOnOff('menu1');
          }}
          name='menu1'
          className={`myIconTab ${prop.onOffMenu1.switch && 'myIconTabActive'}`} >
          <svg className={`${prop.onOffMenu1.switch && 'menuActive'}`} width="32" height="30" viewBox="0 0 71 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.5" y="1.5" width="61" height="61" rx="5.5" stroke="#BBBBBB" strokeWidth="3" />
            <path d="M2 32.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 16.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 49.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M21.8217 46.5455H24.2869L26.8906 52.8977H27.0014L29.6051 46.5455H32.0703V56H30.1314V49.8462H30.0529L27.6062 55.9538H26.2859L23.8391 49.8232H23.7607V56H21.8217V46.5455ZM33.7172 56V46.5455H40.088V48.1935H35.7162V50.4464H39.7602V52.0945H35.7162V54.3519H40.1064V56H33.7172ZM49.5852 46.5455V56H47.8587L43.7454 50.0494H43.6761V56H41.6772V46.5455H43.4315L47.5124 52.4915H47.5955V46.5455H49.5852ZM57.0766 46.5455H59.0756V52.6854C59.0756 53.3748 58.9109 53.978 58.5816 54.495C58.2554 55.0121 57.7983 55.4152 57.2105 55.7045C56.6227 55.9908 55.9379 56.1339 55.1562 56.1339C54.3714 56.1339 53.685 55.9908 53.0972 55.7045C52.5094 55.4152 52.0523 55.0121 51.7261 54.495C51.3999 53.978 51.2368 53.3748 51.2368 52.6854V46.5455H53.2357V52.5146C53.2357 52.8746 53.3142 53.1947 53.4711 53.4748C53.6312 53.7549 53.8559 53.9749 54.1452 54.1349C54.4345 54.295 54.7715 54.375 55.1562 54.375C55.5439 54.375 55.8809 54.295 56.1672 54.1349C56.4565 53.9749 56.6796 53.7549 56.8366 53.4748C56.9966 53.1947 57.0766 52.8746 57.0766 52.5146V46.5455Z" fill="#BBBBBB" />
            <path d="M40.1875 35H36.5625C36.4583 35 36.4062 34.9479 36.4062 34.8438L36.4375 12.8594C36.4375 12.776 36.4792 12.7344 36.5625 12.7344H40.1562C40.2396 12.7344 40.2812 12.776 40.2812 12.8594L40.3125 34.8438C40.3125 34.9479 40.2708 35 40.1875 35Z" fill="#BBBBBB" />
          </svg>
        </button>

        {/* MENU 2 */}
        <button
          onClick={() => {
            prop.setMenuTime(2);
            // buttunSwitcher('menu2')
            prop.setOnoffMenu2({ switch: true });
            checkOnOff('menu2');
          }}
          name='menu2'
          className={`myIconTab ${prop.onOffMenu2.switch && 'myIconTabActive'}`} >
          <svg className={`${prop.onOffMenu2.switch && 'menuActive'}`} width="32" height="30" viewBox="0 0 71 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.5" y="1.5" width="61" height="61" rx="5.5" stroke="#BBBBBB" strokeWidth="3" />
            <path d="M2 32.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 16.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 49.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M21.8217 46.5455H24.2869L26.8906 52.8977H27.0014L29.6051 46.5455H32.0703V56H30.1314V49.8462H30.0529L27.6062 55.9538H26.2859L23.8391 49.8232H23.7607V56H21.8217V46.5455ZM33.7172 56V46.5455H40.088V48.1935H35.7162V50.4464H39.7602V52.0945H35.7162V54.3519H40.1064V56H33.7172ZM49.5852 46.5455V56H47.8587L43.7454 50.0494H43.6761V56H41.6772V46.5455H43.4315L47.5124 52.4915H47.5955V46.5455H49.5852ZM57.0766 46.5455H59.0756V52.6854C59.0756 53.3748 58.9109 53.978 58.5816 54.495C58.2554 55.0121 57.7983 55.4152 57.2105 55.7045C56.6227 55.9908 55.9379 56.1339 55.1562 56.1339C54.3714 56.1339 53.685 55.9908 53.0972 55.7045C52.5094 55.4152 52.0523 55.0121 51.7261 54.495C51.3999 53.978 51.2368 53.3748 51.2368 52.6854V46.5455H53.2357V52.5146C53.2357 52.8746 53.3142 53.1947 53.4711 53.4748C53.6312 53.7549 53.8559 53.9749 54.1452 54.1349C54.4345 54.295 54.7715 54.375 55.1562 54.375C55.5439 54.375 55.8809 54.295 56.1672 54.1349C56.4565 53.9749 56.6796 53.7549 56.8366 53.4748C56.9966 53.1947 57.0766 52.8746 57.0766 52.5146V46.5455Z" fill="#BBBBBB" />
            <path d="M44.2188 35H32.2812C32.1771 35 32.125 34.9479 32.125 34.8438V31.2188C32.125 31.1771 32.1458 31.1354 32.1875 31.0938L40.0938 20.25C40.2396 20.0521 40.3594 19.8021 40.4531 19.5C40.5573 19.1875 40.6094 18.9167 40.6094 18.6875C40.6094 18.0625 40.3854 17.4896 39.9375 16.9688C39.4896 16.4479 38.9219 16.1875 38.2344 16.1875C37.5781 16.1875 37.0208 16.4375 36.5625 16.9375C36.1042 17.4375 35.875 18.0729 35.875 18.8438V20.4062C35.875 20.5104 35.8229 20.5625 35.7188 20.5625H32.125C32.0417 20.5625 32 20.5104 32 20.4062V18.8438C32 17.6458 32.2969 16.5573 32.8906 15.5781C33.474 14.599 34.2396 13.8229 35.1875 13.25C36.1354 12.6667 37.151 12.375 38.2344 12.375C39.3802 12.375 40.4271 12.6667 41.375 13.25C42.3125 13.8438 43.0625 14.6198 43.625 15.5781C44.1979 16.5365 44.4844 17.5729 44.4844 18.6875C44.4844 19.3854 44.3594 20.099 44.1094 20.8281C43.8698 21.5469 43.5365 22.1875 43.1094 22.75L37.0312 31.0938H44.2188C44.3125 31.0938 44.3594 31.1354 44.3594 31.2188V34.8438C44.3594 34.9479 44.3125 35 44.2188 35Z" fill="#BBBBBB" />
          </svg>


        </button>
        {/* MENU 3 */}
        <button
          onClick={() => {
            prop.setMenuTime(3);
            // buttunSwitcher('menu3')
            prop.setOnoffMenu3({ switch: true });
            checkOnOff('menu3');

          }}
          name='menu3'
          className={`myIconTab ${prop.onOffMenu3.switch && 'myIconTabActive'}`}>

          <svg className={`${prop.onOffMenu3.switch && 'menuActive'}`} width="32" height="30" viewBox="0 0 71 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.5" y="1.5" width="61" height="61" rx="5.5" stroke="#BBBBBB" strokeWidth="3" />
            <path d="M2 32.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 16.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 49.5H17" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" />
            <path d="M21.8217 46.5455H24.2869L26.8906 52.8977H27.0014L29.6051 46.5455H32.0703V56H30.1314V49.8462H30.0529L27.6062 55.9538H26.2859L23.8391 49.8232H23.7607V56H21.8217V46.5455ZM33.7172 56V46.5455H40.088V48.1935H35.7162V50.4464H39.7602V52.0945H35.7162V54.3519H40.1064V56H33.7172ZM49.5852 46.5455V56H47.8587L43.7454 50.0494H43.6761V56H41.6772V46.5455H43.4315L47.5124 52.4915H47.5955V46.5455H49.5852ZM57.0766 46.5455H59.0756V52.6854C59.0756 53.3748 58.9109 53.978 58.5816 54.495C58.2554 55.0121 57.7983 55.4152 57.2105 55.7045C56.6227 55.9908 55.9379 56.1339 55.1562 56.1339C54.3714 56.1339 53.685 55.9908 53.0972 55.7045C52.5094 55.4152 52.0523 55.0121 51.7261 54.495C51.3999 53.978 51.2368 53.3748 51.2368 52.6854V46.5455H53.2357V52.5146C53.2357 52.8746 53.3142 53.1947 53.4711 53.4748C53.6312 53.7549 53.8559 53.9749 54.1452 54.1349C54.4345 54.295 54.7715 54.375 55.1562 54.375C55.5439 54.375 55.8809 54.295 56.1672 54.1349C56.4565 53.9749 56.6796 53.7549 56.8366 53.4748C56.9966 53.1947 57.0766 52.8746 57.0766 52.5146V46.5455Z" fill="#BBBBBB" />
            <path d="M38.2188 35.3594C37.1042 35.3594 36.0677 35.0625 35.1094 34.4688C34.1615 33.8854 33.401 33.1042 32.8281 32.125C32.2656 31.1354 31.9844 30.0573 31.9844 28.8906V27.4531C31.9844 27.3385 32.026 27.2812 32.1094 27.2812H35.7031C35.8073 27.2812 35.8594 27.3385 35.8594 27.4531V28.8906C35.8594 29.5885 36.0833 30.1927 36.5312 30.7031C36.9792 31.2031 37.5417 31.4531 38.2188 31.4531C38.9688 31.4531 39.5573 31.1927 39.9844 30.6719C40.4115 30.1406 40.625 29.5469 40.625 28.8906V28.0312C40.625 27.3646 40.4167 26.7656 40 26.2344C39.5833 25.7031 39.0573 25.4375 38.4219 25.4375H37.1719C37.0677 25.4375 37.0156 25.3802 37.0156 25.2656L37.0469 21.6875C37.0469 21.6042 37.0885 21.5625 37.1719 21.5625H38.4219C38.9948 21.5625 39.5052 21.3385 39.9531 20.8906C40.401 20.4427 40.625 19.8542 40.625 19.125V18.6875C40.625 18 40.3958 17.4167 39.9375 16.9375C39.4792 16.4583 38.9062 16.2188 38.2188 16.2188C37.5625 16.2188 37.0052 16.4583 36.5469 16.9375C36.0885 17.4167 35.8594 18 35.8594 18.6875V20.2188C35.8594 20.3229 35.8177 20.375 35.7344 20.375H32.1406C32.0573 20.375 32.0156 20.3229 32.0156 20.2188V18.5156C32.0156 17.349 32.3125 16.3073 32.9062 15.3906C33.4896 14.474 34.2552 13.7448 35.2031 13.2031C36.151 12.651 37.1562 12.375 38.2188 12.375C39.375 12.375 40.4271 12.6562 41.375 13.2188C42.3229 13.7917 43.0729 14.5469 43.625 15.4844C44.1875 16.4219 44.4688 17.4531 44.4688 18.5781V19.0938C44.4688 20.0312 44.3125 20.8438 44 21.5312C43.6875 22.2083 43.2552 22.8594 42.7031 23.4844C43.2552 24.1198 43.6927 24.8177 44.0156 25.5781C44.3385 26.3385 44.5 27.1198 44.5 27.9219V28.8906C44.5 30.0781 44.2188 31.1667 43.6562 32.1562C43.0833 33.1354 42.3229 33.9167 41.375 34.5C40.4271 35.0729 39.375 35.3594 38.2188 35.3594Z" fill="#BBBBBB" />
          </svg>


        </button>

        {/* MENU TIME */}
        <button
          onClick={() => {
            prop.setonOffMenuTime(!prop.onOffMenuTime);
            prop.setNavTime2TimePicker((testTG) => prop.navTime2TimePicker + 1);
            checkOnOff('menuTime');
          }}
          name='menuTime'
          className={`myIconTab ${prop.onOffMenuTime && 'myIconTabActive'}`}>

          {/* <svg className={`myIconMd ${prop.onOffMenuTime && 'activeTime'}`} width="65" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <svg className={` ${prop.onOffMenuTime && 'activeTime'}`} width="30" height="30" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35.5" cy="35.5" r="34" stroke="#BBBBBB" strokeWidth="3" />
            <path d="M35.0923 10.9231C35.0923 11.7515 35.7639 12.4231 36.5923 12.4231C37.4207 12.4231 38.0923 11.7515 38.0923 10.9231L35.0923 10.9231ZM35.0923 1.09229L35.0923 10.9231L38.0923 10.9231L38.0923 1.09229L35.0923 1.09229Z" fill="#BBBBBB" />
            <path d="M38.0923 16.3848C38.0923 15.5563 37.4207 14.8848 36.5923 14.8848C35.7639 14.8848 35.0923 15.5563 35.0923 16.3848L38.0923 16.3848ZM35.0923 16.3848L35.0923 36.0463L38.0923 36.0463L38.0923 16.3848L35.0923 16.3848Z" fill="#BBBBBB" />
            <path d="M51.6135 49.4599C52.271 49.964 53.2126 49.8396 53.7166 49.1822C54.2206 48.5247 54.0963 47.5832 53.4388 47.0791L51.6135 49.4599ZM53.4388 47.0791L37.0542 34.5176L35.2289 36.8984L51.6135 49.4599L53.4388 47.0791Z" fill="#BBBBBB" />
            <path d="M38.0923 61.1692C38.0923 60.3408 37.4207 59.6692 36.5923 59.6692C35.7639 59.6692 35.0923 60.3408 35.0923 61.1692L38.0923 61.1692ZM35.0923 61.1692L35.0923 71L38.0923 71L38.0923 61.1692L35.0923 61.1692Z" fill="#BBBBBB" />
            <path d="M9.83077 35.9077C10.6592 35.9077 11.3308 35.2361 11.3308 34.4077C11.3308 33.5793 10.6592 32.9077 9.83077 32.9077V35.9077ZM0 35.9077H9.83077V32.9077H0V35.9077Z" fill="#BBBBBB" />
            <path d="M61.1692 34.5461C60.3408 34.5461 59.6692 35.2177 59.6692 36.0461C59.6692 36.8746 60.3408 37.5461 61.1692 37.5461V34.5461ZM61.1692 37.5461H71V34.5461H61.1692V37.5461Z" fill="#BBBBBB" />
          </svg>

        </button>

        {/* MENU LANGUAGE */}
        <button
          onClick={() => {
            prop.setOnOffLangSetup(!prop.onOffLangSetup);
            prop.setNavLang2LangSetUp((any) => prop.navLang2LangSetUp + 1);
            checkOnOff('menuLang');
          }}
          name='menuLang'
          className={`myIconTab ${prop.onOffLangSetup && 'myIconTabActive'}`}>

          <svg className={`${prop.onOffLangSetup && 'activeLang'}`} width="30" height="30" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_191_198)">
              <path d="M68.9199 35.5C68.9199 53.9574 53.9574 68.9199 35.5 68.9199C17.0426 68.9199 2.08008 53.9574 2.08008 35.5C2.08008 17.0426 17.0426 2.08008 35.5 2.08008C53.9574 2.08008 68.9199 17.0426 68.9199 35.5Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" />
              <path d="M9.79156 56.8547C15.9218 53.1687 25.1629 50.8222 35.5001 50.8222C45.8372 50.8222 55.0782 53.1687 61.2085 56.8547" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" />
            </g>
            <path className='activeLangPath' fillRule="evenodd" clipRule="evenodd" d="M35.5 70.4199C30.0115 70.4199 25.4463 66.0096 22.3426 59.8023C19.1941 53.5053 17.29 44.9111 17.29 35.5C17.29 26.0889 19.1941 17.4947 22.3426 11.1977C25.4463 4.99044 30.0115 0.580078 35.5 0.580078C39.2954 0.580078 42.6493 2.68905 45.3836 6.04281C44.9261 6.01441 44.4647 6 44 6C43.1141 6 42.2405 6.05236 41.382 6.15416C39.4973 4.45086 37.4916 3.58008 35.5 3.58008C31.7599 3.58008 27.9701 6.651 25.0259 12.5393C22.1266 18.338 20.29 26.4537 20.29 35.5C20.29 44.5463 22.1266 52.662 25.0259 58.4607C27.9701 64.349 31.7599 67.4199 35.5 67.4199C39.2401 67.4199 43.03 64.349 45.9741 58.4607C47.2738 55.8614 48.3599 52.7965 49.1627 49.3909C50.3021 49.1169 51.4069 48.7542 52.4694 48.3106C51.598 52.6244 50.2963 56.5246 48.6574 59.8023C45.5538 66.0096 40.9886 70.4199 35.5 70.4199Z" fill="#BBBBBB" />
            <path className='activeLangPath' fillRule="evenodd" clipRule="evenodd" d="M37 48.863V68.9199H34V47.6012C34.9612 48.0925 35.9634 48.5153 37 48.863ZM37 7.13704V2.08008H34V8.39884C34.9612 7.90746 35.9634 7.4847 37 7.13704Z" fill="#BBBBBB" />
            <path className='activeLangPath' fillRule="evenodd" clipRule="evenodd" d="M22.8281 34H2.08008V37H23.9192C23.486 36.0349 23.1203 35.0329 22.8281 34ZM64.0808 37H68.9199V34H65.1719C64.8797 35.0329 64.514 36.0349 64.0808 37Z" fill="#BBBBBB" />
            <path className='activeLangPath' fillRule="evenodd" clipRule="evenodd" d="M23.2915 20.5554C23.6416 19.5816 24.0585 18.6395 24.5366 17.7348C18.9895 16.7458 14.1795 15.0332 10.5645 12.8596L9.01862 15.4306C12.8294 17.722 17.7333 19.4936 23.2915 20.5554ZM61.6044 14.8036L60.4355 12.8596C60.3349 12.9201 60.2334 12.9802 60.1309 13.04C60.6518 13.6014 61.1438 14.1901 61.6044 14.8036Z" fill="#BBBBBB" />
            <path className='activeLangPath' d="M55.524 30.3184V38H36.276V34.9238L39.0006 34.3965V16.0273L36.276 15.5V12.4062H47.2271V15.5L44.1334 16.0273V34.0625H51.358L51.6041 30.3184H55.524Z" fill="#BBBBBB" />
          </svg>

        </button>

        {/* MENU Theme */}
        <button
          onClick={() => {
            prop.setOnOffTheme(!prop.onOffTheme);
            prop.setNavTheme2ThemeSetUp((any) => prop.navTheme2ThemeSetUp + 1);
            checkOnOff('menuTheme');
          }}
          name='menuTheme'
          className={`myIconTab ${prop.onOffTheme && 'myIconTabActive'}`}>
          <svg className={`${prop.onOffTheme && 'bannerActive'}`} width="30" height="30" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_194_225)">
              <path d="M31.403 6.35694C30.1748 6.18085 28.9281 6.09033 27.6707 6.08843C13.09 6.06583 1.24671 17.8955 1.26956 32.459C1.29216 47.0224 13.1723 58.8889 27.753 58.9116C35.5189 58.9236 42.8603 55.539 47.8951 49.6261C48.0977 49.3881 48.2396 49.0643 48.3345 48.691C48.9622 46.2219 47.0266 43.8374 44.479 43.8374H40.5593C37.4686 43.8374 34.9633 41.3321 34.9633 38.2415C34.9633 35.151 37.4686 32.6456 40.5593 32.6456C48.3431 31.437 52.2882 22.5864 47.9681 15.9995C47.255 14.9123 46.4956 13.9523 45.6987 13.2101C44.8514 12.421 43.96 11.6928 43.0307 11.0278" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M37.3391 13.2872C39.0715 14.8255 39.2321 17.4717 37.697 19.1979C36.1622 20.9239 33.5132 21.0764 31.7808 19.5383C30.0478 18 29.8874 15.354 31.4224 13.6273C32.957 11.9011 35.6062 11.7489 37.3391 13.2872Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.8884 12.053C23.199 11.9201 25.1853 13.6831 25.3255 15.9916C25.4653 18.3001 23.7058 20.2788 21.395 20.4119C19.0844 20.5449 17.0983 18.7816 16.9581 16.473C16.818 14.1649 18.5778 12.186 20.8884 12.053Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.41716 22.796C9.95164 21.07 12.6005 20.9174 14.3337 22.4557C16.0662 23.9941 16.2266 26.6404 14.6918 28.3665C13.1568 30.0928 10.5082 30.2449 8.77517 28.707C7.04226 27.1686 6.88179 24.5224 8.41716 22.796Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.22969 39.2239C7.09005 36.9155 8.84924 34.9365 11.1599 34.8034C13.4707 34.6706 15.4573 36.4341 15.597 38.7423C15.7368 41.0507 13.9775 43.0294 11.6671 43.1623C9.35616 43.2956 7.3696 41.5324 7.22969 39.2239Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.0227 51.713C16.2902 50.1747 16.1295 47.5289 17.6643 45.8023C19.1992 44.0765 21.8481 43.9241 23.581 45.4621C25.3133 47.0004 25.4739 49.6467 23.9391 51.3727C22.4043 53.0988 19.7554 53.2512 18.0227 51.713Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M61.3221 42.0969C61.6713 40.2156 61.9303 37.9815 62.0694 35.5299C62.1447 34.2008 62.1848 30.0874 62.1848 28.6521C62.1848 19.4289 60.53 9.23156 58.4886 9.23156C56.4472 9.23156 54.7922 19.4289 54.7922 28.6521C54.7922 30.0874 54.8325 34.2008 54.9079 35.5299C55.0468 37.9814 55.3059 40.2155 55.655 42.0968" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M53.2466 46.9053C53.2466 46.2789 53.3566 45.6782 53.5582 45.1214C54.2913 43.0965 56.2661 41.7879 58.4197 41.7879H58.5573C60.711 41.7879 62.6857 43.0965 63.4189 45.1214C63.6205 45.6781 63.7304 46.2788 63.7304 46.9053C63.7304 52.205 58.4882 55.6414 58.4882 55.6414C58.4882 55.6414 58.4174 55.5935 58.2925 55.5008C57.4144 54.8489 53.8625 51.9835 53.3175 47.9461C53.271 47.6075 53.2466 47.2603 53.2466 46.9053Z" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>

        </button>
      </div>

      {/* FEEDBACK */}
      <div className='endSection'>
        <button
          onClick={() => {
            // buttunSwitcher('feedback')
          }}
          name='feedback'
          className='myIconTab'>
          <svg width='30' height='30' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='32.5' cy='32.5' r='31.5' stroke='#777777' strokeWidth='2' />
            <path
              d='M49.0088 14H15.9911C14.4026 14.0019 12.8797 14.6334 11.7565 15.7557C10.6334 16.878 10.0017 18.3997 10 19.9868V37.5113C10.0019 39.0982 10.6337 40.6196 11.7568 41.7417C12.88 42.8639 14.4027 43.4951 15.9911 43.497H27.1123L32.5 53L37.8877 43.4968H49.0089C50.5973 43.4949 52.12 42.8637 53.2431 41.7416C54.3663 40.6194 54.9981 39.0981 55 37.5111V19.9871C54.9984 18.4 54.3668 16.8782 53.2436 15.7558C52.1204 14.6334 50.5974 14.0019 49.0088 14ZM53.3351 37.5113C53.334 38.6573 52.8778 39.756 52.0667 40.5664C51.2556 41.3768 50.1559 41.8326 49.0089 41.8338H36.9182L32.5 49.6266L28.0817 41.8338H15.9911C14.8441 41.8326 13.7443 41.3768 12.9333 40.5664C12.1222 39.756 11.666 38.6573 11.6649 37.5113V19.9871C11.666 18.841 12.1221 17.7421 12.9332 16.9316C13.7442 16.121 14.8439 15.6649 15.9911 15.6634H49.0088C50.156 15.6649 51.2557 16.121 52.0667 16.9316C52.8778 17.7421 53.3339 18.841 53.335 19.9871L53.3351 37.5113Z'
              fill='#777777'
            />
            <circle cx='23' cy='33' r='1' stroke='#777777' strokeWidth='2' />
            <circle cx='41' cy='33' r='1' stroke='#777777' strokeWidth='2' />
            <circle cx='32' cy='33' r='1' stroke='#777777' strokeWidth='2' />
          </svg>
        </button>

        <button className='myIconTab'>
          <svg width='35' height='35' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M56.413 11.5472C56.9652 11.5472 57.413 11.0995 57.413 10.5472V1.54721C57.413 0.994924 56.9652 0.547208 56.413 0.547208C55.8607 0.547208 55.413 0.994924 55.413 1.54721V9.54721H47.413C46.8607 9.54721 46.413 9.99493 46.413 10.5472C46.413 11.0995 46.8607 11.5472 47.413 11.5472H56.413ZM54.2221 9.77058L55.7059 11.2543L57.1201 9.8401L55.6363 8.35637L54.2221 9.77058Z'
              fill='#777777'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M32.5 63C49.3447 63 63 49.3447 63 32.5C63 32.333 62.9987 32.1663 62.996 32H64.9962C64.9987 32.1664 65 32.333 65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C41.2434 0 49.1804 3.45267 55.022 9.06896L53.5867 10.4636C48.1093 5.22081 40.6808 2 32.5 2C15.6553 2 2 15.6553 2 32.5C2 49.3447 15.6553 63 32.5 63Z'
              fill='#777777'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M41.9451 23C41.4476 18.5 37.6326 15 33 15C28.3674 15 24.5524 18.5 24.0549 23H22.0448C22.5501 17.3935 27.262 13 33 13C38.738 13 43.4499 17.3935 43.9552 23H41.9451Z' fill='#777777' />
            <line x1='23' y1='23' x2='23' y2='36' stroke='#777777' strokeWidth='2' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18 28H48V50H18V28ZM34.5 38.5986C35.3967 38.0799 36 37.1103 36 36C36 34.3433 34.6569 33 33 33C31.3431 33 30 34.3433 30 36C30 37.1103 30.6033 38.0799 31.5 38.5986V42C31.5 42.8284 32.1716 43.5 33 43.5C33.8284 43.5 34.5 42.8284 34.5 42V38.5986Z'
              fill='#777777'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
