import MBiconBack from '../all-icon/button-icon/MBback.svg'

import Swal from 'sweetalert2';
import MBerroricon from '../all-icon/button-icon/error.svg'

const _04MobileLanguage = (prop) => {

  // const modules = {
  //   toolbar: [
  //     ['bold', 'underline', { 'list': 'ordered' }, { 'list': 'bullet' }, 'clean']
  //   ]
  // }

  const ErrorFn = (index, name, bol) => {
    let dataSet = [...prop.listMenu];
    let data = dataSet[index];
    data[name] = bol
    prop.setListMenu(dataSet);

  }
  const validation = () => {

    let price = true
    prop.listMenu.forEach((el, index) => {
      if (isNaN(el.price_2)) {
        price = false
        ErrorFn(index, 'errPrice', true)
      }
    });

    if (price) {
      prop.saveEditMenu()
      prop.setCheckInputForm(false)
      return true
    } else {
      Swal.fire({
        title: 'Input invalid',
        toast: true,
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
      return false
    }
  }

  const checkInputFormFn = () => {

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
          validation()
          if (validation() === true) {
            setTimeout(() => {
              prop.setCheckInputForm(false)
              prop.setStart(false)
              prop.setOnOffLangForm(false)
            }, 1500);
          }

        } else if (result.isDenied) {
          setTimeout(() => {
            prop.setCheckInputForm(false)
            prop.setStart(false)
            prop.setOnOffLangForm(false)
            prop.getAllMenu()

          }, 200);
        }
      })

    } else {

      prop.setCheckInputForm(false)
      prop.setOnOffLangForm(false)
      prop.setStart(false)
      prop.setMenuId('');
      prop.clearForm()
      // if (prop.checkEditImg) prop.getAllImage()
      // if (prop.listMenu.length === 0) {
      // prop.setListMenu([prop.listMenuModel])
      // }
    }
  }

  return (

    <div className="MB_FullPage_Container">
      <div className="topBar_function">
        <div className="GruopBtn">
          <button
            onClick={() => {
              checkInputFormFn()
              // prop.setStart(false);
              // prop.setOnOffLangForm(false)
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
      <div className="MB_Standard_0_FullAgain MB_SetGrid_Full zindexUnder1">

        <div className="MB_Standard_Section_canScroll MB_Make_PadingForm MB_Make_PadingForm_AddLang" >


          <div className='MB_2ndLanfCatBox '>

            <div className='MB_layoutManu1 '>

              <div className='MB_flex_NoInp gap2'>
                <span className='MB_2ndTitle'>Default</span>
                {/* <ReactQuill theme="snow" readOnly modules={{ toolbar: false }} disabled={true} value={prop.state.catagory} placeholder='Catagory name' type='text' name='catagory' id='catagory' autoComplete='off' className='MB_EditName_Input MB_GrayInput' required /> */}
                <div className="width100">
                  {/* <div className="coverEdit MB_GrayInput"></div> */}

                  <input readOnly value={prop.state.catagory} placeholder='Catagory name' type='text'
                    autoComplete='off' className='MB_EditName_Input MB_GrayInput ' />
                </div>

              </div>

              <div className='MB_flex_NoInp gap2'>
                <span className='MB_2ndTitle'>2nd</span>
                <input onChange={prop.inputValue('catagory_2')} value={prop.state.catagory_2 ? prop.state.catagory_2 : ''} placeholder='Catagory name' type='text' name='catagory_2' id='catagory_2'
                  autoComplete='off' className='MB_EditName_Input MB_White ' />
              </div>

            </div>



          </div>
          {/* //////////////////////////////////////////////// */}


          <div className='MB_layoutManu '>
            {prop.listMenu.map((el, index) => (
              <div className={`MB_layoutManu0 ${(index % 2 !== 0) ? 'MB_Dark_Color' : 'MB_light_Color'}`} key={index}>
                <div className='MB_layoutManu1'>

                  <i className='sr-only'>!FOOD NAME</i>
                  <div className='MB_flex_NoInp'>
                    <span className='MB_item'>{index + 1}</span>

                    <div className="width100">
                      {/* <div className="coverEdit MB_GrayInput"> </div> */}

                      <input readOnly value={el.food_name} type='text' className='MB_EditName_Input MB_GrayInput ' placeholder='Food name' />
                    </div>

                    {/* <ReactQuill readOnly modules={{ toolbar: false }} value={el.food_name} type='text'
                          disabled={true} name='food_name' id='food-name' autoComplete='off' className='MB_EditName_Input  MB_GrayInput' placeholder='Food name' />
                      */}


                  </div>

                  <div className='MB_flex_NoInp'>
                    <span className='MB_item hiddenMe'>{index + 1}</span>
                    <input onChange={(event) => prop.inputListValue(index, event)} value={el.food_name_2} type='text'
                      name='food_name_2' id='food-name_2' autoComplete='off' className='MB_EditName_Input  MB_White' placeholder='Food name (2nd)' />
                  </div>




                  <i className='sr-only'>!DESCRIPTION</i>
                  <div className='editDescriptionROnly'>
                    {/* <div className="coverEdit MB_GrayInput selectable"></div> */}
                    <div className=''>

                      <textarea readOnly value={el.description}
                        name='description' rows='4' className='MB_EditName_Input MB_GrayInput MB_fontSmall testAreaD' placeholder='Description (optional)'></textarea>
                    </div>

                  </div>


                  <div className=''>

                    <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description_2}
                      name='description_2' rows='4' className='MB_EditName_Input MB_White MB_fontSmall testAreaD' placeholder='Description (2nd)'></textarea>

                  </div>

                  <i className='sr-only'>!REMARK</i>

                  <div className='editRemarkROnly'>
                    {/* <div className=" MB_GrayInput selectable"></div> */}

                    <textarea readOnly value={el.remark} name='remark' rows='3' id='remark'
                      className='MB_EditName_Input MB_GrayInput MB_fontXSmall italic testAreaR' placeholder='Remark (optional)' />

                  </div>

                  <div className=''>
                    <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark_2} name='remark_2' rows='3' id='remark'
                      className='MB_EditName_Input MB_White MB_fontXSmall italic testAreaR' placeholder='Remark Remark (2nd)' />
                  </div>

                  <i className='sr-only'>!PRICE</i>

                  <div className='MB_flex_NoInp'>
                    <div className='MB_labelPrice'>
                      Price
                    </div>
                    <div className="width100">
                      {/* <div className="coverEdit MB_GrayInput"> </div> */}

                      <input readOnly value={el.price} type='text' className='MB_EditName_Input MB_GrayInput ' placeholder='Food name' />


                      {/* <ReactQuill readOnly modules={{ toolbar: false }} value={el.price} type='text' name='price' id='price' autoComplete='off'
                          disabled={true} className='MB_EditName_Input MB_GrayInput' pattern='[0-9]*.\d{0,2}' placeholder='0' /> */}

                    </div>
                  </div>

                  <div className='MB_flex_NoInp posReative'>
                    <div className='MB_labelPrice'>
                      Price
                    </div>

                    <input onChange={(event) => {
                      prop.inputListValue(index, event)
                      // ErrorFn(index, 'errPrice', false)
                    }} onClick={() => ErrorFn(index, 'errPrice', false)} value={el.price_2} type='text' name='price_2' autoComplete='off'
                      className='MB_EditName_Input MB_White' pattern='[0-9]*.\d{0,2}' placeholder='(2nd)' />
                    {el.errPrice && <span className="errCategory"><img src={MBerroricon} alt="" /> <span>number only</span></span>}
                  </div>
                </div>


              </div>
            ))}


          </div>


        </div>
        <div className="MB_Positon_Bottom_btn_New ">


          <div className='MB_Frid_3Btn'>


            <button onClick={validation} type='' className='MB_Sq_Btn SaveBtnSize MB_Btn_Color  MB_G2'>

              <span>SAVE</span>
            </button>


            {/* <button
        onClick={() => {
          prop.setStart(false);
          prop.setMenuId('');
        }}
        className='MB_Sq_Btn CancelPadding MB_Btn_Border MB_G3'>

        <span>CANCEL</span>
      </button> */}


          </div>




          {/* </div> */}
        </div>



      </div>








    </div>
  )
}

export default _04MobileLanguage