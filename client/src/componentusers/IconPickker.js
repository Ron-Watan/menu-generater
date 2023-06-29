import React from 'react';
import { listsAppitiser, listsFood } from './IconPicker-Data';

import icon1 from '../all-icon-client/Appetizer-Black-SVG-sprite.svg'
import icon2 from '../all-icon-client/food-color-SVG-sprite.svg'

const IconPickker = (prop) => {
  // client/src/componentusers/IconPicker-Data.js

  const getValueIcon = (even) => {
    console.dir(even)
    prop.setState({ ...prop.state, icon_catagory: even });
  };

  return (
    <div className='iconPickerTable'>
      {/* <div className='iconPickerTitle'>New</div> */}


      {/* <svg className='itemSvg'>
        <use xlinkHref={`${icon2}#food-safety`} />
      </svg> */}



      <div className='iconPickerName'>Appitiser</div>
      <div className='iconPickerGridRow'>

        {listsAppitiser.map((list, index) =>
        (
          <button key={index}>
            <svg onClick={() => getValueIcon(`${icon1}#${list}`)} className='itemSvg'>
              <use xlinkHref={`${icon1}#${list}`} />
            </svg>
          </button>
        )
        )}
        {listsFood.map((list, index) =>
        (
          <button key={index}>
            <svg onClick={() => getValueIcon(`${icon2}#${list}`)} className='itemSvg'>
              <use xlinkHref={`${icon2}#${list}`} />
            </svg>
          </button>
        )
        )}























      </div>
    </div>
  );
};

export default IconPickker;
