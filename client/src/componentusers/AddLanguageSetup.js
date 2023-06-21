
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { ticketPass } from '../protectors/authorize';
import { setUser } from '../redux/userSlice';
const AddLanguageSetup = (prop) => {

  // SETUP STYLE CURRENTCY
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [languageSetup, setLanguageSetup] = useState({
    onLanguage_2: false,
    language_1: 'English', code_1: 'EN', symbol_1: '$', style_1: false, followed_1: true,
    language_2: '', code_2: '', symbol_2: '', style_2: true, followed_2: true,
  })

  const styleSymboleFn0 = (name) => (even) => {
    setLanguageSetup({ ...languageSetup, [name]: even.target.value })
  }
  const styleSymboleFn1 = (name, valBoolean) => {
    setLanguageSetup({ ...languageSetup, [name]: valBoolean })
  }
  const styleSymboleFn2 = (name) => (e) => {
    setLanguageSetup({ ...languageSetup, [name]: !e.target.checked })
  }

  const [onOffChoose, setnOffChoose] = useState(true)




  const saveLangSetup = () => {

    // dispath(showLoading());

    axios
      .post(`${process.env.REACT_APP_API}/user/saveLangSetup`,
        {
          userId: user.userId, languageSetup

        }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          dispath(setUser(result.data.userMenu));
          // dispath(hideLoading());
          Swal.fire({
            title: 'SAVED',
            text: 'Your menu has been saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            iconColor: '#cb2722',
            timer: 2000,
          });


        } else {
          Swal.fire(result.data.message);
          // dispath(hideLoading());
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };







  const getLangFromProp = () => {
    setLanguageSetup(prop.languageSetup)
  }


  useEffect(() => {
    if (prop.navLang2LangSetUp) {
      getLangFromProp();
    }
  }, [prop.navLang2LangSetUp]);


  console.log(languageSetup)



  //-//=//-//=//-//=//-//=//-

  return (




    <div className={`chooseMenuLang ${!onOffChoose && 'hiddenMe'}`}>

      <div className="windowFloatLang">
        <div className="topbarWin">
          <button onClick={() => prop.setOnOffLangSetup(false)} className='boxCancel'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="windowFloatLangBorder">
          <div className="">
            <div className="titletopLang">Default Language</div>
            <div className="langSetMenuAb">

              <div className="LangSet">

                <div className="langName">

                  <input onChange={styleSymboleFn0('language_1')} value={languageSetup.language_1} className='inputTextLang lmed fontSmall' type="text" name="" maxLength='8' placeholder='Language' id="" />
                  <input onChange={styleSymboleFn0('code_1')} value={languageSetup.code_1} className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='3' placeholder='Code' id="" />
                  <input onChange={styleSymboleFn0('symbol_1')} value={languageSetup.symbol_1} className='labelLn3 inputTextLang lsmall fontSmall' type="text" name="" maxLength='5' placeholder='Symbole' id="" />

                </div>
                <div className="langStyle">


                  {/* STYLE 1 */}

                  {languageSetup.style_1 ?
                    <div className="ex25"><span>{languageSetup.followed_1 && languageSetup.symbol_1}</span> <span>25</span> <span>&nbsp;{!languageSetup.followed_1 && languageSetup.symbol_1}</span> </div>
                    : <div className="ex25"><span></span><span>25</span><span></span></div>}

                  {/* <div className="boxSymStyle"> */}

                  <div className="symStyle-text">Symbol style</div>
                  <div className="boxSymStyle">
                    {/* NONE */}
                    <label htmlFor="none" className="labelLangRadio">
                      <input onChange={() => styleSymboleFn1('style_1', false)} checked={!languageSetup.style_1} className='radioLang' type="radio" name="cstyle1" id="none" />
                      <span>None</span>
                    </label>


                    <div className="flexStyleBeAf">
                      {/* STYLED */}
                      <label htmlFor="Styled" className="labelLangRadio">
                        <input onChange={() => styleSymboleFn1('style_1', true)} checked={languageSetup.style_1} className='radioLang' type="radio" name="cstyle1" id="Styled" />
                        <span>Styled</span>
                      </label>
                      {/* SWITCH */}
                      <label htmlFor='followed1' className={`containerSwitch switchLang ${!languageSetup.style_1 && 'opcaityTime'}`}>
                        <input onChange={styleSymboleFn2('followed_1')} disabled={!languageSetup.style_1} type="checkbox" name="followed1" id="followed1" /> <span className="sliderLang"></span>
                      </label>


                    </div>
                  </div>
                  {/* </div> */}

                </div>

              </div>
            </div>
          </div>

          {/* //////////////////////////////// */}
          <div className="">
            <div className="titletopLang">2nd Language</div>
            <div className="langSetMenuAb">

              <div className="LangSet">

                <div className="langName">
                  <input onChange={styleSymboleFn0('language_2')} value={languageSetup.language_2} className='inputTextLang lmed fontSmall' type="text" name="" maxLength='8' placeholder='Language' id="" />
                  <input onChange={styleSymboleFn0('code_2')} value={languageSetup.code_2} className='inputTextLang lsmall fontSmall' type="text" name="" maxLength='3' placeholder='Code' id="" />
                  <input onChange={styleSymboleFn0('symbol_2')} value={languageSetup.symbol_2} className='labelLn3 inputTextLang lsmall fontSmall' type="text" name="" maxLength='5' placeholder='Symbole' id="" />

                </div>
                <div className="langStyle">


                  {/* STYLE 1 */}

                  {languageSetup.style_2 ?
                    <div className="ex25"><span>{languageSetup.followed_2 && languageSetup.symbol_2}</span> <span>25</span> <span>&nbsp;{!languageSetup.followed_2 && languageSetup.symbol_2}</span> </div>
                    : <div className="ex25"><span></span><span>25</span><span></span></div>}

                  {/* <div className="boxSymStyle"> */}

                  <div className="symStyle-text">Symbol style</div>
                  <div className="boxSymStyle">
                    {/* NONE */}
                    <label htmlFor="none2" className="labelLangRadio">
                      <input onChange={() => styleSymboleFn1('style_2', false)} checked={!languageSetup.style_2} className='radioLang' type="radio" name="cstyle2" id="none2" />
                      <span>None</span>
                    </label>


                    <div className="flexStyleBeAf">
                      {/* STYLED */}
                      <label htmlFor="Styled2" className="labelLangRadio">
                        <input onChange={() => styleSymboleFn1('style_2', true)} checked={languageSetup.style_2} className='radioLang' type="radio" name="cstyle2" id="Styled2" />
                        <span>Styled</span>
                      </label>
                      {/* SWITCH */}
                      <label htmlFor='followed2' className={`containerSwitch switchLang ${!languageSetup.style_2 && 'opcaityTime'}`}>
                        <input onChange={styleSymboleFn2('followed_2')} disabled={!languageSetup.style_2} type="checkbox" name="followed2" id="followed2" /> <span className="sliderLang"></span>
                      </label>


                    </div>
                  </div>
                  {/* </div> */}

                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="boxBtnLang">
          <button onClick={saveLangSetup} className='mainBtn saveBtnColor'>
            <svg width="30" height="30" viewBox="0 0 65 65" fill="none">
              <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
              <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>SAVE</span>
          </button>
          <button onClick={() => prop.setOnOffLangSetup(false)} className='mainBtn cancelBtnColor'>
            <svg width="30" height="30" viewBox="0 0 65 65" fill="none">
              <path d="M12 12L53 54" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 54L53 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M62 1H3C1.89543 1 1 1.89543 1 3V62C1 63.1046 1.89543 64 3 64H62C63.1046 64 64 63.1046 64 62V3C64 1.89543 63.1046 1 62 1Z" stroke="white" strokeWidth="2" />
            </svg>

            <span>CANCEL</span>
          </button>
        </div>
      </div>
    </div>













  )
}

export default AddLanguageSetup