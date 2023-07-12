import React, { useRef, forwardRef } from 'react'
import { BsSquare, BsCheckSquare, BsCheckCircle, BsCircle, BsFill0CircleFill } from 'react-icons/bs';
import MBiconBin from '../all-icon/button-icon/MBbin.svg'
import MBiconPlus from '../all-icon/button-icon/MBplusicon.svg'
import SwipeToDelete from 'react-swipe-to-delete-ios'



export const MBBanner = (prop) => {

  return (
    // <div className="Ab_in_MB_Funtion">

    <div className="MB_banner_Section">


      <div className="MB_Standard_Section_canScroll MB_Make_PaadingBanner MB_Wrap_NoFullVh">
        <div className="MB_bannerShow_Flex_Column">
          {prop.bannerImgArr.map((el, index) => (


            <SwipeToDelete
              onDelete={() => {
                prop.setDeleteImageBannerTG((deleteImageBannerTG) => deleteImageBannerTG + 1);
              }} // required
              // optional
              height={200} // default
              transitionDuration={250} // default
              deleteWidth={75} // default
              deleteThreshold={75} // default
              showDeleteAction={true} //default
              deleteColor="#fff" // default
              deleteText="Delete" // default
              // deleteComponent={<DeleteComponent />} // not default
              disabled={false} // default
              id="swiper-1" // not default
              className="my-swiper" // not default
              rtl={false} // default
              onDeleteConfirm={(onSuccess, onCancel) => {
                // not default - default is null
                if (window.confirm("Do you really want to delete this item ?")) {
                  onSuccess();
                } else {
                  onCancel();
                }
              }}
            >













              <div key={index} className={`bannerShow_list ${prop.indexToBanner === index && 'MB_bannerShow_chooseCat'}`}>
                <button name={el.menuId} onClick={() => prop.setIndexToBanner(index)} className={`btnCat MB_photoSize ${prop.indexToBanner === index && 'MB_sizeBigger'}`}>
                  <img src={el} className='MB_imageBannerForm photoList' />
                </button>
                <div className={` MB_smIconAB ${prop.indexToBanner === index ? '' : 'displayNone'}`}>


                  <button
                    onClick={() => {
                      prop.setDeleteImageBannerTG((deleteImageBannerTG) => deleteImageBannerTG + 1);
                    }}
                    value={el.menuId}
                    type='submit'
                    className={`MB_Btn `}>

                    <img src={MBiconBin} alt="" />
                  </button>
                </div>

              </div>

            </SwipeToDelete>

          ))}
        </div>

      </div>
      <div className="MB_Frid_3Btn">

        {/* SAVE BUTTON */}
        <button
          onClick={() => {
            prop.setSaveImageBannerTG((saveImageBannerTG) => prop.saveImageBannerTG + 1);
          }}
          className='MB_Sq_Btn MB_Btn_Color MB_G2'>
          <span>SAVE</span>
        </button>


        {/* CANCEL BUTTON */}
        <button
          onClick={() => {
            prop.setGetAllImageBannerTG((getAllImageBannerTG) => prop.getAllImageBannerTG + 1);
          }}
          className='MB_Sq_Btn MB_Btn_Border MB_G3'>

          <span>CANCEL</span>
        </button>


      </div>
    </div>
    // </div>
  )
}




export const MBMenu = (prop) => {
  return (

    <div className="MB_banner_Section">

      <div className="MB_bannerWrapper MB_Wrap_NoFullVh">
        <div className={`MB_categoryStart ${false && 'displayNone'}`}>


          {prop.categoryList
            .filter((el) => el.menuTime == prop.menuTime)
            .map((el, index) => (

              


                <div className="MB_Flex_LisrBtn" key={index} >


                  {/* <div key={index} className={`MB_tabCat  ${prop.menuId === el.menuId && 'MB_chooseCat'}`}> */}
                  <div className={`MB_tabCat `}>



                    <button name={el.menuId} onClick={() => prop.findOneMenu(el.menuId)} className={`itemCat  ${prop.menuId === el.menuId ? 'itemCatChoose' : ''}`}>
                      {index + 1}
                    </button>

                    <button name={el.menuId} onClick={() => prop.findOneMenu(el.menuId)} className='btnCat'>
                      {el.catagory}
                    </button>

                  </div>

                  <div className='MB_FlexEarth_Remove'>

                    <i className="x">EARTH BUTTON</i>

                    {/* <div className={`MB_iconSideBox  MB_tabCat_L${prop.menuId === el.menuId ? '' : ''}`}> */}
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
                    {/* </div> */}


                    {/* <div >

                    <i className="x">DELETE BUTTON</i>
                    <div className={`${prop.deleteBtn ? 'MB_iconSideBox' : 'displayNone'}`}>
                      <button onClick={prop.deleteMenu} value={el.menuId} type='submit' className=''>
                        <svg width='18' height='20' viewBox='0 0 27 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M1 3.5L26.5 3.5' stroke='#000' strokeLinecap='round' />
                          <path d='M5.95338 28L3.55142 3.5H24.4592L22.5377 28H5.95338Z' stroke='#000' />
                          <rect x='9.5' y='0.5' width='9' height='3' rx='0.5' stroke='#000' />
                          <path d='M8 8L10 24' stroke='#000' strokeLinecap='round' />
                          <path d='M18 24L20 8' stroke='#000' strokeLinecap='round' />
                          <path d='M14 8L14 24' stroke='#000' strokeLinecap='round' />
                        </svg>
                      </button>
                    </div>

                  </div> */}
                  </div>



                </div>
         
            ))}




        </div>

      </div>


    </div>

  )
}




