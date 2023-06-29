
import React, { useEffect, useState } from 'react'
import AddLanguageSetup from './AddLanguageSetup';
// import { useSelector } from 'react-redux';

const AddLanguage = (prop) => {
  // const dispath = useDispatch();
  //   const { user } = useSelector((state) => state.user);


  const submitAddLanguage = (e) => {
    // e.preventDefault();
    // if (prop.categoryList.length > 14) return alert('DDDD');
    // componentDidMount();
    // if (!state.catagory.trim()) return;

    // file && uploadImage();
    // // if(!file) imgId = 'a711e1b0-87ad-4156-bcac-52c05303c8fd'
    // // dispath(showLoading())
    // axios
    //   .post(
    //     `${process.env.REACT_APP_API}/user/create-manu`,
    //     {
    //       userId: user.userId,
    //       menuTime: menuTime,
    //       catagory: state.catagory,
    //       imgId: imgId,
    //       link: user.link,

    //       listMenu: [...listMenu],
    //     },
    //     ticketPass
    //   )
    //   .then((result) => {
    //     if (result.data.success) {
    //       const getReult = result.data.userMenu;

    //       dispath(setUser(getReult))
    //       getAllMenu();;
    //       actionDelay();
    //       Unchecked();
    //       setNothing();
    //       dispath(hideLoading());

    //       Swal.fire({
    //         title: 'SAVED',
    //         text: 'Your menu has been saved',
    //         toast: true,
    //         icon: 'success',
    //         // confirmButtonText: 'SAVED',
    //         showConfirmButton: false,
    //         // width: '16rem',
    //         // height: '5rem',
    //         iconColor: '#cb2722',
    //         // confirmButtonColor: '#cb2722',
    //         timer: 2000,
    //       });
    //     } else {
    //       // Swal.fire(result.data.message)
    //       dispath(hideLoading());
    //     }
    //   })
    //   .catch((err) => {
    //     dispath(hideLoading());
    //     console.log("Can't not connect the server");
    //     Swal.fire("Can't not connect the server");
    //   });
  };
  // const [stateLang2, setStateLang2] = useState({
  //   catagory_2: '',
  // });

  // const inputValue2 = (name) => (even) => {
  //   setStateLang2({ ...stateLang2, [name]: even.target.value });
  // };

  // let listMenuModel2 = {
  //   food_name_2: '',
  //   description_2: '',
  //   remark_2: '',
  //   price_2: '',
  // };


  // const [listMenuLang2, setListMenu2] = useState([listMenuModel2]);

  // const inputListValueLang2 = (index, event) => {

  //   let dataSet = [...listMenuLang2];
  //   let data = dataSet[index];
  //   data[event.target.name] = event.target.value;
  //   setListMenu2(dataSet);
  // };


  // const [iconMovement, setIconMovement] = useState({
  //   menu_1: true, menu_2: true, menu_3: true,
  // })

  // const [chooseLangStep, setChooseLangStep] = useState({
  //   menuLang: '', langprefix: ''
  // })
  // const chooseLangStepFn = (name) => {
  //   setChooseLangStep({ ...chooseLangStep, menuLang: name })
  //   setIconMovement({
  //     menu_1: false, menu_2: false, menu_3: false,
  //   })
  //   setIconMovement({ ...iconMovement, [name]: true })
  // }




  // SETUP STYLE CURRENTCY

  // const [styleSymbole, setStyleSymbole] = useState({
  //   style1: true, symbol1: '$', followed1: true,
  //   style2: true, symbol2: '$', followed2: true,
  //   style3: true, symbol3: '$', followed3: true

  // })

  // const styleSymboleFn1 = (name, blean) => {
  //   setStyleSymbole({ ...styleSymbole, [name]: blean })
  // }
  // const styleSymboleFn2 = (name) => (e) => {
  //   setStyleSymbole({ ...styleSymbole, [name]: e.target.value })
  // }
  // const styleSymboleFn3 = (name) => (e) => {
  //   console.dir(e.target)
  //   setStyleSymbole({ ...styleSymbole, [name]: !e.target.checked })
  // }




  //-//=//-//=//-//=//-//=//-

  return (

    <div className="">

      <div className='stickyBox '>

        <div className='gridCat noBoderder'>
          <div className='flexIcoCatLang alignJustCenterMe'>
            Default Language
          </div>
          <div className='flexIcoCatLang alignJustCenterMe'>
            2nd Language
          </div>
        </div>



        <div className='gridCat'>
          <div className='flexIcoCatLang'>
            {/* <div className=''> */}
            <input disabled={true} value={prop.state.catagory} placeholder='Catagory' type='text' name='catagory' id='catagory' autoComplete='off' className='inputText fontCat' required />
            {/* </div> */}
          </div>
          <div className='flexIcoCatLang'>
            {/* <div className=''> */}
            <input onChange={prop.inputValue('catagory_2')} value={prop.state.catagory_2} placeholder='Catagory' type='text' name='catagory' id='catagory' autoComplete='off' className='inputText fontCat' required />
            {/* </div> */}
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