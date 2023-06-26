

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
    console.log(score)
  }

  // prop.setLanguage

  console.log(prop.languageSetup.code_1)
  let sample = {
    "onLanguage_2": true,
    "language_1": "English",
    "code_1": "EN",
    "symbol_1": "$",
    "style_1": false,
    "followed_1": true,
    "language_2": "",
    "code_2": "",
    "symbol_2": "",
    "style_2": true,
    "followed_2": true
  }

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

  ///////////////////////////////
  const [stateComment, setStateComment] = useState({
    comment: ''
  })
  const inputValue = (name) => (even) => {
    setStateComment({ ...stateComment, [name]: even.target.value })
  }

  const [squareFootBar, setSquareFootBar] = useState(false)
  const [circleFootBar, setCircleFootBareBar] = useState(true)

  const foobarIcon = {
    translate: 'translation.svg', list: 'list.svg', feedback: 'feedback.svg',
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }

  const [activefootbar, setActivefootbar] = useState(true)





  return (
    <div className="unselectable">

      <nav className={`max-w-lg footBarSectionC ${activefootbar ? 'showMe' : 'hiddenMe'}`}>
        <div className="footBarGrid3">

          <div onClick={() => switcher('languageTab')} className={`footBarGrid3_1 `}>

            <div className={`footBarGrid3_1-1`}>

              <button  className='footbatBtnLang'>
                <span className={`langCode`}>
                  {prop.language === 1 ? prop.languageSetup.code_1 : prop.languageSetup.code_2}
                </span>
                <img src={require(`../all-icon/footbar-icon/${foobarIcon.translate}`)} alt="" srcSet="" />

              </button>

              {prop.language === 1
                ? <button value='2' onClick={switcherlng('ep')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}>
                  {prop.languageSetup.language_2}
                </button>
                :
                <button value='1' onClick={switcherlng('en')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}>
                  {prop.languageSetup.language_1}
                </button>}

              {/* <button value='2' onClick={switcherlng('ep')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}>
                {prop.languageSetup.language_2}
              </button>

              <button value='1' onClick={switcherlng('en')} className={`popupLang ${languageTab && 'popupLangUp1'}  popupLangText`}>
                {prop.languageSetup.language_1}
              </button> */}

            </div>

            {/* <button value='EN' onClick={switcherlng('en')} className={`${languageTab ? 'popupLangUp1' : 'popupLang'}  popupLangText`}>
              English
            </button> */}
            {/* </div> */}
          </div>

          <button onClick={() => switcher('listTab')} className="footBarGrid3_2 ">
            <div className={`footbatBtnList `}>
              <img src={require(`../all-icon/footbar-icon/${foobarIcon.list}`)} className=""alt="" srcSet="" />
              <span className={` itemFavorListShow ${!itemFavor && 'displayNone'}`}>{itemFavor}</span>

            </div>

          </button>


          <div  onClick={() => switcher('commentTab')} className="footBarGrid3_3 ">

            <button className={`footbatBtnCommentt`}>
              <img src={require(`../all-icon/footbar-icon/${foobarIcon.feedback}`)} alt="" srcSet="" />

            </button>

          </div>
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
        <span onClick={() => switcher('listTab')} className={`popupList ${listTab && 'popupListUp'} popupListText`}>
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
        <span className={`popupList coment ${commentTab && 'popupListUp coment'} popupListText`}>

          <div className="col-span-full">
            <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div className="mt-2">
              <textarea onChange={inputValue('comment')} value={stateComment.comment} id="comment" name="comment" rows="6" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div className="starReview">
            {starBtn.map((el, index) => (
              <svg onClick={() => addStar(index)} key={index} xmlns="http://www.w3.org/2000/svg" fill={el} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

            ))}

          </div>

        </span>

        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')} className={(languageTab) ? 'overlay transparent' : ''}></span>
        <span onClick={() => switcher('overlay')} onTouchStart={() => switcher('overlay')}  className={(listTab || commentTab) ? 'overlay blackOpacity' : ''}></span>
      </div >



    </div >

  )
}

export default FooterComponent



