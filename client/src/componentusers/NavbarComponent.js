import { useEffect, useState } from 'react';
import '../style/navigationBar.css';

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
    } else if (name === 'banner') {
      prop.setOnoffQrCode(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
    } else if (name === 'menu1') {
      prop.setOnoffQrCode(false);

      prop.setOnoffBanner(false);
      prop.setOnoffMenu2({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
    } else if (name === 'menu2') {
      prop.setOnoffQrCode(false);

      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu3({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
    } else if (name === 'menu3') {
      prop.setOnoffQrCode(false);

      prop.setOnoffBanner(false);
      prop.setOnoffMenu1({ switch: false });
      prop.setOnoffMenu2({ switch: false });
      prop.setonOffMenuTime(false);
      prop.setOnOffLangSetup(false);
    } else if (name === 'menuTime') {
      prop.setOnOffLangSetup(false);
      // prop.setOnoffBanner(false)
      // prop.setOnoffMenu1({ switch: false })
      // prop.setOnoffMenu2({ switch: false })
      // prop.setOnoffMenu3({ switch: false })
    } else if (name === 'menuLang') {
      prop.setonOffMenuTime(false);
      // prop.setOnoffBanner(false)
      // prop.setOnoffMenu1({ switch: false })
      // prop.setOnoffMenu2({ switch: false })
      // prop.setOnoffMenu3({ switch: false })
    }
  };

  const myIcon={theme:'myTheme.svg'}
  return (
    <div className='sectionNavigation'>
      <div className='section1'>
        <button
          onClick={() => {
            prop.setOnoffQrCode(!prop.onOffQrCode);
            checkOnOff('qrCode');
          }}
          className='iconBarcode'
          name='qrCode'>
          <svg width='30' height='30' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='1' y='1' width='25' height='25' stroke='' strokeWidth='2' />
            <rect className='extra' x='8' y='8' width='11' height='11' fill='' />
            <rect className='extra' x='46' y='8' width='11' height='11' fill='' />
            <rect className='extra' x='8' y='46' width='11' height='11' fill='' />
            <rect className='extra' x='59' y='38' width='6' height='6' fill='' />
            <rect className='extra' x='59' y='59' width='6' height='6' fill='' />
            <rect className='extra' x='59' y='48' width='6' height='6' fill='' />
            <rect className='extra' x='38' y='38' width='6' height='6' fill='' />
            <rect className='extra' x='38' y='59' width='6' height='6' fill='' />
            <rect className='extra' x='48' y='48' width='6' height='6' fill='' />
            <rect x='39' y='1' width='25' height='25' stroke='' strokeWidth='2' />
            <rect x='1' y='39' width='25' height='25' stroke='' strokeWidth='2' />
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
          className='myIconTab'>
          <svg className={`myIconBanner pathNone ${prop.onOffBanner && 'activeBanner'}`} width='40' height='40' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect className='rs' x='6' y='1' width='53' height='50' stroke='#777777' strokeWidth='2' />
            <path className='pf ps' fillRule='evenodd' clipRule='evenodd' d='M7 7H2H0V9V63V65H2H63H65V63V9V7H63H58V9H63V63H2V9H7V7Z' fill='#777777' />
            <rect className='rs' x='30.0454' y='16.3584' width='11.9931' height='6.72727' transform='rotate(90 30.0454 16.3584)' stroke='#777777' strokeWidth='2' />
            <rect className='rs' x='23' y='20' width='5' height='4' transform='rotate(90 23 20)' stroke='#777777' strokeWidth='2' />
            <rect className='rs' x='28.5' y='28' width='6' height='4' transform='rotate(90 28.5 28)' fill='none' />
            <path className='ps ' d='M30.5 27.5914V16.8685L42.5 8.86852V36.1628L30.5 27.5914Z' stroke='#777777' strokeWidth='2' />
            <line x1='17' y1='41' x2='47' y2='41' stroke='#777777' strokeWidth='2' />
            <line x1='23' y1='45' x2='42' y2='45' stroke='#777777' strokeWidth='2' />
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
          className='myIconTab'>
          <svg className={`myIconSideBar ${prop.onOffMenu1.switch && 'active'}`} width='69' height='64' viewBox='0 0 69 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='6' y='1' width='62' height='62' stroke='' strokeWidth='2' />
            <line y1='33' x2='15' y2='33' stroke='' strokeWidth='2' />
            <line y1='17' x2='15' y2='17' stroke='' strokeWidth='2' />
            <line y1='50' x2='15' y2='50' stroke='' strokeWidth='2' />
            <path
              d='M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z'
              fill=''
            />
            <path d='M39.3906 15.25V35.5938L42.8906 36.0312V38H32.7969V36.0312L36.3125 35.5938V18.5469L32.7344 18.6094V16.6875L39.3906 15.25Z' fill='' />
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
          className='myIconTab'>
          <svg className={`myIconSideBar ${prop.onOffMenu2.switch && 'active'}`} width='69' height='64' viewBox='0 0 69 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='6' y='1' width='62' height='62' stroke='' strokeWidth='2' />
            <line y1='33' x2='15' y2='33' stroke='' strokeWidth='2' />
            <line y1='17' x2='15' y2='17' stroke='' strokeWidth='2' />
            <line y1='50' x2='15' y2='50' stroke='' strokeWidth='2' />
            <path
              d='M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z'
              fill=''
            />
            <path
              d='M36.8359 13.3867C38.3464 13.3867 39.668 13.6602 40.8008 14.207C41.9466 14.7409 42.832 15.5221 43.457 16.5508C44.082 17.5794 44.3945 18.8034 44.3945 20.2227C44.3945 21.5508 44.0625 22.7747 43.3984 23.8945C42.7474 25.0013 41.7253 26.2643 40.332 27.6836L33.7695 34.3438H42.2461V31.8828C42.2461 31.4271 42.3568 31.1016 42.5781 30.9062C42.7995 30.7109 43.1771 30.6133 43.7109 30.6133C44.2448 30.6133 44.6224 30.7109 44.8438 30.9062C45.0651 31.1016 45.1758 31.4271 45.1758 31.8828V35.6719C45.1758 36.1536 45.0781 36.4987 44.8828 36.707C44.7005 36.9023 44.388 37 43.9453 37H30.3906C29.9479 37 29.6289 36.9023 29.4336 36.707C29.2513 36.4987 29.1602 36.1536 29.1602 35.6719C29.1602 35.1771 29.2578 34.8255 29.4531 34.6172L38.0469 25.9062C39.2448 24.6823 40.0846 23.6667 40.5664 22.8594C41.0612 22.0391 41.3086 21.1602 41.3086 20.2227C41.3086 19.0117 40.918 18.0547 40.1367 17.3516C39.3685 16.6354 38.2747 16.2773 36.8555 16.2773C35.4232 16.2773 34.0755 16.6419 32.8125 17.3711V19.5195C32.8125 19.9753 32.7018 20.3008 32.4805 20.4961C32.2591 20.6914 31.8815 20.7891 31.3477 20.7891C30.8138 20.7891 30.4362 20.6914 30.2148 20.4961C29.9935 20.3008 29.8828 19.9753 29.8828 19.5195V16.6484C29.8828 16.1406 30.0326 15.7826 30.332 15.5742C31.2826 14.8841 32.3112 14.3503 33.418 13.9727C34.5247 13.582 35.6641 13.3867 36.8359 13.3867Z'
              fill=''
            />
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
          className='myIconTab'>
          <svg className={`myIconSideBar ${prop.onOffMenu3.switch && 'active'}`} width='69' height='64' viewBox='0 0 69 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='6' y='1' width='62' height='62' stroke='' strokeWidth='2' />
            <line y1='33' x2='15' y2='33' stroke='' strokeWidth='2' />
            <line y1='17' x2='15' y2='17' stroke='' strokeWidth='2' />
            <line y1='50' x2='15' y2='50' stroke='' strokeWidth='2' />
            <path
              d='M20.9588 46.2727H22.5568L25.3352 53.0568H25.4375L28.2159 46.2727H29.8139V55H28.5611V48.6847H28.4801L25.9062 54.9872H24.8665L22.2926 48.6804H22.2116V55H20.9588V46.2727ZM31.7283 55V46.2727H37.1999V47.4062H33.0451V50.0653H36.9144V51.1946H33.0451V53.8665H37.2511V55H31.7283ZM46.0028 46.2727V55H44.7926L40.3565 48.5994H40.2756V55H38.9588V46.2727H40.1776L44.6179 52.6818H44.6989V46.2727H46.0028ZM53.5359 46.2727H54.8569V52.0128C54.8569 52.6236 54.7134 53.1648 54.4265 53.6364C54.1396 54.1051 53.7362 54.4744 53.2163 54.7443C52.6964 55.0114 52.087 55.1449 51.3881 55.1449C50.6921 55.1449 50.0842 55.0114 49.5643 54.7443C49.0444 54.4744 48.641 54.1051 48.354 53.6364C48.0671 53.1648 47.9237 52.6236 47.9237 52.0128V46.2727H49.2404V51.9062C49.2404 52.3011 49.3271 52.652 49.5004 52.9588C49.6765 53.2656 49.9251 53.5071 50.2461 53.6832C50.5671 53.8565 50.9478 53.9432 51.3881 53.9432C51.8313 53.9432 52.2134 53.8565 52.5344 53.6832C52.8583 53.5071 53.1055 53.2656 53.2759 52.9588C53.4492 52.652 53.5359 52.3011 53.5359 51.9062V46.2727Z'
              fill=''
            />
            <path
              d='M37.0312 12.3867C38.5286 12.3867 39.8372 12.6536 40.957 13.1875C42.0768 13.7083 42.9427 14.457 43.5547 15.4336C44.1667 16.3971 44.4727 17.5299 44.4727 18.832C44.4727 19.9518 44.2122 20.9219 43.6914 21.7422C43.1706 22.5495 42.4349 23.194 41.4844 23.6758C42.6693 24.1706 43.5872 24.8932 44.2383 25.8438C44.9023 26.7943 45.2344 27.9336 45.2344 29.2617C45.2344 30.681 44.9154 31.931 44.2773 33.0117C43.6523 34.0924 42.7344 34.9323 41.5234 35.5312C40.3125 36.1302 38.8672 36.4297 37.1875 36.4297C35.9115 36.4297 34.6224 36.2083 33.3203 35.7656C32.0182 35.3229 30.8529 34.724 29.8242 33.9688C29.4336 33.6823 29.2383 33.3568 29.2383 32.9922C29.2383 32.7318 29.349 32.4128 29.5703 32.0352C29.9089 31.4883 30.2865 31.2148 30.7031 31.2148C30.9115 31.2148 31.1328 31.2995 31.3672 31.4688C32.2266 32.1068 33.1576 32.6146 34.1602 32.9922C35.1628 33.3568 36.1719 33.5391 37.1875 33.5391C38.8021 33.5391 40.0326 33.1615 40.8789 32.4062C41.7253 31.638 42.1484 30.5898 42.1484 29.2617C42.1484 27.9206 41.7188 26.9049 40.8594 26.2148C40.013 25.5117 38.8216 25.1602 37.2852 25.1602H35.8594C35.4167 25.1602 35.0977 25.0625 34.9023 24.8672C34.7201 24.6589 34.6289 24.3138 34.6289 23.832C34.6289 23.3503 34.7201 23.0117 34.9023 22.8164C35.0977 22.6081 35.4167 22.5039 35.8594 22.5039H36.9336C38.418 22.5039 39.5443 22.1914 40.3125 21.5664C41.0807 20.9414 41.4648 20.0299 41.4648 18.832C41.4648 17.7253 41.0807 16.8594 40.3125 16.2344C39.5443 15.5964 38.457 15.2773 37.0508 15.2773C35.5404 15.2773 34.2578 15.5312 33.2031 16.0391V17.3477C33.2031 17.8034 33.0924 18.1289 32.8711 18.3242C32.6497 18.5195 32.2721 18.6172 31.7383 18.6172C31.2044 18.6172 30.8268 18.5195 30.6055 18.3242C30.3841 18.1289 30.2734 17.8034 30.2734 17.3477V15.2188C30.2734 14.9323 30.3125 14.7044 30.3906 14.5352C30.4818 14.3659 30.6185 14.2227 30.8008 14.1055C32.6628 12.9596 34.7396 12.3867 37.0312 12.3867Z'
              fill=''
            />
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
          className='myIconTab'>
          <svg className={`myIconMd ${prop.onOffMenuTime && 'activeTime'}`} width='35' height='35' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='32.5' cy='32.5' r='31.5' stroke='#777777' strokeWidth='2' />
            <line x1='33' y1='1' x2='33' y2='10' stroke='#777777' strokeWidth='2' />
            <line x1='33' y1='15' x2='33' y2='33' stroke='#777777' strokeWidth='2' />
            <line x1='47.3916' y1='43.7936' x2='32.3916' y2='32.2936' stroke='#777777' strokeWidth='2' />
            <line x1='33' y1='56' x2='33' y2='65' stroke='#777777' strokeWidth='2' />
            <line y1='32' x2='9' y2='32' stroke='#777777' strokeWidth='2' />
            <line x1='56' y1='32' x2='65' y2='32' stroke='#777777' strokeWidth='2' />
          </svg>
        </button>

        {/* MENU LANGUAGE */}
        <button
          onClick={() => {
            prop.setOnOffLangSetup(true);
            prop.setNavLang2LangSetUp((any) => prop.navLang2LangSetUp + 1);
            checkOnOff('menuLang');
          }}
          name='menuLang'
          className='myIconTab'>
          <svg className={`myIconMd ${prop.onOffLangSetup && 'activeLang'}`} width='35' height='35' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path className='pf' d='M54.1094 32.1719V39H37V36.2656L39.4219 35.7969V19.4688L37 19V16.25H46.7344V19L43.9844 19.4688V35.5H50.4062L50.625 32.1719H54.1094Z' fill='#777777' />
            <circle cx='32.5' cy='32.5' r='31.5' stroke='#777777' strokeWidth='2' />
            <path d='M27.2499 1.74951C22.9642 11.7697 21.2499 11.6184 21.2499 33.0626C21.2499 54.5069 23.8214 56.8606 27.2499 63.7495' stroke='#777777' strokeWidth='2' />
            <path fillRule='evenodd' clipRule='evenodd' d='M24.7035 31H2V33H25.4118C25.138 32.3518 24.901 31.6843 24.7035 31ZM58.5882 33H65V31H59.2965C59.099 31.6843 58.862 32.3518 58.5882 33Z' fill='#777777' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M52.6877 15.5149C53.2332 15.9181 53.7551 16.3513 54.251 16.8122C55.6033 15.6483 56.8742 14.2667 58.2593 12.6507L56.7408 11.3491C55.2866 13.0456 54.0155 14.4117 52.6877 15.5149ZM25.911 21.92C26.2538 21.2388 26.6385 20.5824 27.0619 19.9541C22.0067 19.8238 18.4875 19.4 15.7537 18.4887C12.4345 17.3823 10.2115 15.5347 7.79265 12.3902L6.2074 13.6096C8.78859 16.9652 11.3155 19.1175 15.1213 20.3861C17.905 21.314 21.337 21.7556 25.911 21.92Z'
              fill='#777777'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M29.5725 44.0215C22.4536 44.1527 18.1654 44.8792 15.0377 46.0649C12.3006 47.1025 10.4701 48.498 8.51284 49.9901C7.99445 50.3853 7.46717 50.7873 6.9118 51.1912L8.08814 52.8087C8.71597 52.3521 9.28695 51.9176 9.82919 51.5051L9.82924 51.505C11.7465 50.0463 13.3046 48.8608 15.7466 47.935C18.8732 46.7498 23.4783 46 32 46C32.0155 46 32.0311 46 32.0466 46C31.1641 45.4132 30.3363 44.7506 29.5725 44.0215ZM48.326 47.8569C49.4615 48.3351 50.4715 48.9196 51.5844 49.6373C52.0834 49.959 52.6236 50.3219 53.211 50.7163L53.2112 50.7165L53.2113 50.7165C54.1649 51.357 55.2428 52.0809 56.47 52.8479L57.53 51.1519C56.3061 50.387 55.3125 49.7188 54.3956 49.1022L54.3955 49.1021C53.8014 48.7026 53.2396 48.3248 52.6683 47.9564C52.004 47.5281 51.3554 47.1325 50.6825 46.7712C49.9284 47.1873 49.1412 47.5509 48.326 47.8569Z'
              fill='#777777'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M37.2069 61.1537L37.2069 61.1536C38.4624 58.7433 39.5073 56.7372 40.3177 53.6132C40.7183 52.0692 41.06 50.2515 41.3287 47.9876C41.5515 47.9958 41.7753 47.9999 42 47.9999C42.4529 47.9999 42.902 47.9832 43.3465 47.9503C43.0641 50.4179 42.6959 52.4108 42.2537 54.1154C41.3814 57.4778 40.2147 59.715 38.9393 62.1605L38.9392 62.1607C38.5978 62.8153 38.2487 63.4849 37.8952 64.195L36.1047 63.3039C36.4882 62.5333 36.8558 61.8277 37.2069 61.1537ZM42.3451 12.0032C41.6718 9.61996 40.7707 7.6599 39.6618 5.24807L39.6617 5.24797C39.1283 4.08773 38.5468 2.82294 37.9194 1.3562L36.0806 2.14269C36.7671 3.74787 37.3777 5.07505 37.9215 6.25688L37.9215 6.25697C38.9137 8.41356 39.6832 10.0861 40.2851 12.0806C40.8495 12.0272 41.4216 11.9999 42 11.9999C42.1153 11.9999 42.2304 12.001 42.3451 12.0032Z'
              fill='#777777'
            />
          </svg>
        </button>

        {/* MENU Theme */}
        <button
          onClick={() => {
            prop.setOnOffTheme(true);
            prop.setNavTheme2ThemeSetUp((any) => prop.navTheme2ThemeSetUp + 1);
            checkOnOff('menuLang');
          }}
          name='menuLang'
          className='myIconTab'>
          <img src={require(`../all-icon/navbar-icon/${myIcon.theme}`)} alt="" />
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
          <svg width='35' height='35' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
