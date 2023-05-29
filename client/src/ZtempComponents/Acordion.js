import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group'


const AccordionList = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);

  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight);
  }, []);
  return (
    <li onClick={() => setIsActive(!isActive)} className='cssTransition flex flex-col justify-left gap-x-6 overflow-hidden' key={uuidv4()}>
      <div className='flex gap-x-4 py-2 '>
        <div className='min-w-0 flex-auto pl-20'>
          <div className='flex justify-between '>
            <p className='text-sm font-semibold leading-6 text-gray-900 '>{title}</p>
            <p>{isActive ? '-' : '+'}</p>
          </div>
        </div>
      </div>
      {
        <div
          className={` transition-all h-0 `}
          style={{
            height: isActive && `${height}px`,
            transition: 'all .3s',
          }}>
          <div className={`flex gap-x-4`}>
            <div className='min-w-0 flex-auto pl-20'>
              <p ref={elementRef} className='text-sm font-semibold leading-6 text-gray-900 border-t'>
                {content}
              </p>
            </div>
          </div>
        </div>
      }
    </li>

  




  );
};

export default AccordionList;






























// style =
//   {
//   height: `${height}px`,
//     transition: 'all .3s',

//   }}

// :
// (<div className={`transition-all flex gap-x-4 h-0`} style={
//   {
//     // height: `0px`,

//     transition: 'height 4s'

//   }}>
//   <div className="min-w-0 flex-auto pl-20">
//     <p ref={elementRef} className="text-sm font-semibold leading-6 text-gray-900 border-t" >{content}r</p>
//   </div>

// </div>)
// }
