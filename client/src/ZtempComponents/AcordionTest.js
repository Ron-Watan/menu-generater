import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import catalog1 from '../img/promotion1.png'

const userManuLists = [
  {
    title: 'Padthai',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    tabCode: '001'
  },
  {
    title: 'Pad See Ew',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
    tabCode: '002'
  },
  {
    title: 'Papaya Salad',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    tabCode: '003'
  }
];

const AccordionFuntion = () => {

  const [isActive, setIsActive] = useState('');


  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight);
  }, []);

  const switchTest = (tabCode) => (even) => {
    if (even.target.value === 'false') {
      setIsActive(tabCode)
      even.target.value = 'true'
    }


    console.log(even.target.value)

  }



  return (
    <div className="mx-auto max-w-7xl" id='2'>
      <div className="h-40" style={{
        backgroundImage: `url(${catalog1})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}>
      </div>
      <ul role="list" className="divide-y divide-gray-100 px-2 sm:px-6 lg:px-8 cssTransition">

        {userManuLists.map(el => (

          <button onClick={

            switchTest(el.tabCode)

          } className='flex flex-col justify-left gap-x-6 overflow-hidden text-left' key={uuidv4()}>
            <div className='flex gap-x-4 py-2 '>
              <div className='min-w-0 flex-auto pl-20'>
                <div className='flex justify-between '>
                  <p onClick={

                    switchTest(el.tabCode)

                  } className='text-sm font-semibold leading-6 text-gray-900 '>{el.title}</p>
                  <p>{isActive === el.tabCode ? '-' : '+'}</p>
                </div>
              </div>
            </div>
            {
              <div
                className={` transition-all`}
                style={{
                  height: isActive === el.tabCode ? `${height}px` : '0px',
                  transition: 'all .3s',
                }}>
                <div className={`flex gap-x-4`}>
                  <div className='min-w-0 flex-auto pl-20'>
                    <p ref={elementRef} className='text-sm font-semibold leading-6 text-gray-900 border-t'>
                      {el.content}
                    </p>
                  </div>
                </div>
              </div>
            }
          </button>

        ))}

      </ul>
    </div>


  );
};

export default function AccordionTest() {
  return <AccordionFuntion menu={userManuLists} />;
}





























