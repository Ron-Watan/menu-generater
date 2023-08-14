import React, { useEffect } from 'react';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

import i011_drink_s from '../all-icon-client/i011_drink.svg';
import i012_drink_s from '../all-icon-client/i012_drink.svg';
import i013_drink_s from '../all-icon-client/i013_drink.svg';
import i014_drink_s from '../all-icon-client/i014_drink.svg';

import i021_app_s from '../all-icon-client/i021_app.svg';
import i031_salad_s from '../all-icon-client/i031_salad.svg';
import i041_soup_s from '../all-icon-client/i041_soup.svg';
import i051_main_s from '../all-icon-client/i051_main.svg';
import i061_food_s from '../all-icon-client/i061_food.svg';
import i062_food_s from '../all-icon-client/i062_food.svg';
import i063_food_s from '../all-icon-client/i063_food.svg';
import i064_food_s from '../all-icon-client/i064_food.svg';

import i081_dessert_s from '../all-icon-client/i081_dessert.svg';
import i082_dessert_s from '../all-icon-client/i082_dessert.svg';
import i111_other_s from '../all-icon-client/i111_other.svg';
import i112_other_s from '../all-icon-client/i112_other.svg';
import i113_other_s from '../all-icon-client/i113_other.svg';

import i511_coffeeshop_s from '../all-icon-client/i511_coffeeshop.svg';
import i521_mexican_s from '../all-icon-client/i521_mexican.svg';
import i531_breakfast_s from '../all-icon-client/i531_breakfast.svg';
import i532_breakfast_s from '../all-icon-client/i532_breakfast.svg';
import i541_fastfood_s from '../all-icon-client/i541_fastfood.svg';
import i541_seafood_s from '../all-icon-client/i541_seafood.svg';
import i551_asian_s from '../all-icon-client/i551_asian.svg';
import i552_asian_s from '../all-icon-client/i552_asian.svg';
import i711_google_s from '../all-icon-client/i711_google.svg';
import i711_writing_s from '../all-icon-client/i711_writing.svg';
import i0911special_s from '../all-icon-client/i0911special.svg';



function generateArrayName(arr, name, items) {
  for (let i = 1; i <= items; i++) {
    arr.push(name + i)
  }
}

let i011_drink = { arr: [], name: 'i011_drink-', items: 26 }
let i012_drink = { arr: [], name: 'i012_drink-', items: 21 }
let i013_drink = { arr: [], name: 'i013_drink-', items: 7 }
let i014_drink = { arr: [], name: 'i014_drink-', items: 16 }
let i021_app = { arr: [], name: 'i021_app-', items: 11 }
let i031_salad = { arr: [], name: 'i031_salad-', items: 1 }
let i041_soup = { arr: [], name: 'i041_soup-', items: 3 }
let i051_main = { arr: [], name: 'i051_main-', items: 9 }
let i061_food = { arr: [], name: 'i061_food-', items: 23 }
let i062_food = { arr: [], name: 'i062_food-', items: 25 }
let i063_food = { arr: [], name: 'i063_food-', items: 16 }
let i064_food = { arr: [], name: 'i064_food-', items: 22 }
let i081_dessert = { arr: [], name: 'i081_dessert-', items: 50 }
let i082_dessert = { arr: [], name: 'i082_dessert-', items: 20 }
let i111_other = { arr: [], name: 'i111_other-', items: 42 }
let i112_other = { arr: [], name: 'i112_other-', items: 23 }
let i113_other = { arr: [], name: 'i113_other-', items: 29 }

let i511_coffeeshop = { arr: [], name: 'i511_coffeeshop-', items: 50 }
let i521_mexican = { arr: [], name: 'i521_mexican-', items: 10 }
let i531_breakfast = { arr: [], name: 'i531_breakfast-', items: 10 }
let i532_breakfast = { arr: [], name: 'i532_breakfast-', items: 16 }
let i541_fastfood = { arr: [], name: 'i541_fastfood-', items: 18 }
let i541_seafood = { arr: [], name: 'i541_seafood-', items: 20 }
let i551_asian = { arr: [], name: 'i551_asian-', items: 25 }
let i552_asian = { arr: [], name: 'i552_asian-', items: 25 }
let i711_google = { arr: [], name: 'i711_google-', items: 31 }
let i711_writing = { arr: [], name: 'i711_writing-', items: 50 }
let i0911special = { arr: [], name: 'i0911special-', items: 15 }











