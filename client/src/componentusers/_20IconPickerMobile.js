import React, { useEffect, useRef, useState } from 'react';
import * as FileIcon from './_20IconPickerMobileData';
// import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
// import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';

import empty_001 from '../all-icon-client/_empty.svg';

import drinlkL_001 from '../all-icon-client/_01line_drink1_sprite.svg';

import fastfoodL_001 from '../all-icon-client/_01line_fastfood1_sprite.svg';

import food_001 from '../all-icon-client/_04line_food1_sprite.svg';



import google from '../all-icon-client/_01line_google_sprite.svg';


import MBiconClose from '../all-icon/button-icon/MBclose.svg'

const _20IconPickerMobile = (prop) => {




  const getValueIcon = (even) => {
    prop.setCheckInputForm(true)
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

            <div className='iconPickerSet'>

              <div className='iconPickerSet-tilte'>Drink</div>
              <svg onClick={() => getValueIcon(`${empty_001}#empty000`)} className='itemSvg'>
                <use xlinkHref={`${empty_001}#empty000`} />
              </svg>
              <div className='MB_iconPickerGridRow'>
                {FileIcon.drinlkL_001Name.map((list, index) => (
                  <button key={index}>
                    <svg fill='#444'onClick={() => getValueIcon(`${drinlkL_001}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${drinlkL_001}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='iconPickerSet-tilte'>Fast food</div>

              <div className='MB_iconPickerGridRow'>
                {FileIcon.fastfoodL_001Name.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${fastfoodL_001}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${fastfoodL_001}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>


              <div className='iconPickerSet-tilte'>Food</div>

              <div className='MB_iconPickerGridRow'>
                {FileIcon.food_001Name.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${food_001}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${food_001}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='iconPickerSet-tilte'>Fast food</div>

              <div className='MB_iconPickerGridRow'>
                {FileIcon.googleName.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${google}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${google}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

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
        <div className="MB_Positon_Bottom_btn">
          <div className="MB_Frid_3Btn">

            <button onClick={() => prop.setActiveWindowIconPicker(false)} className='MB_Sq_Btn SaveBtnSize MB_Btn_Color MB_G2'>
              OK
            </button>
          </div>
        </div>
      </div>


    </div>
















  );
};

export default _20IconPickerMobile;
