import React, { useState } from 'react'






// const manu1 = 'manu1'
// const manu2 = 'manu2'
// const manu3 = 'manu3'



// let timeSlot = [

// ]












const timePicker = ['']


const TimePicker = () => {

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const dateTime = new Date();
  // console.log(dateTime)

  const h = dateTime.getHours()
  const m = dateTime.getMinutes()
  const s = dateTime.getSeconds()
  // console.log(h)
  // console.log(m)
  // console.log(s)

  const nowTime = h * 60 * 60 + m * 60 + s
  // console.log('Now ==> ' + nowTime)


  // const handleValueChange = (newValue) => {
  //   setValue(newValue);
  // }

  const [timeStart, setTimeStart] = useState({
    hrs: '8', mins: '0', ampm: '0'
  })

  const [timeEnd, setTimeEnd] = useState({
    hrs: '8', mins: '15', ampm: '0'
  })

  const testTime = (name) => (e) => {
    setTimeStart({ ...timeStart, [name]: e.target.value })

  }
  let sumTimeStart = ((Number(timeStart.hrs) + Number(timeStart.ampm)) * 60 * 60 + Number(timeStart.mins) * 60)
  let sumTimeEnd = ((Number(timeEnd.hrs) + Number(timeEnd.ampm)) * 60 * 60 + Number(timeEnd.mins) * 60)

  if (sumTimeStart > sumTimeEnd) {
    console.log('ssss')
    setTimeEnd({
      hrs: timeStart.hrs, mins: `${Number(timeStart.mins)}`, ampm: timeStart.ampm
    })
  }


  // let sumTimeStart = ((Number(timeStart.hrs) + Number(timeStart.ampm)) * 60 * 60 + Number(timeStart.mins) * 60)
  // let sumTimeEndHr = Math.floor(sumTimeStart / 3600)
  // let sumTimeEndMin = ((sumTimeStart / 3600) % sumTimeEndHr) * 60 + 15


  const timeEndFn = (name) => (e) => {
    // if (name === 'hrs' && Number(e.target.value) < Number(timeStart.hrs)) return
    if (name === 'hrs' && ((Number(e.target.value) + Number(timeEnd.ampm)) * 60 * 60 + Number(timeEnd.mins) * 60) < sumTimeStart) return
    if (name === 'mins' && ((Number(timeEnd.hrs) + Number(timeEnd.ampm)) * 60 * 60 + Number(e.target.value) * 60) < sumTimeStart) return
    if (name === 'ampm' && ((Number(timeEnd.hrs) + Number(e.target.value)) * 60 * 60 + Number(timeEnd.mins) * 60) < sumTimeStart) return


    setTimeEnd({ ...timeEnd, [name]: e.target.value })

  }
  sumTimeStart = ((Number(timeStart.hrs) + Number(timeStart.ampm)) * 60 * 60 + Number(timeStart.mins) * 60)

  sumTimeEnd = ((Number(timeEnd.hrs) + Number(timeEnd.ampm)) * 60 * 60 + Number(timeEnd.mins) * 60)
  console.log(sumTimeStart, sumTimeEnd)
  // console.log(sumTimeEndHr, sumTimeEndMin)
  return (
    <div>

      <div className="container mx-auto my-12 p-12 bg-gray-100">
        <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
          <select value={timeStart.hrs} onChange={testTime('hrs')} name="hrs" id="" className="px-4 outline-none appearance-none bg-transparent">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>

          </select>
          <span className="px-2">:</span>
          <select onChange={testTime('mins')} name="mins" id="" className="px-4 outline-none appearance-none bg-transparent">
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>

          <select onChange={testTime('ampm')} id="" className="px-2 outline-none appearance-none bg-transparent">
            <option value="0">AM</option>
            <option value="12">PM</option>
          </select>
        </div>
      </div>

      {/* //-///////////////////////////////////////// */}

      <div className="container mx-auto my-12 p-12 bg-gray-100">
        <div className="inline-flex text-lg border rounded-sm shadow-lg p-2">
          <select value={timeEnd.hrs} onChange={timeEndFn('hrs')} name="hrs" id="" className="px-4 outline-none appearance-none bg-transparent">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>

          </select>
          <span className="px-2">:</span>
          <select value={timeEnd.mins} onChange={timeEndFn('mins')} name="mins" id="" className="px-4 outline-none appearance-none bg-transparent">
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>

          <select value={timeEnd.ampm} onChange={timeEndFn('ampm')} id="" className="px-2 outline-none appearance-none bg-transparent">
            <option value="0">AM</option>
            <option value="12">PM</option>
          </select>
        </div>
      </div>


    </div>
  )
}

export default TimePicker