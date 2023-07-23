import React, { useRef, forwardRef, useState } from 'react'
import { BsSquare, BsCheckSquare, BsCheckCircle, BsCircle, BsFill0CircleFill } from 'react-icons/bs';
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import SwipeToDelete from 'react-swipe-to-delete-ios'
import MBiconBack from '../all-icon/button-icon/MBback.svg'
import MBaddIcon from '../all-icon/button-icon/addIcon.svg'
import MBerroricon from '../all-icon/button-icon/error.svg'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';



const _04MobileFormFood = forwardRef((prop, ref) => {

  const modules = {
    toolbar: [
      ['bold', 'underline', { 'list': 'ordered' }, { 'list': 'bullet' }, 'clean']
    ]
  }
  // Show Error
  const ErrorFn = (index, name, bol) => {
    let dataSet = [...prop.listMenu];
    let data = dataSet[index];
    data[name] = bol
    prop.setListMenu(dataSet);
  }

  const ErrorCatFn = () => {
    prop.setState({ ...prop.state, ['errCategory']: false });
  };

  // All Validation
  const validation = (saveSubmitFn) => {
    let category = true
    if (!prop.state.catagory) {
      category = false
      prop.setState({ ...prop.state, ['errCategory']: true });

    }

    let foodname = true
    let price = true
    prop.listMenu.forEach((el, index) => {
      if (!el.food_name) {
        foodname = false
        ErrorFn(index, 'errFoodname', true)
      }
      if (isNaN(el.price)) {
        price = false
        ErrorFn(index, 'errPrice', true)
      }
    });

    if (foodname && category && price) {
      saveSubmitFn()
      prop.setCheckInputForm(false)
      return true
    } else {
      Swal.fire({
        title: 'Input invalid',
        // text: 'Your menu has been saved',
        toast: true,

        icon: 'error',
        showConfirmButton: false,

        timer: 1500,
      });
      return false
    }



  }
  console.log(prop.checkInputForm)

  // Check When Close Input 
  const checkInputFormFn = (saveSubmitFn) => {

    if (prop.checkInputForm) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {
          validation(saveSubmitFn)
          if (validation(saveSubmitFn) === true) {
            setTimeout(() => {
              prop.setCheckInputForm(false)
              prop.setStart(false)
              prop.setMenuId('')
              // prop.setListMenu([prop.listMenuModel])
            }, 1500);
          }

        } else if (result.isDenied) {
          setTimeout(() => {
            prop.setCheckInputForm(false)
            prop.setStart(false)
            prop.setMenuId('');
            prop.getAllMenu()
            // prop.setListMenu([prop.listMenuModel])
          }, 200);
        }
      })

    } else {

      prop.setCheckInputForm(false)
      prop.setStart(false)
      prop.setMenuId('');
      // if (prop.listMenu.length === 0) {
      // prop.setListMenu([prop.listMenuModel])
      // }
    }
  }





  return (

    <div className="">

      <div className="topBar_function">

        {!prop.menuId && <div className="GruopBtn">
          <button onClick={() => {
            checkInputFormFn(prop.submitCatagory)
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconBack} alt="" />
          </button>
          <span className='MB_textBtn'>Back</span>
        </div>}

        {prop.menuId && <div className="GruopBtn">

          <button onClick={() => {
            checkInputFormFn(prop.saveEditMenu)
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconBack} alt="" />
          </button>
          <span className='MB_textBtn'>Back</span>

        </div>}


        <div className="inputContainerCat widthInput">
          <input onChange={prop.inputValue('catagory')}
            onClick={ErrorCatFn}
            value={prop.state.catagory} placeholder='Catagory name' type='text' name='catagory' id='' autoComplete='off'
            className='MB_EditName_Input  text_center' required />
          {prop.state.errCategory && <span className="errCategory"><img src={MBerroricon} alt="" /> <span>required</span></span>}
        </div>
        <div className="GruopBtn">
          {/* <button type='button' form='foodForm' className={`MB_Btn`}>
            <svg
              onClick={() => {
                prop.setActiveWindowIconPicker(!prop.activeWindowIconPicker);
              }}
              className='MB_itemSvg'>
              {prop.state.icon_catagory ?
                <use xlinkHref={`${prop.state.icon_catagory}`} /> : <use xlinkHref={`/static/media/food-color-SVG-sprite.c7acaa791b17c993c83fb8c054053b75.svg#food-tray`} />}
            </svg>
          </button> */}
          <button onClick={() => {
            prop.setActiveWindowIconPicker(!prop.activeWindowIconPicker);
          }} type='button' form='foodForm' className={`MB_BtnIconPick`}>

            {prop.state.icon_catagory ? <svg
              className='MB_itemSvg'>
              prop.state.icon_catagory ?
              <use xlinkHref={`${prop.state.icon_catagory}`} />
            </svg> :
              <img className='MB_itemSvg' src={MBaddIcon} alt="" />}

          </button>
          {/* MBaddIcon */}
          <span className='MB_textBtn'>Icon</span>

        </div>

      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_ForBtn vhFormFood zindexUnderTop">
        <div className="MB_Standard_Section_canScroll MB_Make_PadingForm MB_Wrap_ForBtn  vhFormFoodBtn" >
          <form id='foodForm' encType='multipart/form-data' className={` MB_formMenu`}>

            <div className='xxx'>
              <label htmlFor='file-upload' className='MB_labelPhoto'>
                <input
                  onChange={(e) => {
                    if (e.target.files.length === 0) return;
                    prop.setOriginalName(e.target.files[0]?.name);
                    prop.resizeFile(e.target.files[0]).then((res) => { });
                  }}
                  id='file-upload'
                  name='file-upload'
                  type='file'
                  className='inputPhoto'
                />

                <div name='photo' className='MB_photoFlex'>
                  <img className='MB_boxPhoto' src={prop.file ? prop.file : prop.iconPhoto} alt='' />
                </div>
              </label>
              <div className={`${prop.loadingManual ? 'showMe' : 'hiddenMe'} photoLoading`}>
                <div className="iconLoadingBanner">
                  <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                </div>
              </div>
              {/* <div
              onClick={() => {
                prop.delelteImage();
                prop.setFile('');
              }}
              className={`${prop.file ? 'delPhoto' : 'hidden'} `}>
              X
            </div> */}
            </div>

            <div className='MB_layoutManu '>


              {prop.listMenu.map((el, index) => (
                <div className={`MB_layoutManu0 ${index % 2 !== 0 ? 'MB_Dark_Color' : 'MB_light_Color'}`} key={index}>
                  <div id={`MBend${index}`} className="MBend"></div>

                  <div className='MB_layoutManu1'>
                    <i className='sr-only'>!FOOD NAME</i>
                    <div className='MB_flex_NoInp gap1'>
                      <span className='MB_item'>{index + 1}</span>
                      <div className="posReative">
                        <input onChange={(event) => prop.inputListValue(index, event)} onClick={() => ErrorFn(index, 'errFoodname', false)} value={el.food_name} type='text'
                          name='food_name' id='food-name' autoComplete='off' className='MB_EditName_Input  MB_White' placeholder='Food name' />

                        {el.errFoodname && <span className='errCategory'><img src={MBerroricon} alt="" /> <span>required</span></span>}
                      </div>
                    </div>

                    <i className='sr-only'>!DESCRIPTION</i>
                    <div className=''>
                      <div className=''>
                        {/* <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description} id='description'
                          name='description' rows='4' className='MB_EditName_Input MB_White MB_fontSmall testAreaD' placeholder='Description (optional)'></textarea> */}

                        <ReactQuill onChange={(event) => prop.inputRQuill(index, 'description', event)} value={el.description} modules={modules}
                          name='description' className='MB_EditName_Input forQPt MB_White MB_fontSmall testAreaD' placeholder='Description (optional)' />

                        {/* <ReactQuill
                          value={el.description}
                          onChange={() => ''}
                          modules={modules}
                          className='MB_EditName_Input MB_White MB_fontXSmall italic testAreaR' placeholder='Remark (optional)'
                        /> */}

                      </div>

                    </div>

                    <i className='sr-only'>!REMARK</i>
                    <div className=''>
                      <div className=''>

                        <ReactQuill
                          value={el.remark}
                          onChange={(event) => prop.inputRQuill(index, 'remark', event)}
                          modules={modules}
                          className='MB_EditName_Input forQPt MB_White MB_fontXSmall italic testAreaR' placeholder='Remark (optional)'
                        />
                        {/* <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark} name='remark' rows='2' id='remark'
                          className='MB_EditName_Input MB_White MB_fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                         */}

                      </div>



                    </div>

                    <i className='sr-only'>!PRICE</i>

                    <div className='MB_flex_NoInp'>
                      <label htmlFor='price' className='MB_labelPrice'>
                        Price
                      </label>
                      <div className="posReative">
                        <input onChange={(event) => prop.inputListValue(index, event)} onClick={() => ErrorFn(index, 'errPrice', false)} value={el.price} type='text' name='price' id='price' autoComplete='off'
                          className='MB_EditName_Input MB_White' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                        {el.errPrice && <span className="errCategory"><img src={MBerroricon} alt="" /> <span>number only</span></span>}
                      </div>
                    </div>
                  </div>


                  <div className='MB_layoutManu1 '>
                    <fieldset>
                      <i className='sr-only'>!DIETARY</i>
                      <legend className='dietHeader mb_sm'>
                        Filter <span className='dietOption'>(optional)</span><span className='dietOption'>&nbsp;*Check marked if this item recomened for:</span>
                      </legend>

                      <div className=''>
                        <div className='MB_flexDiet'>
                          <i className='sr-only'>!VEGETARIANT</i>
                          <label htmlFor={`vetgeterian_${index}`} className='relative flex gap-x-2'>
                            <div className='flex h-6 items-center'>
                              <input
                                onChange={(event) => {
                                  prop.inputListValue(index, event);
                                }}
                                ref={(element) => {
                                  ref.current[0] = element;
                                }}
                                value={'vetgeterian'}
                                id={`vetgeterian_${index}`}
                                checked={el.vetgeterian}
                                name='vetgeterian'
                                type='checkbox'
                                className='hideCheckBox cursor-pointer  h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                              />
                              {!el.vetgeterian && <BsCircle fill={'#444'} size={25} />}
                              {el.vetgeterian && <BsCheckCircle fill={'#444'} size={25} />}
                            </div>
                            <div className='text-sm leading-6'>
                              <label htmlFor={`vetgeterian_${index}`} className='cursor-pointer  font-medium text-gray-900'>
                                Vetgeterian
                              </label>
                            </div>
                          </label>

                          <i className='sr-only'>!VEGAN</i>
                          <label htmlFor={`vegan${index}`} className='relative flex gap-x-2'>
                            <div className='flex h-6 items-center'>
                              <input
                                onChange={(event) => {
                                  prop.inputListValue(index, event);
                                }}
                                ref={(element) => {
                                  ref.current[1] = element;
                                }}
                                value={'vegan'}
                                id={`vegan${index}`}
                                checked={el.vegan}
                                name='vegan'
                                type='checkbox'
                                className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                              />
                              {!el.vegan && <BsCircle className='eeee' fill={'#444'} size={25} />}
                              {el.vegan && <BsCheckCircle className='eeee' fill={'#444'} size={25} />}
                            </div>
                            <div className='text-sm leading-6'>
                              <label htmlFor={`vegan${index}`} className='cursor-pointer font-medium text-gray-900'>
                                Vegan
                              </label>
                            </div>
                          </label>

                          <i className='sr-only'>!GLUTEN FREE</i>
                          <label htmlFor={`gluten_free${index}`} className='relative flex gap-x-2'>
                            <div className='flex h-6 items-center'>
                              <input
                                onChange={(event) => {
                                  prop.inputListValue(index, event);
                                }}
                                ref={(element) => {
                                  ref.current[2] = element;
                                }}
                                value={'gluten_free'}
                                id={`gluten_free${index}`}
                                checked={el.gluten_free}
                                name='gluten_free'
                                type='checkbox'
                                className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                              />
                              {!el.gluten_free && <BsCircle fill={'#444'} size={25} />}
                              {el.gluten_free && <BsCheckCircle fill={'#444'} size={25} />}
                            </div>
                            <div className='text-sm leading-6'>
                              <label htmlFor={`gluten_free${index}`} className='cursor-pointer  font-medium text-gray-900'>
                                Gluten-Free
                              </label>
                            </div>
                          </label>

                          <i className='sr-only'>!HALAL</i>
                          <label htmlFor={`halal${index}`} className='relative flex gap-x-2'>
                            <div className='flex h-6 items-center'>
                              <input
                                onChange={(event) => {
                                  prop.inputListValue(index, event);
                                }}
                                ref={(element) => {
                                  ref.current[3] = element;
                                }}
                                value={'halal'}
                                id={`halal${index}`}
                                checked={el.halal}
                                name='halal'
                                type='checkbox'
                                className='hideCheckBox cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                              />
                              {!el.halal && <BsCircle fill={'#444'} size={25} />}
                              {el.halal && <BsCheckCircle fill={'#444'} size={25} />}
                            </div>
                            <div className='text-sm leading-6'>
                              <label htmlFor={`halal${index}`} className='cursor-pointer font-medium text-gray-900'>
                                Halal
                              </label>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="MB_layoutManu1_1">
                        <div className={`MB_TrashIconBox GruopBtn ${prop.listMenu.length === 1 && 'hiddenMe'}`}>
                          <a href={`#MBend${prop.listMenu.length - 2}`} onClick={() => prop.removeItem(index)} className='MB_TrashIcon'>
                            <img src={MBiconBin} alt="" />
                          </a>
                          <span className='MB_textTrash'>Remove Item</span>
                        </div>


                        <div className="redtagbox">

                          <input onChange={(event) => prop.inputListValue(index, event)} value={el.redTag} name='redTag' rows='1' type='text'
                            id='redTag' autoComplete='off' className='MB_EditName_Input MB_White MB_fontXSmallRed italic' placeholder='Red Remark (optional)' />
                          <span className='redtagexpain'>example: Not avalable today</span>
                        </div>


                      </div>
                    </fieldset>



                  </div>

                  {/* {(index === prop.listMenu.length - 1) && <div className="MB_Frid_3Btn absAddBtn">

                    <div className="GruopBtn boxAddItem MB_G3">
                      <a href={`#${index}`} onClick={() => {
                        prop.additem()


                      }
                      } type='' className='MB_Btn MB_Btn_Color '>
                        <img src={MBiconPlus} alt="" />
                      </a>
                      <span className='MB_textBtn'>ADD ITEM</span>
                    </div>
                  </div>} */}
                </div>

              ))}


              {/* {prop.listMenu.length === 0 &&
                <div className="MB_Frid_3Btn">
                  <div className="GruopBtn boxAddItem MB_G3">
                    <a href='#MBend' onClick={() => {
                      prop.additem()


                    }
                    } type='' className='MB_Btn MB_Btn_Color '>
                      <img src={MBiconPlus} alt="" />
                    </a>
                    <span className='MB_textBtn'>ADD ITEM</span>
                  </div>
                </div>} */}

            </div>

          </form>




        </div>

        {/* ////////////////////////////////////////////////////////////////////////// */}


        <div className="MB_Positon_Bottom_btn">

          {/* <div className={`MB_Frid_3Btn ${prop.menuId ? 'displayNone' : 'displayFlex'} ${prop.start ? 'displayFlex' : 'displayNone'}`}> */}

          {(!prop.menuId && prop.start) && <div className={`MB_Frid_3Btn`}>

            {/* SAVE BUTTON NEW CAT*/}

            <a onClick={() => validation(prop.submitCatagory)} type='submit' form='foodForm'
              className='MB_Sq_Btn MB_Sq_Btn-NewCAt MB_Btn_Color MB_G2'>
              <span>SAVE NEW CATEGORY</span>
            </a>

            <a href={`#MBend${prop.listMenu.length - 1}`} className="GruopBtn_row MB_G3" onClick={() => {
              prop.additem()
            }}>
              <span
                type='' className='MB_Btn MB_Btn_Color '>
                <img src={MBiconPlus} alt="" />
              </span>
              <span className='MB_textBtn'>ADD<br />ITEM</span>
            </a>

          </div>}

          <div className={`MB_Frid_3Btn ${prop.menuId ? 'displayFlex' : 'displayNone'}`}>


            <i className='x'>DELETE BUTTON REMOVE</i>
            <button
              onClick={prop.deleteMenu} value={prop.menuId}
              className='MB_Sq_Btn RemoveBtnSize MB_Btn_Border MB_G1'>
              <img src={MBiconBin} alt="" /><span>REMOVE</span>
            </button>
            {/* <div className="MB_TrashIconBox GruopBtn">
              <button onClick={''} className='MB_TrashIcon'>
                <img src={MBiconBin} alt="" />
              </button>
              <span className='MB_textTrash'>Delete</span>
            </div> */}
            <i className='x'>SAVE BUTTONT Edit Save Cancel</i>

            <button onClick={() => validation(prop.saveEditMenu)} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>SAVE</span>
            </button>



            <i className='x'>Add Item</i>

            <a href={`#MBend${prop.listMenu.length - 1}`} className="GruopBtn_row MB_G3" onClick={() => {
              prop.additem()
            }}>
              <span
                type='' className='MB_Btn MB_Btn_Color '>
                <img src={MBiconPlus} alt="" />
              </span>
              <span className='MB_textBtn'>ADD<br />ITEM</span>
            </a>


          </div>





        </div>

      </div>



    </div>


  )
})
export default _04MobileFormFood