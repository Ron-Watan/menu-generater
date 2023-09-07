import React, { useState } from 'react'
import '../componenthome/homeStyle.css';

// import logo from '../componenthome/img/logo.png'

import Slider from 'react-touch-drag-slider'
import { Link } from "react-router-dom";
import BBQ500 from '../componenthome/img/BBQ500.png'
import coffee500 from '../componenthome/img/coffee500.png'
import whatsee500 from '../componenthome/img/whatsee500.png'
import Sect00Navigation from '../componenthome/_00Navigation'



import { useSwipeable } from 'react-swipeable'

import MBicon_Banner from '../componenthome/img/icon/banner.svg'
import MBicon_Menu1 from '../componenthome/img/icon/menu1.svg'
import MBicon_Menu2 from '../componenthome/img/icon/menu2.svg'
import MBicon_Menu3 from '../componenthome/img/icon/menu3.svg'
import MBicon_Qrcode from '../componenthome/img/icon/qrcode.svg'
import MBicon_Lang from '../componenthome/img/icon/lang.svg'
import MBicon_Feedback from '../componenthome/img/icon/feedback.svg'
import MBicon_Time from '../componenthome/img/icon/time.svg'
import MBicon_Theme from '../componenthome/img/icon/theme.svg'
import MBicon_Onoff from '../componenthome/img/icon/onoff.svg'
import MBicon_Contact from '../componenthome/img/icon/contact.svg'
import MBicon_Sidebar from '../componenthome/img/icon/sidebar.svg'



import demobbq from '../componenthome/img/demo/demobbq.jpg'
import democoffee from '../componenthome/img/demo/democoffee.jpg'

import qrcoffee from '../componenthome/img/demo/qrCoffee.png'

import qrBBQ from '../componenthome/img/demo/qrBBQ.png'


import fqrcode from '../componenthome/img/feature/fqrcode.png'
import tmenu1 from '../componenthome/img/feature/tmenu1.png'
import fbanner from '../componenthome/img/feature/fbanner.png'
import fcontact from '../componenthome/img/feature/fcontact.png'
import ffeedback from '../componenthome/img/feature/ffeedback.png'
import flang from '../componenthome/img/feature/flang.png'
import fsetting from '../componenthome/img/feature/fsetting.png'
import ftheme from '../componenthome/img/feature/ftheme.png'
import ftime from '../componenthome/img/feature/ftime.png'








