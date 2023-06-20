
import React, { useState } from 'react'
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
  const [state, setState] = useState({
    catagory: '',
    imgId: '',
  });

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value });
  };

  let listMenuModel = {
    food_name: '',
    description: '',
    remark: '',
    price: '',
  };


  const [listMenu, setListMenu] = useState([listMenuModel]);

  const inputListValue = (index, event) => {

    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[event.target.name] = event.target.value;
    setListMenu(dataSet);
  };


  const [iconMovement, setIconMovement] = useState({
    menu_1: true, menu_2: true, menu_3: true,
  })

  const [chooseLangStep, setChooseLangStep] = useState({
    menuLang: '', langprefix: ''
  })
  const chooseLangStepFn = (name) => {
    setChooseLangStep({ ...chooseLangStep, menuLang: name })
    setIconMovement({
      menu_1: false, menu_2: false, menu_3: false,
    })
    setIconMovement({ ...iconMovement, [name]: true })
  }




  // SETUP STYLE CURRENTCY

  const [styleSymbole, setStyleSymbole] = useState({
    style1: true, symbol1: '$', followed1: true,
    style2: true, symbol2: '$', followed2: true,
    style3: true, symbol3: '$', followed3: true

  })

  const styleSymboleFn1 = (name, blean) => {
    setStyleSymbole({ ...styleSymbole, [name]: blean })
  }
  const styleSymboleFn2 = (name) => (e) => {
    setStyleSymbole({ ...styleSymbole, [name]: e.target.value })
  }
  const styleSymboleFn3 = (name) => (e) => {
    console.dir(e.target)
    setStyleSymbole({ ...styleSymbole, [name]: !e.target.checked })
  }




  //-//=//-//=//-//=//-//=//-

  return (

    <div className={`formContainerLang`}>
      <div className="chooseMenuLang">

        <div className="windowFloatLang">
          <div className="windowFloatLangBorder">
            {/* <button onClick={() => chooseLangStepFn('menu_1')} className={`btnChooseLang gridLang1 ${(chooseLangStep.menuLang != 'menu_1' && chooseLangStep.menuLang != '') ? 'hiddenMe' : 'showMe'}`} name='menu_1' type='button'> */}
            {/* MENU 1 */}
            <button onClick={() => chooseLangStepFn('menu_1')}
              className={`btnChooseLang gridLang1`}
              name='menu_1' type='button'>
              <svg className={`myIconSideBar forLang${''}`} width="69" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="1" width="62" height="62" stroke="" strokeWidth="2" />
                <line y1="33" x2="15" y2="33" stroke="" strokeWidth="2" />
                <line y1="17" x2="15" y2="17" stroke="" strokeWidth="2" />
                <line y1="50" x2="15" y2="50" stroke="" strokeWidth="2" />
                <path d="M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z" fill="" />
                <path d="M39.3906 15.25V35.5938L42.8906 36.0312V38H32.7969V36.0312L36.3125 35.5938V18.5469L32.7344 18.6094V16.6875L39.3906 15.25Z" fill="" />
              </svg>
              <span>{prop.user.menu_1}</span>
            </button>


            <div className="langSetMenuAb display">
              <svg className={`myIconSideBar forLang${''}`} width="69" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="1" width="62" height="62" stroke="" strokeWidth="2" />
                <line y1="33" x2="15" y2="33" stroke="" strokeWidth="2" />
                <line y1="17" x2="15" y2="17" stroke="" strokeWidth="2" />
                <line y1="50" x2="15" y2="50" stroke="" strokeWidth="2" />
                <path d="M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z" fill="" />
                <path d="M39.3906 15.25V35.5938L42.8906 36.0312V38H32.7969V36.0312L36.3125 35.5938V18.5469L32.7344 18.6094V16.6875L39.3906 15.25Z" fill="" />
              </svg>
              <div className="LangSet"></div>
              <div className="langName">
                <div className="">Default language</div>
                <input className='inputTextLang lmed fontSmall' type="text" name="" maxLength='8' placeholder='Language' id="" />
                <input className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='3' placeholder='EN' id="" />

              </div>
              <div className="langStyle">

                <div className="">Symbol style</div>
                {/* STYLE 1 */}
                
                {styleSymbole.style1 ?
                  <div className=""><span>{styleSymbole.followed1 && styleSymbole.symbol1}</span> <span>25</span> <span>{!styleSymbole.followed1 && styleSymbole.symbol1}</span> </div>
                  : <div className=""><span></span><span>25</span><span></span></div>}
                

                {/* NONE */}
                <label htmlFor="none" className="labelLangRadio">
                  <input onChange={() => styleSymboleFn1('style1', false)} className='radioLang' type="radio" name="cstyle" maxLength='8' placeholder='Name of Language' id="none" />
                  <span>None</span>
                </label>
                {/* STYLED */}
                <label htmlFor="Styled" className="labelLangRadio">
                  <input onChange={() => styleSymboleFn1('style1', true)} checked={styleSymbole.style1} className='radioLang' type="radio" name="cstyle" maxLength='8' placeholder='Name of Language' id="Styled" />
                  <span>Styled</span>
                </label>

                <div className="">
                  {/* INPUT */}
                  <input onChange={styleSymboleFn2('symbol1')} value={styleSymbole.symbol1} className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='5' placeholder='$' id="" />

                  {/* SWITCH */}
                  <label htmlFor='followed1' className="timePikerContainer header2 switch">
                    <span>before</span><input onChange={styleSymboleFn3('followed1')} type="checkbox" name="followed" id="followed1" /><span className="slider"></span> <span>after</span>
                  </label>


                </div>
              </div>

  
            </div>

            {/* MENU 2 */}
            {/* <button onClick={() => chooseLangStepFn('menu_2')} className={`btnChooseLang gridLang2 ${(chooseLangStep.menuLang != 'menu_2' && chooseLangStep.menuLang != '') ? 'hiddenMe' : 'showMe'}`} name='menu_2'> */}
            <button onClick={() => chooseLangStepFn('menu_2')}
              className={`btnChooseLang gridLang2`}
              name='menu_2'>
              <svg className={`myIconSideBar forLang ${''}`} width="69" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="1" width="62" height="62" stroke="" strokeWidth="2" />
                <line y1="33" x2="15" y2="33" stroke="" strokeWidth="2" />
                <line y1="17" x2="15" y2="17" stroke="" strokeWidth="2" />
                <line y1="50" x2="15" y2="50" stroke="" strokeWidth="2" />
                <path d="M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z" fill="" />
                <path d="M36.8359 13.3867C38.3464 13.3867 39.668 13.6602 40.8008 14.207C41.9466 14.7409 42.832 15.5221 43.457 16.5508C44.082 17.5794 44.3945 18.8034 44.3945 20.2227C44.3945 21.5508 44.0625 22.7747 43.3984 23.8945C42.7474 25.0013 41.7253 26.2643 40.332 27.6836L33.7695 34.3438H42.2461V31.8828C42.2461 31.4271 42.3568 31.1016 42.5781 30.9062C42.7995 30.7109 43.1771 30.6133 43.7109 30.6133C44.2448 30.6133 44.6224 30.7109 44.8438 30.9062C45.0651 31.1016 45.1758 31.4271 45.1758 31.8828V35.6719C45.1758 36.1536 45.0781 36.4987 44.8828 36.707C44.7005 36.9023 44.388 37 43.9453 37H30.3906C29.9479 37 29.6289 36.9023 29.4336 36.707C29.2513 36.4987 29.1602 36.1536 29.1602 35.6719C29.1602 35.1771 29.2578 34.8255 29.4531 34.6172L38.0469 25.9062C39.2448 24.6823 40.0846 23.6667 40.5664 22.8594C41.0612 22.0391 41.3086 21.1602 41.3086 20.2227C41.3086 19.0117 40.918 18.0547 40.1367 17.3516C39.3685 16.6354 38.2747 16.2773 36.8555 16.2773C35.4232 16.2773 34.0755 16.6419 32.8125 17.3711V19.5195C32.8125 19.9753 32.7018 20.3008 32.4805 20.4961C32.2591 20.6914 31.8815 20.7891 31.3477 20.7891C30.8138 20.7891 30.4362 20.6914 30.2148 20.4961C29.9935 20.3008 29.8828 19.9753 29.8828 19.5195V16.6484C29.8828 16.1406 30.0326 15.7826 30.332 15.5742C31.2826 14.8841 32.3112 14.3503 33.418 13.9727C34.5247 13.582 35.6641 13.3867 36.8359 13.3867Z" fill="" />
              </svg>
              <span>{prop.user.menu_2}</span>

            </button>
            <div className="langSetMenuAb">
              <svg className={`myIconSideBar forLang${''}`} width="69" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="1" width="62" height="62" stroke="" strokeWidth="2" />
                <line y1="33" x2="15" y2="33" stroke="" strokeWidth="2" />
                <line y1="17" x2="15" y2="17" stroke="" strokeWidth="2" />
                <line y1="50" x2="15" y2="50" stroke="" strokeWidth="2" />
                <path d="M21.0568 46.2727H22.3182L25.2841 53.517H25.3864L28.3523 46.2727H29.6136V55H28.625V48.3693H28.5398L25.8125 55H24.858L22.1307 48.3693H22.0455V55H21.0568V46.2727ZM31.7326 55V46.2727H36.9996V47.2102H32.7894V50.1591H36.7269V51.0966H32.7894V54.0625H37.0678V55H31.7326ZM45.8249 46.2727V55H44.8022L40.0465 48.1477H39.9613V55H38.9045V46.2727H39.9272L44.6999 53.142H44.7852V46.2727H45.8249ZM53.6669 46.2727H54.7237V52.0511C54.7237 52.6477 54.5831 53.1804 54.3018 53.6491C54.0234 54.1151 53.63 54.483 53.1214 54.7528C52.6129 55.0199 52.0163 55.1534 51.3317 55.1534C50.647 55.1534 50.0504 55.0199 49.5419 54.7528C49.0334 54.483 48.6385 54.1151 48.3572 53.6491C48.0788 53.1804 47.9396 52.6477 47.9396 52.0511V46.2727H48.9964V51.9659C48.9964 52.392 49.0902 52.7713 49.2777 53.1037C49.4652 53.4332 49.7322 53.6932 50.0788 53.8835C50.4283 54.071 50.8459 54.1648 51.3317 54.1648C51.8175 54.1648 52.2351 54.071 52.5845 53.8835C52.9339 53.6932 53.201 53.4332 53.3857 53.1037C53.5732 52.7713 53.6669 52.392 53.6669 51.9659V46.2727Z" fill="" />
                <path d="M39.3906 15.25V35.5938L42.8906 36.0312V38H32.7969V36.0312L36.3125 35.5938V18.5469L32.7344 18.6094V16.6875L39.3906 15.25Z" fill="" />
              </svg>
              <div className="LangSet"></div>
              <div className="langName">
                <div className="">Default language</div>
                <input className='inputTextLang lmed fontSmall' type="text" name="" maxLength='8' placeholder='Language' id="" />
                <input className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='3' placeholder='EN' id="" />

              </div>
              <div className="langStyle">

                <div className="">Symbol style</div>
                {/* STYLE 1 */}
                {styleSymbole.style1 ?
                  <div className=""><span>{styleSymbole.followed1 && styleSymbole.symbol1}</span> <span>25</span> <span>{!styleSymbole.followed1 && styleSymbole.symbol1}</span> </div>
                  : <div className=""><span></span><span>25</span><span></span></div>}
                {/* NONE */}
                <label htmlFor="none" className="labelLangRadio">
                  <input onChange={() => styleSymboleFn1('style1', false)} className='radioLang' type="radio" name="cstyle" maxLength='8' placeholder='Name of Language' id="none" />
                  <span>None</span>
                </label>
                {/* STYLED */}
                <label htmlFor="Styled" className="labelLangRadio">
                  <input onChange={() => styleSymboleFn1('style1', true)} checked={styleSymbole.style1} className='radioLang' type="radio" name="cstyle" maxLength='8' placeholder='Name of Language' id="Styled" />
                  <span>Styled</span>
                </label>

                <div className="">
                  {/* INPUT */}
                  <input onChange={styleSymboleFn2('symbol1')} value={styleSymbole.symbol1} className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='5' placeholder='$' id="" />

                  {/* SWITCH */}
                  <label htmlFor='followed1' className="timePikerContainer header2 switch">
                    <span>before</span><input onChange={styleSymboleFn3('followed1')} type="checkbox" name="followed" id="followed1" /><span className="slider"></span> <span>after</span>
                  </label>



                </div>
              </div>

              {/* <div className="langName">
                <div className="">2nd language</div>
                <input className='inputText fontSmall' type="text" name="" maxLength='8' placeholder='Name of Language' id="" />
                <input className='inputText fontSmall' type="text" name="" maxLength='3' placeholder='Code of Language' id="" />

              </div>
              <div className="langName">
                <div className="">3rd language</div>
                <input className='inputText fontSmall' type="text" name="" maxLength='8' placeholder='Name of Language' id="" />
                <input className='inputText fontSmall' type="text" name="" maxLength='3' placeholder='Code of Language' id="" />

              </div> */}
            </div>













            {/* MENU 3 */}
            {/* <button onClick={() => chooseLangStepFn('menu_3')} className={`btnChooseLang gridLang3 ${(chooseLangStep.menuLang != 'menu_3' && chooseLangStep.menuLang != '') ? 'hiddenMe' : 'showMe'}`} name='menu_3'> */}
            <button onClick={() => chooseLangStepFn('menu_3')}
              className={`btnChooseLang gridLang3`}
              name='menu_3'>
              <svg className={`myIconSideBar forLang ${''}`} width="69" height="64" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="1" width="62" height="62" stroke="" strokeWidth="2" />
                <line y1="33" x2="15" y2="33" stroke="" strokeWidth="2" />
                <line y1="17" x2="15" y2="17" stroke="" strokeWidth="2" />
                <line y1="50" x2="15" y2="50" stroke="" strokeWidth="2" />
                <path d="M20.9588 46.2727H22.5568L25.3352 53.0568H25.4375L28.2159 46.2727H29.8139V55H28.5611V48.6847H28.4801L25.9062 54.9872H24.8665L22.2926 48.6804H22.2116V55H20.9588V46.2727ZM31.7283 55V46.2727H37.1999V47.4062H33.0451V50.0653H36.9144V51.1946H33.0451V53.8665H37.2511V55H31.7283ZM46.0028 46.2727V55H44.7926L40.3565 48.5994H40.2756V55H38.9588V46.2727H40.1776L44.6179 52.6818H44.6989V46.2727H46.0028ZM53.5359 46.2727H54.8569V52.0128C54.8569 52.6236 54.7134 53.1648 54.4265 53.6364C54.1396 54.1051 53.7362 54.4744 53.2163 54.7443C52.6964 55.0114 52.087 55.1449 51.3881 55.1449C50.6921 55.1449 50.0842 55.0114 49.5643 54.7443C49.0444 54.4744 48.641 54.1051 48.354 53.6364C48.0671 53.1648 47.9237 52.6236 47.9237 52.0128V46.2727H49.2404V51.9062C49.2404 52.3011 49.3271 52.652 49.5004 52.9588C49.6765 53.2656 49.9251 53.5071 50.2461 53.6832C50.5671 53.8565 50.9478 53.9432 51.3881 53.9432C51.8313 53.9432 52.2134 53.8565 52.5344 53.6832C52.8583 53.5071 53.1055 53.2656 53.2759 52.9588C53.4492 52.652 53.5359 52.3011 53.5359 51.9062V46.2727Z" fill="" />
                <path d="M37.0312 12.3867C38.5286 12.3867 39.8372 12.6536 40.957 13.1875C42.0768 13.7083 42.9427 14.457 43.5547 15.4336C44.1667 16.3971 44.4727 17.5299 44.4727 18.832C44.4727 19.9518 44.2122 20.9219 43.6914 21.7422C43.1706 22.5495 42.4349 23.194 41.4844 23.6758C42.6693 24.1706 43.5872 24.8932 44.2383 25.8438C44.9023 26.7943 45.2344 27.9336 45.2344 29.2617C45.2344 30.681 44.9154 31.931 44.2773 33.0117C43.6523 34.0924 42.7344 34.9323 41.5234 35.5312C40.3125 36.1302 38.8672 36.4297 37.1875 36.4297C35.9115 36.4297 34.6224 36.2083 33.3203 35.7656C32.0182 35.3229 30.8529 34.724 29.8242 33.9688C29.4336 33.6823 29.2383 33.3568 29.2383 32.9922C29.2383 32.7318 29.349 32.4128 29.5703 32.0352C29.9089 31.4883 30.2865 31.2148 30.7031 31.2148C30.9115 31.2148 31.1328 31.2995 31.3672 31.4688C32.2266 32.1068 33.1576 32.6146 34.1602 32.9922C35.1628 33.3568 36.1719 33.5391 37.1875 33.5391C38.8021 33.5391 40.0326 33.1615 40.8789 32.4062C41.7253 31.638 42.1484 30.5898 42.1484 29.2617C42.1484 27.9206 41.7188 26.9049 40.8594 26.2148C40.013 25.5117 38.8216 25.1602 37.2852 25.1602H35.8594C35.4167 25.1602 35.0977 25.0625 34.9023 24.8672C34.7201 24.6589 34.6289 24.3138 34.6289 23.832C34.6289 23.3503 34.7201 23.0117 34.9023 22.8164C35.0977 22.6081 35.4167 22.5039 35.8594 22.5039H36.9336C38.418 22.5039 39.5443 22.1914 40.3125 21.5664C41.0807 20.9414 41.4648 20.0299 41.4648 18.832C41.4648 17.7253 41.0807 16.8594 40.3125 16.2344C39.5443 15.5964 38.457 15.2773 37.0508 15.2773C35.5404 15.2773 34.2578 15.5312 33.2031 16.0391V17.3477C33.2031 17.8034 33.0924 18.1289 32.8711 18.3242C32.6497 18.5195 32.2721 18.6172 31.7383 18.6172C31.2044 18.6172 30.8268 18.5195 30.6055 18.3242C30.3841 18.1289 30.2734 17.8034 30.2734 17.3477V15.2188C30.2734 14.9323 30.3125 14.7044 30.3906 14.5352C30.4818 14.3659 30.6185 14.2227 30.8008 14.1055C32.6628 12.9596 34.7396 12.3867 37.0312 12.3867Z" fill="" />
              </svg>
              <span>{prop.user.menu_3}</span>

            </button>
            

            {/* <label htmlFor="" className={`gridLang2`}>
              <input type="text" />sssssssssssssssssss
            </label> */}

          </div>
        </div>
      </div>

      {/* <form id='foodForm' encType='multipart/form-data' className={`formMenu`} onSubmit={submitAddLanguage}>


        <div className='stickyBox1'></div>

        <div className='stickyBox'>
  
          <div className='gridCat'>
   
            <div className='flexIcoCat'>


              <div className='boxInputText'>

                <input onChange={inputValue('catagory')} value={state.catagory} placeholder='Catagory' type='text' name='catagory' id='catagory' autoComplete='off' className='inputText fontCat' required />
              </div>
            </div>


          </div>
        </div>
        <div className='layoutManu'>
          {prop.listMenu.map((el, index) => (
            <div className={`layoutManu0 ${index % 2 !== 0 ? '' : 'light-grey'}`} key={index}>
              <div className='layoutManu1'>
                <i className='sr-only'>!FOOD NAME</i>
                <div className='flex'>
                  <span className='item'>{index + 1}</span>

                  <input value={el.food_name} type='text' name='food_name' id='food-name' autoComplete='off' className='inputTextFood fontNormal' placeholder='Food name' />
                </div>

                <i className='sr-only'>!DESCRIPTION</i>
                <div className=''>
                  <div className=''>
                    <textarea value={el.description} id='description' name='description' rows='2' className='inputText fontSmall testAreaD' placeholder='Description'></textarea>
                  </div>
                </div>

                <i className='sr-only'>!REMARK</i>
                <div className=''>
                  <div className=''>
                    <textarea value={el.remark} name='remark' rows='1' id='remark' className='inputText fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                  </div>
                </div>

                <i className='sr-only'>!PRICE</i>

                <div className='flex'>
                  <label htmlFor='price' className='labelPrice'>
                    Price
                  </label>
                  <div className=' '>
                    <input value={el.price} type='text' name='price' id='price' autoComplete='off' className='inputTextFood fontCat' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                  </div>
                </div>
              </div>

              <div className='layoutManu1'>
                <i className='sr-only'>!FOOD NAME</i>
                <div className='flex'>
                  <span className='item'>{index + 1}</span>

                  <input onChange={(event) => inputListValue(index, event)} value={el.food_name} type='text' name='food_name' id='food-name' autoComplete='off' className='inputTextFood fontNormal' placeholder='Food name' />
                </div>

                <i className='sr-only'>!DESCRIPTION</i>
                <div className=''>
                  <div className=''>
                    <textarea onChange={(event) => inputListValue(index, event)} value={el.description} id='description' name='description' rows='2' className='inputText fontSmall testAreaD' placeholder='Description'></textarea>
                  </div>
                </div>

                <i className='sr-only'>!REMARK</i>
                <div className=''>
                  <div className=''>
                    <textarea onChange={(event) => inputListValue(index, event)} value={el.remark} name='remark' rows='1' id='remark' className='inputText fontXSmall italic testAreaR' placeholder='Remark (optional)' />
                  </div>
                </div>

                <i className='sr-only'>!PRICE</i>

                <div className='flex'>
                  <label htmlFor='price' className='labelPrice'>
                    Price
                  </label>
                  <div className=' '>
                    <input onChange={(event) => inputListValue(index, event)} value={el.price} type='text' name='price' id='price' autoComplete='off' className='inputTextFood fontCat' pattern='[0-9]*.\d{0,2}' placeholder='0' />
                  </div>
                </div>
              </div>



            </div>

          ))}


        </div>

      </form> */}


      {/* ${!start ? 'show' : 'hiddenMe'} ${menuId ? 'hiddenMe' : 'show'} */}
      {/* ${!menuId ? 'hiddenMe' : 'show'} */}

      {/* <div onClick={() => setDeleteBtn(false)} className='buttonFormContainer '>


        <i className='sr-only'>!SAVE</i>
        <div className='saveBtnBox'>
          <div className={`${menuId ? 'displayNone' : 'displayFlex'} ${start ? 'displayFlex' : 'displayNone'}`}>
            <button type='submit' form='foodForm' className='saveBtn btnhover btnactive'>
              <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
                <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span> SAVE NEW<br />CATEGORY</span>
            </button>
          </div>

          <div className={` ${!menuId ? 'displayNone' : 'displayFlex'}`}>
            <button onClick={saveEditMenu} type='' className='saveBtn btnhover btnactive'>
              <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
                <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span> SAVE</span>

            </button>
          </div>
        </div>
      </div> */}












    </div>
  )
}

export default AddLanguage