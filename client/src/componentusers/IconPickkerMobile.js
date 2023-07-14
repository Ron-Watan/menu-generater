import React, { useEffect, useRef, useState } from 'react';
import { listsAppitiser, listsFood } from './IconPicker-Data';

import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

const IconPickkerMobile = (prop) => {





  const getValueIcon = (even) => {
    prop.setState({ ...prop.state, icon_catagory: even });

  };
  const [switchTabIcon, setSwitcTabIcon] = useState(1);



  return (

    // <div className="">

    <div className="Ab_in_MB_Funtion">
      <div className="floatBtnIconPicker">
        <div className="floatBtnrBtn">
          <div className="MB_LinColBox">
            <div className="GruopBtn">

              <button onClick={() => {
                prop.setActiveWindowIconPicker(false)
              }} className="MB_Btn MB_Btn_Border">
                <img src={MBiconClose} alt="" />
              </button>
              <span className='MB_textBtn'>Close</span>

            </div>

          </div>

  



        </div>
        <div className="floatBtnIcon">

        </div>
      </div>
      <div className="MB_Standard_0_FullAgain topiconinPicker MB_SetGrid_ForIconPick zindexUnderTop">
        <div className="MB_Standard_Section_canScroll  MB_Wrap_ForIconPick  overScroll_none" >

          {/* <div className="MB_banner_Section"> */}
          {/* <div className="MB_bannerWrapper MB_Wrap_NoFullVhLower"> */}
          <div className='MB_iconPickerTable'>
            {/* //= */}
            {switchTabIcon === 1 && (
              <div className='iconPickerSet'>
                <div className='iconPickerSet-tilte'>Drink</div>
                <div className='MB_iconPickerGridRow'>
                  {listsAppitiser.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${icon1}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Appetizer</div>
                <div className='MB_iconPickerGridRow'>
                  {listsAppitiser.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${icon1}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Main course</div>
                <div className='MB_iconPickerGridRow'>
                  {listsAppitiser.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${icon1}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>


              </div>





            )}
            {/* //= */}
            {switchTabIcon === 2 && (
              <div className='iconPickerSet'>
                <div className='iconPickerSet-tilte'>Drink:</div>
                <div className='MB_iconPickerGridRow'>
                  {listsFood.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${icon2}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${icon2}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* </div> */}
          {/* </div> */}
        </div>





        <div className="MB_Positon_Bottom_btn">
          <div className="MB_Frid_6Btn">

            <button onClick={() => setSwitcTabIcon(1)} className='btnLineCol iconPickeBtnLine MG6_1'>
              Line
            </button>

            <button onClick={() => setSwitcTabIcon(2)} className='btnLineCol iconPickeBtnColor MG6_2'>
              Color
            </button>

            <button onClick={() => prop.setActiveWindowIconPicker(false)} className='MB_Sq_Btn CancelPadding MB_Btn_Color MG6_5'>
              OK
            </button>


          </div>
        </div>
        {/* <div className='MB_iconPickerheader-Nav Flex_SpaceBetween'>
          <div className="MB_iconPickerheader-Nav">
            <button onClick={() => setSwitcTabIcon(1)} className='mainBtn iconPickeBtnLine'>
              Line
            </button>
            <button onClick={() => setSwitcTabIcon(2)} className='mainBtn iconPickeBtnColor'>
              Color
            </button>
          </div>
          <button onClick={() => prop.setActiveWindowIconPicker(false)} className='MB_Sq_Btn MB_Btn_Color'>
            OK
          </button>
        </div> */}


      </div>

    </div>

    // </div>
















  );
};

export default IconPickkerMobile;
