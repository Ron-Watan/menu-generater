import React from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

import '../style/themePreset.css'
import photo from '../components/images/taco.jpg'
import photoPromo from '../components/images/promo.jpg'

// import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';

export const NavbarBg = (prop) => {
  // prop.restaurantName
  // prop.nameFontFamily
  // prop.nameFontColor
  // prop.nameFontSize
  // prop.navBarFontColor
  // prop.navBarColor

  // prop.themeIconRadius
  // prop.themeIconColorLine
  // prop.themeIconBG
  // prop.themeIconSolid
  // prop.themeIconColorBorder
  // prop.extraIcon

  // prop.categoryFontColor, prop.categoryBoxClass, prop.categoryBoxColor, prop.categorySpanClass, prop.categorySpanColor, prop.categoryActiveClass 
  return (
    <div className=""></div>
    // <div className='presentNavFoot'>
    //   <div className="PS_SideBarBar">
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //     <a className={`circle-iconButton-user ${prop.extraIcon && 'extraIcon-user'}`}
    //       style={{
    //         'borderRadius': `${prop.themeIconRadius}`,
    //         'backgroundColor': `${prop.themeIconBG}`,
    //         'border': `${prop.themeIconSolid} 2px ${prop.themeIconColorBorder}`,
    //         'width': '2.7rem', 'height': '2.7rem'
    //       }}>
    //       <svg className={` circle-iconSize-user ${prop.extraIcon && 'extraIcon-user'}`}
    //         style={{ 'fill': `${prop.themeIconColorLine}`, 'width': '2.1rem', 'height': '2.1rem' }}>
    //         <use xlinkHref={`${icon1}#appetizer`} />
    //       </svg>
    //     </a>
    //   </div>


    //   <div className='sss'>

    //     <nav className='presentNavFoot-w ' style={{ 'backgroundColor': `${prop.navBarColor}` }} >
    //       <div className=' '>
    //         <div className='PS_navFlexLogoandName'>

    //           <div className='PS_navSlit1'>

    //             <span style={{
    //               'fontFamily': `${prop.nameFontFamily}, serif`,
    //               'color': `${prop.nameFontColor}`,
    //               'fontSize': `${prop.nameFontSize}`,
    //               'fontWeight': '700'
    //             }} className='PS_scaleFont'>{prop.restaurantName}</span>
    //             {/* <img className='block h-6 w-auto' src={logo} alt='Your Company' /> */}
    //           </div>

    //           <div className=' PS_navSlit2 '
    //           >
    //             {/* //- MenuTime */}


    //             <div className='flexNavMenuName PS_gap'>

    //               <div className=' menuNameNavBox navMenuNameText'>
    //                 <div className='navMenuNameText-top PS_scaleFont2' style={{ 'color': `${prop.navBarFontColor}` }}>Dinner</div>

    //                 <div className={`navMenuNameText-Ab `}>



    //                 </div>
    //               </div>

    //               <svg className='PS_scaleFont2' width="10" height="5" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <line x1="23.1213" y1="2" x2="44" y2="22.8787" stroke={prop.navBarFontColor} stroke-width="3" stroke-linecap="round" />
    //                 <line x1="1.5" y1="-1.5" x2="31.0269" y2="-1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 25 2)" stroke={prop.navBarFontColor} stroke-width="3" stroke-linecap="round" />
    //               </svg>
    //             </div>


    //             <div className='filterBtn PS_w1'>

    //               <div className='navFilterNameText '>

    //                 <div className='filterBtn-main PS_scaleFont2'>
    //                   <svg width="21" height="21" viewBox="0 0 54 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M1 5.375H9.75" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M31.625 5.375H52.625" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M1 22.875H31.625" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M44.75 22.875H52.625" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M1 40.375H9.75" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M22.875 40.375H52.625" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M18.5 9.75H14.125C11.7088 9.75 9.75 7.7912 9.75 5.375C9.75 2.9588 11.7088 1 14.125 1H18.5C20.9162 1 22.875 2.9588 22.875 5.375C22.875 7.7912 20.9162 9.75 18.5 9.75Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M18.5 44.75H14.125C11.7088 44.75 9.75 42.7912 9.75 40.375C9.75 37.9588 11.7088 36 14.125 36H18.5C20.9162 36 22.875 37.9588 22.875 40.375C22.875 42.7912 20.9162 44.75 18.5 44.75Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M40.375 27.25H36C33.5838 27.25 31.625 25.2912 31.625 22.875C31.625 20.4588 33.5838 18.5 36 18.5H40.375C42.7912 18.5 44.75 20.4588 44.75 22.875C44.75 25.2912 42.7912 27.25 40.375 27.25Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                   </svg>



    //                 </div>


    //               </div>
    //             </div>


    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //     <div className="srollPS" style={{ 'font-family': `${prop.bodyFontFamily}` }}>

    //       <div className="bannerSectionFormC" style={{ 'backgroundColor': `${prop.bodyBgColor}` }}>
    //         <div className="boxImageFormC PS-AccPad">
    //           <img className="PS-AccImg" src={photoPromo} alt="" />
    //         </div>

    //       </div>
    //       <div className="dotBarFlex " style={{ 'backgroundColor': `${prop.bodyBgColor}` }}>

    //         <button className={'dotC'}></button>
    //         <button className={'dotC'}></button>
    //         <button className={'dotC'}></button>

    //       </div>

    //       <div className={`acArray mx-auto max-w-7xl `}
    //         style={{ 'backgroundColor': `${prop.bodyBgColor}` }}>

    //         <i className="x">!Theme</i>


    //         <div className="categoryImg" style={{
    //           backgroundImage: `url(${photo})`,
    //           backgroundPosition: 'center',
    //           backgroundSize: 'cover',
    //           height: '12.8rem',
    //         }} >
    //           <div className={prop.categoryBoxClass} style={{ 'backgroundColor': `${prop.categoryBoxColor}`,'transition':'all 0s' }}>
    //             <span className={`category-Custom-Title`} style={{ 'color': `${prop.categoryFontColor}` }}> {'Speciality'}</span>
    //             <span className={`${prop.categorySpanClass} ${prop.categoryActiveClass}` } style={{ 'backgroundColor': `${prop.categorySpanColor}`,'transition':'all 0s' }}></span>
    //           </div>

    //         </div>
    //         <div className="PS-AccListName" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `rgba(255, 255, 255, .05)` }}>
    //           <span>Tacu</span> <span>25</span>
    //         </div>
    //         <div className="PS-AccListName" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `rgba(255, 255, 255, .05)` }}>
    //           <span>Tacu</span> <span>25</span>
    //         </div>
    //         <div className="PS-AccListDetail" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `#e1e1e156` }}>
    //           <div className="">sit, amet consectetur adipisicing elit. Non ut autem optio ipsam adipisci totam fugiat rerum doloribu</div>
    //         </div>
    //         <div className="PS-AccListName" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `rgba(255, 255, 255, .05)` }}>
    //           <span>Tacu</span> <span>25</span>
    //         </div>
    //         <div className="PS-AccListDetail" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `#e1e1e156` }}>
    //           <div className="">sit, amet consectetur adipisicing elit. Non ut autem optio ipsam adipisci totam fugiat rerum doloribu</div>
    //         </div>
    //         <div className="PS-AccListName" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `rgba(255, 255, 255, .05)` }}>
    //           <span>Tacu</span> <span>25</span>
    //         </div>
    //         <div className="PS-AccListDetail" style={{ 'color': `${prop.bodyFonttColor}`,'backgroundColor': `#e1e1e156` }}>
    //           <div className="">sit, amet consectetur adipisicing elit. Non ut autem optio ipsam adipisci totam fugiat rerum doloribu</div>
    //         </div>

    //         {/* <ul className="">
    //         <i className="x">!Theme</i>

    //         <div className='accTab'>
    //           <button className={` heartFavor2Box`}>
    //             <div className={` heartFavor2Box-1 flex justify-center gap-x-6`}>

    //               <img alt="" />
    //             </div>
    //           </button>

    //           <div className="">
    //             <Accordion style={{ 'backgroundColor': `${prop.bodyBgColor}` }} >




    //               <AccordionSummary className='PS-Acc' aria-controls="panel2d-content" id="panel2d-header">
    //                 <div style={{ 'color': `${prop.bodyFonttColor}` }}>
    //                   <span>{'el.food_name'}</span>
    //                 </div>
    //                 <div className='flex' style={{ 'color': `${prop.bodyFonttColor}` }}>
    //                   <div ><span>25</span>  </div>

    //                 </div>

    //               </AccordionSummary >
    //               <AccordionDetails style={{ 'color': `${prop.bodyFonttColor}` }}>
    //                 <Typography >{'el.description'}</Typography>

    //                 <div>{'el.remark'}</div>

    //                 <div className={`heartFavor1Box`}>

    //                   <button >
    //                     <img alt="" />
    //                   </button>

    //                 </div>
    //               </AccordionDetails>

    //             </Accordion>
    //           </div>
    //         </div>

    //         </ul > */}
    //       </div >








    //     </div>
    //   </div>


    //   <div className="unselectable">

    //     <nav className={`presentNavFoot-w PS-Foot`}
    //       style={{ 'backgroundColor': `${prop.navBarColor}` }}
    //     >
    //       <div className="footBarGrid3 PS-nonBG">

    //         <div className={`footBarGrid3_1 `}>

    //           <div className={`footBarGrid3_1-1`}>


    //             <button className='footbatBtnLang'

    //               style={{ 'backgroundColor': `${''}` }}>
    //               <span className={`langCode`}
    //                 style={{ 'color': `${''}` }}>

    //               </span>
    //               {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.translate}`)} alt="" srcSet="" /> */}
    //               <svg width="56" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <g clip-path="url(#clip0_6_52)">
    //                   <g mask="url(#mask0_6_52)">
    //                     <path d="M21.8625 30.6303H3.45058C1.99786 30.6303 0.820328 29.4526 0.820328 28V3.45059C0.820328 1.99788 1.99786 0.820344 3.45058 0.820344H28C29.4527 0.820344 30.6303 1.99788 30.6303 3.45059V21.8626" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M45.5353 25.3697H52.5494C54.0021 25.3697 55.1797 26.5474 55.1797 28V52.5494C55.1797 54.0021 54.0021 55.1796 52.5494 55.1796H28C26.5474 55.1796 25.3697 54.0021 25.3697 52.5494V28C25.3697 26.5474 26.5474 25.3697 28 25.3697H42.0284" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M7.8344 9.58792H23.6162" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M11.6789 13.091C13.038 16.1185 15.7715 20.4875 20.9859 23.6162" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M20.9859 9.58793C20.9859 9.58793 19.2324 18.3557 10.4647 23.6161" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M15.7253 9.58792V7.83442" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M34.0447 48.1656L39.9707 32.6061C40.0918 32.31 40.5109 32.3096 40.6325 32.6055L46.5047 48.1656" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M35.8928 44.2905H44.6864" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M20.1093 45.5353H16.6021C13.2124 45.5353 10.4647 42.7875 10.4647 39.398V34.1377" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M18.3556 42.905L21.8626 45.5353L18.3556 48.1656" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M35.8907 10.4647H39.3979C42.7876 10.4647 45.5353 13.2125 45.5353 16.6021V21.8623" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M37.6444 13.095L34.1374 10.4647L37.6444 7.83438" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                   </g>
    //                 </g>
    //                 <defs>
    //                   <clipPath id="clip0_6_52">
    //                     <rect width="56" height="56" fill="white" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>
    //             </button>


    //             <button value='1' className={`popupLang  popupLangText`}
    //               style={{ 'backgroundColor': `${''}`, 'color': `${''}` }}>
    //               {''}
    //             </button>


    //           </div>


    //         </div>

    //         <button className="footBarGrid3_2 ">
    //           <div className={`footbatBtnList `}>
    //             {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.list}`)} className="" alt="" srcSet="" /> */}
    //             <svg width="72" height="23" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M70.3726 28.9975C70.3726 26.1872 68.3031 23.9091 65.7501 23.9091H5.62249C3.06952 23.9091 1 26.1872 1 28.9975V29.0025C1 31.8128 3.06952 34.0909 5.62249 34.0909H65.7501C68.3031 34.0909 70.3726 31.8128 70.3726 29.0025V28.9975Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //               <path d="M70.3726 6.08832C70.3726 3.27807 68.3031 0.999995 65.7501 0.999995H5.62249C3.06952 0.999995 1 3.27807 1 6.08832V6.09339C1 8.90364 3.06952 11.1817 5.62249 11.1817H65.7501C68.3031 11.1817 70.3726 8.90364 70.3726 6.09339V6.08832Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //               <path d="M70.3726 51.9066C70.3726 49.0964 68.3031 46.8183 65.7501 46.8183H5.62249C3.06952 46.8183 1 49.0964 1 51.9066V51.9117C1 54.7219 3.06952 57 5.62249 57H65.7501C68.3031 57 70.3726 54.7219 70.3726 51.9117V51.9066Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //             </svg>
    //             <span className={` itemFavorListShow `}>{'7'}</span>

    //           </div>

    //         </button>


    //         <div className="footBarGrid3_3 ">

    //           <button className={`footbatBtnCommentt`}>
    //             {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.feedback}`)} alt="" srcSet="" /> */}
    //             <svg width="57" height="25" viewBox="0 0 57 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M40.627 4.13193H9.96215C5.56475 4.13193 2 8.90809 2 14.7999V27.0779C2 32.9697 5.56475 37.7458 9.96215 37.7458H47.2981L53.0126 45.8909H55.2427L55.2427 19.7915C55.2427 18.0513 53.1844 14.4569 52.6327 13.0057" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M9.30782 17.7036H28.9941" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M9.30782 25.0114H29.5664" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M53.8565 2.22101C52.2285 0.592998 49.5889 0.592998 47.9609 2.22101L31.6516 18.5143V24.4259L37.5604 24.4127L53.8565 8.11659C55.4845 6.48858 55.4845 3.84902 53.8565 2.22101Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M43.7589 6.21986L49.5962 12.0571" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M28.5752 45.7675L30.932 48.7328L34.4805 50.0578L32.3886 53.2157L32.2248 57L28.5752 55.9863L24.9256 57L24.7618 53.2157L22.6699 50.0578L26.2185 48.7328L28.5752 45.7675Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M7.9052 45.7675L10.2621 48.7328L13.8105 50.0578L11.7186 53.2157L11.5549 57L7.9052 55.9863L4.25557 57L4.0919 53.2157L2 50.0578L5.54845 48.7328L7.9052 45.7675Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //               <path d="M49.2452 45.7675L51.602 48.7328L55.1504 50.0578L53.0585 53.2157L52.8949 57L49.2452 55.9863L45.5955 57L45.4318 53.2157L43.3399 50.0578L46.8884 48.7328L49.2452 45.7675Z" stroke={prop.navBarFontColor} stroke-width="2" stroke-miterlimit="10" />
    //             </svg>
    //           </button>

    //         </div>
    //       </div>

    //     </nav>






    //   </div >



    // </div>
  )
}

