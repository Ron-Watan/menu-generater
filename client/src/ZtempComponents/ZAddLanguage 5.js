

const AddLanguage = (prop) => {


  //-//=//-//=//-//=//-//=//-

  return (

    <div className="">

      <div className='stickyBox '>

        <div className='gridCat noBoderder'>
          <div className='flexIcoCatLang alignJustCenterMe mainHeaderFont'>
            Default Language
          </div>
          <div className='flexIcoCatLang alignJustCenterMe mainHeaderFont'>
            2nd Language
          </div>
        </div>



        <div className='gridCat'>
          <div
            onClick={() => {
              prop.setStart(false);
              prop.setOnOffLangForm(false)

            }}
            className='closeBtn'>

            <span className='boxCancel closeIconHover'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#000" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <div className='flexIcoCatLang'>

            <input disabled={true} value={prop.state.catagory} placeholder='Catagory' type='text' name='catagory' id='catagory' autoComplete='off' className='inputText fontCat' required />

          </div>
          <div className='flexIcoCatLang'>

            <input onChange={prop.inputValue('catagory_2')} value={prop.state.catagory_2} placeholder='Catagory' type='text' name='catagory_2' id='catagory_2' autoComplete='off' className='inputText fontCat' />

          </div>
        </div>
      </div>

      <div className='layoutManu'>

        {prop.listMenu.map((el, index) => (
          <div className={`layoutManu0 ${index % 2 !== 0 ? '' : 'light-grey'}`} key={index}>

            {/* ORIGINAL SECTION */}
            <div className='layoutManu1'>
              <i className='sr-only'>!FOOD NAME</i>
              <div className='flex'>
                <span className='item'>{index + 1}</span>

                <input disabled={true} value={el.food_name} type='text' name='food_name' id='food-name' autoComplete='off' className='inputTextFood fontNormal' placeholder='Food name' />
              </div>

              <i className='sr-only'>!DESCRIPTION</i>
              <div className=''>
                <div className=''>
                  <textarea disabled={true} value={el.description} id='description' name='description' rows='2' className='inputText fontSmall testAreaD' placeholder='Description'></textarea>
                </div>
              </div>

              <i className='sr-only'>!REMARK</i>
              <div className=''>
                <div className=''>
                  <textarea disabled={true} value={el.remark} name='remark' rows='1' id='remark' className='inputText fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                </div>
              </div>

              <i className='sr-only'>!PRICE</i>

              <div className='flex'>
                <label htmlFor='price' className='labelPrice'>
                  Price
                </label>
                <div className=' '>
                  <input disabled={true} value={el.price} type='text' name='price' id='price' autoComplete='off' className='inputTextFood fontCat' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                </div>
              </div>
            </div>




            {/* EDIT SECTION */}
            <div className='layoutManu1'>
              <i className='sr-only'>!FOOD NAME</i>
              <div className='flex'>
                <span className='item'>{index + 1}</span>
                <input onChange={(event) => prop.inputListValue(index, event)} value={el.food_name_2} type='text' name='food_name_2' id='food-name' autoComplete='off' className='inputTextFood fontNormal' placeholder='Food name' />
              </div>

              <i className='sr-only'>!DESCRIPTION</i>
              <div className=''>
                <div className=''>
                  <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.description_2} id='description' name='description_2' rows='2' className='inputText fontSmall testAreaD' placeholder='Description'></textarea>
                </div>
              </div>

              <i className='sr-only'>!REMARK</i>
              <div className=''>
                <div className=''>
                  <textarea onChange={(event) => prop.inputListValue(index, event)} value={el.remark_2} name='remark_2' rows='1' id='remark' className='inputText fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                </div>
              </div>

              <i className='sr-only'>!PRICE</i>

              <div className='flex'>
                <label htmlFor='price' className='labelPrice'>
                  Price
                </label>
                <div className=' '>
                  <input onChange={(event) => prop.inputListValue(index, event)} value={el.price_2} type='text' name='price_2' id='price' autoComplete='off' className='inputTextFood fontCat' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                </div>
              </div>
            </div>



          </div>

        ))}


      </div>








    </div>
  )
}

export default AddLanguage