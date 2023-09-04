import React, { useState } from 'react'

import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'
import MBupdown from '../all-icon/button-icon/updown.svg'
import MBLang from '../all-icon/button-icon/setLang.svg'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
const _04MenuForm = (prop) => {



  // prop.categoryList_1
  // prop.categoryList_2
  // prop.categoryList_3
  // pre-set-Menu
  const [visibleRA, setVisbleRA] = useState(false)

  const [changeRA, setChangeRA] = useState(false)

  const [chooseRAindex, setChooseRAindex] = useState('')
  const [chooseRAindexUp, setChooseRAindexUp] = useState('')
  const [chooseRAindexDown, setChooseRAindexDown] = useState('')

  function arrayMmove(arr, old_index, new_index, propSetCatList) {
    setChangeRA(true)

    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);


    if (old_index - new_index > 0) {
      setChooseRAindex(chooseRAindex - 1)
      setTimeout(() => {
        propSetCatList(newData)
        setChooseRAindex(new_index)
        setChooseRAindexUp(new_index)
      }, 200);
      setTimeout(() => {
        setChooseRAindex('')
        setChooseRAindexUp('')
      }, 700);

    }
    else {
      setChooseRAindex(chooseRAindex + 1)
      setTimeout(() => {
        propSetCatList(newData)
        setChooseRAindex(new_index)
        setChooseRAindexDown(new_index)
      }, 200);
      setTimeout(() => {
        setChooseRAindex('')
        setChooseRAindexDown('')
      }, 700);
    }
  };




  const checkFormListChangeFn = () => {
    setVisbleRA(false)
    if (changeRA || prop.checkChangeName) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {

          if (changeRA) {
            prop.saveReArangeList()
            setChangeRA(false)
          }
          if (prop.checkChangeName) {
            prop.saveNameMenu()
            prop.setCheckChangeName(false)
          }
          setTimeout(() => {
            prop.setOnoffMenu1_MB(false)
            prop.setOnoffMenu2_MB(false)
            prop.setOnoffMenu3_MB(false)
            prop.setTurnOnSection(false)
          }, 1000);


        } else if (result.isDenied) {
          setChangeRA(false)
          prop.setCheckChangeName(false)
          prop.setOnoffMenu1_MB(false)
          prop.setOnoffMenu2_MB(false)
          prop.setOnoffMenu3_MB(false)
          prop.setTurnOnSection(false)
          prop.getAllMenu()
        }
      })
    } else {
      prop.setOnoffMenu1_MB(false)
      prop.setOnoffMenu2_MB(false)
      prop.setOnoffMenu3_MB(false)
      prop.setTurnOnSection(false)
    }

  }

  const openFormSave = () => {
    setVisbleRA(false)
    if (changeRA || prop.checkChangeName) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {

          if (changeRA) {
            prop.saveReArangeList()
            setChangeRA(false)
          }
          if (prop.checkChangeName) {
            prop.saveNameMenu()
            prop.setCheckChangeName(false)
          }
          setTimeout(() => {
            prop.openForm()
          }, 1000);


        } else if (result.isDenied) {
          setChangeRA(false)
          prop.setCheckChangeName(false)
          prop.openForm()
          prop.getAllMenu()
        }
      })
    } else {
      prop.openForm()
    }

  }

  const saveFormListChangeFn = () => {
    setVisbleRA(false)
    if (changeRA) {
      prop.saveReArangeList()
      setChangeRA(false)
    }
    if (prop.checkChangeName) {
      prop.saveNameMenu()
      prop.setCheckChangeName(false)
    }
    Swal.fire({
      title: 'Saved',
      toast: true,
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
    }).then(result => {

    });
  }


  return (
    <div className="MC_Standard_0_FullPage " >

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">

          <Link to=""
            onClick={() => {
              checkFormListChangeFn()
             
            }}

            className="MB_Btn MB_Btn_Border"

          ><img src={MBiconClose} alt="" /></Link>

          <span className='MB_textBtn'>Close</span>
        </div>

        <div className={`MB_flexStartBtn`}>
          <input onChange={prop.inputMenuTimeName} value={prop.menuName[prop.currentMenuName]} type='text' maxLength="20"
            className={`MB_EditName_Input text_center`} placeholder='' />


        </div>

        <div className="GruopBtn">
          <a href='#topForm' onClick={() => {
            openFormSave()
          }} type='button' form='foodForm' className={`MB_Btn MB_Btn_Color`}>
            <img src={MBiconPlus} alt="" />
          </a>
          <span className='MB_textBtn'>Add Category</span>
        </div>

      </div>


      <div className="MB_Standard_0_FullAgain  MB_SetGrid_Full zindexUnderTop ">

        {/* <div onTouchMove={reloadAllMenu}  className="MB_Standard_Section_canScroll MB_Make_PadingBanner paddingBottom_9 overScroll_none" > */}

        <div className={`${prop.turnOnSection === true && 'MB_Standard_Section_canScroll'} MB_Make_PadingFormList `}>


          <div className="MB_categoryStart">
            {/* <div className="postionSettingIcon">

              <button onClick={() => { setVisbleRA(!visibleRA) }} className={`smallUpDown ${visibleRA && 'upDownHover'}`}>
                <img src={MBupdown} alt="" />
              </button>
            </div> */}
            <i className="x">If Menu 1 //-</i>
            {prop.menuTime === 1 && prop.categoryList_1
              .map((el, index) => (
                <div className={`MB_Flex_LisrBtn `} key={index}  >
                  <div className={`MB_tabCat ${chooseRAindex === index ? 'itemLangChoose' : ''}`}>
                    <button name={el.menuId} onClick={() => {
                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat `}>
                      {index + 1}

                    </button>
                    <a href='#topForm' name={el.menuId} onClick={() => {

                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </a>
                  </div>


                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)

                    }} name={el.menuId} className={`MB_iconSideBox  MB_tabCat_L ${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA &&
                    <button onClick={() => {
                      arrayMmove(prop.categoryList_1, index, index - 1, prop.setCategoryList_1)
                      setChooseRAindex(index)
                      setChooseRAindexUp(index)
                    }} className={`smallUpDown up ${chooseRAindexUp === index ? 'itemLangChoose' : ''} ${index === 0 && 'hiddenMe'}`}>
                      <img src={MBiconDown} alt="" />
                    </button>}

                  {visibleRA && <button onClick={() => {
                    arrayMmove(prop.categoryList_1, index, index + 1, prop.setCategoryList_1)
                    setChooseRAindex(index)
                    setChooseRAindexDown(index)
                  }} className={`smallUpDown ${chooseRAindexDown === index ? 'itemLangChoose' : ''} ${index === prop.categoryList_1.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}


                </div>





              ))}


            <i className="x">If Menu 2 //-</i>
            {prop.menuTime === 2 && prop.categoryList_2
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat ${chooseRAindex === index ? 'itemLangChoose' : ''}`}>
                    <button name={el.menuId} onClick={() => {
                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat`}>
                      {index + 1}

                    </button>
                    <a href='#topForm' name={el.menuId} onClick={() => {

                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </a>
                  </div>

                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)

                    }} name={el.menuId} className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA && <button onClick={() => {
                    arrayMmove(prop.categoryList_2, index, index - 1, prop.setCategoryList_2)
                    setChooseRAindex(index)
                  }} className={`smallUpDown up ${prop.menuId === el.menuId ? '' : ''} ${index === 0 && 'hiddenMe'}     `}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                  {visibleRA && <button onClick={() => {
                    arrayMmove(prop.categoryList_2, index, index + 1, prop.setCategoryList_2)
                    setChooseRAindex(index)
                  }} className={`smallUpDown ${prop.menuId === el.menuId ? '' : ''} ${index === prop.categoryList_2.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                </div>
              ))}


            <i className="x">If Menu 3 //-</i>
            {prop.menuTime === 3 && prop.categoryList_3
              .map((el, index) => (
                <div className="MB_Flex_LisrBtn" key={index} >
                  <div className={`MB_tabCat ${chooseRAindex === index ? 'itemLangChoose' : ''}`}>
                    <button name={el.menuId} onClick={() => {

                      prop.findOneMenu(el.menuId)
                    }} className={`itemCat `}>
                      {index + 1}
                    </button>
                    <a href='#topForm' name={el.menuId} onClick={() => {

                      prop.findOneMenu(el.menuId)
                    }} className='btnCat'>
                      {el.catagory}
                    </a>
                  </div>
                  {!visibleRA && <div className='MB_FlexEarth_Remove'>
                    <i className="x">EARTH BUTTON</i>
                    <button onClick={() => {
                      prop.findOneMenu(el.menuId)
                      prop.setOnOffLangForm(true)

                    }} name={el.menuId} className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}>
                      <img src={MBLang} alt="" />
                    </button>
                  </div>}

                  {visibleRA && <button onClick={() => {
                    arrayMmove(prop.categoryList_3, index, index - 1, prop.setCategoryList_3)
                    setChooseRAindex(index)
                  }} className={`smallUpDown up ${prop.menuId === el.menuId ? '' : ''} ${index === 0 && 'hiddenMe'}     `}>
                    <img src={MBiconDown} alt="" />
                  </button>}

                  {visibleRA && <button onClick={() => {
                    arrayMmove(prop.categoryList_3, index, index + 1, prop.setCategoryList_3)
                    setChooseRAindex(index)
                  }} className={`smallUpDown ${prop.menuId === el.menuId ? '' : ''} ${index === prop.categoryList_3.length - 1 && 'hiddenMe'}`}>
                    <img src={MBiconDown} alt="" />
                  </button>}
                </div>
              ))}





          </div>




        </div>
        <div className="MB_Positon_Bottom_btn_New">




          <div className={`MB_Frid_3Btn `}>



            <button onClick={() => {
              saveFormListChangeFn()

            }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>SAVE</span>
            </button>
            {<div className="MB_G3 G-self-end">

              <button onClick={() => { setVisbleRA(!visibleRA) }} className={`smallUpDownCon ${visibleRA && 'itemLangChoose'}`}>
                <img src={MBupdown} alt="" />
              </button>
            </div>}




          </div>





        </div>

      </div>




    </div >
  )
}

export default _04MenuForm