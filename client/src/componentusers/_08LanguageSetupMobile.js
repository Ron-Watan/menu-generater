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
    setCheckLangChange(true)
    setLanguageSetup({ ...languageSetup, [name]: even.target.value });
  };
  const styleSymboleFn1 = (name, valBoolean) => {
    setCheckLangChange(true)

    setLanguageSetup({ ...languageSetup, [name]: valBoolean });
  };
  const styleSymboleFn2 = (name) => (even) => {
    setCheckLangChange(true)

    setLanguageSetup({ ...languageSetup, [name]: !even.target.checked });
  };

  const styleSymboleFn3 = (name) => {
    setCheckLangChange(true)

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
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          }).then(nothinh => {
            prop.setOnOffLangSetup_MB(false)
            setCheckLangChange(false)
          })
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

  const [checkLangChange, setCheckLangChange] = useState(false)


  const checkLangChangeFn = () => {

    if (checkLangChange) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {
          saveLangSetup();
          setCheckLangChange(false)

        } else if (result.isDenied) {
          setTimeout(() => {
            prop.setOnOffLangSetup_MB(false)
            setCheckLangChange(false)
          }, 500);
        }
      })

    } else {

      prop.setOnOffLangSetup_MB(false)
      setCheckLangChange(false)

    }
  }
















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
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button onClick={() => {
            checkLangChangeFn()
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


      <div className="MB_Standard_0_FullAgain  MB_SetGrid_ForBtn zindexUnderTop">
        <div className="MB_Standard_Section_canScroll  MB_Make_PadingTime MB_Wrap_ForBtn " >

          <div className="  " >
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

        <div className="MB_Positon_Bottom_btn">
          <div className="MB_Frid_3Btn">

            {/* SAVE BUTTON */}

            <button
              onClick={() => {

                saveLangSetup();

              }}
              className='MB_Sq_Btn SaveBtnSize MB_Btn_Color  MB_G2'>
              <span>Save</span>
            </button>

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


    </div>

  );
};

export default _08LanguageSetupMobile;
