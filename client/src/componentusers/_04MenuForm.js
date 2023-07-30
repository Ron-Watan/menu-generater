import React, { useState } from 'react'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'
import MBupdown from '../all-icon/button-icon/updown.svg'
import MBLang from '../all-icon/button-icon/lang.svg'

import { useSelector } from 'react-redux'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
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



  const checkChangeNameFn = () => {
    if (!prop.checkChangeName) return
    prop.saveNameMenu()
    prop.setCheckChangeName(false)
  }


  const [changeRA, setChangeRA] = useState(false)

  const checkReArange = () => {
    if (!changeRA) return
    prop.saveReArangeList()
    setChangeRA(false)
  }

  const [visibleRA, setVisbleRA] = useState(false)

  // let point = []
  const [hold, setHold] = useState(true)
  const reloadAllMenu = (event) => {
    // let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    console.log(y)
    // point.push(y)
    // console.log(point)
    if (y > 10 && hold) {
      prop.getAllMenu()
      setHold(false)
      setTimeout(() => {
        setHold(true)
      }, 1000);
    }
  }


  return (
    <div className="MC_Standard_0_FullPage " >
      <div className={`${prop.loadingManual ? 'showMe' : 'hiddenMe'} photoLoading`}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>
      <div className="topBar_function ">
        <div className="GruopBtn">
          <button onClick={() => {
            prop.setOnoffMenu1_MB(false)
            prop.setOnoffMenu2_MB(false)
            prop.setOnoffMenu3_MB(false)
            checkReArange()
            checkChangeNameFn()
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className={`MB_flexStartBtn`}>
          <input onChange={prop.inputMenuTimeName} value={prop.menuName[prop.currentMenuName]} type='text' maxLength="20"
            className={`MB_EditName_Input text_center`} placeholder='' />


        </div>

        <div className="GruopBtn">
          <a onClick={() => {
            // prop.setNewForm(true)
            prop.openForm()

            checkReArange()
          }} href='#topForm' type='button' form='foodForm' className={`MB_Btn MB_Btn_Color`}>
            <img src={MBiconPlus} alt="" />
          </a>
          <span className='MB_textBtn'>Add Category</span>
        </div>

      </div>


      <div className="MB_Standard_0_FullAgain  MB_SetGrid_Full zindexUnderTop">


        <div onTouchMove={reloadAllMenu}  className="MB_Standard_Section_canScroll MB_Make_PadingBanner paddingBottom_9 overScroll_none" >


          <div className="MB_categoryStart">
            <div className="postionSettingIcon">
              <button onClick={() => { setVisbleRA(!visibleRA) }} type='submit' className={`smallUpDown ${visibleRA && 'upDownHover'}`}>
                <img src={MBupdown} alt="" />
              </button>
            </div>
            <i className="x">If Menu 1 //-</i>
            {prop.menuTime === 1 && prop.categoryList_1
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat `}>
                    <a name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} href='#topForm' className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </a>
                    <a name={el.menuId} onClick={() => {
                      checkReArange()
                      prop.findOneMenu(el.menuId)
                    }} href='#topForm' className='btnCat'>
                      {el.catagory}
                    </a>
                  </div>


                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_1, index, index - 1, prop.setCategoryList_1) }} type='submit' className={`smallUpDown up ${prop.menuId === el.menuId ? '' : ''} ${index === 0 && 'hiddenMe'}     `}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_1, index, index + 1, prop.setCategoryList_1) }} type='submit' className={`smallUpDown ${prop.menuId === el.menuId ? '' : ''} ${index === prop.categoryList_1.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}


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

                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_2, index, index - 1, prop.setCategoryList_2) }} type='submit' className={`smallUpDown up ${prop.menuId === el.menuId ? '' : ''} ${index === 0 && 'hiddenMe'}     `}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_2, index, index + 1, prop.setCategoryList_2) }} type='submit' className={`smallUpDown ${prop.menuId === el.menuId ? '' : ''} ${index === prop.categoryList_2.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}

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
                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)
                      checkReArange()
                    }} name={el.menuId} type='submit' className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_3, index, index - 1, prop.setCategoryList_3) }} type='submit' className={`smallUpDown up ${prop.menuId === el.menuId ? '' : ''} ${index === 0 && 'hiddenMe'}     `}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                  {visibleRA && <button onClick={() => { arrayMmove(prop.categoryList_3, index, index + 1, prop.setCategoryList_3) }} type='submit' className={`smallUpDown ${prop.menuId === el.menuId ? '' : ''} ${index === prop.categoryList_3.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}
                </div>
              ))}

 



          </div>




        </div>


      </div>




    </div >
  )
}

export default _04MenuForm