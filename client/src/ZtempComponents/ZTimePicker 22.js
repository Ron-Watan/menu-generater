import React, { useState } from 'react'

import { timePicker } from './timePickerData';
import { timePickerBase } from './timePickerData';
import "../style/timePicker.css"

const TimePicker = () => {



  // const newValue = timePicker.map(el => {
  //   return Number(el.slice(0, 2)) * 60 * 60 + Number(el.slice(2, 4)) * 60
  // })
  // console.log(Number(timePicker[14].slice(0,2))*60*60+Number(timePicker[14].slice(2,4))*60)
  // console.log(newValue)

  // const dateTime = new Date();
  // console.log(dateTime)

  // const h = dateTime.getHours()
  // const m = dateTime.getMinutes()
  // const s = dateTime.getSeconds()

  // const nowTime = h * 60 * 60 + m * 60 + s

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

  const [prviewTime1, setPrviewTime1] = useState('')
  const [prviewTime2, setPrviewTime2] = useState('')
  const [prviewTime3, setPrviewTime3] = useState('')




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
  console.log(sumTimeM1)

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

  console.log(sumTimeM2)

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
  console.log(sumTimeM3)




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
  const [sumSelectCase, setSumSelectCase] = useState('')
  // 1 , 2 ,3 , 1 2 ,1 3 , 2 3, 1 2 3


  const menuAllDayTypeValue = (name) => {
    setMenuAllDayType({ ...menuAllDayType, [name]: !menuAllDayType[name] })
  }


  const sumSelectCaseValue = () => {
    let code = menuSelectType.menu_1 + menuSelectType.menu_2 + menuSelectType.menu_3
    setSumSelectCase(code)
  }

  const menuSelectTypeValue = (name, e) => {
    // let value;
    e.target.checked ? setMenuSelectType({ ...menuSelectType, [name]: e.target.value }) :
      setMenuSelectType({ ...menuSelectType, [name]: '' })

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


  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className='timePikerSection'>
      <label className="timePikerContainer"><input type="checkbox" name="menu_1" id="" /> On Off</label>

      <div className="flexRowTime">
        <div className="nameTimepicker">
          <div className="timePikerContainer">Header</div>
          <div className="timePikerContainer">1111</div>
          <div className="timePikerContainer">222</div>
          <div className="timePikerContainer">333</div>

        </div>
        <div className="allDayTimepicker">setMenuAllDayType
          <label htmlFor='allDay' className="timePikerContainer">  <input onChange={() => setTimeType(true)} type="radio" name="timeType" id="allDay" checked={timeType} />All Day</label>
          <div className="timePikerContainer">  <input onChange={() => menuAllDayTypeValue('menu_1')} type="checkbox" name="menu_1" checked={menuAllDayType.menu_1} disabled={!timeType} /></div>
          <div className="timePikerContainer">  <input onChange={() => menuAllDayTypeValue('menu_2')} type="checkbox" name="menu_2" id="" disabled={!timeType} /></div>
          <div className="timePikerContainer">  <input onChange={() => menuAllDayTypeValue('menu_3')} type="checkbox" name="menu_3" id="" disabled={!timeType} /></div>
        </div>

        <div className="selectDayTimepicker">
          <label htmlFor='schedule' className="timePikerContainer"><input onChange={() => setTimeType(false)} type="radio" name="timeType" id="schedule" />Schedule</label>

          <label className="timePikerContainer"> <input onChange={(e) => menuSelectTypeValue('menu_1', e)} type="checkbox" name="menu_1" value="1" id="" disabled={timeType} />menu_1</label>
          <label className="timePikerContainer"> <input onChange={(e) => menuSelectTypeValue('menu_2', e)} type="checkbox" name="menu_2" value="2" id="" disabled={timeType} />menu_2</label>
          <label className="timePikerContainer"> <input onChange={(e) => menuSelectTypeValue('menu_3', e)} type="checkbox" name="menu_3" value="3" id="" disabled={timeType} />menu_3</label>

        </div>
        <div className="allTimePicker">
          <div className="timePikerContainer"><div className="timeBox">Header</div><div className="timeBox">Header</div></div>
          <div className='timePikerContainer'>
            {/* <div className="container mx-auto my-12 p-12 bg-gray-100"> */}
            {/* <div className="inline-flex text-lg border rounded-sm shadow-lg p-2"> */}

            <div className="timeBox">

              <div className="inputTime">

                <select value={timeStart.hrsM1} onChange={timeStartFn('hrsM1')} name="hrsM1" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent" >
                  <option className="www" value="00">00</option>
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
                <select onChange={timeStartFn('minsM1')} name="mins" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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

                <select value={timeEnd.hrsM1} onChange={timeEndFn('hrsM1')} name="hrsM1" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select value={timeEnd.minsM1} onChange={timeEndFn('minsM1')} name="minsM1" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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

          {/* //-///////////////////////////////////////// */}{/* //-///////////////////////////////////////// */}

          <div className='timePikerContainer'>
            <div className="timeBox">
              <div className="inputTime">
                <select value={timeStart.hrsM2} onChange={timeStartFn('hrsM2')} name="hrsM2" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select onChange={timeStartFn('minsM2')} name="minsM2" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select value={timeEnd.hrsM2} onChange={timeEndFn('hrsM2')} name="hrsM2" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select value={timeEnd.minsM2} onChange={timeEndFn('minsM2')} name="minsM2" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
          {/* //-///////////////////////////////////////// */}{/* //-///////////////////////////////////////// */}

          <div className='timePikerContainer'>
            <div className="timeBox">
              <div className="inputTime">
                <select value={timeStart.hrsM3} onChange={timeStartFn('hrsM3')} name="hrsM3" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select onChange={timeStartFn('minsM3')} name="minsM3" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select value={timeEnd.hrsM3} onChange={timeEndFn('hrsM3')} name="hrsM3" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
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
                <select value={timeEnd.minsM3} onChange={timeEndFn('minsM3')} name="minsM3" id="" disabled={timeType} className="px-4 outline-none appearance-none bg-transparent">
                  <option value="00">00</option>
                  {timeEnd.hrsM3 === "24" ? '' : <>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </>}
                </select>

              </div>
            </div>


          </div>
        </div>

      </div>

      <button onClick={() => {
        setTimeValue(code)
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
      </button>
      <div className=""> {` time1 : ${reverseToTimeStart(sumTimeM1.start)} - ${reverseToTimeEnd(sumTimeM1.end)} `}</div>
      <div className=""> {` time2 : ${reverseToTimeStart(sumTimeM2.start)} - ${reverseToTimeEnd(sumTimeM2.end)} `}</div>
      <div className=""> {` time3 : ${reverseToTimeStart(sumTimeM3.start)} - ${reverseToTimeEnd(sumTimeM3.end)} `}</div>

    </div>
  )
}

export default TimePicker