export const MobileFormFood = forwardRef((prop, ref) => {

  return (
    <div className="MB_banner_Section">
      <div className="MB_bannerWrapper MB_Wrap_FullVh paddingSmall ">
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
                <div className='MB_layoutManu1'>
                  <i className='sr-only'>!FOOD NAME</i>
                  <div className='MB_flex_NoInp gap1'>
                    <span className='MB_item'>{index + 1}</span>

                    <input onChange={(event) => prop.inputListValue(index, event)} value={el.food_name} type='text'
                      name='food_name' id='food-name' autoComplete='off' className='MB_EditName_Input  MB_White' placeholder='Food name' />
                  </div>

                  <i className='sr-only'>!DESCRIPTION</i>
                  <div className=''>
                    <div className=''>
                      <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description} id='description'
                        name='description' rows='4' className='MB_EditName_Input MB_White MB_fontSmall testAreaD' placeholder='Description'></textarea>
                    </div>
                  </div>

                  <i className='sr-only'>!REMARK</i>
                  <div className=''>
                    <div className=''>
                      <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark} name='remark' rows='1' id='remark'
                        className='MB_EditName_Input MB_White MB_fontSmall italic testAreaR' placeholder='Remark (optional)' />
                    </div>
                  </div>

                  <i className='sr-only'>!PRICE</i>

                  <div className='MB_flex_NoInp'>
                    <label htmlFor='price' className='MB_labelPrice'>
                      Price
                    </label>

                    <input onChange={(event) => prop.inputListValue(index, event)} value={el.price} type='text' name='price' id='price' autoComplete='off'
                      className='MB_EditName_Input MB_White' pattern='[0-9]*.\d{0,2}' placeholder='0' />

                  </div>
                </div>

                <div className='MB_layoutManu1 '>
                  <fieldset>
                    <i className='sr-only'>!DIETARY</i>
                    <legend className='dietHeader mb_sm'>
                      Filter <span className='dietOption'>(optional)</span><span className='dietOption'>* Check marked if this menu recomened for:</span>
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


                  </fieldset>


                  <button onClick={() => prop.removeItem(index)} className='MB_TrashIcon'>
                    <img src={MBiconBin} alt="" />
                  </button>


                </div>
              </div>
            ))}

            <div className="GruopBtn boxAddItem">
              <a href='#MBend' onClick={prop.additem} type='' className='MB_Btn MB_Btn_Color'>
                <img src={MBiconPlus} alt="" />
              </a>
              <span className='MB_textBtn'>ADD ITEM</span>
            </div>

          </div>



        </form>
        <div id='MBend' className=''></div>

      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}


      <div className="MB_Flex_Btn">
        <div className='boxBtnPhotoList'>

          <div className={`MB_Frid_3Btn ${prop.menuId ? 'displayNone' : 'displayFlex'} ${prop.start ? 'displayFlex' : 'displayNone'}`}>

            {/* SAVE BUTTON NEW CAT*/}

            <button onClick={prop.submitCatagory} type='submit' form='foodForm'
              className='MB_Sq_Btn MB_Sq_Btn-NewCAt MB_Btn_Color MB_G2'>


              <span>SAVE NEW CATEGORY</span>
            </button>

            {/* CANCEL BUTTON NEW CAT*/}
            <button
              onClick={() => {
                prop.setStart(false);
                // prop.setMenuId('');
              }}
              className='MB_Sq_Btn MB_Btn_Border MB_G3 '>

              <span>CANCEL</span>
            </button>
          </div>

          <div className={`MB_Frid_3Btn ${prop.menuId ? 'displayFlex' : 'displayNone'}`}>


            <i className='x'>DELETE BUTTON REMOVE</i>
            <button
              onClick={prop.deleteMenu} value={prop.menuId}
              className='MB_Sq_Btn MB_Btn_Border MB_G1'>

              <span>REMOVE</span>
            </button>

            <i className='x'>SAVE BUTTONT Edit Save Cancel</i>
            <button onClick={prop.saveEditMenu} type='' className='MB_Sq_Btn MB_Btn_Color MB_G2'>

              <span>SAVE</span>
            </button>

            <i className='x'>CANCEL BUTTON Edit Save Cancel</i>
            <button
              onClick={() => {
                prop.setStart(false);
                prop.setMenuId('');
              }}
              className='MB_Sq_Btn MB_Btn_Border MB_G3'>

              <span>CANCEL</span>
            </button>


          </div>




        </div>
      </div>

    </div>
  )
})