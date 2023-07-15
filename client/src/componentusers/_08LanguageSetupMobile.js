import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { ticketPass } from '../protectors/authorize';
import { setUser } from '../redux/userSlice';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

const _08LanguageSetupMobile = (prop) => {
  // SETUP STYLE CURRENTCY
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [languageSetup, setLanguageSetup] = useState({
    onLanguage_2: '',
    language_1: 'English',
    code_1: 'EN',
    symbol_1: '$',
    style_1: false,
    followed_1: true,
    language_2: '',
    code_2: '',
    symbol_2: '',
    style_2: true,
    followed_2: true,
  });

  const styleSymboleFn0 = (name) => (even) => {

    setLanguageSetup({ ...languageSetup, [name]: even.target.value });
  };
  const styleSymboleFn1 = (name, valBoolean) => {
    setLanguageSetup({ ...languageSetup, [name]: valBoolean });
  };
  const styleSymboleFn2 = (name) => (even) => {

    setLanguageSetup({ ...languageSetup, [name]: !even.target.checked });
  };

  const styleSymboleFn3 = (name) => {
    setLanguageSetup({ ...languageSetup, [name]: !languageSetup[name] });
  };

  const [onOffLang2nd, setOnOffLang2nd] = useState(false);

  const [onOffChoose, setnOffChoose] = useState(true);


  const saveLangSetup = () => {
    // dispath(showLoading());

    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveLangSetup`,
        {
          userId: user.userId,
          languageSetup,
        },
        ticketPass
      )
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
    setLanguageSetup(prop.languageSetup);
  };

  useEffect(() => {
    if (prop.navLang2LangSetUp) {
      getLangFromProp();
    }
  }, [prop.navLang2LangSetUp]);


  //-//=//-//=//-//=//-//=//-

  return (

    <div className=''>
      <div className="topBar_function">

        <div className="GruopBtn">
          <button onClick={() => {
            prop.setOnOffLangSetup_MB(false)
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>
        <div className="MB_title">Language Setting</div>
        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>

        </div>
      </div>


      <div className="MB_Standard_0_FullAgain  zindexUnderTop MB_PadingLang_side">
        <div className="MB_Make_PadingLang  overScroll_none" >
          <div className='MB_titletopLang'>Default Language</div>
          <div className='MB_langSetMenuAb '>
            <div className='LangSet'>
              <div className='langName'>
                <input onChange={styleSymboleFn0('language_1')} value={languageSetup.language_1} className='MB_inputTextLang lmed fontSmall' type='text' name='' maxLength='8' placeholder='Language' id='' />
                <input onChange={styleSymboleFn0('code_1')} value={languageSetup.code_1} className='MB_inputTextLang lsmall fontSmall' type='text' name='' maxLength='3' placeholder='Code' id='' />
                <input onChange={styleSymboleFn0('symbol_1')} value={languageSetup.symbol_1} className='MB_inputTextLang lsmall fontSmall' type='text' name='' maxLength='5' placeholder='Symbole' id='' />
              </div>
              <div className='MB_langStyle'>
                {/* STYLE 1 */}
                <div className="MB_langStyle_1">
                  {languageSetup.style_1 ? (
                    <div className='MB_ex25'>
                      <span>{languageSetup.followed_1 && languageSetup.symbol_1}</span> <span>25</span> <span>&nbsp;{!languageSetup.followed_1 && languageSetup.symbol_1}</span>{' '}
                    </div>
                  ) : (
                    <div className='MB_ex25'>
                      <span></span>
                      <span>25</span>
                      <span></span>
                    </div>
                  )}
                  <div className='MB_symStyle-text'>SYMBOL STYLE</div>

                </div>

                {/* <div className="boxSymStyle"> */}


                <div className='boxSymStyle'>
                  {/* NONE */}
                  <label htmlFor='MB_none' className='MB_LangRadioBtn exPdR'>
                    <input onChange={() => styleSymboleFn1('style_1', false)} checked={!languageSetup.style_1}
                      className='radioLang' type='radio' name='MB_cstyle1' id='MB_none' />
                    <span className='MB_radioLang_span'>NONE</span>
                  </label>


                  <div className='flexStyleBeAf'>

                    {/* STYLED */}
                    <label htmlFor='MB_Styled' className='MB_LangRadioBtn'>
                      <input onChange={() => styleSymboleFn1('style_1', true)} checked={languageSetup.style_1}
                        className='radioLang' type='radio' name='MB_cstyle1' id='MB_Styled' />
                      <span className='MB_radioLang_span'>STYLED</span>

                      {/* SWITCH */}
                      <label htmlFor='MB_followed1' className={`containerSwitch switchLang ${!languageSetup.style_1 && 'opcaityTime'}`}>
                        <input onChange={styleSymboleFn2('followed_1')} disabled={!languageSetup.style_1}
                          type='checkbox' name='MB_followed1' id='MB_followed1' /> <span className='sliderLang sliderLang1'></span>
                      </label>
                    </label>



                  </div>


                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////// */}
        <div className='bd_Top'>

          <div className='MB_titletopLang '>
            <span>2nd Language</span>

            <label htmlFor='onOffLang2' className={`containerSwitch switchLang `}>
              <input onChange={
                () => styleSymboleFn3('onLanguage_2')
              } type='checkbox' name='onOffLang2' id='onOffLang2' checked={languageSetup.onLanguage_2} />
              <span className='sliderLang forOFLang2' ></span>
            </label>
          </div>

          <div className={`MB_langSetMenuAb ${!languageSetup.onLanguage_2 && 'MB_opcaityTime'}`}>
            <div className='LangSet'>
              <div className='langName'>
                <input onChange={styleSymboleFn0('language_2')} value={languageSetup.language_2} className='MB_inputTextLang lmed fontSmall' type='text' name='' maxLength='8' placeholder='Language' id='' disabled={!languageSetup.onLanguage_2} />
                <input onChange={styleSymboleFn0('code_2')} value={languageSetup.code_2} className='MB_inputTextLang lsmall fontSmall' type='text' name='' maxLength='3' placeholder='Code' id='' disabled={!languageSetup.onLanguage_2} />
                <input onChange={styleSymboleFn0('symbol_2')} value={languageSetup.symbol_2} className='MB_inputTextLang lsmall fontSmall' type='text' name='' maxLength='5' placeholder='Symbole' id='' disabled={!languageSetup.onLanguage_2} />
              </div>
              <div className='MB_langStyle'>
                {/* STYLE 2 */}
                <div className="MB_langStyle_1">
                  {languageSetup.style_2 ? (
                    <div className='MB_ex25'>
                      <span>{languageSetup.followed_2 && languageSetup.symbol_2}</span> <span>25</span> <span>&nbsp;{!languageSetup.followed_2 && languageSetup.symbol_2}</span>{' '}
                    </div>
                  ) : (
                    <div className='MB_ex25'>
                      <span></span>
                      <span>25</span>
                      <span></span>
                    </div>
                  )}

                  <div className='MB_symStyle-text'>SYMBOL STYLE</div>

                </div>
                <div className='boxSymStyle'>
                  {/* NONE */}
                  <label htmlFor='MB_none2' className='MB_LangRadioBtn exPdR'>
                    <input onChange={() => styleSymboleFn1('style_2', false)} checked={!languageSetup.style_2} className='radioLang'
                      type='radio' name='MB_cstyle2' id='MB_none2' disabled={!languageSetup.onLanguage_2} />
                    <span className='MB_radioLang_span'>NONE</span>
                  </label>

                  <div className='flexStyleBeAf'>
                    {/* STYLED */}
                    <label htmlFor='MB_Styled2' className='MB_LangRadioBtn'>
                      <input onChange={() => styleSymboleFn1('style_2', true)} checked={languageSetup.style_2} className='radioLang'
                        type='radio' name='MB_cstyle2' id='MB_Styled2' disabled={!languageSetup.onLanguage_2} />
                      <span className='MB_radioLang_span'>STYLED</span>

                      {/* SWITCH */}
                      <label htmlFor='MB_followed2' className={`containerSwitch switchLang ${!languageSetup.style_2 && 'opcaityTime'}`}>
                        <input onChange={styleSymboleFn2('followed_2')} disabled={!languageSetup.style_2 || !languageSetup.onLanguage_2} type='checkbox' name='MB_followed2' id='MB_followed2' /> <span className='sliderLang sliderLang1'></span>
                      </label>

                    </label>

                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="MB_Frid_3Btn">
        <i className="x">SAVE BUTTON</i>

        <button onClick={saveLangSetup}
          className='MB_Sq_Btn MB_Btn_Color MB_G2'>
          <span>SAVE</span>
        </button>

        <i className="x">CANCEL BUTTON</i>

        <button onClick={() => prop.setOnOffLangSetup_MB(false)}
          className='MB_Sq_Btn MB_Btn_Border MB_G3'>

          <span>CANCEL</span>
        </button>

      </div> */}

      {/* <div className='boxBtnLang'>
        <button onClick={saveLangSetup} className='mainBtn saveBtnColor'>
          <svg width='30' height='30' viewBox='0 0 65 65' fill='none'>
            <rect x='1' y='1' width='63' height='63' rx='2' stroke='white' strokeWidth='2' />
            <path d='M32 12L32 53' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <path d='M32 53L12 33' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <path d='M32 53L52 33' stroke='white' strokeWidth='2' strokeLinecap='round' />
          </svg>
          <span>SAVE</span>
        </button>
        <button onClick={() => prop.setOnOffLangSetup(false)} className='mainBtn cancelBtnColor'>
          <svg width='30' height='30' viewBox='0 0 65 65' fill='none'>
            <path d='M12 12L53 54' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <path d='M12 54L53 12' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <path d='M62 1H3C1.89543 1 1 1.89543 1 3V62C1 63.1046 1.89543 64 3 64H62C63.1046 64 64 63.1046 64 62V3C64 1.89543 63.1046 1 62 1Z' stroke='white' strokeWidth='2' />
          </svg>

          <span>CANCEL</span>
        </button>
      </div> */}
    </div>

  );
};

export default _08LanguageSetupMobile;
