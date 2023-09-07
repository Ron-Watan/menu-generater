import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ticketPass } from '../protectors/authorize';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

// import Swal from "../svgPriteTemp/sprite.svg";




const _10OnOffSettingMobile = (prop) => {

  const { user } = useSelector((state) => state.user);

  const [checkUpdateOnOff, setCheckUpdateOnOff] = useState(false)
  const onOffCheckBox = (name) => {
    setCheckUpdateOnOff(true)
    prop.setOnOffSetting({ ...prop.onOffSetting, [name]: !prop.onOffSetting[name] })
  }


  const saveOnOffSetting = () => {

    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveOnOffSetting`,
        {
          userId: user.userId,
          onOffSetting: prop.onOffSetting
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userOnOffSetting.onOffSetting;
          prop.setOnOffSetting(getReult)
    
        } else {
    
        }
      })
      .catch((err) => {

        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };


  useEffect(() => {
    if (checkUpdateOnOff) {
      saveOnOffSetting()
      setCheckUpdateOnOff(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prop.onOffSetting])




  // const getOnOffFromProp = () => {
  //   setOnOffSetting(prop.onOffSetting);
  // };

  // useEffect(() => {
  //   if (prop.navOnOff2OnOffSetting) {
  //     getOnOffFromProp();
  //   }
  // }, [prop.navOnOff2OnOffSetting]);





  return (
    <div className="MB_FullPage_Container">
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {
              // saveOnOffSetting()
              prop.setOnOffSetting_MB(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />


          </button>
          <span className='MB_textBtn'>Close</span>
        </div>
        <div className="MB_title">General Settings</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>
      </div>

      <div className="MB_AB_FullAgain zindexUnder1 ">
        <div className="MB_2LangLayout_Grid ">
          <div className="">
            <div className="MB_InScroll_fullNew paddingBottom_5">


              <div className="MB_OnOffContainer ">




                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Simulation Mode</span>
                    <label htmlFor='onOffSimulate' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('simulate')}
                        type='checkbox' name='onOffSimulate' id='onOffSimulate' checked={prop.onOffSetting.simulate || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>





                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Menu name</span>
                    <label htmlFor='onOffMenuName' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('menuName')}
                        type='checkbox' name='onOffMenuName' id='onOffMenuName' checked={prop.onOffSetting.menuName || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text ">Filter</span>
                    <label htmlFor='onOffFilter' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('filter')}
                        type='checkbox' name='onOffFilter' id='onOffFilter' checked={prop.onOffSetting.filter || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Vetgeterian</span>
                    <label htmlFor='onOffVetgeterian' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('vetgeterian')}
                        type='checkbox' name='onOffVetgeterian' id='onOffVetgeterian' checked={prop.onOffSetting.vetgeterian || ''} disabled={!prop.onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF ">Vegan</span>
                    <label htmlFor='onOffVegan' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('vegan')}
                        type='checkbox' name='onOffVegan' id='onOffVegan' checked={prop.onOffSetting.vegan || ''} disabled={!prop.onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Gluten-free</span>
                    <label htmlFor='onOffGlutenfree' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('gluten_free')}
                        type='checkbox' name='onOffGlutenfree' id='onOffGlutenfree' checked={prop.onOffSetting.gluten_free || ''} disabled={!prop.onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>

                  <div className={`MB_OF_Flex ${!prop.onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Halal</span>
                    <label htmlFor='onOffHalal' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('halal')}
                        type='checkbox' name='onOffHalal' id='onOffHalal' checked={prop.onOffSetting.halal || ''} disabled={!prop.onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>
                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text ">Side-Bar</span>
                    <label htmlFor='onOffSideBar' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('sideBar')}
                        type='checkbox' name='onOffSideBar' id='onOffSideBar' checked={prop.onOffSetting.sideBar || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>
                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Promotion/Banner</span>
                    <label htmlFor='onOffPromotion' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('banner')}
                        type='checkbox' name='onOffPromotion' id='onOffPromotion' checked={prop.onOffSetting.banner || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Food Description</span>
                    <label htmlFor='onOffdescription' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('description')}
                        type='checkbox' name='onOffdescription' id='onOffdescription' checked={prop.onOffSetting.description || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Description Accordian</span>
                    <label htmlFor='onOffaccordian' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('accordian')}
                        type='checkbox' name='onOffaccordian' id='onOffaccordian' checked={prop.onOffSetting.accordian || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>




                <div className="MB_OF_Flex_Col ">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text">Bottom-Bar</span>
                    <label htmlFor='onOffBottom' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('footbar')}
                        type='checkbox' name='onOffBottom' id='onOffBottom' checked={prop.onOffSetting.footbar || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Language</span>
                    <label htmlFor='onOffLanguage' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('langIcon')}
                        type='checkbox' name='onOffLanguage' id='onOffLanguage' checked={prop.onOffSetting.langIcon || ''} disabled={!prop.onOffSetting.footbar} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">List</span>
                    <label htmlFor='onOffList' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('favoritHeart')}
                        type='checkbox' name='onOffList' id='onOffList' checked={prop.onOffSetting.favoritHeart || ''} disabled={!prop.onOffSetting.footbar} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!prop.onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Feedback</span>
                    <label htmlFor='onOffFeedback' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('feedBack')}
                        type='checkbox' name='onOffFeedback' id='onOffFeedback' checked={prop.onOffSetting.feedBack || ''} disabled={!prop.onOffSetting.footbar} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>







              </div>
            </div>
          </div>
          {/* <div className="MB_InGrid_Bottom_Box">

            <div className={`MB_Frid_3Btn`}>

              <i className='x'>SAVE BUTTONT Edit Save Cancel</i>
              <button onClick={saveOnOffSetting} type='' className='MB_Sq_Btn MB_Btn_Color MB_G2'>

                <span>SAVE</span>
              </button>

              <i className='x'>CANCEL BUTTON Edit Save Cancel</i>
              <button
                onClick={() => prop.setOnOffSetting_MB(false)}

                className='MB_Sq_Btn MB_Btn_Border MB_G3'>

                <span>CANCEL</span>
              </button>


            </div>





          </div> */}
        </div>
      </div>
    </div >
  )
}

export default _10OnOffSettingMobile