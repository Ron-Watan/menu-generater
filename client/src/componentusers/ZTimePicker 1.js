import React, { useState } from 'react'

import { timePicker1 } from './timePickerData';
import { timePickerBase } from './timePickerData';
import "../style/timePicker.css"

const TimePicker = () => {



  // const newValue = timePicker.map(el => {
  //   return Number(el.slice(0, 2)) * 60 * 60 + Number(el.slice(2, 4)) * 60
  // })
  // console.log(Number(timePicker[14].slice(0,2))*60*60+Number(timePicker[14].slice(2,4))*60)
  // console.log(newValue)

  const dateTime = new Date();
  // console.log(dateTime)

  const h = dateTime.getHours()
  const m = dateTime.getMinutes()
  const s = dateTime.getSeconds()
  // console.log()

  const nowTime = h * 60 * 60 + m * 60 + s

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

  // console.log(sumTimeM1.start, sumTimeM1.end)
  // console.log(sumTimeM2.start, sumTimeM2.end)
  // console.log(sumTimeM3.start, sumTimeM3.end)



  // 1 , 2 ,3 , 1 2 ,1 3 , 2 3, 1 2 3

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



  const setTime = () => {
    const choose = 4

    console.log('Menu Time Control :' + choose)


    if (choose === 1) {

      const arrayStartM1 = sumValueOftiem(timeStart.hrsM1, timeStart.minsM1)
      const arrayEndM1 = sumValueOftiem(timeEnd.hrsM1, timeEnd.minsM1) - 60

      const startSliceM1 = timePicker1.indexOf(arrayStartM1)
      const endSliceM1 = timePicker1.indexOf(arrayEndM1)
      console.log(startSliceM1, endSliceM1)
      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      console.log(arrayEndM1)
      // checklengthBase(arrayStartM1, arrayEndM1)
      const checklengthBase1 = checklengthBase(arrayStartM1, arrayEndM1)


      // console.log(timePickerBase)
      timePicker1.splice(startSliceM1, minusM1 + 1)
      // timePicker1.splice(startSliceM1, minusM1 + 1)

      console.log('Complete Schedule 1')

      // let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      // let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

      setSumTimeM1({ start: arrayStartM1, end: arrayEndM1 + 59 })
      console.log(timePicker1)

    }
    // else if (choose === 2) {

    //   //-  //- 2 ///////////////////////////////////////

    //   const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
    //   const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2

    //   const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
    //   const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)
    //   if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


    //   const minusM2 = (endSliceM2 - startSliceM2)

    //   // // const testMinus2=
    //   if (minusM2 <= 0) alert('time 2 minus no match')

    //   timePickerStart.splice(startSliceM2, minusM2)
    //   timePickerEnd.splice(startSliceM2 + 1, minusM2)

    //   console.log('Complete Schedule 2')

    //   let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
    //   let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

    //   setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })

    // } else if (choose === 3) {

    //   //-  //-  //- 3 ///////////////////////////////////////

    //   const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
    //   const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3

    //   const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
    //   const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

    //   if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

    //   const minusM3 = (endSliceM3 - startSliceM3)
    //   if (minusM3 <= 0) alert('time 3 minus no match')

    //   timePickerStart.splice(startSliceM3, minusM3)
    //   timePickerEnd.splice(startSliceM3 + 1, minusM3)

    //   console.log('Complete Schedule 3')

    //   let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
    //   let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

    //   setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })


    // } 
    else if (choose === 4) {

      //-  //-  //-  //- 4 ///////////////////////////////////////


      const arrayStartM1 = sumValueOftiem(timeStart.hrsM1, timeStart.minsM1)
      const arrayEndM1 = sumValueOftiem(timeEnd.hrsM1, timeEnd.minsM1) - 60
      const arrayStartM2 = sumValueOftiem(timeStart.hrsM2, timeStart.minsM2)
      const arrayEndM2 = sumValueOftiem(timeEnd.hrsM2, timeEnd.minsM2) - 60



      const startSliceM1 = timePicker1.indexOf(arrayStartM1)
      const endSliceM1 = timePicker1.indexOf(arrayEndM1)
      console.log(startSliceM1, endSliceM1)
      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      const checklengthBase1 = checklengthBase(arrayStartM1, arrayEndM1)
      timePicker1.splice(startSliceM1, minusM1 + 1)


      const startSliceM2 = timePicker1.indexOf(arrayStartM2)
      const endSliceM2 = timePicker1.indexOf(arrayEndM2)
      console.log(startSliceM2, endSliceM2)

      if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')

      const minusM2 = (endSliceM2 - startSliceM2)
      if (minusM2 <= 0) alert('time 2 minus no match')

      const checklengthBase2 = checklengthBase(arrayStartM2, arrayEndM2)
      const checklengthM2 = timePicker1.splice(startSliceM2, minusM2 + 1).length
      if (checklengthBase2 !== checklengthM2) return alert('!!!!')
      // timePicker1.splice(startSliceM2, minusM2 + 1)


      console.log('Complete Schedule 1 and 2')

      // let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      // let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

      // let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
      // let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

      setSumTimeM1({ start: arrayStartM1, end: arrayEndM1 + 59 })
      setSumTimeM2({ start: arrayStartM2, end: arrayEndM2 + 59 })


      console.log(timePicker1)


    }
    // else if (choose === 5) {

    //   //-  //-  //-  //-  //- 5 ///////////////////////////////////////


    //   const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
    //   const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1
    //   const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
    //   const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3

    //   const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
    //   const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)

    //   if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

    //   const minusM1 = (endSliceM1 - startSliceM1)
    //   if (minusM1 <= 0) alert('time 1 minus no match')

    //   timePickerStart.splice(startSliceM1, minusM1)
    //   timePickerEnd.splice(startSliceM1 + 1, minusM1)


    //   const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
    //   const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

    //   if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

    //   const minusM3 = (endSliceM3 - startSliceM3)
    //   if (minusM3 <= 0) alert('time 3 minus no match')

    //   timePickerStart.splice(startSliceM3, minusM3)
    //   timePickerEnd.splice(startSliceM3 + 1, minusM3)

    //   console.log('Complete Schedule 1 and 3')

    //   let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
    //   let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1
    //   let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
    //   let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

    //   setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })
    //   setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })

    // } else if (choose === 6) {

    //   //-  //-  //-  //-  //-  //- ////////////////////////////////////


    //   const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
    //   const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2
    //   const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
    //   const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3



    //   const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
    //   const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)

    //   if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


    //   const minusM2 = (endSliceM2 - startSliceM2)

    //   // // const testMinus2=
    //   if (minusM2 <= 0) alert('time 2 minus no match')

    //   timePickerStart.splice(startSliceM2, minusM2)
    //   timePickerEnd.splice(startSliceM2 + 1, minusM2)


    //   const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
    //   const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

    //   if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

    //   const minusM3 = (endSliceM3 - startSliceM3)
    //   if (minusM3 <= 0) alert('time 3 minus no match')

    //   timePickerStart.splice(startSliceM3, minusM3)
    //   timePickerEnd.splice(startSliceM3 + 1, minusM3)



    //   console.log('Complete Schedule 2 and 3')
    //   let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
    //   let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1
    //   let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
    //   let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

    //   setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })
    //   setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })

    // } else if (choose === 7) {

    //   //-  //-  //-  //-  //-  //-  //- /////////////////////////////


    //   const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
    //   const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1
    //   const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
    //   const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2
    //   const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
    //   const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3



    //   const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
    //   const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)


    //   if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

    //   const minusM1 = (endSliceM1 - startSliceM1)
    //   if (minusM1 <= 0) alert('time 1 minus no match')

    //   timePickerStart.splice(startSliceM1, minusM1)
    //   timePickerEnd.splice(startSliceM1 + 1, minusM1)


    //   const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
    //   const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)

    //   if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


    //   const minusM2 = (endSliceM2 - startSliceM2)

    //   // // const testMinus2=
    //   if (minusM2 <= 0) alert('time 2 minus no match')

    //   timePickerStart.splice(startSliceM2, minusM2)
    //   timePickerEnd.splice(startSliceM2 + 1, minusM2)


    //   const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
    //   const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)
    //   console.log(startSliceM3, endSliceM3)
    //   if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

    //   const minusM3 = (endSliceM3 - startSliceM3)
    //   if (minusM3 <= 0) alert('time 3 minus no match')

    //   timePickerStart.splice(startSliceM3, minusM3)
    //   timePickerEnd.splice(startSliceM3 + 1, minusM3)

    //   console.log('Complete Schedule 1. 2 and 3')

    //   let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
    //   let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

    //   let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
    //   let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

    //   let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
    //   let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1


    //   setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })
    //   setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })
    //   setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })


    // }

  }
  //-///-///-///-///-///-///-///-///-   END FUNCTION   ///-///-///-///-///-///-///-///-///-

  return (
    <div className='timePikerSection'>
      <div className='flex'>
        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeStart.hrsM1} onChange={timeStartFn('hrsM1')} name="hrsM1" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select onChange={timeStartFn('minsM1')} name="mins" id="" className="px-4 outline-none appearance-none bg-transparent">
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

        {/* //-///////////////////////////////////////// */}

        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeEnd.hrsM1} onChange={timeEndFn('hrsM1')} name="hrsM1" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select value={timeEnd.minsM1} onChange={timeEndFn('minsM1')} name="minsM1" id="" className="px-4 outline-none appearance-none bg-transparent">
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

      <div className='flex'>
        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeStart.hrsM2} onChange={timeStartFn('hrsM2')} name="hrsM2" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select onChange={timeStartFn('minsM2')} name="minsM2" id="" className="px-4 outline-none appearance-none bg-transparent">
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

        {/* //-///////////////////////////////////////// */}

        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeEnd.hrsM2} onChange={timeEndFn('hrsM2')} name="hrsM2" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select value={timeEnd.minsM2} onChange={timeEndFn('minsM2')} name="minsM2" id="" className="px-4 outline-none appearance-none bg-transparent">
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

      <div className='flex'>
        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeStart.hrsM3} onChange={timeStartFn('hrsM3')} name="hrsM3" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select onChange={timeStartFn('minsM3')} name="minsM3" id="" className="px-4 outline-none appearance-none bg-transparent">
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

        {/* //-///////////////////////////////////////// */}

        <div className="container mx-auto my-12 p-12 bg-gray-100">
          <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
            <select value={timeEnd.hrsM3} onChange={timeEndFn('hrsM3')} name="hrsM3" id="" className="px-4 outline-none appearance-none bg-transparent">
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
            <select value={timeEnd.minsM3} onChange={timeEndFn('minsM3')} name="minsM3" id="" className="px-4 outline-none appearance-none bg-transparent">
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
      <button onClick={setTime}>tttt</button>

    </div>
  )
}

export default TimePicker