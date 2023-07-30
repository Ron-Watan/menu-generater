import React, { useEffect, useRef, useState } from 'react'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconBin from '../all-icon/button-icon/MBbin.svg'

import MBiconStar from '../all-icon/button-icon/star.svg'
import MBiconStarList from '../all-icon/button-icon/starList.svg'
import MBiconBack from '../all-icon/button-icon/MBback.svg'
import MBstar5 from '../all-icon/button-icon/star5.svg'
import MBstar4 from '../all-icon/button-icon/star4.svg'
import MBstar3 from '../all-icon/button-icon/star3.svg'
import MBstar2 from '../all-icon/button-icon/star2.svg'
import MBstar1 from '../all-icon/button-icon/star1.svg'
import MBstar0 from '../all-icon/button-icon/star0.svg'
import MBcoms from '../all-icon/button-icon/coms.svg'

import bigstar5 from '../all-icon/button-icon/bigstar5.svg'


import Swal from 'sweetalert2';


import axios from 'axios';
import { ticketPass } from '../protectors/authorize';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';


const _FeedBackMobile = (prop) => {

  const { user } = useSelector((state) => state.user);
  const dispath = useDispatch();

  const [unSeenChange, setUnseenChange] = useState(false)
  const [deleteChange, setDeleteChange] = useState(false)

  const [unseeenFeedBack, setUnseeenFeedBack] = useState([])
  const [seeenFeedBack, setSeeenFeedBack] = useState([])



  const sumCountFeedback = seeenFeedBack.length + unseeenFeedBack.length
  let pointStarUnTotal = 0
  let pointStarUn_0 = 0
  let pointStarUn_1 = 0
  let pointStarUn_2 = 0
  let pointStarUn_3 = 0
  let pointStarUn_4 = 0
  let pointStarUn_5 = 0
  unseeenFeedBack.forEach(el => {
    pointStarUnTotal += Number(el.pointStar)
    if (Number(el.pointStar) === 0) pointStarUn_0++
    else if (Number(el.pointStar) === 1) pointStarUn_1++
    else if (Number(el.pointStar) === 2) pointStarUn_2++
    else if (Number(el.pointStar) === 3) pointStarUn_3++
    else if (Number(el.pointStar) === 4) pointStarUn_4++
    else if (Number(el.pointStar) === 5) pointStarUn_5++
  })
  let pointStarSeenTotal = 0
  let pointStarSeen_0 = 0
  let pointStarSeen_1 = 0
  let pointStarSeen_2 = 0
  let pointStarSeen_3 = 0
  let pointStarSeen_4 = 0
  let pointStarSeen_5 = 0
  seeenFeedBack.forEach(el => {
    pointStarSeenTotal += Number(el.pointStar)
    if (Number(el.pointStar) === 0) pointStarSeen_0++
    else if (Number(el.pointStar) === 1) pointStarSeen_1++
    else if (Number(el.pointStar) === 2) pointStarSeen_2++
    else if (Number(el.pointStar) === 3) pointStarSeen_3++
    else if (Number(el.pointStar) === 4) pointStarSeen_4++
    else if (Number(el.pointStar) === 5) pointStarSeen_5++
  })







  let averageStar = sumCountFeedback >= 1 ? ((pointStarUnTotal + pointStarSeenTotal) / sumCountFeedback).toFixed(1) : 0
  let totalPointStar_0 = pointStarUn_0 + pointStarSeen_0
  let totalPointStar_1 = pointStarUn_1 + pointStarSeen_1
  let totalPointStar_2 = pointStarUn_2 + pointStarSeen_2
  let totalPointStar_3 = pointStarUn_3 + pointStarSeen_3
  let totalPointStar_4 = pointStarUn_4 + pointStarSeen_4
  let totalPointStar_5 = pointStarUn_5 + pointStarSeen_5



  const getFeedBack = () => {
    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getFeedBack`, { clientId: user.clientId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.bothFeedBack;
          setUnseeenFeedBack(getReult.unseenFeedBack)
          setSeeenFeedBack(getReult.seenFeedBack)


          let unread = getReult.unseenFeedBack
          let count = 0
          for (let x of unread) {
            if (x.readMessage === true) count++
          }
          prop.setGetStarNotification(count)
          dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }




      })
      .catch((err) => {

        // console.log("Can't not connect the server", err);
        // console.log('Server: Connecting...');
        // Swal.fire("Can't not connect the server")
      });
  };


  const [openfeedBack, setOpenfeedBack] = useState(false)

  const [currentPointStar, setCurrentPointStar] = useState({
    pointStar: 0,
    message: '',
    index: '',
    date: '',
    time: ''
  })




  const saveFeedBack = () => {
    dispath(showLoading())

    axios
      .post(`${process.env.REACT_APP_API}/user/saveFeedBack`, {


        clientId: user.clientId,
        unseenFeedBack: unseeenFeedBack,
        seenFeedBack: seeenFeedBack
        // unseenFeedBack: saveBothfb.unseen,
        // seenFeedBack: saveBothfb.seen


      }, ticketPass)
      .then((result) => {
        if (result.data.success) {

          const getReult = result.data.bothFeedBack;
          console.log(getReult)
          setUnseeenFeedBack(getReult.unseenFeedBack)
          setSeeenFeedBack(getReult.seenFeedBack)

          let unread = getReult.unseenFeedBack
          let count = 0
          for (let x of unread) {
            if (x.readMessage === true) count++
          }
          prop.setGetStarNotification(count)

          setUnseenChange(false)
          setDeleteChange(false)
          setCheckRead(false)
          // dispath(hideLoading())

        } else {

          // Swal.fire(result.data.message)
          dispath(hideLoading())

        }
      })
      .catch((err) => {
        console.log('FeedBAck problem');
      });



  }



  const moveToSeeen = (index) => {

    let dataUn = [...unseeenFeedBack];
    let seen = dataUn.splice(index, 1)
    setUnseeenFeedBack(dataUn)

    let dataSeen = [...seeenFeedBack];
    dataSeen.push(...seen)
    setSeeenFeedBack(dataSeen)
    setUnseenChange(true)
  }

  useEffect(() => {
    if (unSeenChange) return saveFeedBack()
  }, [seeenFeedBack]);

  const deleteFeedBack = (index) => {
    let dataSeen = [...seeenFeedBack];
    dataSeen.splice(index, 1)
    setSeeenFeedBack(dataSeen)
    setDeleteChange(true)
  }
  useEffect(() => {
    if (deleteChange) return saveFeedBack()
  }, [seeenFeedBack]);

  const [checkRead, setCheckRead] = useState(false)

  const readMessageFn = (index) => {
    let dataUn = [...unseeenFeedBack];
    let dataUnIndex = dataUn[index]
    dataUnIndex['readMessage'] = false
    setUnseeenFeedBack(dataUn)
    setCheckRead(true)
  }

  useEffect(() => {
    if (checkRead) return saveFeedBack()
  }, [unseeenFeedBack]);





  const refreshMessage = () => {

    setUnseeenFeedBack(unseeenFeedBack)
  }





  useEffect(() => {
    getFeedBack();

  }, [user]);




  // const checkBeforeSave = () => {
  //   setSwitchUnseen('unseen')
  //   if (!somthingChange) return prop.setOnOffFeedBAck_MB(false)
  //   setUnseeenFeedBack(tempSwiperArray)
  //   saveFeedBack()
  //   prop.setOnOffFeedBAck_MB(false)


  // }


  const [switchUnseen, setSwitchUnseen] = useState('unseen')
  // const [tempSwiperArray, setTempSwiperArray] = useState([])


  const ref = useRef()

  return (
    <div className="MB_FullPage_Container">
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => prop.setOnOffFeedBAck_MB(false)}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />


          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className="MB_title">Feedback/Comments</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>


      </div>

      <div className="MB_AB_FullAgain zindexUnder1 ">
        <div className="MB_2LangLayout_Grid gridRow_1fr">
          <div className="">

            <div className="MB_InScroll_fullNew paddingBottom_8 greenLinear">
              {/* <div className="MB_PaddingWrapper"> */}
              <div className="MB_SumFeedBack">
                <div className="MB_FBScoreBox1 Flex_AllCenter">
                  <div className="MB_FBCircle"><span className='MB_FBScoreBig Flex_AllCenter'>{averageStar ? averageStar : '0'}</span></div>
                  <div className="MB_FBCircleFont Flex_AllCenter"><div className='MB_FBScore'>{sumCountFeedback}</div><div>comments</div></div>
                </div>


                <div className="MB_FBScoreBox2">
                  <div className="MB_FBDetailRow">

                    <div className='MB_FBTar_Sm'> <img src={MBstar5} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_5}</span> <img src={MBcoms} alt="" />   </span>
                  </div>


                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'> <img src={MBstar2} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_2}</span> <img src={MBcoms} alt="" />   </span>
                  </div>

                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'> <img src={MBstar4} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_4}</span><img src={MBcoms} alt="" />   </span>
                  </div>


                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'> <img src={MBstar1} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_1}</span> <img src={MBcoms} alt="" />   </span>
                  </div>


                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'> <img src={MBstar3} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_3}</span> <img src={MBcoms} alt="" />   </span>
                  </div>
                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'> <img src={MBstar0} alt="" /></div>
                    <span className='MB_FBScore'><span>{totalPointStar_0}</span><img src={MBcoms} alt="" />   </span>
                  </div>


                </div>

              </div>


              <div className="MB_seenFlexBtnBox">
                <button onClick={() => setSwitchUnseen('unseen')} className={`unseenBtn Flex_AllCenter ${switchUnseen === 'unseen' && 'bgWhite'}`}>
                  Inbox</button>
                <button onClick={() => setSwitchUnseen('seen')} className={`unseenBtn Flex_AllCenter ${switchUnseen === 'seen' && 'bgWhite'}`}>
                  Archived</button>
              </div>

              {switchUnseen === 'unseen' && <div className="MB_FBClientContainer_FC ">
                {unseeenFeedBack.map((el, index) => (

                  <div key={index} className='fBcorderbt'>


                    <div onClick={() => {
                      setOpenfeedBack(true)
                      setCurrentPointStar({
                        pointStar: el.pointStar,
                        message: el.message,
                        index: index,
                        date: el.date,
                        time: el.time

                      })
                      readMessageFn(index)
                    }}
                      className="MB_FBClientRow">

                      <div className="MB_Bigstar"><span className='MB_Bigstar_Point Flex_AllCenter'>{el.pointStar}</span><img src={MBiconStarList} alt="" /></div>
                      <div className={`MB_FBMeassage ${el.readMessage && 'unReadBold'}`}>{el.message}</div>
                      <div className="MB_FBDay">
                        <div className={`MB_FBDate ${el.readMessage && 'unReadBold'}`}>{el.date}</div>
                        <div className={`MB_FBTime ${el.readMessage && 'unReadBold'}`}>{el.time}</div>



                      </div>

                    </div>


                    {/* <div onClick={() => {moveToSeeen(index)}} className="SwiperBtnBehide"></div> */}
                  </div>

                ))}


              </div>}

              {switchUnseen === 'seen' && <div className="MB_FBClientContainer_FC">


                {seeenFeedBack.map((el, index) => (


                  <div className='fBcorderbt' key={index}>




                    <div onClick={() => {
                      setOpenfeedBack(true)
                      setCurrentPointStar({
                        pointStar: el.pointStar,
                        message: el.message,
                        index: index,
                        date: el.date,
                        time: el.time
                      })
                    }} className="MB_FBClientRow" key={index}>


                      <div className="MB_Bigstar"><span className='MB_Bigstar_Point Flex_AllCenter'>{el.pointStar}</span><img src={MBiconStarList} alt="" /></div>
                      <div className="MB_FBMeassage">{el.message}</div>

                      <div className="MB_FBDay">
                        <div className="MB_FBDate">{el.date}</div>
                        <div className="MB_FBTime">{el.time}</div>

                      </div>

                    </div>




                  </div>
                ))}




              </div>}

              {/* <button onClick={() => moveToSeeen(index)}>move</button> */}
              {/* <button onClick={saveFeedBack}>SAVE</button> */}

















              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`MB_AB_FullAgain MB_ShowSMS ${!openfeedBack && 'MB_slide_Left'}`}>
        <div className="topBar_function">
          <div className="GruopBtn">
            <button
              onClick={() => setOpenfeedBack(false)}
              className='MB_Btn MB_Btn_Border'>

              <img src={MBiconBack} alt="" />


            </button>
            <span className='MB_textBtn'>Back</span>
          </div>


          <div className="MB_Bigstar biggerStar Flex_AllCenter"><span className='MB_Bigstar_Point Flex_AllCenter'>{currentPointStar.pointStar}</span><img src={MBiconStarList} alt="" /></div>


          {switchUnseen === 'unseen' && <div className="GruopBtn">
            <button
              onClick={() => {
                moveToSeeen(currentPointStar.index)
                setOpenfeedBack(false)
              }
              }
              className='MB_Btn MB_Btn_Border'>

              <img src={MBiconClose} alt="" />


            </button>
            <span className='MB_textBtn'>Move to Seen</span>
          </div>}
          {switchUnseen === 'seen' && <div className="GruopBtn">
            <button
              onClick={() => {
                deleteFeedBack(currentPointStar.index)
                setOpenfeedBack(false)
              }
              }
              className='MB_Btn MB_Btn_Border'>

              <img src={MBiconBin} alt="" />


            </button>
            <span className='MB_textBtn'>Delete</span>
          </div>}



        </div>

        <div className="MB_2LangLayout_Grid gridRow_1fr">
          <div className="MB_Container_Sroll">
            <div className="MB_InScroll_2nd paddingTop_3">
              <div className="MB_dateTimeFb">
                <div className="MB_FBDay">
                  <div className="MB_FBDate">{currentPointStar.date}</div>
                  <div className="MB_FBTime">{currentPointStar.time}</div>

                </div>
              </div>
              <div className="MB_SmsDetail">
                {currentPointStar.message}
              </div>



            </div>
          </div>
        </div>


      </div>


    </div>
  )
}

export default _FeedBackMobile