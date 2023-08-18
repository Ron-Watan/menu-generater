import React, { useState } from 'react'
import '../componenthome/homeStyle.css';
// import logo from '../componenthome/img/logo.png'
import logo from '../componenthome/img/logo_1.png'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-touch-drag-slider'
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [indexDot, setIndexDot] = useState(0)

  function setFinishedIndex(i) {
    // console.log("finished dragging on slide", i);
    setIndexDot(i)
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
          {
            Array.from({ length: 5 }).map((el, index) => (

              // <img ref={(element) => {
              //   elementRef.current[index] = element;
              // }} onClick={drag} key={index} src={el} className='imageBannerFormC' />
              // <img key={index} src={el} className='imageBannerFormC' />
              <img key={index} src={logo} className='imageBannerFormC' />




            ))
          }
        </Slider >

        {/* DOT BUTTON*/}
        <div className="dotBarFlex">
          {Array.from({ length: 5 }).map((item, index) => (
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



    </div >
  )
}

export default Home