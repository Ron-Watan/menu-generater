import React, { useState } from 'react';
import { listsAppitiser, listsFood } from './IconPicker-Data';

import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg';
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg';

const IconPickker = (prop) => {





  const getValueIcon = (even) => {
    prop.setState({ ...prop.state, icon_catagory: even });
  };
  const [switchTabIcon, setSwitcTabIcon] = useState(1);

  return (
    <div className='iconPickerContainer'>
      <div className='closeBtn'>
        <button
          onClick={() => {
            prop.setActiveWindowIconPicker(false);
            prop.setState({ ...prop.state, icon_catagory: prop.memoicon });
          }}
          className='boxCancel'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='#000' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>{' '}
      </div>
      <div className='iconPickerheader'>
        <div className='iconPickerheader-Nav'>
          <button onClick={() => setSwitcTabIcon(1)} className='mainBtn iconPickeBtnLine'>
            Line
          </button>
          <button onClick={() => setSwitcTabIcon(2)} className='mainBtn iconPickeBtnColor'>
            Color
          </button>
        </div>
        <button onClick={() => prop.setActiveWindowIconPicker(false)} className='mainBtn saveBtnColor'>
          OK
        </button>
      </div>

      <div className='iconPickerTable'>
        {/* //= */}
        {switchTabIcon === 1 && (
          <div className='iconPickerSet'>
            <div className='iconPickerSet-tilte'>Drink</div>
            <div className='iconPickerGridRow'>
              {listsAppitiser.map((list, index) => (
                <button key={index}>
                  <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
                    <use xlinkHref={`${icon1}#${list}`} />
                  </svg>
                </button>
              ))}
            </div>

            <div className='iconPickerSet-tilte'>Appetizer</div>
            <div className='iconPickerGridRow'>
              {listsAppitiser.map((list, index) => (
                <button key={index}>
                  <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
                    <use xlinkHref={`${icon1}#${list}`} />
                  </svg>
                </button>
              ))}
            </div>
           
            <div className='iconPickerSet-tilte'>Main course</div>
            <div className='iconPickerGridRow'>
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
            <div className='iconPickerGridRow'>
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
    </div>
  );
};

export default IconPickker;
