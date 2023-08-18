import React, { forwardRef, useState } from 'react'
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import MBiconBack from '../all-icon/button-icon/MBback.svg'
import MBaddIcon from '../all-icon/button-icon/addIcon.svg'
import MBerroricon from '../all-icon/button-icon/error.svg'
import MBiconDown from '../all-icon/button-icon/down.svg'
import MBiconSetting from '../all-icon/button-icon/setting.svg'
import Swal from 'sweetalert2';



const _04MobileFormFood = forwardRef((prop, ref) => {
  const photoHostName = `${process.env.REACT_APP_API}/user/photos/`
  //  Make Input hide Error(false) 
  const ErrorFn = (index, name, bol) => {
    let dataSet = [...prop.listMenu];
    let data = dataSet[index];
    data[name] = bol
    prop.setListMenu(dataSet);
    prop.setOneClickCat(false)
    // window.scrollTo(50, 50);
  }
  //  Make Input hide Error(false) 
  const ErrorCatFn = (name) => {
    prop.setOneClickCat(false)
    prop.setState({ ...prop.state, [name]: false });
  };



  // All Validation Make Input show Error(true)
  const validation = (saveSubmitFn) => {
    let category = true
    if (!prop.state.catagory || !prop.state.catagory.trim()) {
      category = false
      prop.setState({ ...prop.state, errCategory: true });
    }

    let foodname = true
    let price = true
    prop.listMenu.forEach((el, index) => {
      if (!el.food_name || !el.food_name.trim()) {
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


    } else {
      Swal.fire({
        title: 'Invalid input',
        // text: 'Your menu has been saved',
        toast: true,

        icon: 'error',
        showConfirmButton: false,

        timer: 1500,
      });

      return false
    }



  }

  // Check When Close Input 
  const checkInputFormFn = (saveSubmitFn) => {

    if (prop.checkInputForm || prop.checkEditImg) {
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

          if (saveSubmitFn === prop.saveEditMenu) {
            setTimeout(() => {
              prop.setStart(false)
              prop.setMenuId('');
            }, 1000);
          }
          prop.setCheckInputForm(false)

        } else if (result.isDenied) {

          setTimeout(() => {
            prop.setCheckInputForm(false)
            prop.setStart(false)
            prop.setMenuId('');
            prop.getAllMenu()
            prop.setCheckEditImg(false)
            prop.setPreviewImg(prop.iconPhoto)

          }, 200);
        }
      })

    } else {

      prop.setCheckInputForm(false)
      prop.setStart(false)
      prop.setMenuId('');
      prop.clearForm()
      prop.setPreviewImg(prop.iconPhoto)
      prop.setCheckEditImg(false)
      // if (prop.checkEditImg) prop.getAllImage()
      // if (prop.listMenu.length === 0) {
      // prop.setListMenu([prop.listMenuModel])
      // }
    }
  }


  function arrayMmove(arr, old_index, new_index, propSetCatList) {
    // setChangeRA(true)
    prop.setCheckInputForm(true)
    const newData = [...arr]
    newData.splice(new_index, 0, newData.splice(old_index, 1)[0]);
    propSetCatList(newData)
  };
  const [showControl, setShowControl] = useState(false)
  //-
  const emptyIcon = '/static/media/_empty.7b62bbf4b02d3d65f678e4361123ec76.svg#empty000'



  // const [previewImg, setPreviewImg] = useState(prop.iconPhoto)

  // const previewImgFn = (e) => {
  //   if (!e) return prop.setPreviewImg('')
  //   const data = new FileReader()
  //   data.addEventListener('load', () => {
  //     prop.setPreviewImg(data.result)
  //   })
  //   data.readAsDataURL(e.target.files[0])
  //   prop.setCheckEditImg(true)
  // }


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  let img = document.getElementById('dummy')
  console.dir(img)
  window.addEventListener("load", event => {

    var isLoaded = img.complete && img.naturalHeight !== 0;
    alert('www');
  });

  return (

    <div className="" >

      <div className="topBar_function">

        {!prop.menuId && <div className="GruopBtn">
          <a href="#" onClick={() => {
            checkInputFormFn(prop.submitCatagory)

          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconBack} alt="" />
          </a>
          <span className='MB_textBtn'>Back</span>
        </div>}

        {prop.menuId && <div className="GruopBtn">

          <a href="#" onClick={() => {
            checkInputFormFn(prop.saveEditMenu)
            setShowControl(false)
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconBack} alt="" />
          </a>
          <span className='MB_textBtn'>Back</span>

        </div>}


        <div className="inputContainerCat widthInput">
          <input onChange={prop.inputValue('catagory')}
            onClick={() => ErrorCatFn('errCategory')}
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

            {/* {prop.state.icon_catagory ? <svg
              className='MB_itemSvg'>
              prop.state.icon_catagory ?
              <use xlinkHref={`${prop.state.icon_catagory}`} />
            </svg> :
              <img className='MB_itemSvg' src={MBaddIcon} alt="" />} */}


            {prop.state.icon_catagory === emptyIcon ?
              <img className='MB_itemSvg' src={MBaddIcon} alt="" />
              : <svg className='MB_itemSvg'>
                <use xlinkHref={`${prop.state.icon_catagory}`} />

              </svg>
            }




          </button>
          {/* MBaddIcon */}
          <span className='MB_textBtn'>Icon</span>

        </div>

      </div>



      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full  zindexUnderTop" >

        <div className="MB_Standard_Section_canScroll MB_Make_PadingForm" >



          <form id='foodForm' encType='multipart/form-data' className={` MB_formMenu`}>
            <div id='topForm' className="topForm"></div>
            <div className='xxx'>
              <label htmlFor='file-upload' className='MB_labelPhoto'>
                <input
                  onChange={(e) => {
                    if (e.target.files.length === 0) return;
                    prop.resizeFile(e.target.files[0]).then((res) => { });
                    // prop.setFile(e.target.files[0])

                    // previewImgFn(e)
                  }}
                  id='file-upload'
                  name='avatar'
                  type='file'
                  className='inputPhoto'
                  onClick={(e) => {
                    e.target.value = ''
                  }}
                />

                <div name='photo' className='MB_photoFlex'>
                  <div className={`${prop.imgLoading ? 'showMe' : 'hiddenMe'} imgLoading unselectable`}>
                    <div className="iconLoadingBanner">
                      <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
                    </div>
                  </div>

                  {/* <img className='MB_boxPhoto' src={prop.file ? prop.file : prop.iconPhoto} alt='' /> */}
                  {/* <img className='MB_boxPhoto' src={prop.file ? `${photoHostName}${prop.file}` : prop.iconPhoto} alt='' /> */}
                  {/* <img className='MB_boxPhoto' src={`${photoHostName}${prop.file}`} alt='' /> */}

                  {!prop.checkEditImg && < img className='MB_boxPhoto' src={prop.file ? `${photoHostName}${prop.filePreview}` : prop.iconPhoto} alt='' />}
                  {prop.checkEditImg && <img className='MB_boxPhoto' src={prop.file} alt='' />}

                  {/* <img src={`${photoHostName}${prop.filePreview}`} id="dummy" style={{ display: 'none' }} alt="" /> */}
                  {/* {prop.previewImg&&<img className='MB_boxPhoto' src={prop.previewImg} alt='' />} */}
                </div>
              </label>

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
                        <input onChange={(event) => {
                          prop.inputListValue(index, event)
                          // ErrorFn(index, 'errFoodname', false)

                        }} onClick={() => ErrorFn(index, 'errFoodname', false)} value={el.food_name} type='text'
                          name='food_name' id='food-name' autoComplete='off' className='MB_EditName_Input  MB_White' placeholder='Food name' />

                        {el.errFoodname && <span className='errCategory'><img src={MBerroricon} alt="" /> <span>required</span></span>}
                      </div>
                    </div>

                    <i className='sr-only'>!DESCRIPTION</i>
                    <div className=''>

                      <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description} id='description'
                        name='description' rows='4' className='MB_EditName_Input MB_White MB_fontSmall testAreaD' placeholder='Description (optional)'></textarea>

                    </div>

                    <i className='sr-only'>!REMARK</i>
                    <div className=''>

                      <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark} name='remark' rows='3' id='remark'
                        className='MB_EditName_Input MB_White MB_fontXSmall italic testAreaR' placeholder='Remark (optional)' />


                    </div>

                    <i className='sr-only'>!PRICE</i>

                    <div className='MB_flex_NoInp'>
                      <label htmlFor='price' className='MB_labelPrice'>
                        Price
                      </label>
                      <div className="posReative">
                        <input onChange={(event) => {
                          prop.inputListValue(index, event)
                          // ErrorFn(index, 'errPrice', false)
                        }} onClick={() => ErrorFn(index, 'errPrice', false)} value={el.price} type='text' name='price' id='price' autoComplete='off'
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
                                  prop.inputCheck(index, event);
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
                                  prop.inputCheck(index, event);
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
                                  prop.inputCheck(index, event);
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
                                  prop.inputCheck(index, event);
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
                        <div className="form_comtrolBox">
                          <div className={`MB_TrashIconBox ${prop.listMenu.length === 1 && 'hiddenMe'}`}>
                            <div onClick={() => setShowControl(!showControl)} className='MB_SetIcon'>
                              <img src={MBiconSetting} alt="" />
                            </div>
                            {/* <span className='MB_textTrash'>REMOVE ITEM</span> */}
                          </div>
                          {showControl && <div className={`form_comtrolBox1`}>
                            {/* <div className={`MB_TrashIconBox GruopBtn ${prop.listMenu.length === 1 && 'hiddenMe'}`}> */}

                            <div className={`MB_TrashIconBox ${prop.listMenu.length === 1 && 'displayNone'}`}>
                              <a href={`#MBend${index}`}
                                onClick={() => {
                                  prop.removeItem(index)
                                  setShowControl(false)
                                }} className='MB_TrashIcon'>
                                <img src={MBiconBin} alt="" />
                              </a>
                              {/* <span className='MB_textTrash'>REMOVE ITEM</span> */}
                            </div>
                            <a href={`#MBend${index - 1}`} onClick={() => { arrayMmove(prop.listMenu, index, index - 1, prop.setListMenu) }} type='submit' className={`smallUpDown up ${index === 0 && 'displayNone'}     `}>
                              <img src={MBiconDown} alt="" />
                            </a>

                            <a href={`#MBend${index + 1}`} onClick={() => { arrayMmove(prop.listMenu, index, index + 1, prop.setListMenu) }} type='submit' className={`smallUpDown ${index === prop.listMenu.length - 1 && 'displayNone'}`}>
                              <img src={MBiconDown} alt="" />
                            </a>
                          </div>}
                        </div>
                        <div className="redtagbox">

                          <input onChange={(event) => prop.inputListValue(index, event)} value={el.redTag} name='redTag' rows='1' type='text'
                            id='redTag' autoComplete='off' className='MB_EditName_Input MB_White MB_fontXSmallRed italic redTagPadding' placeholder='Red Remark (optional)' />
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


        <div className="MB_Positon_Bottom_btn_New">


          {(!prop.menuId && prop.start) && <div className={`MB_Frid_3Btn`}>

            {/* SAVE BUTTON NEW CAT//=*/}

            {(!prop.oneClickCat && !prop.imgLoading) && <span onClick={() => {
              validation(prop.submitCatagory)
              prop.setOneClickCat(true)
              setShowControl(false)
            }} type='submit' form='foodForm'
              className='MB_Sq_Btn MB_Sq_Btn-NewCAt MB_Btn_Color MB_G2'>
              <span>SAVE NEW CATEGORY</span>
            </span>}
            {(prop.oneClickCat || prop.imgLoading) && <span
              className='MB_Sq_Btn MB_Sq_Btn-NewCAt MB_Btn_Color MB_G2'>
              <span>SAVE NEW CATEGORY</span>
            </span>}

            <a href={`#MBend${prop.listMenu.length - 1}`} className="GruopBtn_row MB_G3"
              onClick={() => {
                setShowControl(false)
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
            {!prop.imgLoading && <button
              onClick={prop.deleteMenu} value={prop.menuId}
              className='MB_Sq_Btn RemoveBtnSize MB_Btn_Border MB_G1'>
              <img src={MBiconBin} alt="" /><span>REMOVE<br />CATEGORY</span>
            </button>}

            {prop.imgLoading && <span
              className='MB_Sq_Btn RemoveBtnSize MB_Btn_Border MB_G1'>
              <img src={MBiconBin} alt="" /><span>Wait<br />CATEGORY</span>
            </span>}

            <i className='x'>SAVE BUTTONT Edit Save Cancel</i>

            {!prop.imgLoading && <button onClick={() => {
              setShowControl(false)
              validation(prop.saveEditMenu)
            }} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>SAVE</span>
            </button>}

            {prop.imgLoading && <span className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              <span>SAVE</span>
            </span>}

            <i className='x'>Add Item</i>

            <a href={`#MBend${prop.listMenu.length - 1}`} className="GruopBtn_row MB_G3"
              onClick={() => {
                prop.additem()
                setShowControl(false)
              }}>
              <span
                type='' className='MB_Btn MB_Btn_Color '>
                <img src={MBiconPlus} alt="" />
              </span>
              <span className='MB_textBtn'>ADD<br />ITEM</span>
            </a>


          </div>





        </div>

      </div >



    </div >


  )
})
export default _04MobileFormFood