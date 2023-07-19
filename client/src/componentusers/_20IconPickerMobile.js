import React, { useEffect, useRef, useState } from 'react';
import * as FileIcon from './_20IconPickerMobileData';
// import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
// import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';


import drinlkL_001 from '../all-icon-client/_01line_drink1_sprite.svg';

import fastfoodL_001 from '../all-icon-client/_01line_fastfood1_sprite.svg';

import food_001 from '../all-icon-client/_04line_food1_sprite.svg';



import google from '../all-icon-client/_01line_google_sprite.svg';


// import ld002 from '../all-icon-client/_12_line_drink_002_sprite.svg';
// import lc100 from '../all-icon-client/_100_line_col_100_sprite.svg';





// import drinkC_001 from '../all-icon-client/_22_color_drink1_sprite.svg';
// import drinkC_002 from '../all-icon-client/_22_color_drink2_sprite.svg';
// import drinkC_003 from '../all-icon-client/_22_color_drink3_sprite.svg';



// import cff001 from '../all-icon-client/_200_color_col_fs1_sprite.svg';
// import cff002 from '../all-icon-client/_200_color_col_fs2_sprite.svg';

// import cbbq001 from '../all-icon-client/_200_color_col_bbq1_sprite.svg';
// import cbbq002 from '../all-icon-client/_200_color_col_bbq2_sprite.svg';


// import cshi001 from '../all-icon-client/_200_color_col_shi1_sprite.svg';
// import cshi002 from '../all-icon-client/_200_color_col_shi2_sprite.svg';
// import cshi003 from '../all-icon-client/_200_color_col_shi3_sprite.svg';



// import cdin001 from '../all-icon-client/_200_color_col_din1_sprite.svg';
// import cMeat001 from '../all-icon-client/_200_color_col_mt1_sprite.svg';

// import mixC_001 from '../all-icon-client/_200_color_col_mx1_sprite.svg';
// import mixC_002 from '../all-icon-client/_200_color_col_mx2_sprite.svg';
// import mixC_003 from '../all-icon-client/_200_color_col_mx3_sprite.svg';

// import mexC_001 from '../all-icon-client/_200_color_col_mex1_sprite.svg';
// import mexC_002 from '../all-icon-client/_200_color_col_mex2_sprite.svg';
// import mexC_003 from '../all-icon-client/_200_color_col_mex3_sprite.svg';
// import mexC_004 from '../all-icon-client/_200_color_col_mex4_sprite.svg';

// import noodC_001 from '../all-icon-client/_200_color_col_nc1_sprite.svg';
// import noodC_002 from '../all-icon-client/_200_color_col_nc2_sprite.svg';

// import dessertC_001 from '../all-icon-client/_24_color_ds1_sprite.svg';
// import dessertC_002 from '../all-icon-client/_24_color_ds2_sprite.svg';
// import dessertC_003 from '../all-icon-client/_24_color_ds3_sprite.svg';



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
                  {FileIcon.drinlkL_001Name.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${drinlkL_001}#${list}`)} className='itemSvg'>
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












                {/*                 
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
                </div> */}



              </div>

            )}


            {/* //= */}

            {/* 
            {switchTabIcon === 2 && (
              <div className='iconPickerSet'>

                <div className='iconPickerSet-tilte'>Drink #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.drinkC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${drinkC_001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${drinkC_001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                
                <div className='iconPickerSet-tilte'>Drink #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.drinkC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${drinkC_002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${drinkC_002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
                
                <div className='iconPickerSet-tilte'>Drink #3</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.drinkC_003ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${drinkC_003}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${drinkC_003}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

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

                <div className='iconPickerSet-tilte'>Fast food #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.colorCff002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cff002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cff002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>BBQ #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.bbqC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cbbq001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cbbq001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
                <div className='iconPickerSet-tilte'>BBQ #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.bbqC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cbbq002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cbbq002}#${list}`} />
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
                <div className='iconPickerSet-tilte'>Sushi #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.sushiC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cshi002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cshi002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Sushi #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.sushiC_003ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cshi003}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cshi003}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>



                <div className='iconPickerSet-tilte'>Dinner #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.colorDin001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cdin001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cdin001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Meat #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.colorMeat001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${cMeat001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${cMeat001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Mixed #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mixC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mixC_001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mixC_001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>


                <div className='iconPickerSet-tilte'>Mixed #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mixC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mixC_002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mixC_002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>




                <div className='iconPickerSet-tilte'>Mixed #3</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mixC_003ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mixC_003}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mixC_003}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>



                <div className='iconPickerSet-tilte'>Mexican #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mexC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mexC_001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mexC_001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>


                <div className='iconPickerSet-tilte'>Mexican #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mexC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mexC_002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mexC_002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>


                <div className='iconPickerSet-tilte'>Mexican #3</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mexC_003ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mexC_003}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mexC_003}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Mexican #4</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.mexC_004ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${mexC_004}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${mexC_004}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>




                <div className='iconPickerSet-tilte'>Noodle #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.noodC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${noodC_001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${noodC_001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Noodle #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.noodC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${noodC_002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${noodC_002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Dessert #1</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.dessertC_001ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${dessertC_001}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${dessertC_001}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className='iconPickerSet-tilte'>Dessert #2</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.dessertC_002ArrName.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${dessertC_002}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${dessertC_002}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
            
                
                <div className='iconPickerSet-tilte'>Dessert #3</div>
                <div className='MB_iconPickerGridRow'>
                  {FileIcon.dessertC_003Name.map((list, index) => (
                    <button key={index}>
                      <svg onClick={() => getValueIcon(`${dessertC_003}#${list}`)} className='itemSvg'>
                        <use xlinkHref={`${dessertC_003}#${list}`} />
                      </svg>
                    </button>
                  ))}
                </div>
                
              </div>
            )}
          </div> */}

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
