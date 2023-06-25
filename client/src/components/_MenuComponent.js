
import logo from '../img/bp-logo.png'
import 'remixicon/fonts/remixicon.css'
import { useEffect, useState } from 'react';
import AcordionSubComp from './AcordionSubComp';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'
import SidebarSubComp from './SidebarSubComp';
import FooterComponent from './FooterComponent';
import BannerSubCompo from './BannerSubCompo';
// import i18n from './multiLanguage/i18n';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import axios from 'axios';
import { ticketPass } from '../protectors/authorize';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styleClient/mainClient.css'
import '../styleClient/sidebarClient.css'
import '../styleClient/footerClient.css'
import '../styleClient/accordianClient.css'

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

const dateTime = new Date();
// console.log(dateTime)

const h = dateTime.getHours()
const m = dateTime.getMinutes()
const s = dateTime.getSeconds()


const nowTime = h * 60 * 60 + m * 60 + s


//=
const _MenuComponent = () => {
  const [originalClientMenu, setOriginalClientMenu] = useState([])

  const [clientMenu, setClientMenu] = useState([])
  const [allMenuName, setAllMenuName] = useState('')
  const [chooseMenu, setChooseMenu] = useState('')

  const [menuTime, setMenuTime] = useState(1)

  const [favorList, setFavorList] = useState([])
  const { link } = useParams()

  const [started, setStarted] = useState(false)

  const switcher = (even) => {
    setStarted(!started)
  }

  const timeSwitcher = () => {
    if (nowTime >= 0 && nowTime <= 64000) setMenuTime()
  }


  ///////////////////////////////////////////////////////

  // useEffect(() => {

  //   getLanguages(language)

  // }, [])

  ////////////////////////////////////////////////


  //=
  let dataName = `menu_${menuTime}`
  const getClientMenu = () => {
    // dispath(showLoading())
    axios.get(`${process.env.REACT_APP_API}/clients/${link}`)
      .then(result => {
        if (result.data.success) {
          const getResault = result.data.clientMenu
          setOriginalClientMenu(getResault.menu)
          setClientMenu(getResault.menu)
          setAllMenuName(getResault.menuName)
          setChooseMenu(getResault.menuName[dataName])


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
  // console.log('Main clientMenu=> ' + Boolean(clientMenu))

  // const [favorList, setFavorList] = useState([])


  const addFavorite = (index, objFromAccord, catagory, indexM) => {
    let dataSet = objFromAccord;
    let data = dataSet[index]
    let favor = {
      key: indexM + '-' + index + '-' + data.panelCode,
      category: catagory,
      code: indexM,
      name: data['food_name'],
      price: data['price']
    }
    let newFavorList = favor
    data.favor = true
    setFavorList([...favorList, newFavorList])
  }

  const removeFavorite = (index, objFromAccord, indexM) => {
    let dataSet = objFromAccord;
    let data = dataSet[index]
    let favor = favorList.filter(item => item.key !== (indexM + '-' + index + '-' + data.panelCode))
    data.favor = false
    setFavorList(favor)

  }
  const [menuTimer, setMenuTimer] = useState('')




  const [switchManuBtn, setSwitchManuBtn] = useState(false)
  const [triggerIcon, setTriggerIcon] = useState([])

  const [switchFilterBtn, setSwitchFilterBtn] = useState(false)


  // console.log(triggerIcon)

  // console.log(clientMenu)


  //=
  const filterSerach = (filterName) => {
    const memoTime = menuTime
    let cutomerFilter = []
    originalClientMenu.forEach(el => {
      // console.log(el)

      let catagory = el.catagory
      let menuTime = el.menuTime
      let imgId = el.imgId
      let newlistMenu = []
      el.listMenu.forEach(el1 => {

        if (el1[filterName]) {
          newlistMenu.push(el1)
        }
      })
      if (newlistMenu.length === 0) return
      cutomerFilter.push({ catagory: catagory, menuTime: menuTime, imgId: imgId, listMenu: newlistMenu })

    })

    setClientMenu(cutomerFilter)
    setMenuTime(0)
    setTimeout(() => {
      setMenuTime(memoTime)
    }, 2);
  }
  const [iconFilter, setIconFilter] = useState('food_name')



  console.log(clientMenu)

  useEffect(() => {
    getClientMenu()
    // timeSwitcher()
  }, [])

  // categoryList.filter((el) => el.menuTime == menuTime)


  const navIcon = {
    filter: 'filter.svg', dropDown: 'down-chevron.svg', dropUp: 'up-chevron.svg',
    cancel: 'cancel.svg',vegetarian: 'vegetarian.svg',vegan: 'vegan.svg',glutenfree: 'glutenfree.svg',halal: 'halal.svg',
  }



  return (


    <div className='mobileViewport'>

      <div className='testpos relative max-w-lg'>

        <nav className="navBarC">
          <div className=" mx-auto">
            <div className="navFlexLogoandName">
              <div className="navSlit">
                <img className="block h-6 w-auto" src={logo} alt="Your Company" />
              </div>

              <div className=" navSlit navNameAndFilter">

                <div onClick={() => { setSwitchManuBtn(!switchManuBtn) }} className="flexNavMenuName">
                  <div className=" menuNameNavBox navMenuNameText">
                    <div className='navMenuNameText-top'>{chooseMenu}</div>

                    <div className={`navMenuNameText-Ab ${!switchManuBtn && 'navMenuNameText-move'}`}>
                      <div onClick={() => {
                        setChooseMenu(allMenuName.menu_1)
                        setMenuTime(1)
                      }} className={` ${chooseMenu === allMenuName.menu_1 && 'displayNone'} navMenuNameText-tab`}>{allMenuName.menu_1}</div>
                      <div onClick={() => {
                        setChooseMenu(allMenuName.menu_2)
                        setMenuTime(2)
                      }} className={` ${chooseMenu === allMenuName.menu_2 && 'displayNone'} navMenuNameText-tab`}>{allMenuName.menu_2}</div>
                      <div onClick={() => {
                        setChooseMenu(allMenuName.menu_3)
                        setMenuTime(3)
                      }} className={` ${chooseMenu === allMenuName.menu_3 && 'displayNone'} navMenuNameText-tab`}>{allMenuName.menu_3}</div>
                    </div>
                  </div>
                  {switchManuBtn ? <img src={require(`../all-icon/footbar-icon/${navIcon.dropUp}`)} alt="" srcSet="" />
                    : <img src={require(`../all-icon/footbar-icon/${navIcon.dropDown}`)} alt="" srcSet="" />}
                </div>


                <div onClick={() => { setSwitchFilterBtn(!switchFilterBtn) }} className="filterBtn">

                  <div className="navFilterNameText ">
                    <div className='filterBtn-main'>

                      {iconFilter === "food_name" && <img src={require(`../all-icon/footbar-icon/${navIcon.filter}`)} alt="" srcSet="" />}
                      {iconFilter === "vetgeterian" && <img src={require(`../all-icon/footbar-icon/${navIcon.vegetarian}`)} alt="" srcSet="" />}
                      {iconFilter === "vegan" && <img src={require(`../all-icon/footbar-icon/${navIcon.vegan}`)} alt="" srcSet="" />}
                      {iconFilter === "gluten_free" && <img src={require(`../all-icon/footbar-icon/${navIcon.glutenfree}`)} alt="" srcSet="" />}
                      {iconFilter === "halal" && <img src={require(`../all-icon/footbar-icon/${navIcon.halal}`)} alt="" srcSet="" />}



                    </div>

                    {/* <button onClick={() => filterSerach('food_name')} type="button" className="filterBtn" aria-controls="" aria-expanded="false">
                  <img src={require(`../all-icon/footbar-icon/${navIcon.dropDown}`)} alt="" srcSet="" />
                  www
                </button> */}
                    <div className={`filterBtn-Ab ${!switchFilterBtn && 'filterBtn-move'}`}>
                      <div onClick={() => {
                        filterSerach('vetgeterian')
                        setIconFilter('vetgeterian')
                      }} className={` filterBtn-tab`}>Vegetarian</div>

                      <div onClick={() => {
                        filterSerach('vegan')
                        setIconFilter('vegan')
                      }} className={` filterBtn-tab`}>Vegan</div>

                      <div onClick={() => {
                        filterSerach('gluten_free')
                        setIconFilter('gluten_free')
                      }} className={` filterBtn-tab`}>Gluten-Free</div>

                      <div onClick={() => {
                        filterSerach('halal')
                        setIconFilter('halal')

                      }} className={` filterBtn-tab`}>Halal</div>

                      <div onClick={() => {
                        filterSerach('food_name')
                        setIconFilter('food_name')

                      }} className={` filterBtn-tab`}><img src={require(`../all-icon/footbar-icon/${navIcon.cancel}`)} alt="" srcSet="" />Clear filter</div>


                    </div>
                  </div>
                </div>

                {/* <button onClick={() => filterSerach('vegan')} type="button" className="filterBtn" aria-controls="" aria-expanded="false">
                  <img src={require(`../all-icon/footbar-icon/${navIcon.filter}`)} alt="" srcSet="" />
                </button> */}

                {/* <button onClick={() => filterSerach('vetgeterian')} type="button" className="filterBtn" aria-controls="" aria-expanded="false">
                  <img src={require(`../all-icon/footbar-icon/${navIcon.dropUp}`)} alt="" srcSet="" />
                </button> */}

              </div>
            </div>
          </div>
        </nav>
        <div onClick={() => {
          setSwitchManuBtn(false)
        }} onTouchStart={() => {
          setSwitchManuBtn(false)
        }} className={`${switchManuBtn ? 'overlayForNav' : 'displayNone'}`}></div>
        {/* == SIDE BAR == */}
        <div className="sideBarSectionC">
          < SidebarSubComp triggerIcon={triggerIcon} />
        </div>
        {/* == <BannerExample /> == */}
        <div className="bannerSectionC">
          <BannerSubCompo />
        </div>
        {/* == MENU == */}
        <CssBaseline />

        <ThemeProvider theme={theme} >

          {/* {clientMenu.filter((el) => el.menuTime === menuTime).map((el, index) => (

            <AcordionSubComp
              listMunu={el}
              indexM={index}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              triggerIcon={triggerIcon}
              setTriggerIcon={setTriggerIcon}
              key={index}

            />

          ))} */}
          {menuTime === 1 && clientMenu.filter((el) => el.menuTime === 1).map((el, index) => (

            <AcordionSubComp
              listMunu={el}
              indexM={index}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              triggerIcon={triggerIcon}
              setTriggerIcon={setTriggerIcon}
              key={index}

            />

          ))}
          {menuTime === 2 && clientMenu.filter((el) => el.menuTime === 2).map((el, index) => (

            <AcordionSubComp
              listMunu={el}
              indexM={index}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              triggerIcon={triggerIcon}
              setTriggerIcon={setTriggerIcon}
              key={index}

            />

          ))}
          {menuTime === 3 && clientMenu.filter((el) => el.menuTime === 3).map((el, index) => (

            <AcordionSubComp
              listMunu={el}
              indexM={index}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              triggerIcon={triggerIcon}
              setTriggerIcon={setTriggerIcon}
              key={index}

            />

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

        {/* <div className="footerSpace"></div> */}
        <div className="">
          <FooterComponent favorList={favorList} />
        </div>

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
      <div className="test">
        dfddgs
      </div>
    </div >

  )
}

export default _MenuComponent



