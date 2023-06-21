import React, { useEffect, useState } from 'react'

import { timePickerData } from './TimePickerData';
import { timePickerBaseData } from './TimePickerData';
import "../style/timePicker.css"
import { useDispatch, useSelector } from 'react-redux';

const TimePicker = (prop) => {
  //= prop.preTimeSetup prop.setPreTimeSetup
  const dispath = useDispatch();


  const [timeStart, setTimeStart] = useState({
    hrsM1: '00', minsM1: '00',
    hrsM2: '00', minsM2: '00',
    hrsM3: '00', minsM3: '00'
  })

  const [timeEnd, setTimeEnd] = useState({
    hrsM1: '00', minsM1: '00',
    hrsM2: '00', minsM2: '00',
    hrsM3: '00', minsM3: '00'
  })

  const timeStartFn = (name) => (e) => {
    setTimeStart({ ...timeStart, [name]: e.target.value })
  }

  const timeEndFn = (name) => (e) => {
    setTimeEnd({ ...timeEnd, [name]: e.target.value })
  }

  const [sumTimeM1, setSumTimeM1] = useState({ start: '', end: '' })
  const [sumTimeM2, setSumTimeM2] = useState({ start: '', end: '' })
  const [sumTimeM3, setSumTimeM3] = useState({ start: '', end: '' })

  const [timePicker, setTimePicker] = useState([...timePickerData])
  const [timePickerBase, setTimePickerBase] = useState(timePickerBaseData)

  function checklengthBase(arrayStart, arrayEnd) {
    const startSliceBase = timePickerBase.indexOf(arrayStart)
    const endSliceBase = timePickerBase.indexOf(arrayEnd)
    // const minusM1Base = (endSliceM1Base - startSliceM1Base)
    const count = timePickerBase.slice(startSliceBase, endSliceBase + 1).length
    return count
  }

  function sumValueOftiem(timeHrs, timeMims) {
    return Number(timeHrs) * 60 * 60 + Number(timeMims) * 60

  }

  function menu_1() {

    //- 
    const arrayStartM1 = sumValueOftiem(timeStart.hrsM1, timeStart.minsM1)
    const arrayEndM1 = sumValueOftiem(timeEnd.hrsM1, timeEnd.minsM1) - 60 // need to find in Array

    const startSliceM1 = timePicker.indexOf(arrayStartM1)
    const endSliceM1 = timePicker.indexOf(arrayEndM1)

    if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

    const minusM1 = (endSliceM1 - startSliceM1)
    if (minusM1 <= 0) alert('time 1 minus no match')

    timePicker.splice(startSliceM1, minusM1 + 1)

    setSumTimeM1({ start: arrayStartM1, end: arrayEndM1 + 59 })

    console.log('Complete Schedule 1')

  }


  function menu_2() {
    const arrayStartM2 = sumValueOftiem(timeStart.hrsM2, timeStart.minsM2)
    const arrayEndM2 = sumValueOftiem(timeEnd.hrsM2, timeEnd.minsM2) - 60

    const startSliceM2 = timePicker.indexOf(arrayStartM2)
    const endSliceM2 = timePicker.indexOf(arrayEndM2)
    console.log(startSliceM2, endSliceM2)

    if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')

    const minusM2 = (endSliceM2 - startSliceM2)
    if (minusM2 <= 0) alert('time 2 minus no match')

    const checklengthBase2 = checklengthBase(arrayStartM2, arrayEndM2)
    const checklengthM2 = timePicker.splice(startSliceM2, minusM2 + 1).length
    if (checklengthBase2 !== checklengthM2) return alert('!!!!')


    setSumTimeM2({ start: arrayStartM2, end: arrayEndM2 + 59 })

    console.log('Complete Schedule 2')
  }


  function menu_3() {
    const arrayStartM3 = sumValueOftiem(timeStart.hrsM3, timeStart.minsM3)
    const arrayEndM3 = sumValueOftiem(timeEnd.hrsM3, timeEnd.minsM3) - 60

    const startSliceM3 = timePicker.indexOf(arrayStartM3)
    const endSliceM3 = timePicker.indexOf(arrayEndM3)

    if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

    const minusM3 = (endSliceM3 - startSliceM3)
    if (minusM3 <= 0) alert('time 3 minus no match')

    const checklengthBase3 = checklengthBase(arrayStartM3, arrayEndM3)
    const checklengthM3 = timePicker.splice(startSliceM3, minusM3 + 1).length
    if (checklengthBase3 !== checklengthM3) return alert('!!!!')

    setSumTimeM3({ start: arrayStartM3, end: arrayEndM3 + 59 })

    console.log('Complete Schedule 3')

  }


  function reverseToTimeStart(numberTime) {
    if (!numberTime) return '00'
    let hrs = Math.floor(numberTime / 60 / 60)
    let mins = ((numberTime / 60 / 60) - hrs) * 60
    if (mins == 0) mins = `${mins}0`

    return `${hrs}:${mins}`
  }

  function reverseToTimeEnd(numberTime) {
    if (!numberTime) return '00'

    let numberTimePlus = numberTime + 1
    return reverseToTimeStart(numberTimePlus)
  }

  // client need typetime to load data menu and time and button style
  const [onOffMenu, setOnOffMenu] = useState(true)
  const [timeType, setTimeType] = useState(true)
  const [menuAllDayType, setMenuAllDayType] = useState({
    menu_1: true, menu_2: false, menu_3: false,
  })
  const [menuSelectType, setMenuSelectType] = useState({
    menu_1: '', menu_2: '', menu_3: '',
  })



  const menuAllDayTypeValue = (name) => {
    setMenuAllDayType({ ...menuAllDayType, [name]: !menuAllDayType[name] })
  }

  const setTimeTypeFn = (valBool) => {
    if (valBool === true) {
      setTimeType(true)
      setSumTimeM1({ start: '', end: '' })
      setSumTimeM2({ start: '', end: '' })
      setSumTimeM3({ start: '', end: '' })
      setMenuSelectType({ menu_1: '', menu_2: '', menu_3: '' })


    }
  }

  const menuSelectTypeValue = (name, e) => {
    if (e.target.checked) {
      setMenuSelectType({ ...menuSelectType, [name]: e.target.value })
    } else {
      setMenuSelectType({ ...menuSelectType, [name]: '' })
      if (name === 'menu_1') return setSumTimeM1({ start: '', end: '' })
      if (name === 'menu_2') return setSumTimeM2({ start: '', end: '' })
      if (name === 'menu_3') return setSumTimeM3({ start: '', end: '' })

    }
  }


  let code = menuSelectType.menu_1 + menuSelectType.menu_2 + menuSelectType.menu_3


  const setTimeValue = (code) => {
    switch (code) {
      case '1':
        menu_1()
        break;
      case '2':
        menu_2()
        break;
      case '3':
        menu_3()
        break;
      case '12':
        menu_1()
        menu_2()
        break;
      case '13':
        menu_1()
        menu_3()
        break;
      case '23':
        menu_2()
        menu_3()
        break;
      case '123':
        menu_1()
        menu_2()
        menu_3()
        break;
      default:
        break;
    }

  }


  ///////////////////////
  // const timeSetup = {
  //   timeType: timeType,
  //   allDayType: { menu_1: menuAllDayType.menu_1, menu_2: menuAllDayType.menu_2, menu_3: menuAllDayType.menu_3 },
  //   selectType: {
  //     menu_1: sumTimeM1, menu_2: sumTimeM2, menu_3: sumTimeM3,
  //   }
  // }








  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className="timePickerWinControl">

      <div className='timePikerWrapper'>
        <div className="topbarWin">
          <button onClick={() => prop.setonOffMenuTime(false)} className='boxCancel'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="timePikerGrid">
          {/* <label className="mainOnOff switch"><input type="checkbox" name="menu_1" id="" /> <span className="slider"></span></label> */}

          {/* <div className="flexRowTime"> */}
          {/* <div className="nameTimepicker"> */}
          <div className="header1 flexHeaderTime" >Menu</div>
          <div className="titleTime1">{prop.menuName.menu_1}</div>
          <div className="titleTime2">{prop.menuName.menu_2}</div>
          <div className="titleTime3">{prop.menuName.menu_3}</div>

          {/* </div> */}
          {/* <div className="allDayTimepicker">setMenuAllDayType */}
          <label htmlFor='allDay' className="header2 flexHeaderTime"><span>All day</span> <div className=""> <input onChange={() => setTimeTypeFn(true)} type="radio" name="timeType" id="allDay" checked={timeType} /><span className=""></span></div></label>
          <label className={`allday1`}> <div className={`switch  ${!timeType && 'opcaityTime'}`}> <input onChange={() => menuAllDayTypeValue('menu_1')} type="checkbox" name="menu_1" checked={!timeType ? false : null} disabled={!timeType} /><span className="slider"></span></div></label>
          <label className={`allday2`}> <div className={`switch  ${!timeType && 'opcaityTime'}`}> <input onChange={() => menuAllDayTypeValue('menu_2')} type="checkbox" name="menu_2" checked={!timeType ? false : null} id="" disabled={!timeType} /><span className="slider"></span></div></label>
          <label className={`allday3`}> <div className={`switch  ${!timeType && 'opcaityTime'}`}> <input onChange={() => menuAllDayTypeValue('menu_3')} type="checkbox" name="menu_3" checked={!timeType ? false : null} id="" disabled={!timeType} /><span className="slider"></span></div></label>
          {/* </div> */}

          {/* <div className="selectDayTimepicker"> */}
          <label htmlFor='schedule' className="header3 flexHeaderTime"><span>Schedule</span> <div className=""><input onChange={() => setTimeType(false)} type="radio" name="timeType" id="schedule" /><span className=""></span></div></label>

          <label className={`select1 `}><div className={`switch ${timeType && 'opcaityTime'}`}> <input onChange={(e) => menuSelectTypeValue('menu_1', e)} type="checkbox" checked={timeType ? false : null} name="menu_1" value="1" id="" disabled={timeType} /><span className="slider"></span></div></label>
          <label className={`select2 `}> <div className={`switch ${timeType && 'opcaityTime'}`}><input onChange={(e) => menuSelectTypeValue('menu_2', e)} type="checkbox" checked={timeType ? false : null} name="menu_2" value="2" id="" disabled={timeType} /><span className="slider"></span></div></label>
          <label className={`select3 `}> <div className={`switch ${timeType && 'opcaityTime'}`}><input onChange={(e) => menuSelectTypeValue('menu_3', e)} type="checkbox" checked={timeType ? false : null} name="menu_3" value="3" id="" disabled={timeType} /><span className="slider"></span></div></label>

          {/* </div> */}
          {/* <div className="allTimePicker"> */}
          <div className=" header4 flexHeaderTime">Time Settings</div>
          <div className={`timePikerContainer timeInput1 `}>

            <div className={`flexTime  ${menuSelectType.menu_1 !== '1' && 'opcaityTime'}`}>
              <div className="timeBox">

                <div className="inputTime">

                  <select value={timeStart.hrsM1} onChange={timeStartFn('hrsM1')} name="hrsM1" id="" disabled={menuSelectType.menu_1 !== '1'} className="" >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>

                  <span className="px-2">:</span>
                  <select onChange={timeStartFn('minsM1')} name="mins" id="" disabled={menuSelectType.menu_1 !== '1'} className="">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>


                </div>
              </div>

              <div className="textTo">to</div>

              <div className="timeBox">

                <div className="inputTime">

                  <select value={timeEnd.hrsM1} onChange={timeEndFn('hrsM1')} name="hrsM1" id="" disabled={menuSelectType.menu_1 !== '1'} className="">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <span className="px-2">:</span>
                  <select value={timeEnd.minsM1} onChange={timeEndFn('minsM1')} name="minsM1" id="" disabled={menuSelectType.menu_1 !== '1'} className="">
                    <option value="00">00</option>
                    {timeEnd.hrsM1 === "24" ? '' : <>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </>}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* //-///////////////////////////////////////// */}{/* //-///////////////////////////////////////// */}

          <div className={`timePikerContainer timeInput2 `}>
            <div className={`flexTime  ${menuSelectType.menu_2 !== '2' && 'opcaityTime'}`}>

              <div className={`timeBox`}>

                <div className="inputTime">
                  <select value={timeStart.hrsM2} onChange={timeStartFn('hrsM2')} name="hrsM2" id="" disabled={menuSelectType.menu_2 !== '2'} className="">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>


                  </select>
                  <span className="px-2">:</span>
                  <select onChange={timeStartFn('minsM2')} name="minsM2" id="" disabled={menuSelectType.menu_2 !== '2'} className="">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>


                </div>
              </div>

              <div className={`textTo`}>to</div>

              <div className="timeBox">
                <div className="inputTime">
                  <select value={timeEnd.hrsM2} onChange={timeEndFn('hrsM2')} name="hrsM2" id="" disabled={menuSelectType.menu_2 !== '2'} className="">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  <span className="px-2">:</span>
                  <select value={timeEnd.minsM2} onChange={timeEndFn('minsM2')} name="minsM2" id="" disabled={menuSelectType.menu_2 !== '2'} className="">
                    <option value="00">00</option>
                    {timeEnd.hrsM2 === "24" ? '' : <>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </>}
                  </select>

                </div>
              </div>

            </div>
          </div>
          {/* //-///////////////////////////////////////// */}{/* //-///////////////////////////////////////// */}

          <div className={`timePikerContainer timeInput3`}>
            <div className={`flexTime  ${menuSelectType.menu_3 !== '3' && 'opcaityTime'}`}>

              <div className="timeBox">
                <div className="inputTime">
                  <select value={timeStart.hrsM3} onChange={timeStartFn('hrsM3')} name="hrsM3" id="" disabled={menuSelectType.menu_3 !== '3'} className="">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>


                  </select>
                  <span className="px-2">:</span>
                  <select onChange={timeStartFn('minsM3')} name="minsM3" id="" disabled={menuSelectType.menu_3 !== '3'} className="">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>

                  {/* <select onChange={timeStartFn('ampm')} id="" className="px-2 outline-none appearance-none bg-transparent">
            <option value="0">AM</option>
            <option value="12">PM</option>
          </select> */}
                </div>
              </div>

              <div className="textTo">to</div>

              <div className="timeBox">
                <div className="inputTime">
                  <select value={timeEnd.hrsM3} onChange={timeEndFn('hrsM3')} name="hrsM3" id="" disabled={menuSelectType.menu_3 !== '3'} className="">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>


                  </select>
                  <span className="px-2">:</span>
                  <select value={timeEnd.minsM3} onChange={timeEndFn('minsM3')} name="minsM3" id="" disabled={menuSelectType.menu_3 !== '3'} className="">
                    <option value="00">00</option>
                    {timeEnd.hrsM3 === "24" ? '' : <>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </>}
                  </select>

                </div>
                {/* </div> */}
              </div>

            </div>
          </div>

          {/* </div> */}
        </div>
        <div className="boxBtnLang">
          <button onClick={() => {
            setTimeValue(code)
            setTimePicker([...timePickerData])
            // getAllImageBanner()
          }
          } className='mainBtn saveBtnColor'>
            <svg width="30" height="30" viewBox="0 0 65 65" fill="none">
              <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
              <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>SAVE</span>
          </button>
          <button onClick={() => prop.setonOffMenuTime(false)} className='mainBtn cancelBtnColor'>
            <svg width="30" height="30" viewBox="0 0 65 65" fill="none">
              <path d="M12 12L53 54" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 54L53 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M62 1H3C1.89543 1 1 1.89543 1 3V62C1 63.1046 1.89543 64 3 64H62C63.1046 64 64 63.1046 64 62V3C64 1.89543 63.1046 1 62 1Z" stroke="white" strokeWidth="2" />
            </svg>

            <span>CANCEL</span>
          </button>
        </div>
        {/* <button onClick={() => {
          setTimeValue(code)

          setTimePicker([...timePickerData])
          // getAllImageBanner()
        }
        } className='saveBnerBtn btnhover btnactive setTimeMargin'>
          <svg width="35" height="35" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="63" height="63" rx="2" stroke="white" strokeWidth="2" />
            <path d="M32 12L32 53" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L12 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 53L52 33" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>SET TIME</span>
        </button>*/}
        <div className=""> {` time1 : ${reverseToTimeStart(sumTimeM1.start)} - ${reverseToTimeEnd(sumTimeM1.end)} `}</div>
        <div className=""> {` time2 : ${reverseToTimeStart(sumTimeM2.start)} - ${reverseToTimeEnd(sumTimeM2.end)} `}</div>
        <div className=""> {` time3 : ${reverseToTimeStart(sumTimeM3.start)} - ${reverseToTimeEnd(sumTimeM3.end)} `}</div>
      </div>
    </div>
  )
}

export default TimePicker