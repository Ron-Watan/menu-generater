import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setUser } from '../redux/userSlice';
import { ticketPass } from '../protectors/authorize';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

// import Swal from "../svgPriteTemp/sprite.svg";




const _10OnOffSettingMobile = (prop) => {

  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  // value={this.state.fields.name || ''}   // (undefined || '') = ''
  const [onOffSetting, setOnOffSetting] = useState({

    menuName: '', banner: '', sideBar: '', filter: '', vetgeterian: '', vegan: '', gluten_free: '', halal: '',
    description: '', accordian: '', footbar: '', langIcon: '', favoritHeart: '', feedBack: ''
  })


  const onOffCheckBox = (name) => {

    setOnOffSetting({ ...onOffSetting, [name]: !onOffSetting[name] })
  }
  // console.log(onOffSetting)
  const saveOnOffSetting = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveOnOffSetting`,
        {
          userId: user.userId,
          onOffSetting: onOffSetting
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.userOnOffSetting.onOffSetting;
          setOnOffSetting(getReult)
        } else {
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        console.log("Can't not connect the server");
        Swal.fire("Can't not connect the server");
      });
  };

  const getOnOffFromProp = () => {
    setOnOffSetting(prop.onOffSetting);
  };

  useEffect(() => {
    if (prop.navOnOff2OnOffSetting) {
      getOnOffFromProp();
    }
  }, [prop.navOnOff2OnOffSetting]);

  return (
    <div className="MB_FullPage_Container">
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {
              saveOnOffSetting()
              prop.setOnOffSetting_MB(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />


          </button>
          <span className='MB_textBtn'>Close</span>
        </div>
        <div className="MB_title">On/Off <br /> Interfaces and Funtions</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>
      </div>

      <div className="MB_AB_FullAgain zindexUnder1 ">
        <div className="MB_2LangLayout_Grid ">
          <div className="">
            <div className="MB_InScroll_fullNew paddingBottom_5 BlueLinear overScroll_none">


              <div className="MB_OnOffContainer ">










                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Menu name</span>
                    <label htmlFor='onOffMenuName' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('menuName')}
                        type='checkbox' name='onOffMenuName' id='onOffMenuName' checked={onOffSetting.menuName} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text ">Filter</span>
                    <label htmlFor='onOffFilter' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('filter')}
                        type='checkbox' name='onOffFilter' id='onOffFilter' checked={onOffSetting.filter || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Vetgeterian</span>
                    <label htmlFor='onOffVetgeterian' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('vetgeterian')}
                        type='checkbox' name='onOffVetgeterian' id='onOffVetgeterian' checked={onOffSetting.vetgeterian || ''} disabled={!onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF ">Vegan</span>
                    <label htmlFor='onOffVegan' className={`containerSwitch switchLang `}>
                      <input onChange={() => onOffCheckBox('vegan')}
                        type='checkbox' name='onOffVegan' id='onOffVegan' checked={onOffSetting.vegan || ''} disabled={!onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Gluten-free</span>
                    <label htmlFor='onOffGlutenfree' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('gluten_free')}
                        type='checkbox' name='onOffGlutenfree' id='onOffGlutenfree' checked={onOffSetting.gluten_free || ''} disabled={!onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>

                  <div className={`MB_OF_Flex ${!onOffSetting.filter && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Halal</span>
                    <label htmlFor='onOffHalal' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('halal')}
                        type='checkbox' name='onOffHalal' id='onOffHalal' checked={onOffSetting.halal || ''} disabled={!onOffSetting.filter} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>
                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text ">SideBar</span>
                    <label htmlFor='onOffSideBar' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('sideBar')}
                        type='checkbox' name='onOffSideBar' id='onOffSideBar' checked={onOffSetting.sideBar || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>
                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Promotion/Banner</span>
                    <label htmlFor='onOffPromotion' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('banner')}
                        type='checkbox' name='onOffPromotion' id='onOffPromotion' checked={onOffSetting.banner || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Food Description</span>
                    <label htmlFor='onOffdescription' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('description')}
                        type='checkbox' name='onOffdescription' id='onOffdescription' checked={onOffSetting.description || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>

                <div className="MB_OF_Flex_Col colorof_title">
                  <div className="MB_OF_Flex ">
                    <span className="MB_OF_text">Description Accordian</span>
                    <label htmlFor='onOffaccordian' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('accordian')}
                        type='checkbox' name='onOffaccordian' id='onOffaccordian' checked={onOffSetting.accordian || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                </div>




                <div className="MB_OF_Flex_Col ">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text">Bottom-bar</span>
                    <label htmlFor='onOffBottom' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('footbar')}
                        type='checkbox' name='onOffBottom' id='onOffBottom' checked={onOffSetting.footbar || ''} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Language</span>
                    <label htmlFor='onOffLanguage' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('langIcon')}
                        type='checkbox' name='onOffLanguage' id='onOffLanguage' checked={onOffSetting.langIcon || ''} disabled={!onOffSetting.footbar} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">List</span>
                    <label htmlFor='onOffList' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('favoritHeart')}
                        type='checkbox' name='onOffList' id='onOffList' checked={onOffSetting.favoritHeart || ''} disabled={!onOffSetting.footbar} />
                      <span className='sliderLang forOFLang2' ></span>
                    </label>
                  </div>
                  <div className={`MB_OF_Flex ${!onOffSetting.footbar && 'opcaityTime'}`}>
                    <span className="MB_OF_text paddingleft_OF">Feedback</span>
                    <label htmlFor='onOffFeedback' className={`containerSwitch switchLang`}>
                      <input onChange={() => onOffCheckBox('feedBack')}
                        type='checkbox' name='onOffFeedback' id='onOffFeedback' checked={onOffSetting.feedBack || ''} disabled={!onOffSetting.footbar} />
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