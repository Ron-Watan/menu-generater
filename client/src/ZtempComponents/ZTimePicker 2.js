import React, { useState } from 'react'



const TimePicker = () => {

  let timePickerStart = [
    '0000', '0015', '0030', '0045',
    '0100', '0115', '0130', '0145',
    '0200', '0215', '0230', '0245',
    '0300', '0315', '0330', '0345',
    '0400', '0415', '0430', '0445',
    '0500', '0515', '0530', '0545',
    '0600', '0615', '0630', '0645',
    '0700', '0715', '0730', '0745',
    '0800', '0815', '0830', '0845',
    '0900', '0915', '0930', '0945',

    '1000', '1015', '1030', '1045',
    '1100', '1115', '1130', '1145',
    '1200', '1215', '1230', '1245',
    '1300', '1315', '1330', '1345',
    '1400', '1415', '1430', '1445',
    '1500', '1515', '1530', '1545',
    '1600', '1615', '1630', '1645',
    '1700', '1715', '1730', '1745',
    '1800', '1815', '1830', '1845',
    '1900', '1915', '1930', '1945',
    '2000', '2015', '2030', '2045',
    '2100', '2115', '2130', '2145',
    '2200', '2215', '2230', '2245',
    '2300', '2315', '2330', '2345'
  ]
  let timePickerEnd = [
    '0000', '0015', '0030', '0045',
    '0100', '0115', '0130', '0145',
    '0200', '0215', '0230', '0245',
    '0300', '0315', '0330', '0345',
    '0400', '0415', '0430', '0445',
    '0500', '0515', '0530', '0545',
    '0600', '0615', '0630', '0645',
    '0700', '0715', '0730', '0745',
    '0800', '0815', '0830', '0845',
    '0900', '0915', '0930', '0945',

    '1000', '1015', '1030', '1045',
    '1100', '1115', '1130', '1145',
    '1200', '1215', '1230', '1245',
    '1300', '1315', '1330', '1345',
    '1400', '1415', '1430', '1445',
    '1500', '1515', '1530', '1545',
    '1600', '1615', '1630', '1645',
    '1700', '1715', '1730', '1745',
    '1800', '1815', '1830', '1845',
    '1900', '1915', '1930', '1945',
    '2000', '2015', '2030', '2045',
    '2100', '2115', '2130', '2145',
    '2200', '2215', '2230', '2245',
    '2300', '2315', '2330', '2345',
    '2400'
  ]


  const dateTime = new Date();
  // console.log(dateTime)

  const h = dateTime.getHours()
  const m = dateTime.getMinutes()
  const s = dateTime.getSeconds()


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

  console.log(sumTimeM1.start, sumTimeM1.end)
  console.log(sumTimeM2.start, sumTimeM2.end)
  console.log(sumTimeM3.start, sumTimeM3.end)

  // 1 , 2 ,3 , 1 2 ,1 3 , 2 3, 1 2 3

  const setTime = () => {
    const choose = 7

    console.log('Menu Time Control :' + choose)

    if (choose === 1) {

      const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
      const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1

      //- 1 ///////////////////////////////////////

      const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
      const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)

      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      timePickerStart.splice(startSliceM1, minusM1)
      timePickerEnd.splice(startSliceM1 + 1, minusM1)

      console.log('Complete Schedule 1')

      let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

      setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })


    } else if (choose === 2) {

      //-  //- 2 ///////////////////////////////////////

      const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
      const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2

      const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
      const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)
      if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


      const minusM2 = (endSliceM2 - startSliceM2)

      // // const testMinus2=
      if (minusM2 <= 0) alert('time 2 minus no match')

      timePickerStart.splice(startSliceM2, minusM2)
      timePickerEnd.splice(startSliceM2 + 1, minusM2)

      console.log('Complete Schedule 2')

      let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
      let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

      setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })

    } else if (choose === 3) {

      //-  //-  //- 3 ///////////////////////////////////////

      const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
      const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3

      const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
      const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

      if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

      const minusM3 = (endSliceM3 - startSliceM3)
      if (minusM3 <= 0) alert('time 3 minus no match')

      timePickerStart.splice(startSliceM3, minusM3)
      timePickerEnd.splice(startSliceM3 + 1, minusM3)

      console.log('Complete Schedule 3')

      let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
      let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

      setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })


    } else if (choose === 4) {

      //-  //-  //-  //- 4 ///////////////////////////////////////

      const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
      const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1
      const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
      const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2


      const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
      const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)



      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      timePickerStart.splice(startSliceM1, minusM1)
      timePickerEnd.splice(startSliceM1 + 1, minusM1)


      const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
      const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)

      if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


      const minusM2 = (endSliceM2 - startSliceM2)

      // // const testMinus2=
      if (minusM2 <= 0) alert('time 2 minus no match')

      timePickerStart.splice(startSliceM2, minusM2)
      timePickerEnd.splice(startSliceM2 + 1, minusM2)

      console.log('Complete Schedule 1 and 2')

      let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

      let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
      let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

      setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })
      setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })




    } else if (choose === 5) {

      //-  //-  //-  //-  //- 5 ///////////////////////////////////////


      const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
      const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1
      const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
      const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3

      const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
      const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)

      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      timePickerStart.splice(startSliceM1, minusM1)
      timePickerEnd.splice(startSliceM1 + 1, minusM1)


      const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
      const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

      if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

      const minusM3 = (endSliceM3 - startSliceM3)
      if (minusM3 <= 0) alert('time 3 minus no match')

      timePickerStart.splice(startSliceM3, minusM3)
      timePickerEnd.splice(startSliceM3 + 1, minusM3)

      console.log('Complete Schedule 1 and 3')

      let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1
      let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
      let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

      setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })
      setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })

    } else if (choose === 6) {

      //-  //-  //-  //-  //-  //- ////////////////////////////////////


      const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
      const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2
      const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
      const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3



      const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
      const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)

      if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


      const minusM2 = (endSliceM2 - startSliceM2)

      // // const testMinus2=
      if (minusM2 <= 0) alert('time 2 minus no match')

      timePickerStart.splice(startSliceM2, minusM2)
      timePickerEnd.splice(startSliceM2 + 1, minusM2)


      const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
      const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)

      if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

      const minusM3 = (endSliceM3 - startSliceM3)
      if (minusM3 <= 0) alert('time 3 minus no match')

      timePickerStart.splice(startSliceM3, minusM3)
      timePickerEnd.splice(startSliceM3 + 1, minusM3)



      console.log('Complete Schedule 2 and 3')
      let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
      let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1
      let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
      let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1

      setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })
      setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })

    } else if (choose === 7) {

      //-  //-  //-  //-  //-  //-  //- /////////////////////////////


      const arrayStartM1 = timeStart.hrsM1 + timeStart.minsM1
      const arrayEndM1 = timeEnd.hrsM1 + timeEnd.minsM1
      const arrayStartM2 = timeStart.hrsM2 + timeStart.minsM2
      const arrayEndM2 = timeEnd.hrsM2 + timeEnd.minsM2
      const arrayStartM3 = timeStart.hrsM3 + timeStart.minsM3
      const arrayEndM3 = timeEnd.hrsM3 + timeEnd.minsM3



      const startSliceM1 = timePickerStart.indexOf(arrayStartM1)
      const endSliceM1 = timePickerEnd.indexOf(arrayEndM1)


      if (startSliceM1 === -1 || endSliceM1 === -1) alert('time 1 slice no match')

      const minusM1 = (endSliceM1 - startSliceM1)
      if (minusM1 <= 0) alert('time 1 minus no match')

      timePickerStart.splice(startSliceM1, minusM1)
      timePickerEnd.splice(startSliceM1 + 1, minusM1)


      const startSliceM2 = timePickerStart.indexOf(arrayStartM2)
      const endSliceM2 = timePickerEnd.indexOf(arrayEndM2)

      if (startSliceM2 === -1 || endSliceM2 === -1) alert('time 2 slice no match')


      const minusM2 = (endSliceM2 - startSliceM2)

      // // const testMinus2=
      if (minusM2 <= 0) alert('time 2 minus no match')

      timePickerStart.splice(startSliceM2, minusM2)
      timePickerEnd.splice(startSliceM2 + 1, minusM2)


      const startSliceM3 = timePickerStart.indexOf(arrayStartM3)
      const endSliceM3 = timePickerEnd.indexOf(arrayEndM3)
      console.log(startSliceM3, endSliceM3)
      if (startSliceM3 === -1 || endSliceM3 === -1) alert('time 3 slice no match')

      const minusM3 = (endSliceM3 - startSliceM3)
      if (minusM3 <= 0) alert('time 3 minus no match')

      timePickerStart.splice(startSliceM3, minusM3)
      timePickerEnd.splice(startSliceM3 + 1, minusM3)

      console.log('Complete Schedule 1. 2 and 3')

      let sumTimeStart1 = (Number(timeStart.hrsM1) * 60 * 60 + Number(timeStart.minsM1) * 60)
      let sumTimeEnd1 = (Number(timeEnd.hrsM1) * 60 * 60 + Number(timeEnd.minsM1) * 60) - 1

      let sumTimeStart2 = (Number(timeStart.hrsM2) * 60 * 60 + Number(timeStart.minsM2) * 60)
      let sumTimeEnd2 = (Number(timeEnd.hrsM2) * 60 * 60 + Number(timeEnd.minsM2) * 60) - 1

      let sumTimeStart3 = (Number(timeStart.hrsM3) * 60 * 60 + Number(timeStart.minsM3) * 60)
      let sumTimeEnd3 = (Number(timeEnd.hrsM3) * 60 * 60 + Number(timeEnd.minsM3) * 60) - 1


      setSumTimeM1({ start: sumTimeStart1, end: sumTimeEnd1 })
      setSumTimeM2({ start: sumTimeStart2, end: sumTimeEnd2 })
      setSumTimeM3({ start: sumTimeStart3, end: sumTimeEnd3 })


    }

  }

  return (
    <div>
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