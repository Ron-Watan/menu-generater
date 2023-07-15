import React, { useEffect, useRef, useState } from 'react';
import * as FileIcon from './_20IconPickerMobileData';
// import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
// import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';


import ld001 from '../all-icon-client/_12_line_drink_001_sprite.svg';
import ld002 from '../all-icon-client/_12_line_drink_002_sprite.svg';
import lc100 from '../all-icon-client/_100_line_col_100_sprite.svg';

import cff001 from '../all-icon-client/_200_color_col_fs1_sprite.svg';
import cshi001 from '../all-icon-client/_200_color_col_shi1_sprite.svg';

import MBiconClose from '../all-icon/button-icon/MBclose.svg'

const _20IconPickerMobile = (prop) => {




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


          <div className='MB_iconPickerTable'>
            {/* //= */}
            {switchTabIcon === 1 && (
              <div className='iconPickerSet'>

                <div className='iconPickerSet-tilte'>Drink</div>

                <div className='MB_iconPickerGridRow'>
                  {FileIcon.lineD002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${ld002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${ld002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.lineD001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${ld001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${ld001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>


                <div className='iconPickerSet-tilte'>Appitizzer/Main Course #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.lineC100ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${lc100}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${lc100}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>



              </div>

            )}


            {/* //= */}


            {switchTabIcon === 2 && (
              <div className='iconPickerSet'>

                <div className='iconPickerSet-tilte'>Fast food #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.colorCff001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cff001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cff001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                

                <div className='iconPickerSet-tilte'>Sushi #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.colorShi001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cshi001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cshi001}#${list}`} />
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

export default _20IconPickerMobile;