const _01Home = () => {

  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    setIndexDot(i)
  };


  const [indexDotFT, setIndexDotFT] = useState(0)



  const swipeHandlers = useSwipeable({
    onSwipedUp: (eventData) => {
      window.scrollTo(0, eventData.absY * 2)
    },
    onSwipedDown: (eventData) => {
      window.scrollBy(0, -eventData.absY * 2)
    },
  });


  return (
    <div className='H-body'>
      <Sect00Navigation NavBtnRight={'Login'} />

      <div className="tempSpace"></div>
      <div {...swipeHandlers} className="H_Banner">

        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {

          }}
          activeIndex={indexDot}//prop.bannerImgArr.length - 1
          threshHold={20}
          transition={0.5}
          scaleOnDrag={false}
        >

          <div className="H_BannerM" key='banner1'>
            <div className="H_BannerM_Flex H_BG1 ">
              <div className="H_MaxWidth">
                <div className="H_ContWidth H_SetFlex">
                  <div className="H_BannerM_Flex1">

                    <img className="H_BoxImg_phone" src={BBQ500} alt="" />

                  </div>

                  <div className="H_BannerM_Flex2">

                    <div className="H_flexBarCode">
                      {/* <span className="H_plus">+</span> */}
                      <img className="H_BoxImg_code" src={qrBBQ} alt="" />
                    </div>
                    <div className="H_flexColBarCode">
                      <div className="">Create Online Menu</div>
                      <div className="">and QR Code. </div>
                      <div className="">Management Tools <span className="H_Plus">+</span></div>

                    </div>
                    {/* <div className="H_flexColBarCode">Just Clicks! </div> */}
                    <div className="H_flexColBarCode freeTrailFontSize">
                      <div className=""> 30-day Free Trial</div>

                    </div>

                    <div className="H_flexColBarCode H_flexColBarCode_end">
                      <div className="H_smallText">After trial ends</div>
                      <div className="H_BigText Font_Price">$9.99 <span>/Month</span></div>

                      <div className="H_XsmallText Text_Center">
                        <div className="H_XsmallText">&bull; All Features &bull; No hidden fee </div>
                        <div className="">&bull; Recurring billing &bull; Cancel anytime</div>
                      </div>
                    </div>



                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className="H_BannerM" key='banner2'>
            <div className="H_BannerM_Flex H_BG2 ">
              <div className="H_MaxWidth">
                <div className="H_ContWidth H_SetFlex">


                  <div className="H_BannerM_Flex1">
                    <img className="H_BoxImg_phone" src={coffee500} alt="" />
                  </div>


                  <div className="H_BannerM_Flex2 H_BannerM_Flex2_iconGap">
                    <div className="H_flexColBarCode W_what">Cool Features!</div>

                    {/* <div className="H_flexColBarCode W_what">What You See Is What You Get!</div> */}
                    <div className="H_BoxIcon">
                      <img src={MBicon_Sidebar} alt="" className="H_icon" />
                      <div className="">Sidebar navigation</div>
                    </div>
                    <div className="H_BoxIcon">
                      <img src={MBicon_Qrcode} alt="" className="H_icon" />
                      <div className="">QR Code Generater</div>
                    </div>
                    <div className="H_BoxIcon">
                      <img src={MBicon_Feedback} alt="" className="H_icon" />
                      <div className="">Feedback/Reviews</div>
                    </div>
                    <div className="H_BoxIcon">
                      <img src={MBicon_Banner} alt="" className="H_icon" />
                      <div className="">Promotion Photos</div>
                    </div>
                    <div className="H_BoxIcon">
                      <img src={MBicon_Time} alt="" className="H_icon" />
                      <div className="">Auto/Maunal change menus</div>
                    </div>

                    <div className="H_BoxIcon">
                      <img src={MBicon_Theme} alt="" className="H_icon" />
                      <div className="">Customize Font/Size/Color</div>
                    </div>
                    <div className="H_BoxIcon">
                      <img src={MBicon_Onoff} alt="" className="H_icon" />
                      <div className="">Feature Settings</div>
                    </div>
                    <div className="FtSmart">
                      <a href='#secFT' className="H_flexColBarCode demoMargin Font_Down"> and More&darr;</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>








          <div className="H_BannerM" key='banner3'>
            <div className="H_BannerM_Flex H_BG2 ">
              <div className="H_MaxWidth">
                <div className="H_ContWidth H_SetFlex">
                  <div className="H_BannerM_Flex1">

                    <img className="H_BoxImg_phone" src={whatsee500} alt="" />

                  </div>

                  <div className="H_BannerM_Flex2 SmartGap">
                    <div className="H_flexColBarCode SmartTile_gap">Smart Menu Builder</div>

                    <div className="H_boxSmartText">

                      <div className="FtSmart">
                        <div className="">Web Application</div>
                        <div className="FtSmart_small">No downloaded or installed</div>
                      </div>
                      <div className="FtSmart">
                        <div className="">Compatible with all devices</div>
                        {/* <div className="FtSmart_small">iOS, Andriod, Windows, macOS</div> */}
                      </div>

                      <div className="FtSmart">
                        <div className="">Easily manage your menu</div>
                        {/* <div className="FtSmart_small">from your smart phone</div> */}
                      </div>
                      <div className="FtSmart">
                        <div className="">User-friendly interface</div>
                        {/* <div className="FtSmart_small">What You See Is What You Get!</div> */}
                      </div>
                      <div className="FtSmart">
                        <div className="">Easily create  </div>
                        <div className="">Simple and Cool! </div>
                        <div className="">Online Menu for Customer</div>
                        <a href='#secDemo' className="H_flexColBarCode demoMargin Font_Down"> See Demos &darr;</a>
                      </div>

                    </div>


                  </div>
                </div>

              </div>

            </div>
          </div>


        </Slider >

        {/* DOT BUTTON*/}
        <div className="dotBarFlex">
          {Array.from({ length: 3 }).map((item, index) => (
            <button onClick={() => {
              setIndexDot(index)
              setFinishedIndex(index)

            }}
              className={indexDot === index ? "dotActiveC" : "dotC"}
              // className={'dotC'}
              key={index}>{index + 1}</button>
          ))}

        </div>

      </div>









      <main className="">

        <div className="H_ConntentFlex_Center H_Padding_FreeTrial">
          <Link to='/register' className="H_btnLogin H_btnLogin_Reg">Start Free Trial</Link>
        </div>


        <div className="HowWork_Contaoner">


          <div className="H_ExtrabigTitle">How does it Work?</div>
          <div className="">

            <div className="H_ConntentFlexCol_Center">
              <div className="H_MedTitle"> 1. Create an Account & Login</div>
              <div className="">Get QR-Code and online menu website</div>
              <div className="">https//www.qr-cloudmenu/ <span className="Text_italic">your restaurant name</span> </div>
            </div>


          </div>

          <div className="">
            <div className="H_ConntentFlexCol_Center">
              <div className="H_MedTitle"> 2.  Create your online menu</div>
              <div className="">Using Smart Menu Builder App.</div>
              <a href='#secFT' className="Font_Down2"> See Features &darr;</a>
            </div>

          </div>

          <div className="">
            <div className="H_ConntentFlexCol_Center">
              <div className="H_MedTitle"> 3.Download the QR code</div>
              <div className="">Print it and using in your restaurant</div>
              <div className="">or post on social media.</div>
            </div>
          </div>

        </div>


        <div className="sectionDemo" id='secDemo'>

          <div className="H_ConntentFlex_Center">
            <div className="H_ExtrabigTitle">Demo</div>
          </div>
          <div className="H_MaxWidth">
            <div className="H_ContWidth H_DemoFlexCol ">
              <div className="Flex_Demo">

                <div className="Flex_Demo1">
                  <img className="Flex_Demo1_img" src={demobbq} alt="" />
                </div>
                <div className="Flex_Demo2">
                  <img className="Flex_Demo2_img" src={qrBBQ} alt="" />
                  <a href='https://www.qr-cloudmenu.com/franks-bbq' target='_blank' rel="noreferrer" className="Flex_Demo2_link">View Demo</a>
                </div>
              </div>

              <div className="Flex_Demo">
                <div className="Flex_Demo1">
                  <img className="Flex_Demo1_img" src={democoffee} alt="" />
                </div>
                <div className="Flex_Demo2">
                  <img className="Flex_Demo2_img" src={qrcoffee} alt="" />
                  <a href='https://www.qr-cloudmenu.com/eighth-coffee' target='_blank' rel="noreferrer" className="Flex_Demo2_link">View Demo</a>
                </div>
              </div>

            </div>
          </div>


        </div>

        <div className="sectionFT" id='secFT'>

          <div className="H_ConntentFlex_Center H_Padding_Feater">
            <div className="H_ExtrabigTitle">Features</div>
          </div>
          <div className="H_Banner">

            <div className="dotBarFlexFT">


              <a href='#feature1' className={`H_BoxIconFT ${indexDotFT === 0 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
                <img src={MBicon_Qrcode} alt="" className="H_iconFT" />
              </a>
              <a href='#feature2' className={`H_BoxIconFT ${indexDotFT === 1 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(1)}>
                <img src={MBicon_Banner} alt="" className="H_iconFT" />
              </a>
              <a href='#feature3' className={`H_BoxIconFT ${indexDotFT === 2 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(2)}>
                <img src={MBicon_Menu1} alt="" className="H_iconFT" />
              </a>
              <a href='#feature3' className={`H_BoxIconFT ${indexDotFT === 2 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(2)}>
                <img src={MBicon_Menu2} alt="" className="H_iconFT" />
              </a>
              <a href='#feature3' className={`H_BoxIconFT ${indexDotFT === 2 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(2)}>
                <img src={MBicon_Menu3} alt="" className="H_iconFT" />
              </a>
            </div>
            <div className="dotBarFlexFT">
              <a href='#feature4' className={`H_BoxIconFT ${indexDotFT === 3 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(3)}>
                <img src={MBicon_Feedback} alt="" className="H_iconFT" />
              </a>
              <a href='#feature5' className={`H_BoxIconFT ${indexDotFT === 4 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(4)}>
                <img src={MBicon_Time} alt="" className="H_iconFT" />
              </a>
              <a href='#feature6' className={`H_BoxIconFT ${indexDotFT === 5 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(5)}>
                <img src={MBicon_Lang} alt="" className="H_iconFT" />
              </a>
              <a href='#feature7' className={`H_BoxIconFT ${indexDotFT === 6 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(6)}>
                <img src={MBicon_Contact} alt="" className="H_iconFT" />
              </a>
              <a href='#feature8' className={`H_BoxIconFT ${indexDotFT === 7 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(7)}>
                <img src={MBicon_Theme} alt="" className="H_iconFT" />
              </a>
              <a id='feature1' href='#feature9' className={`H_BoxIconFT ${indexDotFT === 8 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(8)}>
                <img src={MBicon_Onoff} alt="" className="H_iconFT" />
              </a>

            </div>


            {/* //- */}
            {/* <div className="H_MaxWidth">
            <div className="H_ContWidth H_DemoFlexCol "> */}
            <div className='H_featureSection'>

              {/* //=//= */}
              <div className="H_MaxWidth ">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >

                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={fqrcode} alt="" />
                    </div>

                    <div className="H_BannerM_Flex2_FT H_boxFeature">
                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Qrcode} alt="" className="H_BoxIconFT" />
                        <div className="">QR Code</div>
                      </div>
                      <div className="H_boxFeatureTextCent">
                        <div className="FtTitle">Custom Outstanding QR Code</div>
                      </div>
                      <div className="H_boxFeatureText">
                        <div className="FtTitleM">&bull; Logo</div>
                        <div className="FtTitleM">&bull; Coloring</div>
                        <div className="FtTitleM">&bull; Styling</div>
                        <div className="H_boxFeatureText gap5">
                          <div className="FtTitleM">&bull; Dowload Size</div>
                          <div className="Ftsmall">min. 3 cm. to max. 100 cm.</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='feature2' className="featureLink"></div>
              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >

                    <div className="H_BannerM_Flex2_FT H_boxFeature">
                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Banner} alt="" className="H_BoxIconFT" />
                        <div className="">Promotion Photos</div>
                      </div>
                      <div className="H_boxFeatureTextCent">
                        <div className="FtTitle">Upload Promotion/Banner Photos</div>
                      </div>
                      <div className="H_boxFeatureText">
                        <div className="FtTitleM">&bull; Maximum 7 Photos</div>
                      </div>
                      <div className="hiddenMe h_fbanner"></div>
                      <div className="hiddenMe"></div>
                    </div>


                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={fbanner} alt="" />
                    </div>

                  </div>

                </div>
              </div>


              <div id='feature3' className="featureLink"></div>


              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >
                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={tmenu1} alt="" />
                    </div>

                    <div className="H_BannerM_Flex2_FT H_boxFeature">
                      <div className="H_RegText H_TitleText">
                        <div className="H_RegText">
                          <img src={MBicon_Menu1} alt="" className="H_BoxIconFT " />
                          <img src={MBicon_Menu2} alt="" className="H_BoxIconFT move1" />
                          <img src={MBicon_Menu3} alt="" className="H_BoxIconFT " />
                        </div>
                        <div className="">Menus</div>
                      </div>
                      <div className="H_boxFeatureTextCent">
                        <div className="FtTitle">Create Restarant Menus </div>
                      </div>
                      <div className="H_boxFeatureText">
                        <div className="H_boxFeatureText gap5">
                          <div className="FtTitleM">&bull; Maximum 3 menus</div>
                          <div className="H_boxFeatureText Ftsmall gap5">
                            <div className="">Total 45 categories,</div>
                            <div className="">1350 items</div>
                          </div>
                        </div>
                        <div className="FtTitleM">&bull; Max. 45 Photo categories</div>

                        <div className="FtTitleM">&bull; 500+ Icons</div>
                        <div className="">
                          <div className="FtTitleM">&bull; Menu Filtering</div>
                          <div className="H_boxFeatureText Ftsmall gap5">
                            <div className="">Vegeterian, Vegan,</div>
                            <div className="">Gluten-Free, Halal</div>
                          </div>

                        </div>
                        <div className="H_boxFeatureText gap5">
                          <div className="FtTitleM">&bull; 2nd Language</div>
                          <div className="H_boxFeatureText Ftsmall">or auto from web browser</div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div id='feature4' className="featureLink"></div>

              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >

                    <div className="H_BannerM_Flex2_FT H_boxFeature">

                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Feedback} alt="" className="H_BoxIconFT" />
                        <div className="">Feedback</div>
                      </div>
                      <div className="H_boxFeatureTextCent Text_Center">
                        <div className="FtTitle">Get Feedback and Comments <br /> from customer</div>
                      </div>

                      <div className="H_boxFeatureText">
                        <div className="FtTitleM Text_Center">
                          &bull; Get Star rating
                        </div>
                        <div className="FtTitleM Text_Center">
                          &bull; All messages will be direct to the application only                        </div>


                      </div>

                    </div>

                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={ffeedback} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div id='feature5' className="featureLink"></div>

              <div className="H_MaxWidth ">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >
                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={ftime} alt="" />
                    </div>

                    <div className="H_BannerM_Flex2_FT H_boxFeature">

                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Time} alt="" className="H_BoxIconFT" />
                        <div className="">Menu Time Settings</div>
                      </div>
                      <div className="H_boxFeatureTextCent Text_Center">
                        <div className="FtTitle">Auto/Manual Change All menus </div>
                      </div>

                      <div className="H_boxFeatureText">

                        <div className="H_boxFeatureText gap5">
                          <div className="FtTitleM">&bull; All Day Menu</div>
                          <div className="H_boxFeatureText Ftsmall gap5">
                            <div className="">Publish all selected menu - 24hr</div>
                            <div className="">(ex: &bull;Main menu &bull;Kids menu &bull;Winelist)</div>
                            <div className="">can be change menus by pop-up button</div>
                          </div>
                        </div>

                        <div className="H_boxFeatureText gap5">
                          <div className="FtTitleM">&bull;  Menu Schedule</div>
                          <div className="H_boxFeatureText Ftsmall gap5 Text_Center">
                            <div className="">Publish selected menu by make time schedule</div>
                            <div className="">(ex: &bull;Breakfast menu &bull;Lunch menu &bull;Dinner Menu)</div>
                            <div className="">will be change automaticlly by your local time</div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div id='feature6' className="featureLink"></div>


              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >


                    <div className="H_BannerM_Flex2_FT H_boxFeature">

                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Lang} alt="" className="H_BoxIconFT" />
                        <div className="">Language Settings</div>

                      </div>

                      <div className="H_boxFeatureText">
                        <div className="">
                          <div className="FtTitle">&bull; Language </div>
                          <div className="Ftsmall">
                            <div className="">Determine Language name and code for menus</div>
                          </div>
                        </div>

                        <div className="">
                          <div className="FtTitle">&bull; Currency Symbole</div>
                          <div className="Ftsmall">

                            <div className="">Determine Currency style and Symbole</div>

                          </div>
                        </div>

                      </div>

                    </div>
                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={flang} alt="" />
                    </div>
                  </div>
                </div>

              </div>
              <div id='feature7' className="featureLink"></div>
              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >
                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={fcontact} alt="" />
                    </div>

                    <div className="H_BannerM_Flex2_FT H_boxFeature M_paddingR">

                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Contact} alt="" className="H_BoxIconFT" />
                        <div className="">Contact Info.</div>

                      </div>

                      <div className="H_boxFeatureText">

                        <div className="Ftsmall">
                          <div className="">Add contact information and Social media link at the end of online menu </div>
                          <div className="hiddenMe h_fbanner"></div>
                          <div className="hiddenMe"></div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div id='feature8' className="featureLink"></div>

              <div className="H_MaxWidth">

                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >

                    <div className="H_BannerM_Flex2_FT H_boxFeature">
                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Theme} alt="" className="H_BoxIconFT" />
                        <div className="">Theme Settings</div>
                      </div>

                      <div className="H_boxFeatureText">

                        <div className="Ftsmall">&bull; Restaurant Logo/Font/Color</div>
                        <div className="Ftsmall">&bull; Top/Bottom-Bar Font/Color</div>
                        <div className="Ftsmall">&bull; Main Font/Color</div>
                        <div className="Ftsmall">&bull; Photo Category Size/Color</div>
                        <div className="Ftsmall">&bull; Sidebar Color/Icon color</div>




                      </div>

                    </div>

                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={ftheme} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div id='feature9' className="featureLink"></div>

              <div className="H_MaxWidth">
                <div className="H_ContWidth">
                  <div className="FT-QRCode H_BannerM_Flex " >

                    <div className=" H_BannerM_Flex1_FT">
                      <img className="H_BoxImg_FT" src={fsetting} alt="" />
                    </div>
                    <div className="H_BannerM_Flex2_FT H_boxFeature M_paddingR">

                      <div className="H_RegText H_TitleText">
                        <img src={MBicon_Onoff} alt="" className="H_BoxIconFT" />
                        <div className="">General Settings</div>
                      </div>

                      <div className="H_boxFeatureText">
                        <div className="">
                          <div className="FtTitle">&bull; Turn On/Off Features</div>
                          <div className="Ftsmall">Choose the right features for your menu</div>
                        </div>


                        <div className="Ftsmall">&bull; Menu's name</div>
                        <div className="Ftsmall">&bull; Filter</div>
                        <div className="Ftsmall">&bull; Sidebar</div>
                        <div className="Ftsmall">&bull; Promotion/Banner</div>
                        <div className="Ftsmall">&bull; Food Description</div>
                        <div className="Ftsmall">&bull; Description Accordian</div>
                        <div className="Ftsmall">&bull; Promotion/Banner</div>
                        <div className="Ftsmall">&bull; BottomBar</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>


        <div className="H_ConntentFlex_Center H_Padding_FreeTrial">
          <Link to='/login' className="H_btnLogin H_btnLogin_Reg">Start Free Trial</Link>
        </div>

        <div id='feature9' className="featureLink"></div>
        <div className="H_MaxWidth">
          <div className="H_ContWidth">
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 QR-Clould Menu. All rights reserved.
            </p>

            <div className="endSection">
              <Link to='/termCondition' className="">Term of Service </Link>
              <Link to='/policy' className="">Privacy Policy</Link>
            </div>

          </div>
        </div>
      </main>




    </div >
  )
}

export default _01Home