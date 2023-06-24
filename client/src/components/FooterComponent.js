

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


  const [disPlayLang, setDisPlayLang] = useState('EN')

  const switcherlng = (name) => (even) => {
    setDisPlayLang(even.target.value)
    setActiveLang(false)
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

  ///////////////////////////////
  const [stateComment, setStateComment] = useState({
    comment: ''
  })
  const inputValue = (name) => (even) => {
    setStateComment({ ...stateComment, [name]: even.target.value })
  }

  const [squareFootBar, setSquareFootBar] = useState(false)
  const [circleFootBar, setCircleFootBareBar] = useState(true)

  const foobarIcon = { global: 'g1-w/Group 1.svg', lists: 'g1-w/Group 1.svg', comment: 'g1-w/Group 1.svg' }

  return (
    <div>

      <nav className=" fixed top-full -translate-y-full bg-C_navmain footerBar zIndex px-2">
        <div className="grid grid-cols-3 content-center">
  
          <div className={`flex items-center justify-center pt-1`}>

            <div className={`boxLangBtn ${activeLang && 'ringButton'}`}>

              <button onClick={() => switcher('languageTab')} className='px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                  stroke="#fff" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className={`langCode text-xs`}>
                  {disPlayLang}
                </span>
              </button>
              <button value='EP' onClick={switcherlng('ep')} className={`${languageTab ? 'popupLangUp1' : 'popupLang'}  popupLangText`}>
                Spanish
              </button>

              <button value='TH' onClick={switcherlng('th')} className={`${languageTab ? 'popupLangUp2' : 'popupLang'}  popupLangText`}>
                Thai
              </button>
              <button value='EN' onClick={switcherlng('en')} className={`${languageTab ? 'popupLangUp3' : 'popupLang'}  popupLangText`}>
                English
              </button>


            </div>
          </div>


          <button onClick={() => switcher('listTab')} className={`relative flex items-center justify-center  pt-1 `}>
            <div className={` px-20 ${activeList && 'ringButton'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1" stroke="white" className="w-7 h-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>

            </div>
            <span className='absolute right-16 -top-1 text-blue'>{prop.favorList.length}</span>
          </button>




          <button onClick={() => switcher('commentTab')} className={`flex items-center justify-center pt-1 `}>
            <div className={` px-4 ${activeComment && 'ringButton'}`}>

              <svg className="svgCommment" width="25" height="25" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08612 1.10833C5.12302 1.10833 6.74868 1.11712 7.78559 1.11712C7.89982 1.11712 8.01406 1.1259 
      8.12829 1.15227C8.23374 1.16984 8.33919 1.20499 8.44464 1.24893C8.5413 1.29286 8.63796 1.34559 8.73462 1.4071C8.8225 1.46861 8.91037 1.53891 8.98946 1.618C9.06854 1.69708 9.13884 1.78495 9.20035 1.87283C9.26186 1.9607 9.31459 2.05736 9.35852 2.16281C9.40246 2.25947
      9.42882 2.36492 9.45518 2.47916C9.47276 2.59339 9.49033 2.69884 9.49033 2.82186V6.25771C9.49033 6.37195 9.48155 6.48618 9.45518 6.60042C9.43761 6.71466 9.40246 6.81132 9.35852 6.91676C9.31459 7.01343 9.26186 7.11009 9.20035 7.20675C9.13884 7.29462 9.06854 7.38249
      8.98946 7.46158C8.90158 7.54067 8.81371 7.61975 8.72583 7.67248C8.63796 7.73399 8.5413 7.78671 8.44464 7.83065C8.34798 7.87459 8.24253 7.90095 8.13708 7.92731C8.03163 7.94488 7.9174 7.96246 7.79438 7.96246H6.48506C6.44112 7.96246 6.40598 7.97125 6.37083 7.98882C6.33568
      8.0064 6.30931 8.03276 6.28295 8.05912C6.1775 8.19093 6.07206 8.32274 5.95782 8.45455C5.84359 8.57757 5.72935 8.7006 5.59754 8.81483C5.47452 8.92907 5.34271 9.03452 5.2109 9.13996C5.07909 9.24541 4.93849 9.34207 4.79789 9.43873C4.66608 9.52661 4.5167 9.61448 4.36731
      9.69357C4.21793 9.77265 4.06854 9.84295 3.91916 9.91325C3.90158 9.92204 3.88401 9.92204 3.86643 9.91325C3.84007 9.89568 3.83128 9.86053 3.84007 9.83416C3.86643 9.78144 3.89279 9.7375 3.91916 9.68478C3.94552 9.64084 3.97188 9.58812 3.98946 9.53539C4.03339 9.43873 4.07733
      9.34207 4.11248 9.23662C4.15641 9.13118 4.19156 9.02573 4.22671 8.92028C4.26186 8.82362 4.29701 8.71817 4.32337 8.61272C4.35852 8.50727 4.38489 8.40183 4.41125 8.29638C4.42004 8.26123 4.42882 8.23487 4.42882 8.19972C4.42882 8.12942 4.40246 8.06791 4.34974 8.01518C4.3058
      7.97125 4.2355 7.9361 4.1652 7.9361H2.67135C2.55712 7.9361 2.44288 7.92731 2.32865 7.90095C2.2232 7.88337 2.11775 7.84822 2.02109 7.81307C1.92443 7.77792 1.82777 7.7252 1.73989 7.66369C1.64323 7.60218 1.55536 7.52309 1.46749 7.44401C1.3884 7.36492 1.3181 7.27705 1.25659
      7.18917C1.19508 7.1013 1.14235 7.00464 1.09842 6.89919C1.05448 6.80253 1.02812 6.69708 1.00176 6.58285C0.984183 6.46861 0.966608 6.36316 0.966608 6.24014V4.06967C0.966608 3.71817 0.509666 3.71817 0.439367 3.96422V6.24014C0.439367 6.38952 0.456942 6.53891 0.483304 6.67951C0.509666
      6.8201 0.553603 6.9607 0.606327 7.09251C0.659051 7.22432 0.72935 7.34734 0.808436 7.47037C0.887522 7.59339 0.984183 7.70763 1.08963 7.81307C1.19508 7.91852 1.30931 8.01518 1.43234 8.09427C1.54657 8.17336 1.67838 8.24365 1.81019 8.29638C1.942 8.3491 2.0826 8.39304 2.2232 8.4194C2.3638
      8.44576 2.51318 8.46334 2.66257 8.46334H3.74341C3.7522 8.46334 3.76098 8.46334 3.76098 8.46334C3.79613 8.47213 3.81371 8.50727 3.79613 8.54242C3.77856 8.61272 3.7522 8.67423 3.73462 8.74453C3.69947 8.84119 3.66432 8.93785 3.62917 9.03452C3.59402 9.12239 3.55009 9.21905 3.51494 9.30692C3.51494
      9.31571 3.51494 9.31571 3.51494 9.3245C3.47979 9.41237 3.43585 9.50024 3.38313 9.58812C3.3304 9.67599 3.27768 9.75508 3.20738 9.84295C3.14587 9.92204 3.06678 10.0099 2.9877 10.0978C2.90861 10.1857 2.82074 10.2647 2.72408 10.3526C2.67135 10.4053 2.64499 10.4669 2.6362 10.5372C2.6362 10.6075 2.65378
      10.669 2.7065 10.7217C2.74165 10.7568 2.78559 10.7832 2.82953 10.8008C2.87346 10.8183 2.92619 10.8183 2.97012 10.8008C3.16344 10.748 3.35677 10.6865 3.55009 10.625C3.73462 10.5635 3.91916 10.4932 4.0949 10.4141C4.27065 10.335 4.4464 10.256 4.61336 10.1681C4.78032 10.0802 4.93849 9.98355 5.09666
      9.8781C5.25483 9.78144 5.40422 9.6672 5.54482 9.55297C5.6942 9.43873 5.82601 9.31571 5.96661 9.19269C6.08084 9.08724 6.18629 8.973 6.29174 8.85877C6.39719 8.74453 6.50264 8.62151 6.5993 8.49849C6.60808 8.48091 6.62566 8.47213 6.65202 8.47213H7.79438C7.94376 8.47213 8.09315 8.45455 8.23374 8.42819C8.37434
      8.40183 8.51494 8.35789 8.64675 8.30517C8.77856 8.25244 8.90158 8.18214 9.0246 8.10306C9.14763 8.02397 9.26186 7.92731 9.36731 7.82186C9.47276 7.71641 9.56942 7.60218 9.64851 7.47915C9.72759 7.35613 9.79789 7.23311 9.85061 7.1013C9.90334 6.96949 9.94728 6.82889 9.97364 6.68829C10 6.5477 10.0176 6.39831
      10.0176 6.24893V2.80429C10.0176 2.6549 10 2.50552 9.97364 2.36492C9.94728 2.22432 9.90334 2.08372 9.85061 1.95191C9.79789 1.8201 9.72759 1.69708 9.64851 1.57406C9.56942 1.45104 9.47276 1.3368 9.36731 1.23135C9.26186 1.1259 9.14763 1.02924 9.0246 0.950157C8.91037 0.871071 8.77856 0.800772 8.64675 0.748048C8.51494
      0.695324 8.37434 0.651387 8.23374 0.625025C8.09315 0.598663 7.94376 0.581089 7.79438 0.581089C6.71353 0.581089 5.05272 0.572301 3.97188 0.572301C3.70826 0.651387 3.69069 1.10833 4.08612 1.10833ZM2.13532 3.44576C2.30228 3.49849 2.46924 3.55121 2.6362 3.60394C2.80316 3.65666 2.97012 3.71817 3.13708 3.7709C3.53251
      3.89392 3.7522 3.973 3.79613 3.98179C3.84007 3.99058 3.81371 3.81483 3.71705 3.42819L3.4007 2.22432L3.37434 2.19796L2.13532 3.44576ZM2.9174 1.73223L1.30931 0.0450605C1.25659 0.00112382 1.20387 -0.0164509 1.14235 0.0186985L0.0351494 1.09075C-0.00878735 1.14348 -0.0175747 1.20499 0.0439367 1.2665L1.67838 2.98003L2.9174
      1.73223ZM3.69947 6.4071C3.55887 6.4071 3.45343 6.30165 3.44464 6.16105C3.44464 6.02046 3.55009 5.91501 3.69069 5.90622L5.88752 5.87107L6.3884 5.83592C6.529 5.82713 6.64323 5.93258 6.65202 6.06439C6.66081 6.20499 6.55536 6.31923 6.42355 6.32801L5.92267 6.36316C5.92267 6.36316 3.91916 6.39831 3.69947 6.4071ZM4.48155
      4.84295C4.34095 4.84295 4.2355 4.72872 4.2355 4.59691C4.2355 4.45631 4.34974 4.35086 4.48155 4.35086H7.60984C7.75044 4.35086 7.85589 4.4651 7.85589 4.59691C7.85589 4.7375 7.74165 4.84295 7.60984 4.84295H4.48155ZM5.58875 3.35789C5.44815 3.35789 5.34271 3.24365 5.34271 3.11184C5.34271 2.98003 5.45694 2.8658 5.58875
      2.8658H7.60984C7.75044 2.8658 7.85589 2.98003 7.85589 3.11184C7.85589 3.25244
      7.74165 3.35789 7.60984 3.35789H5.58875Z" fill="white" />
              </svg>
            </div>
          </button>
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
        {/* <span onClick={() => switcher('languageTab')} className={`${activeLang ? 'popupLangUp' : 'popupLang'}  popupLangText`}>
        </span> */}

        {/*//- FAVORITE LIST */}
        <span onClick={() => switcher('listTab')} className={`${listTab ? 'popupListUp' : 'popupList'} popupListText`}>
          <div className="itemList">12 Items</div>
          <div className="overflow">


            {reformModel.map((catelog, index) => {
              return (
                <div className="" key={index}>{catelog.category}
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

          </div>

        </span>





        {/* Slide Tab 3*/}
        <span className={`${commentTab ? 'popupListUp' : 'popupList'} popupListText`}>

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

            {/*             
            <svg onClick={() => addStar('star1')} xmlns="http://www.w3.org/2000/svg" fill={star1} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

            <svg onClick={() => addStar('star2')} xmlns="http://www.w3.org/2000/svg" fill={star2} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg onClick={() => addStar('star3')} xmlns="http://www.w3.org/2000/svg" fill={star3} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg onClick={() => addStar('star4')} mlns="http://www.w3.org/2000/svg" fill={star4} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg onClick={() => addStar('star5')} xmlns="http://www.w3.org/2000/svg" fill={star5} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8 star">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg> */}
          </div>

        </span>


        <span onClick={() => switcher('overlay')} className={(languageTab || listTab || commentTab) ? 'overlay' : ''}></span>
      </div >



    </div >

  )
}

export default FooterComponent



