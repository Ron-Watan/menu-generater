

import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';




// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Roboto Slab',
//       'roboto slab',
//     ].join(','),
//   },
// });



const FooterComponent = (prop) => {
  // prop.favorList
  // prop.languageSetup
  // prop.setLanguage
  // prop.language
  // prop.themeSetup
  // prop.setThemeSetup

  const [activeLang, setActiveLang] = useState(false)
  const [activeList, setActiveList] = useState(false)
  const [activeComment, setActiveComment] = useState(false)


  const footerStateModel = { languageTab: false, listTab: false, commentTab: false, overlay: false }
  const [footerState, setFooterState] = useState(footerStateModel)
  const { languageTab, listTab, commentTab, overlay } = footerState


  const switcher = name => {
    const newfooterState = { ...footerStateModel }
    newfooterState[name] = !footerState[name]
    setFooterState(newfooterState)

  }

  if (languageTab || listTab || commentTab) {
    document.body.classList.add('overflow-hidden')
  }
  else if (!languageTab && !listTab && !commentTab) {
    document.body.classList.remove('overflow-hidden');
  }



  const starModel = ['none', 'none', 'none', 'none', 'none']
  const [starBtn, setStarBtn] = useState(starModel)
  let score = 0
  const addStar = (index) => {

    const updateStar = [...starBtn]
    if (index === 0 && starBtn[0] === 'red' && starBtn[1] === 'none') {
      updateStar[0] = 'none'
      score = 0
      setStarBtn(starModel)
      prop.feedBackStarFn(score)
      return
    }
    updateStar.forEach((el, i) => {
      if (i < index + 1) {
        updateStar[i] = 'red'
        score++
      }
      else {
        updateStar[i] = 'none'
      }
    })
    setStarBtn(updateStar)
    prop.feedBackStarFn(score)
  }

  // prop.setLanguage




  const switcherlng = (name) => (even) => {
    prop.setLanguage(Number(even.target.value))
    setActiveLang(false)
    switcher('languageTab')
  }




  ///// Google Translate ////////////////////////////////////////////////////////////////////////////

  // const result = prop.favorList.reduce(( category ) => category)
  // console.log(result)
  //////////////////////////////////////////////////////////////////////////////////////

  //-/// FAVORITE LISTS ////////////////////////////////////////////////////////////////////////////

  const reformModel = []

  prop.favorList.map((el, index) => {
    reformModel[el.code] = { category: el.category, list: [] }
  })
  prop.favorList.map((el, index) => {
    reformModel[el.code].list.push(el)
  })


  let sumFaverPrice = 0
  let itemFavor = 0
  reformModel.forEach(el => {
    el.list.forEach(el2 => {
      sumFaverPrice += Number(el2.price)
      itemFavor++
    })
  })
  // setSumFaverPrice(sumFaverPriceCount)
  // setItemFavor(itemFavorCount)
  ///////////////////////////////
  const [stateComment, setStateComment] = useState({
    comment: ''
  })


  const [squareFootBar, setSquareFootBar] = useState(false)
  const [circleFootBar, setCircleFootBareBar] = useState(true)

  const foobarIcon = {
    translate: 'translation.svg', list: 'list.svg', feedback: 'feedback.svg',
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }

  const [activefootbar, setActivefootbar] = useState(true)





  // const [prop.feedBackSMS.pointStar, setFeedBackSMS] = ({
  //   pointStar: '',
  //   message: ''
  // })
  // prop.feedBackSMSFn
  // prop.sentfeedBack
  return (
    <div className="unselectable">

      <i className="x">!Theme Nav BG Color 1/3</i>
      <nav className={`Max_width_32 footBarSectionC ${activefootbar ? 'showMe' : 'hiddenMe'}`}
        style={{ 'backgroundColor': `${prop.themeSetup.navAndFootBar.navBarColor}` }}
      >
        <div className="footBarGrid3">

          <div onClick={() => switcher('languageTab')} className={`footBarGrid3_1`}>

            <div className={`footBarGrid3_1-1`}>
              <i className="x">!Theme Nav BG Color 2/3</i>
              {prop.langIcon&&<button className='footbatBtnLang'

                style={{ 'backgroundColor': `${prop.themeSetup.navAndFootBar.navBarColor}` }}>
                <span className={`langCode`}
                  style={{ 'color': `${prop.themeSetup.navAndFootBar.navBarFontColor}` }}>
                  {prop.language === 1 ? prop.languageSetup.code_1 : prop.languageSetup.code_2}
                </span>
                {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.translate}`)} alt="" srcSet="" /> */}
                <svg width="56" height="25" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_52)">
                    <g mask="url(#mask0_6_52)">
                      <path d="M21.8625 30.6303H3.45058C1.99786 30.6303 0.820328 29.4526 0.820328 28V3.45059C0.820328 1.99788 1.99786 0.820344 3.45058 0.820344H28C29.4527 0.820344 30.6303 1.99788 30.6303 3.45059V21.8626" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M45.5353 25.3697H52.5494C54.0021 25.3697 55.1797 26.5474 55.1797 28V52.5494C55.1797 54.0021 54.0021 55.1796 52.5494 55.1796H28C26.5474 55.1796 25.3697 54.0021 25.3697 52.5494V28C25.3697 26.5474 26.5474 25.3697 28 25.3697H42.0284" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.8344 9.58792H23.6162" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.6789 13.091C13.038 16.1185 15.7715 20.4875 20.9859 23.6162" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.9859 9.58793C20.9859 9.58793 19.2324 18.3557 10.4647 23.6161" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.7253 9.58792V7.83442" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M34.0447 48.1656L39.9707 32.6061C40.0918 32.31 40.5109 32.3096 40.6325 32.6055L46.5047 48.1656" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M35.8928 44.2905H44.6864" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.1093 45.5353H16.6021C13.2124 45.5353 10.4647 42.7875 10.4647 39.398V34.1377" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.3556 42.905L21.8626 45.5353L18.3556 48.1656" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M35.8907 10.4647H39.3979C42.7876 10.4647 45.5353 13.2125 45.5353 16.6021V21.8623" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M37.6444 13.095L34.1374 10.4647L37.6444 7.83438" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_52">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>}
              <i className="x">!Theme Nav BG Color 3/3</i>

              {prop.language === 1
                ? <button value='2' onClick={switcherlng('secondNoUse')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText ${!prop.languageSetup.onLanguage_2 && 'displayNone'} `}
                  style={{ 'backgroundColor': `${prop.themeSetup.navAndFootBar.navBarColor}`, 'color': `${prop.themeSetup.navAndFootBar.navBarFontColor}` }}>
                  {prop.languageSetup.language_2}
                </button>
                :
                <button value='1' onClick={switcherlng('firstNoUse')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}
                  style={{ 'backgroundColor': `${prop.themeSetup.navAndFootBar.navBarColor}`, 'color': `${prop.themeSetup.navAndFootBar.navBarFontColor}` }}>
                  {prop.languageSetup.language_1}
                </button>}

            </div>

            {/* <button value='EN' onClick={switcherlng('en')} className={`${languageTab ? 'popupLangUp1' : 'popupLang'}  popupLangText`}>
              English
            </button> */}
            {/* </div> */}
          </div>

          {prop.favoritHeart && <button onClick={() => switcher('listTab')} className="footBarGrid3_2 ">
            <div className={`footbatBtnList `}>
              {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.list}`)} className="" alt="" srcSet="" /> */}
              <svg width="72" height="23" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.3726 28.9975C70.3726 26.1872 68.3031 23.9091 65.7501 23.9091H5.62249C3.06952 23.9091 1 26.1872 1 28.9975V29.0025C1 31.8128 3.06952 34.0909 5.62249 34.0909H65.7501C68.3031 34.0909 70.3726 31.8128 70.3726 29.0025V28.9975Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70.3726 6.08832C70.3726 3.27807 68.3031 0.999995 65.7501 0.999995H5.62249C3.06952 0.999995 1 3.27807 1 6.08832V6.09339C1 8.90364 3.06952 11.1817 5.62249 11.1817H65.7501C68.3031 11.1817 70.3726 8.90364 70.3726 6.09339V6.08832Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70.3726 51.9066C70.3726 49.0964 68.3031 46.8183 65.7501 46.8183H5.62249C3.06952 46.8183 1 49.0964 1 51.9066V51.9117C1 54.7219 3.06952 57 5.62249 57H65.7501C68.3031 57 70.3726 54.7219 70.3726 51.9117V51.9066Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={` itemFavorListShow ${!itemFavor && 'displayNone'}`}>{itemFavor}</span>

            </div>

          </button>}


          {prop.feedBack && <div onClick={() => switcher('commentTab')} className="footBarGrid3_3 ">

            <button className={`footbatBtnCommentt`}>
              {/* <img src={require(`../all-icon/footbar-icon/${foobarIcon.feedback}`)} alt="" srcSet="" /> */}
              <svg width="57" height="25" viewBox="0 0 57 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.627 4.13193H9.96215C5.56475 4.13193 2 8.90809 2 14.7999V27.0779C2 32.9697 5.56475 37.7458 9.96215 37.7458H47.2981L53.0126 45.8909H55.2427L55.2427 19.7915C55.2427 18.0513 53.1844 14.4569 52.6327 13.0057" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M9.30782 17.7036H28.9941" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M9.30782 25.0114H29.5664" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M53.8565 2.22101C52.2285 0.592998 49.5889 0.592998 47.9609 2.22101L31.6516 18.5143V24.4259L37.5604 24.4127L53.8565 8.11659C55.4845 6.48858 55.4845 3.84902 53.8565 2.22101Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M43.7589 6.21986L49.5962 12.0571" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M28.5752 45.7675L30.932 48.7328L34.4805 50.0578L32.3886 53.2157L32.2248 57L28.5752 55.9863L24.9256 57L24.7618 53.2157L22.6699 50.0578L26.2185 48.7328L28.5752 45.7675Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M7.9052 45.7675L10.2621 48.7328L13.8105 50.0578L11.7186 53.2157L11.5549 57L7.9052 55.9863L4.25557 57L4.0919 53.2157L2 50.0578L5.54845 48.7328L7.9052 45.7675Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
                <path d="M49.2452 45.7675L51.602 48.7328L55.1504 50.0578L53.0585 53.2157L52.8949 57L49.2452 55.9863L45.5955 57L45.4318 53.2157L43.3399 50.0578L46.8884 48.7328L49.2452 45.7675Z" stroke={prop.themeSetup.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" />
              </svg>
            </button>

          </div>}

        </div>

      </nav>

      {/* <div className=" floatLeftFootBar">

        <div className="foobarFlexC">
          <span className={`circleBarBox`}>
            <i className={`circleBarIcon circleBarSize circleBarColor`} >
              <img className={``} src={require(`../bar-icon/${foobarIcon.global}`)} alt="" />
            </i>
          </span >
          <span className={`circleBarBox`}>
            <i className={`circleBarIcon circleBarSize circleBarColor`} >
              <img className={``} src={require(`../bar-icon/${foobarIcon.global}`)} alt="" />
            </i>
          </span >

        </div>

      </div> */}





      {/* <span  className={`${activeList ? 'popupLangUp' : 'popupLang'} popupLangText`}> */}

      {/* <div className=" fixed top-full -translate-y-full popupListBar">
        <span className={`popupLangUp popupLangText`}>
        </span>
      </div> */}

      <div className=" fixed top-full -translate-y-full popupListBar">


        {/* Slide Tab 1*/}
        <span onClick={() => switcher('languageTab')} className={`${activeLang ? 'popupLangUp' : 'popupLang'}  popupLangText`}>
        </span>

        {/*//- FAVORITE LIST */}
        <span onClick={() => switcher('listTab')} className={`popupList ${listTab && 'popupListUp'} popupListText`}
          style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}`, 'color': `${prop.themeSetup.body.bodyFonttColor}` }}


        >
          <div className="itemList">{`${itemFavor} Item(s)`}</div>
          <div className="overflow">
            {reformModel.map((catelog, index) => {
              return (
                <div className="" key={index}><div className="favCatList">{catelog.category}</div>
                  {catelog.list.map(el => {
                    return (
                      <ul className="line" key={index} >
                        <li className="gridFavList">
                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">{el.name}</p>
                            </div>
                          </div>

                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">{el.price}</p>
                            </div>
                          </div>

                        </li>
                      </ul>
                    )
                  })}

                </div>
              )

            })}

            <li className="gridFavList">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Total</p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{sumFaverPrice}</p>
                </div>
              </div>

            </li>


          </div>

        </span>





        {/* Slide Tab 3*/}
        <span className={`popupList coment ${commentTab && 'popupListUp coment'} popupListText`}
          style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}`, 'color': `${prop.themeSetup.body.bodyFonttColor}` }}
        >

          <div className="col-span-full">
            <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">Comments or Suggestions for us:</label>
            <div className="mt-2">
              <textarea onChange={prop.feedBackSMSFn} id="comment" name="comment" rows="6" className=" t666 block w-full rounded-md  py-1.5 shadow-sm  sm:text-sm sm:leading-6"
                style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}` }}

              ></textarea>
            </div>
            {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
          </div>

          <div className="starReview">
            {starBtn.map((el, index) => (
              <svg onClick={(e) => {
                addStar(index)
              }} key={index} xmlns="http://www.w3.org/2000/svg" fill={el} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

            ))}

          </div>
          <button onClick={prop.sentfeedBack}>Send</button>
        </span>

        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')} className={(languageTab) ? 'overlay transparent' : ''}></span>
        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')} className={(listTab || commentTab) ? 'overlay blackOpacity' : ''}></span>
      </div >



    </div >

  )
}

export default FooterComponent



