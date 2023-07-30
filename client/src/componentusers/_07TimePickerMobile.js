import React, { useEffect, useState } from 'react';

import { timePickerData } from './_21TimePickerData';
import { timePickerBaseData } from './_21TimePickerData';
import '../style/timePicker.css';
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice';
import axios from 'axios';
import { ticketPass } from '../protectors/authorize';
import { setUser } from '../redux/userSlice';
import Swal from 'sweetalert2';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'

const _07TimePickerMobile = (prop) => {
  //= prop.timeSetup prop.setTimeSetup
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [timeStart, setTimeStart] = useState({
    hrsM1: '00',
    minsM1: '00',
    hrsM2: '00',
    minsM2: '00',
    hrsM3: '00',
    minsM3: '00',
  });

  const [timeEnd, setTimeEnd] = useState({
    hrsM1: '00',
    minsM1: '00',
    hrsM2: '00',
    minsM2: '00',
    hrsM3: '00',
    minsM3: '00',
  });

  const [checkTimeChange, setCheckTimeChange] = useState(false)


  const timeStartFn = (name) => (e) => {
    setCheckTimeChange(true)
    setTimeStart({ ...timeStart, [name]: e.target.value });
  };

  const timeEndFn = (name) => (e) => {
    setCheckTimeChange(true)

    setTimeEnd({ ...timeEnd, [name]: e.target.value });
  };

  const [sumTimeM1, setSumTimeM1] = useState({ start: '', end: '' });
  const [sumTimeM2, setSumTimeM2] = useState({ start: '', end: '' });
  const [sumTimeM3, setSumTimeM3] = useState({ start: '', end: '' });

  const [timePicker, setTimePicker] = useState([...timePickerData]);
  const [timePickerBase, setTimePickerBase] = useState(timePickerBaseData);

  function checklengthBase(arrayStart, arrayEnd) {
    const startSliceBase = timePickerBase.indexOf(arrayStart);
    const endSliceBase = timePickerBase.indexOf(arrayEnd);
    const count = timePickerBase.slice(startSliceBase, endSliceBase + 1).length;
    return count;
  }

  function sumValueOftiem(timeHrs, timeMims) {
    return Number(timeHrs) * 60 * 60 + Number(timeMims) * 60;
  }
  let check_1 = false;
  let check_2 = false;
  let check_3 = false;

  const [errorTimeSet, setErrorTimeSet] = useState(false)


  function menu_1() {
    //-
    const arrayStartM1 = sumValueOftiem(timeStart.hrsM1, timeStart.minsM1);
    const arrayEndM1 = sumValueOftiem(timeEnd.hrsM1, timeEnd.minsM1) - 60; // need to find in Array

    const startSliceM1 = timePicker.indexOf(arrayStartM1);
    const endSliceM1 = timePicker.indexOf(arrayEndM1);

    if (startSliceM1 === -1 || endSliceM1 === -1) {
      // alert('time 1 slice no match');
      setErrorTimeSet(true)
      return (check_1 = false);
    }

    const minusM1 = endSliceM1 - startSliceM1;
    if (minusM1 <= 0) {
      // alert('time 1 minus no match');
      setErrorTimeSet(true)
      return (check_1 = false);
    }

    timePicker.splice(startSliceM1, minusM1 + 1);

    setSumTimeM1({ start: arrayStartM1, end: arrayEndM1 + 59 });

    // console.log('Complete Schedule 1');

    return (check_1 = true);
  }

  function menu_2() {
    const arrayStartM2 = sumValueOftiem(timeStart.hrsM2, timeStart.minsM2);
    const arrayEndM2 = sumValueOftiem(timeEnd.hrsM2, timeEnd.minsM2) - 60;

    const startSliceM2 = timePicker.indexOf(arrayStartM2);
    const endSliceM2 = timePicker.indexOf(arrayEndM2);
    console.log(startSliceM2, endSliceM2);

    if (startSliceM2 === -1 || endSliceM2 === -1) {
      // alert('time 2 slice no match');
      setErrorTimeSet(true)
      return (check_2 = false);
    }

    const minusM2 = endSliceM2 - startSliceM2;
    if (minusM2 <= 0) {
      // alert('time 2 minus no match');
      setErrorTimeSet(true)
      return (check_2 = false);
    }

    const checklengthBase2 = checklengthBase(arrayStartM2, arrayEndM2);
    const checklengthM2 = timePicker.splice(startSliceM2, minusM2 + 1).length;
    if (checklengthBase2 !== checklengthM2) {
      // alert('!!!!');
      setErrorTimeSet(true)
      return (check_2 = false);
    }

    setSumTimeM2({ start: arrayStartM2, end: arrayEndM2 + 59 });

    // console.log('Complete Schedule 2');

    return (check_2 = true);
  }

  function menu_3() {
    const arrayStartM3 = sumValueOftiem(timeStart.hrsM3, timeStart.minsM3);
    const arrayEndM3 = sumValueOftiem(timeEnd.hrsM3, timeEnd.minsM3) - 60;

    const startSliceM3 = timePicker.indexOf(arrayStartM3);
    const endSliceM3 = timePicker.indexOf(arrayEndM3);

    if (startSliceM3 === -1 || endSliceM3 === -1) {
      // alert('time 3 slice no match');
      setErrorTimeSet(true)
      return (check_3 = false);
    }
    const minusM3 = endSliceM3 - startSliceM3;
    if (minusM3 <= 0) {
      // alert('time 3 minus no match');
      setErrorTimeSet(true)
      return (check_3 = false);
    }
    const checklengthBase3 = checklengthBase(arrayStartM3, arrayEndM3);
    const checklengthM3 = timePicker.splice(startSliceM3, minusM3 + 1).length;
    if (checklengthBase3 !== checklengthM3) {
      // alert('!!!!');
      setErrorTimeSet(true)
      return (check_3 = false);
    }


    setSumTimeM3({ start: arrayStartM3, end: arrayEndM3 + 59 });

    // console.log('Complete Schedule 3');
    return (check_3 = true);
  }

  // function reverseToTimeStart(numberTime) {
  //   if (!numberTime) return '00'
  //   let hrs = Math.floor(numberTime / 60 / 60)
  //   let mins = ((numberTime / 60 / 60) - hrs) * 60

  //   if (mins === 0) mins = `${mins}0`
  //   if (hrs < 10) hrs = `0${hrs}`

  //   return `${hrs}:${mins}`
  // }

  // function reverseToTimeEnd(numberTime) {
  //   if (!numberTime) return '00'
  //   let numberTimePlus = numberTime + 1
  //   return reverseToTimeStart(numberTimePlus)
  // }

  function reverseStartHrs(numberTime) {
    if (!numberTime) return '00';
    let hrs = Math.floor(numberTime / 60 / 60);
    if (hrs < 10) hrs = `0${hrs}`;
    return `${hrs}`;
  }
  function reverseStartMins(numberTime) {
    if (!numberTime) return '00';
    let hrs = Math.floor(numberTime / 60 / 60);
    let mins = (numberTime / 60 / 60 - hrs) * 60;
    if (mins === 0) mins = `${mins}0`;
    return `${mins}`;
  }

  function reverseEndHrs(numberTime) {
    if (!numberTime) return '00';
    let numberTimePlus = numberTime + 1;
    return reverseStartHrs(numberTimePlus);
  }
  function reverseEndMins(numberTime) {
    if (!numberTime) return '00';
    let numberTimePlus = numberTime + 1;
    return reverseStartMins(numberTimePlus);
  }

  // qqq
  // client need typetime to load data menu and time and button style
  const [onOffMenu, setOnOffMenu] = useState(false);
  const [timeType, setTimeType] = useState(true);
  const [menuAllDayType, setMenuAllDayType] = useState({
    menu_1: true,
    menu_2: false,
    menu_3: false,
  });
  const [menuSelectType, setMenuSelectType] = useState({
    menu_1: '',
    menu_2: '',
    menu_3: '',
  });

  const menuAllDayTypeValue = (name) => {
    setCheckTimeChange(true)
    setMenuAllDayType({ ...menuAllDayType, [name]: !menuAllDayType[name] });
  };

  const setTimeTypeFn = (valBool) => {
    setCheckTimeChange(true)
    if (valBool === true) {
      setTimeType(true);
      setSumTimeM1({ start: '', end: '' });
      setSumTimeM2({ start: '', end: '' });
      setSumTimeM3({ start: '', end: '' });
      setMenuSelectType({ menu_1: '', menu_2: '', menu_3: '' });
    }
  };

  const menuSelectTypeValue = (name, e) => {
    setCheckTimeChange(true)
    if (e.target.checked) {
      setMenuSelectType({ ...menuSelectType, [name]: e.target.value });
    } else {
      setMenuSelectType({ ...menuSelectType, [name]: '' });
      if (name === 'menu_1') return setSumTimeM1({ start: '', end: '' });
      if (name === 'menu_2') return setSumTimeM2({ start: '', end: '' });
      if (name === 'menu_3') return setSumTimeM3({ start: '', end: '' });
    }
  };

  let code = menuSelectType.menu_1 + menuSelectType.menu_2 + menuSelectType.menu_3;

  const [windowConfirm, setWindowConfirm] = useState(false);


  const setTimeValue = (code) => {
    if (timeType) return setWindowConfirm(true);
    switch (code) {
      case '1':
        menu_1();
        setWindowConfirm(check_1);

        break;
      case '2':
        menu_2();
        setWindowConfirm(check_2);

        break;
      case '3':
        menu_3();
        setWindowConfirm(check_3);

        break;
      case '12':
        menu_1();
        menu_2();
        setWindowConfirm(check_1 && check_2);
        break;
      case '13':
        menu_1();
        menu_3();
        setWindowConfirm(check_1 && check_3);

        break;
      case '23':
        menu_2();
        menu_3();
        setWindowConfirm(check_2 && check_3);

        break;
      case '123':
        menu_1();
        menu_2();
        menu_3();
        setWindowConfirm(check_1 && check_2 && check_3);

        break;
      default:
        break;
    }
  };

  const saveTimeSetup = () => {
    dispath(showLoading())
    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveTimeSetup`,
        {
          userId: user.userId,
          timeSetup: {
            timeType: timeType,
            allDayType: menuAllDayType,
            codeSelectType: menuSelectType,
            selectType: {
              menu_1: sumTimeM1,
              menu_2: sumTimeM2,
              menu_3: sumTimeM3,
            },
          },
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          Swal.fire({
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(nothinh => {
            prop.setOnOffTimePicker_MB(false);
            dispath(setUser(result.data.userMenu));
          
          })
        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        console.log("Time Problem");
        Swal.fire("Can't not connect the server");
      });
  };



  const getTimeFromProp = () => {
    setTimeType(prop.timeSetup.timeType);
    setMenuAllDayType(prop.timeSetup.allDayType);
    setMenuSelectType(prop.timeSetup.codeSelectType);
    const selectType1 = prop.timeSetup.selectType.menu_1;
    const selectType2 = prop.timeSetup.selectType.menu_2;
    const selectType3 = prop.timeSetup.selectType.menu_3;
    setSumTimeM1(selectType1);
    setSumTimeM2(selectType2);
    setSumTimeM3(selectType3);

    setTimeStart({
      hrsM1: reverseStartHrs(selectType1.start),
      minsM1: reverseStartMins(selectType1.start),
      hrsM2: reverseStartHrs(selectType2.start),
      minsM2: reverseStartMins(selectType2.start),
      hrsM3: reverseStartHrs(selectType3.start),
      minsM3: reverseStartMins(selectType3.start),
    });
    setTimeEnd({
      hrsM1: reverseEndHrs(selectType1.end),
      minsM1: reverseEndMins(selectType1.end),
      hrsM2: reverseEndHrs(selectType2.end),
      minsM2: reverseEndMins(selectType2.end),
      hrsM3: reverseEndHrs(selectType3.end),
      minsM3: reverseEndMins(selectType3.end),
    });
  };


  const checkTimeChangeFn = () => {

    if (checkTimeChange) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {
          setTimeValue(code);
          setTimePicker([...timePickerData]);
          setCheckTimeChange(false)
          // if (validation(saveSubmitFn) === true) {
          //   setTimeout(() => {
          //     prop.setCheckInputForm(false)
          //     prop.setStart(false)
          //     prop.setMenuId('')
          //   }, 1500);
          // }

        } else if (result.isDenied) {
          getTimeFromProp()
          setTimeout(() => {
            prop.setOnOffTimePicker_MB(false)
            setCheckTimeChange(false)
          }, 500);
        }
      })

    } else {

      prop.setOnOffTimePicker_MB(false)
      setCheckTimeChange(false)
      // if (prop.checkEditImg) prop.getAllImage()
      // if (prop.listMenu.length === 0) {
      // prop.setListMenu([prop.listMenuModel])
      // }
    }
  }










  useEffect(() => {
    if (errorTimeSet) {
      Swal.fire({
        title: 'Invalid input',
        toast: true,
        icon: 'error',
        showConfirmButton: false,

        timer: 1500,
      });
      setErrorTimeSet(false)
    }
    if (windowConfirm) {
      saveTimeSetup();
    }

  }, [timePicker])

  useEffect(() => {
    if (prop.navTime2TimePicker) {
      getTimeFromProp();
    }
  }, [prop.navTime2TimePicker]);


  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="">
      <div className="topBar_function backdrop_blur">

        <div className="GruopBtn">
          <button onClick={() => {
            checkTimeChangeFn()
          }} className="MB_Btn MB_Btn_Border">
            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className="MB_title">Menu Schedule Settings</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">
          </button>
        </div>
      </div>


      <div className="MB_Standard_0_FullAgain  MB_SetGrid_ForBtn zindexUnderTop">

        <div className="MB_Standard_Section_canScroll  MB_Make_PadingTime MB_Wrap_ForBtn " >

          <div className="MB_timePickerCard2 gapG15">


            <label htmlFor='MBallDay' className='MB_flexHeaderTime'>

              <div className='MB_TimeRadioBtn'>

                <input onChange={() => setTimeTypeFn(true)} type='radio' name='MBtimeType' id='MBallDay' checked={timeType} />

              </div>
              <span>All day</span>
            </label>

            <div className="MB_OF_Flex_Col">



              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_1}</span>

                <label className={`containerSwitch switchLang  ${!timeType && 'opcaityTime'}`}>


                  <input onChange={() => menuAllDayTypeValue('menu_1')} type='checkbox' name='menu_1' checked={timeType && menuAllDayType.menu_1} disabled={!timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>

              </div>
              <div className="MB_BorderBt"></div>
              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_2}</span>


                <label className={`containerSwitch switchLang  ${!timeType && 'opcaityTime'}`}>



                  <input onChange={() => menuAllDayTypeValue('menu_2')} type='checkbox' name='menu_2' checked={timeType && menuAllDayType.menu_2} id='' disabled={!timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>

              </div>
              <div className="MB_BorderBt"></div>

              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_3}</span>


                <label className={`containerSwitch switchLang  ${!timeType && 'opcaityTime'}`}>



                  <input onChange={() => menuAllDayTypeValue('menu_3')} type='checkbox' name='menu_3' checked={timeType && menuAllDayType.menu_3} id='' disabled={!timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>

              </div>












            </div>

          </div>
          {/* /////////////////////////////////////////////// */}

          <div className="MB_timePickerCard2">

            <label htmlFor='MBschedule' className='MB_flexHeaderTime'>

              <div className='MB_TimeRadioBtn'>
                <input onChange={() => {
                  setTimeType(false)
                  setCheckTimeChange(true)
                }} type='radio' name='MBtimeType' id='MBschedule' checked={!timeType} />
              </div>
              <span>Schedule</span>
            </label>


            {/* //- */}

            <div className="MB_OF_Flex_Col">

              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_1}</span>

                <label className={`containerSwitch switchLang  ${timeType && 'opcaityTime'}`}>

                  <input onChange={(e) => menuSelectTypeValue('menu_1', e)} type='checkbox' checked={!timeType && menuSelectType.menu_1} name='menu_1' value='1' id='' disabled={timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>

              </div>
              <div className="MB_BorderBt"></div>

              <div className={`MB_OF_Flex MB_OF_Flex_ex`}>
                <div className={`timePikerContainer MB_timeInput `}>
                  <div className={`MB_flexTime  ${menuSelectType.menu_1 !== '1' && 'opcaityTime'}`}>

                    <div className='timeBox'>
                      <div className='MB_inputTime'>

                        <select value={timeStart.hrsM1} onChange={timeStartFn('hrsM1')} name='hrsM1' id='' disabled={menuSelectType.menu_1 !== '1'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                        </select>

                        <span className='MB_px'>:</span>
                        <select onChange={timeStartFn('minsM1')} name='mins' id='' disabled={menuSelectType.menu_1 !== '1'} className=''>
                          <option value='00'>00</option>
                          <option value='15'>15</option>
                          <option value='30'>30</option>
                          <option value='45'>45</option>
                        </select>
                      </div>
                    </div>

                    <div className='textTo'>to</div>

                    <div className='timeBox'>

                      <div className='MB_inputTime'>
                        <select value={timeEnd.hrsM1} onChange={timeEndFn('hrsM1')} name='hrsM1' id='' disabled={menuSelectType.menu_1 !== '1'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                          <option value='24'>24</option>
                        </select>
                        <span className='MB_px'>:</span>
                        <select value={timeEnd.minsM1} onChange={timeEndFn('minsM1')} name='minsM1' id='' disabled={menuSelectType.menu_1 !== '1'} className=''>
                          <option value='00'>00</option>
                          {timeEnd.hrsM1 === '24' ? (
                            ''
                          ) : (
                            <>
                              <option value='15'>15</option>
                              <option value='30'>30</option>
                              <option value='45'>45</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className='oclock'>*24-hour clock</span>

                </div>
              </div>

            </div>




            {/* //- */}
            <div className="MB_OF_Flex_Col">

              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_2}</span>
                <label className={`containerSwitch switchLang  ${timeType && 'opcaityTime'}`}>


                  <input onChange={(e) => menuSelectTypeValue('menu_2', e)} type='checkbox' checked={!timeType && menuSelectType.menu_2} name='menu_2' value='2' id='' disabled={timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>
              </div>
              <div className="MB_BorderBt"></div>

              <div className={`MB_OF_Flex `}>
                <div className={`timePikerContainer MB_timeInput `}>
                  <div className={`MB_flexTime  ${menuSelectType.menu_2 !== '2' && 'opcaityTime'}`}>
                    <div className={`timeBox`}>
                      <div className='MB_inputTime'>
                        <select value={timeStart.hrsM2} onChange={timeStartFn('hrsM2')} name='hrsM2' id='' disabled={menuSelectType.menu_2 !== '2'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                        </select>
                        <span className='MB_px'>:</span>
                        <select onChange={timeStartFn('minsM2')} name='minsM2' id='' disabled={menuSelectType.menu_2 !== '2'} className=''>
                          <option value='00'>00</option>
                          <option value='15'>15</option>
                          <option value='30'>30</option>
                          <option value='45'>45</option>
                        </select>
                      </div>
                    </div>

                    <div className={`textTo`}>to</div>

                    <div className='timeBox'>
                      <div className='MB_inputTime'>
                        <select value={timeEnd.hrsM2} onChange={timeEndFn('hrsM2')} name='hrsM2' id='' disabled={menuSelectType.menu_2 !== '2'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                          <option value='24'>24</option>
                        </select>
                        <span className='MB_px'>:</span>
                        <select value={timeEnd.minsM2} onChange={timeEndFn('minsM2')} name='minsM2' id='' disabled={menuSelectType.menu_2 !== '2'} className=''>
                          <option value='00'>00</option>
                          {timeEnd.hrsM2 === '24' ? (
                            ''
                          ) : (
                            <>
                              <option value='15'>15</option>
                              <option value='30'>30</option>
                              <option value='45'>45</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <span className='oclock'>*24-hour clock</span>

                </div>
              </div>

            </div>



            <div className="MB_OF_Flex_Col">

              <div className="MB_OF_Flex colorof_title">
                <span className="MB_OF_text ">{prop.menuName.menu_3}</span>
                <label className={`containerSwitch switchLang  ${timeType && 'opcaityTime'}`}>

                  <input onChange={(e) => menuSelectTypeValue('menu_3', e)} type='checkbox' checked={!timeType && menuSelectType.menu_3} name='menu_3' value='3' id='' disabled={timeType} />
                  <span className='sliderLang forOFLang2'></span>

                </label>
              </div>
              <div className="MB_BorderBt"></div>

              <div className={`MB_OF_Flex `}>
                <div className={`timePikerContainer MB_timeInput`}>
                  <div className={`MB_flexTime  ${menuSelectType.menu_3 !== '3' && 'opcaityTime'}`}>
                    <div className='timeBox'>
                      <div className='MB_inputTime'>
                        <select value={timeStart.hrsM3} onChange={timeStartFn('hrsM3')} name='hrsM3' id='' disabled={menuSelectType.menu_3 !== '3'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                        </select>
                        <span className='MB_px'>:</span>
                        <select onChange={timeStartFn('minsM3')} name='minsM3' id='' disabled={menuSelectType.menu_3 !== '3'} className=''>
                          <option value='00'>00</option>
                          <option value='15'>15</option>
                          <option value='30'>30</option>
                          <option value='45'>45</option>
                        </select>


                      </div>
                    </div>

                    <div className='textTo'>to</div>

                    <div className='timeBox'>
                      <div className='MB_inputTime'>
                        <select value={timeEnd.hrsM3} onChange={timeEndFn('hrsM3')} name='hrsM3' id='' disabled={menuSelectType.menu_3 !== '3'} className=''>
                          <option value='00'>00</option>
                          <option value='01'>01</option>
                          <option value='02'>02</option>
                          <option value='03'>03</option>
                          <option value='04'>04</option>
                          <option value='05'>05</option>
                          <option value='06'>06</option>
                          <option value='07'>07</option>
                          <option value='08'>08</option>
                          <option value='09'>09</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                          <option value='13'>13</option>
                          <option value='14'>14</option>
                          <option value='15'>15</option>
                          <option value='16'>16</option>
                          <option value='17'>17</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                          <option value='21'>21</option>
                          <option value='22'>22</option>
                          <option value='23'>23</option>
                          <option value='24'>24</option>
                        </select>
                        <span className='MB_px'>:</span>
                        <select value={timeEnd.minsM3} onChange={timeEndFn('minsM3')} name='minsM3' id='' disabled={menuSelectType.menu_3 !== '3'} className=''>
                          <option value='00'>00</option>
                          {timeEnd.hrsM3 === '24' ? (
                            ''
                          ) : (
                            <>
                              <option value='15'>15</option>
                              <option value='30'>30</option>
                              <option value='45'>45</option>
                            </>
                          )}
                        </select>
                      </div>

                    </div>
                  </div>
                  <span className='oclock'>*24-hour clock</span>

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
                // setWindowConfirmFn()
                setTimeValue(code);
                setTimePicker([...timePickerData]);
              }}
              className='MB_Sq_Btn SaveBtnSize MB_Btn_Color  MB_G2'>

              <span>Save</span>
            </button>

            {/* CANCEL BUTTON */}
            {/* <button onClick={() => {
              getTimeFromProp()
              setCheckTimeChange(false)
            }}
              className='MB_Sq_Btn CancelPadding MB_Btn_Border MB_G3'>


              <span>Cancel</span>
            </button> */}

          </div>
        </div>






        {false && (
          <div className='MB_timePikerGrid-confirm'>
            {timeType && (
              <div className='timePikerResultBox'>
                <div className='timePikerResult'>
                  <span className='timePikerResult-title'>Menu(s):</span>
                  <span>{menuAllDayType.menu_1 && prop.menuName.menu_1} </span>
                  <span>{menuAllDayType.menu_2 && prop.menuName.menu_2} </span>
                  <span>{menuAllDayType.menu_3 && prop.menuName.menu_3} </span>
                </div>
                <span className='timePikerResultBox-span'>
                  will be turn on 24 Hr. <br /> Customomer can switch menu(s) in web application <br />
                  if there are menus more than 1 menu
                </span>
              </div>
            )}

            {!timeType && (
              <div className=''>
                <span>Menu(s) will be automatic change following</span>

                <div className='timePikerResult'>
                  <div className=''>
                    {menuSelectType.menu_1 && (
                      <div className=''>
                        <span>Menu:</span>
                        <span>{prop.menuName.menu_1}&nbsp;</span>
                        <span>{timeStart.hrsM1}:</span>
                        <span>{timeStart.minsM1}</span>
                        <span>&nbsp;to&nbsp;</span>
                        <span>{timeEnd.hrsM1}:</span>
                        <span>{timeEnd.minsM1}</span>
                      </div>
                    )}

                    {menuSelectType.menu_2 && (
                      <div className=''>
                        <span>Menu:</span>
                        <span>{prop.menuName.menu_2}&nbsp;</span>
                        <span>{timeStart.hrsM2}:</span>
                        <span>{timeStart.minsM2}</span>
                        <span>&nbsp;to&nbsp;</span>
                        <span>{timeEnd.hrsM2}:</span>
                        <span>{timeEnd.minsM2}</span>
                      </div>
                    )}

                    {menuSelectType.menu_3 && (
                      <div className=''>
                        <span>Menu:</span>
                        <span>{prop.menuName.menu_3}&nbsp;</span>
                        <span>{timeStart.hrsM3}:</span>
                        <span>{timeStart.minsM3}</span>
                        <span>&nbsp;to&nbsp;</span>
                        <span>{timeEnd.hrsM3}:</span>
                        <span>{timeEnd.minsM3}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className='MB_Frid_3Btn'>
              <button
                onClick={() => {
                  saveTimeSetup();
                  setWindowConfirm(false);
                  prop.setonOffMenuTime(false);
                }}
                className='MB_Sq_Btn MB_Btn_Color MB_G2'>

                <span>Confirm222</span>
              </button>

              <button onClick={() => setWindowConfirm(false)} className='MB_Sq_Btn MB_Btn_Border MB_G3'>


                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}


      </div>
















    </div>
  );
};

export default _07TimePickerMobile;
