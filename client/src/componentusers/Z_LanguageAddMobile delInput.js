import MBiconBack from '../all-icon/button-icon/MBback.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const _LanguageAddMobile = (prop) => {



  return (

    <div className="MB_FullPage_Container">
      <div className="topBar_function">
        <div className="GruopBtn">
          <button
            onClick={() => {
              prop.setStart(false);
              prop.setOnOffLangForm(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconBack} alt="" />


          </button>
          <span className='MB_textBtn'>Back</span>
        </div>
        <div className="MB_title">Add 2nd Language</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>

        </div>
      </div>
      <div className="MB_AB_FullAgain zindexUnder1">
        <div className="MB_2LangLayout_Grid ">
          <div className="MB_Container_Sroll">
            <div className="MB_InScroll_2nd ">
              <div className='MB_2ndLanfCatBox '>

                <div className='MB_layoutManu1 '>

                  <div className='MB_flex_NoInp gap2'>
                    <span className='MB_2ndTitle'>Default</span>
                    <input disabled={true} value={prop.state.catagory} placeholder='Catagory name' type='text' name='catagory' id='catagory' autoComplete='off' className='MB_EditName_Input' required />
                  </div>

                  <div className='MB_flex_NoInp gap2'>
                    <span className='MB_2ndTitle'>2nd</span>
                    <input onChange={prop.inputValue('catagory_2')} value={prop.state.catagory_2 ? prop.state.catagory_2 : ''} placeholder='Catagory name' type='text' name='catagory_2' id='catagory_2'
                      autoComplete='off' className='MB_EditName_Input' />
                  </div>

                </div>



              </div>
              {/* //////////////////////////////////////////////// */}


              <div className='MB_layoutManu '>
                {prop.listMenu.map((el, index) => (
                  <div className={`MB_layoutManu0 ${index % 2 !== 0 ? 'MB_Dark_Color' : 'MB_light_Color'}`} key={index}>
                    <div className='MB_layoutManu1'>

                      <i className='sr-only'>//-!FOOD NAME</i>
                      <div className='MB_flex_NoInp'>
                        <span className='MB_item'>{index + 1}</span>
                        <input onChange={(event) => prop.inputListValue(index, event)} value={el.food_name} type='text'
                          disabled={true} name='food_name' id='food-name' autoComplete='off' className='MB_EditName_Input  MB_GrayInput' placeholder='Food name' />
                      </div>
                      <div className='MB_flex_NoInp'>
                        <span className='MB_item hiddenMe'>{index + 1}</span>
                        <input onChange={(event) => prop.inputListValue(index, event)} value={el.food_name_2} type='text'
                          name='food_name_2' id='food-name_2' autoComplete='off' className='MB_EditName_Input  MB_White' placeholder='Food name (2nd)' />
                      </div>



                      <i className='sr-only'>//-!DESCRIPTION</i>
                      <div className=''>
                        <ReactQuill onChange={(event) => prop.inputListValue(index, event)} value={el.description}
                          id='description'
                          disabled={true} name='description' className='MB_EditName_Input MB_GrayInput MB_fontSmall testAreaD' placeholder='Description'/>
                      </div>


                      <div className=''>
                        <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description_2}
                          id='description_2' name='description_2' rows='2' className='MB_EditName_Input MB_White MB_fontSmall testAreaD' placeholder='Description (2nd)'></textarea>
                      </div>

                      <i className='sr-only'>//-!REMARK</i>

                      <div className=''>
                        <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark} name='remark' rows='1' id='remark'
                          disabled={true} className='MB_EditName_Input MB_GrayInput MB_fontSmall italic testAreaR' placeholder='Remark (optional)' />
                      </div>
                      <div className=''>
                        <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark_2} name='remark_2' rows='1'
                          id='remark_2' className='MB_EditName_Input MB_White MB_fontSmall italic testAreaR' placeholder='Remark (2nd)' />
                      </div>

                      <i className='sr-only'>!PRICE</i>

                      <div className='MB_flex_NoInp'>
                        <label htmlFor='price' className='MB_labelPrice'>
                          Price
                        </label>

                        <input onChange={(event) => prop.inputListValue(index, event)} value={el.price} type='text' name='price' id='price' autoComplete='off'
                          disabled={true} className='MB_EditName_Input MB_GrayInput' pattern='[0-9]*.\d{0,2}' placeholder='0' />

                      </div>

                      <div className='MB_flex_NoInp'>
                        <label htmlFor='price' className='MB_labelPrice'>
                          Price
                        </label>

                        <input onChange={(event) => prop.inputListValue(index, event)} value={el.price_2} type='text' name='price_2' id='price_2' autoComplete='off'
                          className='MB_EditName_Input MB_White' pattern='[0-9]*.\d{0,2}' placeholder='(2nd)' />

                      </div>
                    </div>


                  </div>
                ))}


              </div>


            </div>
          </div>


          <div className="MB_InGrid_Bottom_Box">
            {/* <div className='boxBtnPhotoList'> */}

            <div className={`MB_Frid_3Btn ${true ? 'displayFlex' : 'displayNone'}`}>




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




            {/* </div> */}
          </div>
        </div>
      </div>




    </div>
  )
}

export default _LanguageAddMobile