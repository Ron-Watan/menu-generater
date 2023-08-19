

import 'remixicon/fonts/remixicon.css'
import { useRef, useState } from 'react';
import app_icon from '../../all-icon-client/_00app_icon.svg';
import MBiconClose from '../../all-icon/button-icon/MBclose.svg'





// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Roboto Slab',
//       'roboto slab',
//     ].join(','),
//   },
// });



const FooterComponent = (prop) => {


  const [activeLang, setActiveLang] = useState(false)


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




  const ref = useRef()
  const countFeedBack = ref.current?.value.length

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
        style={{ 'backgroundColor': `${prop.navAndFootBar.navBarColor}` }}>
        <div className="footBarGrid3">

          <div onClick={() => switcher('languageTab')} className={`footBarGrid3_1`}>

            <div className={`footBarGrid3_1-1`}>
              <i className="x">!Theme Nav BG Color 2/3</i>
              {prop.onOffSetting.langIcon && <button className='footbatBtnLang'

                style={{

                  'backgroundColor': `${prop.navAndFootBar.navBarColor}`
                }}>
                <span className={`langCode`}
                  style={{
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                    'color': `${prop.navAndFootBar.navBarFontColor}`,
                  }}>
                  {prop.language === 1 ? prop.languageSetup.code_1 : prop.languageSetup.code_2}
                </span>
                {/* //- */}
                <div className="iconFbarBox">
                  <svg className='' fill={prop.navAndFootBar.navBarFontColor}>
                    <use xlinkHref={`${app_icon}#app_lang`} />
                  </svg>



                </div>

              </button>}
              <i className="x">!Theme Nav BG Color 3/3</i>

              {(prop.onOffSetting.langIcon && prop.language === 1)
                && <button value='2' onClick={switcherlng('secondNoUse')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText ${!prop.languageSetup.onLanguage_2 && 'displayNone'} `}
                  style={{
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                    'backgroundColor': `${prop.navAndFootBar.navBarColor}`, 'color': `${prop.navAndFootBar.navBarFontColor}`
                  }}>
                  {prop.languageSetup.language_2}
                </button>}
              {(prop.onOffSetting.langIcon && prop.language === 2)
                && <button value='1' onClick={switcherlng('firstNoUse')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}
                  style={{
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                    'backgroundColor': `${prop.navAndFootBar.navBarColor}`, 'color': `${prop.navAndFootBar.navBarFontColor}`
                  }}>
                  {prop.languageSetup.language_1}
                </button>}

            </div>

          </div>
          {/* //- */}
          {prop.onOffSetting.favoritHeart && <button onClick={() => switcher('listTab')} className="footBarGrid3_2 ">
            <div className={`footbatBtnList `}>
              <div className="iconFbarBox">
                <svg className='' fill={prop.navAndFootBar.navBarFontColor}>
                  <use xlinkHref={`${app_icon}#app_list`} />
                </svg>


              </div>
              {/* <svg width="72" height="23" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.3726 28.9975C70.3726 26.1872 68.3031 23.9091 65.7501 23.9091H5.62249C3.06952 23.9091 1 26.1872 1 28.9975V29.0025C1 31.8128 3.06952 34.0909 5.62249 34.0909H65.7501C68.3031 34.0909 70.3726 31.8128 70.3726 29.0025V28.9975Z" stroke={prop.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70.3726 6.08832C70.3726 3.27807 68.3031 0.999995 65.7501 0.999995H5.62249C3.06952 0.999995 1 3.27807 1 6.08832V6.09339C1 8.90364 3.06952 11.1817 5.62249 11.1817H65.7501C68.3031 11.1817 70.3726 8.90364 70.3726 6.09339V6.08832Z" stroke={prop.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M70.3726 51.9066C70.3726 49.0964 68.3031 46.8183 65.7501 46.8183H5.62249C3.06952 46.8183 1 49.0964 1 51.9066V51.9117C1 54.7219 3.06952 57 5.62249 57H65.7501C68.3031 57 70.3726 54.7219 70.3726 51.9117V51.9066Z" stroke={prop.navAndFootBar.navBarFontColor} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}


              <span className={` itemFavorListShow ${!itemFavor && 'displayNone'}`}>{itemFavor}</span>

            </div>

          </button>}


          {prop.onOffSetting.feedBack && <div onClick={() => switcher('commentTab')} className="footBarGrid3_3 ">

            <button className={`footbatBtnCommentt`}>
              <div className="iconFbarBox">
                <svg className='' fill={prop.navAndFootBar.navBarFontColor} >
                  <use xlinkHref={`${app_icon}#app_feed`} />
                </svg>
              </div>



            </button>

          </div>}

        </div>

      </nav>


      <div className="fixed top-full popupListBar">


        {/* Slide Tab 1*/}
        <span onClick={() => switcher('languageTab')} className={`${activeLang ? 'popupLangUp' : 'popupLang'}  popupLangText`}>
        </span>

        {/*//- FAVORITE LIST */}
        <span onClick={() => switcher('listTab')} className={`popupList ${listTab && 'popupListUp'} popupListText`}
          style={{
            'backgroundColor': `${prop.bodyStyle.bodyBgColor}`,
            'color': `${prop.bodyStyle.bodyFonttColor}`,
            'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
          }}

        >
          {/* //infoFavorList */}
          <div className="itemList">{`${itemFavor} Item(s)`}</div>
          <div className="overflow ">
            {/* Not Available in simulation mode. */}
            {reformModel.map((catelog, index) => {
              return (
                <div className="" key={index}><div className="favCatList">{catelog.category}</div>
                  {catelog.list.map((el,index2) => {
                    return (
                      <ul className="line" key={index2} >
                        <li className="gridFavList">
                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <p className="favorListtext">{el.name}</p>
                            </div>
                          </div>

                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                            </div>
                          </div>

                        </li>
                      </ul>
                    )
                  })}

                </div>
              )

            })}

          </div>

        </span>





        {/* Slide Tab 3*/}
        <span className={`popupList coment ${commentTab && 'popupListUp coment'} popupListText`}
          style={{
            'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
            'backgroundColor': `${prop.bodyStyle.bodyBgColor}`,
            'color': `${prop.bodyStyle.bodyFonttColor}`
          }}
        >
          <div className="GruopBtn headCommentBtn">
            <button onClick={() => switcher('overlay')}
              className="headCommentBtn_size">
              <img src={MBiconClose} alt="" />
            </button>
            <span className='headCommentBtn_font'>Close</span>

          </div>
          <div className="col-span-full">
            <div className="headComment">
              <label htmlFor="" className="block text-m font-medium leading-6 ">Comments or Suggestions for us:</label>
            </div>
            <div className="mt-2">
              <textarea onChange={prop.feedBackSMSFn} value={prop.feedBackSMS.message} id="comment" name="comment" rows="6" className=" t666 block w-full rounded-md  py-1.5 shadow-sm  sm:text-sm sm:leading-6"
                style={{ 'backgroundColor': `${prop.bodyStyle.bodyBgColor}` }} maxLength="250"
                ref={ref}
              ></textarea>
            </div>
            <div className="countFeedBack"><span>Messages will be direct to the owner/manager only. </span><span>{countFeedBack}/250</span></div>
            {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
          </div>

          <div className="starReview">
            {starBtn.map((el, index) => (
              <svg onClick={(e) => {
                addStar(index)
              }} key={index} xmlns="http://www.w3.org/2000/svg" fill={el} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-9 h-9 star">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

            ))}

          </div>
          <div className="fbClientBtnBox">
            <button onClick={() => {
              prop.sentfeedBack()
              switcher('overlay')
              setStarBtn(['none', 'none', 'none', 'none', 'none'])
            }} className='fbClientBtn'>Send</button>
          </div>
        </span>

        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')} className={(languageTab) ? 'overlay transparent' : ''}></span>
        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')} className={(listTab || commentTab) ? 'overlay blackOpacity' : ''}></span>
      </div >



    </div >

  )
}

export default FooterComponent



