import React, { useState } from 'react'



const TimePicker = () => {

  let timePicker = [
    '0000', '0014', '0015', '0029', '0030', '0044', '0045', '0059',
    '0100', '0114', '0115', '0129', '0130', '0144', '0145', '0159',
    '0200', '0214', '0215', '0229', '0230', '0244', '0245', '0259',
    '0300', '0314', '0315', '0329', '0330', '0344', '0345', '0359',
    '0400', '0414', '0415', '0429', '0430', '0444', '0445', '0459',
    '0500', '0514', '0515', '0529', '0530', '0544', '0545', '0559',
    '0600', '0614', '0615', '0629', '0630', '0644', '0645', '0659',
    '0700', '0714', '0715', '0729', '0730', '0744', '0745', '0759',
    '0800', '0814', '0815', '0829', '0830', '0844', '0845', '0859',
    '0900', '0914', '0915', '0929', '0930', '0944', '0945', '0959',
    '1000', '1014', '1015', '1029', '1030', '1044', '1045', '1059',
    '1100', '1114', '1115', '1129', '1130', '1144', '1145', '1159',
    '1200', '1214', '1215', '1229', '1230', '1244', '1245', '1259',
    '1300', '1314', '1315', '1329', '1330', '1344', '1345', '1359',
    '1400', '1414', '1415', '1429', '1430', '1444', '1445', '1459',
    '1500', '1514', '1515', '1529', '1530', '1544', '1545', '1559',
    '1600', '1614', '1615', '1629', '1630', '1644', '1645', '1659',
    '1700', '1714', '1715', '1729', '1730', '1744', '1745', '1759',
    '1800', '1814', '1815', '1829', '1830', '1844', '1845', '1859',
    '1900', '1914', '1915', '1929', '1930', '1944', '1945', '1959',
    '2000', '2014', '2015', '2029', '2030', '2044', '2045', '2059',
    '2100', '2114', '2115', '2129', '2130', '2144', '2145', '2159',
    '2200', '2214', '2215', '2229', '2230', '2244', '2245', '2259',
    '2300', '2314', '2315', '2329', '2330', '2344', '2345', '2359',
    '2400'

  ]
  let timePickerBase = [
    0, 840, 900, 1740, 1800, 2640, 2700, 3540,
    3600, 4440, 4500, 5340, 5400,
    6240,
    6300,
    7140,
    7200,
    8040,
    8100,
    8940,
    9000,
    9840,
    9900,
    10740,
    10800,
    11640,
    11700,
    12540,
    12600,
    13440,
    13500,
    14340,
    14400,
    15240,
    15300,
    16140,
    16200,
    17040,
    17100,
    17940,
    18000,
    18840,
    18900,
    19740,
    19800,
    20640,
    20700,
    21540,
    21600,
    22440,
    22500,
    23340,
    23400,
    24240,
    24300,
    25140,
    25200,
    26040,
    26100,
    26940,
    27000,
    27840,
    27900,
    28740,
    28800,
    29640,
    29700,
    30540,
    30600,
    31440,
    31500,
    32340,
    32400,
    33240,
    33300,
    34140,
    34200,
    35040,
    35100,
    35940,
    36000,
    36840,
    36900,
    37740,
    37800,
    38640,
    38700,
    39540,
    39600,
    40440,
    40500,
    41340,
    41400,
    42240,
    42300,
    43140,
    43200,
    44040,
    44100,
    44940,
    45000,
    45840,
    45900,
    46740,
    46800,
    47640,
    47700,
    48540,
    48600,
    49440,
    49500,
    50340,
    50400,
    51240,
    51300,
    52140,
    52200,
    53040,
    53100,
    53940,
    54000,
    54840,
    54900,
    55740,
    55800,
    56640,
    56700,
    57540,
    57600,
    58440,
    58500,
    59340,
    59400,
    60240,
    60300,
    61140,
    61200,
    62040,
    62100,
    62940,
    63000,
    63840,
    63900,
    64740,
    64800,
    65640,
    65700,
    66540,
    66600,
    67440,
    67500,
    68340,
    68400,
    69240,
    69300,
    70140,
    70200,
    71040,
    71100,
    71940,
    72000,
    72840,
    72900,
    73740,
    73800,
    74640,
    74700,
    75540,
    75600,
    76440,
    76500,
    77340,
    77400,
    78240,
    78300,
    79140,
    79200,
    80040,
    80100,
    80940,
    81000,
    81840,
    81900,
    82740,
    82800,
    83640,
    83700,
    84540,
    84600,
    85440,
    85500,
    86340,
    86400
  ]
  let timePicker1 = [
    0,
    840,
    900,
    1740,
    1800,
    2640,
    2700,
    3540,
    3600,
    4440,
    4500,
    5340,
    5400,
    6240,
    6300,
    7140,
    7200,
    8040,
    8100,
    8940,
    9000,
    9840,
    9900,
    10740,
    10800,
    11640,
    11700,
    12540,
    12600,
    13440,
    13500,
    14340,
    14400,
    15240,
    15300,
    16140,
    16200,
    17040,
    17100,
    17940,
    18000,
    18840,
    18900,
    19740,
    19800,
    20640,
    20700,
    21540,
    21600,
    22440,
    22500,
    23340,
    23400,
    24240,
    24300,
    25140,
    25200,
    26040,
    26100,
    26940,
    27000,
    27840,
    27900,
    28740,
    28800,
    29640,
    29700,
    30540,
    30600,
    31440,
    31500,
    32340,
    32400,
    33240,
    33300,
    34140,
    34200,
    35040,
    35100,
    35940,
    36000,
    36840,
    36900,
    37740,
    37800,
    38640,
    38700,
    39540,
    39600,
    40440,
    40500,
    41340,
    41400,
    42240,
    42300,
    43140,
    43200,
    44040,
    44100,
    44940,
    45000,
    45840,
    45900,
    46740,
    46800,
    47640,
    47700,
    48540,
    48600,
    49440,
    49500,
    50340,
    50400,
    51240,
    51300,
    52140,
    52200,
    53040,
    53100,
    53940,
    54000,
    54840,
    54900,
    55740,
    55800,
    56640,
    56700,
    57540,
    57600,
    58440,
    58500,
    59340,
    59400,
    60240,
    60300,
    61140,
    61200,
    62040,
    62100,
    62940,
    63000,
    63840,
    63900,
    64740,
    64800,
    65640,
    65700,
    66540,
    66600,
    67440,
    67500,
    68340,
    68400,
    69240,
    69300,
    70140,
    70200,
    71040,
    71100,
    71940,
    72000,
    72840,
    72900,
    73740,
    73800,
    74640,
    74700,
    75540,
    75600,
    76440,
    76500,
    77340,
    77400,
    78240,
    78300,
    79140,
    79200,
    80040,
    80100,
    80940,
    81000,
    81840,
    81900,
    82740,
    82800,
    83640,
    83700,
    84540,
    84600,
    85440,
    85500,
    86340,
    86400
  ]

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