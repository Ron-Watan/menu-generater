import React, { useState } from 'react'
import '../componenthome/homeStyle.css';
// import logo from '../componenthome/img/logo.png'
import logo from '../componenthome/img/logo_1.png'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-touch-drag-slider'
import { Link } from "react-router-dom";
import BBQ500 from '../componenthome/img/BBQ500.png'
import coffee500 from '../componenthome/img/coffee500.png'
import whatsee500 from '../componenthome/img/whatsee500.png'


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


import qrBBQ from '../componenthome/img/qrBBQ.jpg'


const Home = () => {
  const navigate = useNavigate()
  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    setIndexDot(i)
  };


  const [indexDotFT, setIndexDotFT] = useState(0)
  function setFinishedIndexFT(i) {
    // console.log("finished dragging on slide", i);
    setIndexDotFT(i)
  };






  const touchDown = () => {

  }

  return (
    <div className='H-body'>
      <div className="H-header">
        <div className="H-headerInner">
          <div className="H-container--large">
            <div className="H-top-navigation">

            </div>
            <div className="H_mainnavigation">
              <a href="#" className="H-logoWrapper">
                {/* <img src="" alt="logo" className="logo" /> */}
              </a>

              <div className="H_mainnavigation_ab">
                <div className="H-center-navigation">
                  <img src={logo} alt="" />
                </div>
              </div>

              <div className="H-rightSideHeader">
                {/* <span className="HisearchBar">
                  <img src="" className="searchIcon" alt="search icon" />
                </span> */}

                <Link to='/login' className="H_btnLogin">Login</Link>
              </div>
            </div>

          </div>





        </div>
      </div>
      <div className="tempSpace"></div>
      <div onTouchMove={() => {
        touchDown()
      }} className="H_Banner">

        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {

          }}
          activeIndex={indexDot}//prop.bannerImgArr.length - 1
          threshHold={20}
          transition={0.5}
          scaleOnDrag={false}
        >

          <div className="H_BannerM">
            <div className="H_BannerM_Flex H_BG1">

              <div className="H_BannerM_Flex1">

                <img className="H_BoxImg_phone" src={BBQ500} alt="" />

              </div>

              <div className="H_BannerM_Flex2">

                <div className="H_flexBarCode">
                  <span className="H_plus">+</span>
                  <img className="H_BoxImg_code" src={qrBBQ} alt="" />
                </div>
                <div className="H_flexColBarCode">
                  <div className="">Create Your Own </div>
                  <div className="">Online Menu</div>
                  <div className="">and QR Code. </div>

                </div>
                {/* <div className="H_flexColBarCode">Just Clicks! </div> */}
                <div className="H_flexColBarCode">30-day Free Trial  </div>
                <div className="H_flexColBarCode H_flexColBarCode_end">
                  <div className="H_smallText">After trial ends</div>
                  <div className="H_BigText">$9.99 <span>/Month</span></div>
                  <div className="H_XsmallText">Recurring billing or Cancel anytime</div>
                </div>



              </div>
            </div>




          </div>
          <div className="H_BannerM">
            <div className="H_BannerM_Flex H_BG2">

              <div className="H_BannerM_Flex1">

                <img className="H_BoxImg_phone" src={coffee500} alt="" />

              </div>

              {/* MBicon_Onoff
                MBicon_Contact */}
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
                  <div className="">Feedback/Review</div>
                </div>
                <div className="H_BoxIcon">
                  <img src={MBicon_Banner} alt="" className="H_icon" />
                  <div className="">Promotion Photos</div>
                </div>
                {/* <div className="H_BoxIcon">
                  <img src={MBicon_Menu3} alt="" className="H_icon" />
                  <div className="">Menus Management</div>
                </div> */}

                <div className="H_BoxIcon">
                  <img src={MBicon_Time} alt="" className="H_icon" />
                  <div className="">Auto/Maunal change menus</div>
                </div>
                {/* <div className="H_BoxIcon">
                  <img src={MBicon_Lang} alt="" className="H_icon" />
                  <div className="">Language/Currency</div>
                </div> */}

                <div className="H_BoxIcon">
                  <img src={MBicon_Theme} alt="" className="H_icon" />
                  <div className="">Font/Size/Color Settings</div>
                </div>
                <div className="H_BoxIcon">
                  <img src={MBicon_Onoff} alt="" className="H_icon" />
                  <div className="">Feature Settings</div>
                </div>
                {/* <div className="">
                  <img src={MBicon_Banner} alt="" className="H_icon" />
                </div>
                <div className="">
                  <img src={MBicon_Banner} alt="" className="H_icon" />
                </div> */}
                <div className="H_flexColBarCode W_what">and More</div>
              </div>

            </div>
          </div>

          <div className="H_BannerM">
            <div className="H_BannerM_Flex H_BG2">

              <div className="H_BannerM_Flex1">

                <img className="H_BoxImg_phone" src={whatsee500} alt="" />

              </div>

              {/* MBicon_Onoff
                MBicon_Contact */}
              <div className="H_BannerM_Flex2 H_BannerM_Flex2_iconGap">
                <div className="H_flexColBarCode W_what">Smart Menu Builder</div>
                <div className="H_BoxIcon">- Web Application -</div>
                <div className="H_BoxIcon">No downloaded or installed</div>


                <div className="H_BoxIcon">- Comtable with all device</div>
                <div className="">Easily manage your menu from your smartphone</div>
                <div className="H_BoxIcon">- User Friendly interface on User and Customer side</div>
                <div className="">User friendly graphical interface</div>
                <div className="H_BoxIcon">- What You See Is What You Get!</div>
                {/* <div className="H_BoxIcon">
      
                  You can edit and see your online menu how the final menu looks online.
             
                </div> */}


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
          <Link to='/login' className="H_btnLogin">Free Trial</Link>
        </div>


        <div className="">
          <div className="H_ConntentFlex_Center">How does it Work?</div>
          <div className="">

            <div className="H_ConntentFlexCol_Center">
              <div className=""> 1. Register & Login</div>
              <div className="">Get QR-Code and online menu website</div>
              <div className="">https//www.qr-cloudmenu/ <span>your restaurant name</span> </div>
              <div className=""> see Features</div>
            </div>


          </div>

          <div className="">
            <div className="H_ConntentFlexCol_Center">
              <div className=""> 2.  Create your online menu</div>
              <div className="">using our Smart Menu Builder App.</div>

              <div className=""> see Menu  Features</div>
            </div>

          </div>

          <div className="">
            <div className="H_ConntentFlexCol_Center">
              <div className=""> 3.Download the QR code</div>
              <div className="">print or post on your social media</div>

            </div>

          </div>

          <div className="">


          </div>


        </div>
        <div className="H_ConntentFlex_Center H_Padding_FreeTrial">
          <div className="H_btnLogin">Demo</div>
        </div>
        <div className="">Demo</div>

        <div className="Flex_Demo">

          <div className="Flex_Demo1">
            <img className="" src={coffee500} alt="" />
          </div>
          <div className="Flex_Demo2">
            View Demo
          </div>
        </div>

        <div className="Flex_Demo">

          <div className="Flex_Demo1">
            <img className="" src={coffee500} alt="" />
          </div>
          <div className="Flex_Demo2">
            View Demo
          </div>
        </div>
        <div className="Flex_Demo">

          <div className="Flex_Demo1">
            <img className="" src={coffee500} alt="" />
          </div>
          <div className="Flex_Demo2">
            View Demo
          </div>
        </div>
        <div className="Flex_Demo">

          <div className="Flex_Demo1">
            <img className="" src={coffee500} alt="" />
          </div>
          <div className="Flex_Demo2">
            View Demo
          </div>
        </div>




        <div className="H_ConntentFlex_Center H_Padding_FreeTrial">
          <div className="H_btnLogin">Featurs</div>
        </div>







      </main>

      {/* //=//= */}



      <div className="H_Banner">

        <div className="dotBarFlexFT">
          <div className={`H_BoxIconFT ${indexDotFT === 0 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Feedback} alt="" className="H_iconFT" />
          </div>

          <div className={`H_BoxIconFT ${indexDotFT === 1 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Qrcode} alt="" className="H_iconFT" />

          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 2 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Menu1} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 3 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Menu2} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 4 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Menu3} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 5 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Time} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 6 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Lang} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 7 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Contact} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 8 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Theme} alt="" className="H_iconFT" />
          </div>
          <div className={`H_BoxIconFT ${indexDotFT === 9 && "H_BoxIconFT_Focus"}`} onClick={() => setIndexDotFT(0)}>
            <img src={MBicon_Onoff} alt="" className="H_iconFT" />
          </div>






          {/* {Array.from({ length: 3 }).map((item, index) => (
            <button onClick={() => {
              setIndexDotFT(index)
              setFinishedIndexFT(index)

            }} className={indexDot === index ? "dotActiveC" : "dotC"} key={index}>
              {index + 1}
            </button>
          ))} */}

        </div>

        <div className=""></div>

        <Slider
          onSlideComplete={setFinishedIndexFT}
          onSlideStart={(i) => {

          }}
          activeIndex={indexDotFT}//prop.bannerImgArr.length - 1
          threshHold={20}
          transition={0.5}
          scaleOnDrag={false}
        >

          <div className="H_BannerM">
            <div className="H_BannerM_Flex H_BG2">

              <div className="H_BannerM_Flex1">

                <img className="H_BoxImg_phone" src={coffee500} alt="" />

              </div>

              {/* MBicon_Onoff
                MBicon_Contact */}
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
                  <div className="">Feedback/Review</div>
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
                  <div className="">Font/Size/Color Settings</div>
                </div>
                <div className="H_BoxIcon">
                  <img src={MBicon_Onoff} alt="" className="H_icon" />
                  <div className="">Feature Settings</div>
                </div>

                <div className="H_flexColBarCode W_what">and More</div>
              </div>

            </div>
          </div>
          <div className="H_BannerM">
            <div className="H_BannerM_Flex H_BG2">

              <div className="H_BannerM_Flex1">

                <img className="H_BoxImg_phone" src={coffee500} alt="" />

              </div>

              {/* MBicon_Onoff
                MBicon_Contact */}
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
                  <div className="">Feedback/Review</div>
                </div>
                <div className="H_BoxIcon">
                  <img src={MBicon_Banner} alt="" className="H_icon" />
                  <div className="">Promotion Photos</div>
                </div>

                <div className="H_BoxIcon">
                  <img src={MBicon_Time} alt="" className="H_icon" />
                  <div className="">Auto/Maunal change menus</div>
                </div>
                {/* <div className="H_BoxIcon">
                  <img src={MBicon_Lang} alt="" className="H_icon" />
                  <div className="">Language/Currency</div>
                </div> */}

                <div className="H_BoxIcon">
                  <img src={MBicon_Theme} alt="" className="H_icon" />
                  <div className="">Font/Size/Color Settings</div>
                </div>
                <div className="H_BoxIcon">
                  <img src={MBicon_Onoff} alt="" className="H_icon" />
                  <div className="">Feature Settings</div>
                </div>

                <div className="H_flexColBarCode W_what">and More</div>
              </div>

            </div>
          </div>




        </Slider >



      </div>
















      {false && <div className="">
        <div className="">
          <p>How it works</p>
          <p>1. After register and login you will get your link and QR-code website menu immedaitely in our Smart Menu Creater App. (web-application no download needed) </p>
          <p>your link website menu will be under https://www.qr-cloudmenu.com/your restaurant name-xxxxxx </p>

          <p>2. Create your online menu using our Smart Menu Creater App.

          </p>
          <p>3. Download the QR code and print it</p>

          <p>4. Get and read feedback from customer, Enjoy to create ,manage and adjust your menu anytime. Everithing in Smart Menu Creater App</p>

        </div>
        <div className="">
          <p>What Smart Menu Creater App.</p>
          <p>Our Smart Menu Creater Application is web-application no download needed</p>
          <p>Smart Menu Creater App. can generate/design your QR-code and greate online menu for restaurants,
            pubs, hotel, coffee shop and other services with simple style easy to read and easy to navigate your all menus with
            Hot side-bar style and can change any color theme on your desire</p>

          <p>Smart Menu Creater App. can manage your menu what menu you wantmaximum 3 menu (15 category each)</p>

          <p>can be opened on any device. Everyone can open the menu directly on their own smartphone.
            However some restaurants also use it on tablets.

          </p>
          <p>
            No app to install
            You can open a menu instantly, without stress: you don't need to
            download or install any app and you can read the menu without any registration.
          </p>

          <p>

            Online
            The menu is online and always accessible: it can be read from any location,
            at any time. You can easily find the menu by searching online and you can also
            add a link to the menu from any website or app.
          </p>

          <p>
            More information
            Our digital menu allows restaurants to include more information for each product,
            without making the menu hard to read. Each item can be expanded and restaurants
            can include descriptions, highlight product qualities
            (like vegan, bio, home-made, gluten-free, etc.) and describe the ingredients.
          </p>

          <p>
            High-quality Photos
            Restaurants can include large photos for all products or some of them.
            Images let you understand the menu without effort and will make your mouth water.
          </p>
          <p>
            Browse the menu easily
            The menus are easy to read and well organized. Each restaurant may have multiple menus
            (e.g. à la carte, daily menu, etc.) and inside a menu you can easily jump between
            different sections.
          </p>

          <p>
            Beautiful design
            BuonMenu has a professional design, on any device. BuonMenu allows restaurants to
            create perfect
            menus, without the need for design skills.
          </p>
          <p>
            Translations
            BuonMenu allows you to see an automatic translation of the menu when you open it with a
            recent browser, like Chrome. Restaurants can also create menus translated manually.
          </p>


          <p>

            Send notifications
            Send push notifications to all the customers that have visited your digital menu, even
            when they close your menu. If they accept to receive the notifications, you can promote
            your restaurant, a new dish, a discount, a special occasion, etc
          </p>

          <p>
            Social media and search
            Any menu can be shared using a link with the restaurant name
            (e.g. buonmenu.com/restaurantname).
            Restaurants can make it easy to find their menu by adding the link to their social profiles
            (like Facebook or Instagram) or connecting the menu to Google My Business and Google Maps
          </p>

          <p>
            Simple and always updated
            Restaurants can create and update their digital menu directly, at any time,
            cutting the cost and offering a better menu, that is always updated and that can be
            improved over time. The menu is dynamic and can also include daily menus or new products,
            without an additional piece of paper.
          </p>
        </div>

      </div>}

    </div >
  )
}

export default Home