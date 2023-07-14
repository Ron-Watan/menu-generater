import React, { useState } from 'react'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import { useSelector } from 'react-redux'

const _04MenuForm = (prop) => {
  const { user } = useSelector((state) => state.user);

  const cancelEdit = () => {
    const menuNameEl = document.querySelector('#menuName')
    menuNameEl.value = user[prop.currentMenuName]
  }
  // prop.categoryList_1
  // prop.categoryList_2
  // prop.categoryList_3





  // pre-set-Menu

  function arrayMmove(arr, old_index, new_index, propSetCatList) {
    setChangeRA(true)

    // setLoadingManual(true)
    // if (new_index >= arr.length) {
    //   var k = new_index - arr.length + 1;
    //   while (k--) {
    //     arr.push(undefined);
    //   }
    // }

    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);
    propSetCatList(newData)
  };



  const [changeRA, setChangeRA] = useState(false)

  const checkReArange = () => {
    if (!changeRA) return
    prop.saveReArangeList()
    setChangeRA(false)
  }







  return (
    <div className="MC_Standard_0_FullPage">

      <div className="topBar_function ">
        <div className="GruopBtn">
          <button onClick={() => {
            prop.setOnoffMenu1_MB(false)
            prop.setOnoffMenu2_MB(false)
            prop.setOnoffMenu3_MB(false)
            checkReArange()
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className={`MB_flexStartBtn`}>
          <input onChange={prop.inputMenuTimeName} value={prop.menuName[prop.currentMenuName]} type='text' maxLength="20"
            name='' id='menuName' autoComplete='off' className={`MB_EditName_Input text_center`} placeholder='' />

          {prop.menuNameChange && <div className={`MB_flex2Btn`}
            name='menuNameBox'>

            <div className="smallCircleBox">
              <button onClick={() => {
                prop.saveNameMenu()
                prop.setMenuNameChange(false)

              }
              } name='menuNameBox'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" className="w-5 h-5 iconEDName_SC">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </button>
            </div>


            <div className="smallCircleBox">
              <button onClick={() => {
                cancelEdit()
                prop.setMenuNameChange(false)


              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" className="w-5 h-5 iconEDName_SC">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>

          </div>}


        </div>

        <div className="GruopBtn">
          <button onClick={() => {
            prop.openForm()
            checkReArange()
          }} type='button' form='foodForm' className={`MB_Btn MB_Btn_Color`}>
            <img src={MBiconPlus} alt="" />
          </button>
          <span className='MB_textBtn'>Add Category</span>
        </div>

      </div>


      <div className="MB_Standard_0_FullAgain  MB_SetGrid_Full zindexUnderTop">


        <div className="MB_Standard_Section_canScroll MB_Make_PadingBanner paddingBottom_9 overScroll_none" >


          <div className="MB_categoryStart">

            <i className="x">If Menu 1 //-</i>
            {prop.menuTime === 1 && prop.categoryList_1
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat `}>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </button>
                  </div>
                  <button onClick={() => { arrayMmove(prop.categoryList_1, index, index - 1, prop.setCategoryList_1) }} >UPPPP</button>
                  <button onClick={() => { arrayMmove(prop.categoryList_1, index, index + 1, prop.setCategoryList_1) }} >Doddw</button>
                  <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <svg fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}


            <i className="x">If Menu 2 //-</i>
            {prop.menuTime === 2 && prop.categoryList_2
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat `}>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </button>
                  </div>
                  <button onClick={() => { arrayMmove(prop.categoryList_2, index, index - 1, prop.setCategoryList_2) }} >UPPPP</button>
                  <button onClick={() => { arrayMmove(prop.categoryList_2, index, index + 1, prop.setCategoryList_2) }} >Doddw</button>
                  <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <svg fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}


            <i className="x">If Menu 3 //-</i>
            {prop.menuTime === 3 && prop.categoryList_3
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat `}>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>
                    <button name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </button>
                  </div>
                  <button onClick={() => { arrayMmove(prop.categoryList_3, index, index - 1, prop.setCategoryList_3) }} >UPPPP</button>
                  <button onClick={() => { arrayMmove(prop.categoryList_3, index, index + 1, prop.setCategoryList_3) }} >Doddw</button>
                  <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <svg fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}













            {/* {prop.categoryList
              .filter((el) => el.menuTime == prop.menuTime)
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat `}>
                    <button name={el.menuId} onClick={() => prop.findOneMenu(el.menuId)} className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>
                    <button name={el.menuId} onClick={() => prop.findOneMenu(el.menuId)} className='btnCat'>
                      {el.catagory}
                    </button>
                  </div>
                  <button onClick={() => { arrayMmove(prop.categoryList, index, index - 1) }} >UPPPP</button>
                  <button onClick={() => { arrayMmove(prop.categoryList, index, index + 1) }} >Doddw</button>
                  <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <svg fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))} */}
          </div>




        </div>


      </div>




    </div>
  )
}

export default _04MenuForm