const _20IconPickerMobile = (prop) => {

  const getValueIcon = (even) => {
    prop.setCheckInputForm(true)
    prop.setState({ ...prop.state, icon_catagory: even });
  };

  useEffect(() => {

    generateArrayName(i011_drink.arr, i011_drink.name, i011_drink.items)
    generateArrayName(i012_drink.arr, i012_drink.name, i012_drink.items)
    generateArrayName(i013_drink.arr, i013_drink.name, i013_drink.items)
    generateArrayName(i014_drink.arr, i014_drink.name, i014_drink.items)

    generateArrayName(i021_app.arr, i021_app.name, i021_app.items)
    generateArrayName(i031_salad.arr, i031_salad.name, i031_salad.items)
    generateArrayName(i041_soup.arr, i041_soup.name, i041_soup.items)
    generateArrayName(i051_main.arr, i051_main.name, i051_main.items)
    generateArrayName(i061_food.arr, i061_food.name, i061_food.items)
    generateArrayName(i062_food.arr, i062_food.name, i062_food.items)
    generateArrayName(i063_food.arr, i063_food.name, i063_food.items)
    generateArrayName(i064_food.arr, i064_food.name, i064_food.items)
    generateArrayName(i081_dessert.arr, i081_dessert.name, i081_dessert.items)
    generateArrayName(i082_dessert.arr, i082_dessert.name, i082_dessert.items)

    generateArrayName(i111_other.arr, i111_other.name, i111_other.items)
    generateArrayName(i112_other.arr, i112_other.name, i112_other.items)
    generateArrayName(i113_other.arr, i113_other.name, i113_other.items)

    generateArrayName(i511_coffeeshop.arr, i511_coffeeshop.name, i511_coffeeshop.items)
    generateArrayName(i521_mexican.arr, i521_mexican.name, i521_mexican.items)
    generateArrayName(i531_breakfast.arr, i531_breakfast.name, i531_breakfast.items)
    generateArrayName(i532_breakfast.arr, i532_breakfast.name, i532_breakfast.items)
    generateArrayName(i541_fastfood.arr, i541_fastfood.name, i541_fastfood.items)
    generateArrayName(i541_seafood.arr, i541_seafood.name, i541_seafood.items)
    generateArrayName(i551_asian.arr, i551_asian.name, i551_asian.items)

    generateArrayName(i552_asian.arr, i552_asian.name, i552_asian.items)
    generateArrayName(i711_google.arr, i711_google.name, i711_google.items)
    generateArrayName(i711_writing.arr, i711_writing.name, i711_writing.items)
    generateArrayName(i0911special.arr, i0911special.name, i0911special.items)



  }, [])


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
      <div className="MB_Standard_0_FullAgain topiconinPicker MB_SetGrid_Full zindexUnderTop">
        <div className="MB_Standard_Section_canScroll  overScroll_none MB_Make_Iconpicker" >


          <div className='MB_iconPickerTable'>
            <div className='iconPickerSet'>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Drink #1</div>
              <div className='MB_iconPickerGridRow'>
                {i011_drink.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i011_drink_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i011_drink_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Drink #2</div>

              <div className='MB_iconPickerGridRow'>
                {i012_drink.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i012_drink_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i012_drink_s}#${list}`} />
                    </svg>
                  </button>
                ))}

                {i013_drink.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i013_drink_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i013_drink_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='iconPickerSet-tilte'>Drink #3</div>

              <div className='MB_iconPickerGridRow'>
                {i014_drink.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i014_drink_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i014_drink_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #1</div>
              <div className='MB_iconPickerGridRow'>
                {i531_breakfast.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i531_breakfast_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i531_breakfast_s}#${list}`} />
                    </svg>
                  </button>
                ))}

                {i021_app.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i021_app_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i021_app_s}#${list}`} />
                    </svg>
                  </button>
                ))}

                {i031_salad.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i031_salad_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i031_salad_s}#${list}`} />
                    </svg>
                  </button>
                ))}

                {i041_soup.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i041_soup_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i041_soup_s}#${list}`} />
                    </svg>
                  </button>
                ))}

                {i051_main.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i051_main_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i051_main_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #2</div>

              <div className='MB_iconPickerGridRow'>
                {i062_food.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i062_food_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i062_food_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #3</div>


              <div className='MB_iconPickerGridRow'>
                {i064_food.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i064_food_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i064_food_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='MB_iconPickerGridRow'>
                {i521_mexican.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i521_mexican_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i521_mexican_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              <div className='MB_iconPickerGridRow'>
                {i532_breakfast.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i532_breakfast_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i532_breakfast_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>


              <div className='MB_iconPickerGridRow'>
                {i541_seafood.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i541_seafood_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i541_seafood_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #4</div>
              <div className='MB_iconPickerGridRow'>
                {i551_asian.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i551_asian_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i551_asian_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='MB_iconPickerGridRow'>
                {i552_asian.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i552_asian_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i552_asian_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #5</div>

              <div className='MB_iconPickerGridRow'>
                {i063_food.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i063_food_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i063_food_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='MB_iconPickerGridRow'>
                {i061_food.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i061_food_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i061_food_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              <div className='MB_iconPickerGridRow'>
                {i541_fastfood.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i541_fastfood_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i541_fastfood_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #6</div>


              <div className='MB_iconPickerGridRow'>
                {i081_dessert.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i081_dessert_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i081_dessert_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              <div className='MB_iconPickerGridRow'>
                {i082_dessert.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i082_dessert_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i082_dessert_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* //= */}
              <div className='iconPickerSet-tilte'>Food #7</div>
              <div className='MB_iconPickerGridRow'>
                {i711_writing.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i711_writing_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i711_writing_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              <div className='MB_iconPickerGridRow'>
                {i711_google.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i711_google_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i711_google_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* //= */}
              <div className='iconPickerSet-tilte'>Special</div>
              <div className='MB_iconPickerGridRow'>
                {i0911special.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i0911special_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i0911special_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* //= */}
              <div className='iconPickerSet-tilte'>Other #1</div>
              <div className='MB_iconPickerGridRow'>
                {i111_other.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i111_other_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i111_other_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>


              <div className='MB_iconPickerGridRow'>
                {i112_other.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i112_other_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i112_other_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              <div className='iconPickerSet-tilte'>Other #2</div>
              <div className='MB_iconPickerGridRow'>
                {i113_other.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i113_other_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i113_other_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>
              <div className='iconPickerSet-tilte'>Coffee Shop</div>

              <div className='MB_iconPickerGridRow'>
                {i511_coffeeshop.arr.map((list, index) => (
                  <button key={index}>
                    <svg onClick={() => getValueIcon(`${i511_coffeeshop_s}#${list}`)} className='itemSvg'>
                      <use xlinkHref={`${i511_coffeeshop_s}#${list}`} />
                    </svg>
                  </button>
                ))}
              </div>










            </div>

          </div>



        </div>
        <div className="MB_Positon_Bottom_btn_New">
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
