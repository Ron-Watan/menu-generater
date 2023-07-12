import React, { useEffect, useRef, useState } from 'react'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import MBiconStar from '../all-icon/button-icon/star.svg'
import MBiconStarList from '../all-icon/button-icon/starList.svg'
import MBiconBack from '../all-icon/button-icon/MBback.svg'

import SwipeToDelete from 'react-swipe-to-delete-ios'

import axios from 'axios';
import { ticketPass } from '../protectors/authorize';
import { useSelector } from 'react-redux';


const _FeedBackMobile = (prop) => {

  const { user } = useSelector((state) => state.user);
  const [somthingChange, setSomeThingChange] = useState(false)


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
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/getFeedBack`, { clientId: user.clientId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.bothFeedBack;
          setUnseeenFeedBack(getReult.unseenFeedBack)
          setSeeenFeedBack(getReult.seenFeedBack)
          prop.setGetStarNotification(getReult.unseenFeedBack.length)
        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
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
    message: ''
  })




  const saveFeedBack = () => {
    console.log('Yex')
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/saveFeedBack`, {
        clientId: user.clientId,
        unseenFeedBack: unseeenFeedBack,
        seenFeedBack: seeenFeedBack
      }, ticketPass)
      .then((result) => {
        if (result.data.success) {

          const getReult = result.data.bothFeedBack;
          console.log(getReult)
          setUnseeenFeedBack(getReult.unseenFeedBack)
          setSeeenFeedBack(getReult.seenFeedBack)
          prop.setGetStarNotification(getReult.unseenFeedBack.length)

          prop.setOnOffFeedBAck_MB(false)


        } else {
          console.log('fdfdfdfdf')
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      })
      .catch((err) => {

        // console.log("Can't not connect the server", err);
        console.log('Server: Connecting...');
        // Swal.fire("Can't not connect the server")
      });



  }



  const moveToSeeen = (index) => {

    let dataUn = [...unseeenFeedBack];
    let seen = dataUn.splice(index, 1)
    setUnseeenFeedBack(dataUn)



    let dataSeen = [...seeenFeedBack];

    dataSeen.push(...seen)
    setSeeenFeedBack(dataSeen)
    setSomeThingChange(true)
  }


  const deleteFeedBack = (index) => {
    let dataSeen = [...seeenFeedBack];
    let seen = dataSeen.splice(index, 1)
    setSeeenFeedBack(dataSeen)
    setSomeThingChange(true)
  }


  const refreshMessage = () => {

    setUnseeenFeedBack(unseeenFeedBack)
  }
  useEffect(() => {
    getFeedBack();
 
  }, [user]);




  const checkBeforeSave = () => {
    setSwitchUnseen('unseen')
    if (!somthingChange) return prop.setOnOffFeedBAck_MB(false)
    setUnseeenFeedBack(tempSwiperArray)
    saveFeedBack()
    prop.setOnOffFeedBAck_MB(false)


  }


  const [switchUnseen, setSwitchUnseen] = useState('unseen')
  const [tempSwiperArray, setTempSwiperArray] = useState([])


  const ref = useRef()

  return (
    <div className="MB_FullPage_Container">
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={checkBeforeSave}
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

            <div className="MB_InScroll_fullNew paddingBottom_8 overScroll_none">
              {/* <div className="MB_PaddingWrapper"> */}
              <div className="MB_SumFeedBack">
                <div className="MB_FBScoreBox1 Flex_AllCenter">
                  <div className="MB_FBCircle"><span className='MB_FBScoreBig Flex_AllCenter'>{averageStar ? averageStar : '0'}</span></div>
                  <div className="MB_FBCircleFont Flex_AllCenter"><div className='MB_FBScore'>{sumCountFeedback}</div><div>comments</div></div>
                </div>
                <div className="MB_FBScoreBox2">
                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 5</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_5}</span> comment(s)</span>
                  </div>


                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 4</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_4}</span> comment(s)</span>
                  </div>
                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 3</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_3}</span> comment(s)</span>
                  </div>


                </div>
                <div className="MB_FBScoreBox2">
                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 2</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_2}</span> comment(s)</span>
                  </div>


                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 1</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_1}</span> comment(s)</span>
                  </div>
                  <div className="MB_FBDetailRow">
                    <div className='MB_FBTar_Sm'><img src={MBiconStar} alt="" /><span className='MB_FBTar_point'> 0</span></div>
                    <span className='MB_FBScore'><span>{totalPointStar_0}</span> comment(s)</span>
                  </div>


                </div>

              </div>


              <div className="MB_seenFlexBtnBox">
                <button onClick={() => setSwitchUnseen('unseen')} className={`unseenBtn Flex_AllCenter ${switchUnseen === 'unseen' && 'bgWhite'}`}>Unseen</button>
                <button onClick={() => setSwitchUnseen('seen')} className={`unseenBtn Flex_AllCenter ${switchUnseen === 'seen' && 'bgWhite'}`}>Seen</button>
              </div>

              {switchUnseen === 'unseen' && <div className="MB_FBClientContainer_FC ">
                {unseeenFeedBack.map((el, index) => (

                  <SwipeToDelete
                    onDelete={() => {

                    }}
                    // required
                    // optional
                    height={64} // default
                    transitionDuration={250} // default
                    deleteWidth={75} // default
                    deleteThreshold={400} // default
                    showDeleteAction={true} //default
                    deleteColor="#22c5a1" // default
                    deleteText="Seen" // default
                    // deleteComponent={<DeleteComponent />} // not default
                    disabled={false} // default
                    id={`swiper-1`} // not default
                    className="MB_FBClientRow_SlideMove" // not default
                    rtl={false} // default

                    onDeleteConfirm={(onSuccess, onCancel) => {
                      // not default - default is null



                      setTimeout(() => {
                        moveToSeeen(index)
                      }, 250);
                      onCancel();


                      // if (window.confirm("Do you really want to delete this item ?")) {
                      //   onSuccess();

                      // } else {
                      //   onCancel();
                      // }

                    }}
                    key={index}>


                    <div onClick={() => {
                      setOpenfeedBack(true)
                      setCurrentPointStar({
                        pointStar: el.pointStar,
                        message: el.message
                      })
                    }}
                      className="MB_FBClientRow">

                      <div className="MB_Bigstar"><span className='MB_Bigstar_Point Flex_AllCenter'>{el.pointStar}</span><img src={MBiconStarList} alt="" /></div>
                      <div className="MB_FBMeassage">{el.message}</div>
                      <div className="MB_FBDay">
                        <div className="MB_FBDate">{el.date}</div>
                        <div className="MB_FBTime">{el.time}</div>
                      </div>

                    </div>


                    {/* <div onClick={() => {moveToSeeen(index)}} className="SwiperBtnBehide"></div> */}
                  </SwipeToDelete>

                ))}


              </div>}

              {switchUnseen === 'seen' && <div className="MB_FBClientContainer_FC">


                {seeenFeedBack.map((el, index) => (


                  <SwipeToDelete
                    onDelete={() => {

                    }
                    } // required
                    // optional
                    height={64} // default
                    transitionDuration={250} // default
                    deleteWidth={75} // default
                    deleteThreshold={400} // default
                    showDeleteAction={true} //default
                    deleteColor="#cc4b00" // default
                    deleteText="Delete" // default
                    // deleteComponent={<DeleteComponent />} // not default
                    disabled={false} // default
                    id="swiper-2" // not default
                    className="MB_FBClientRow_SlideMove" // not default
                    rtl={false} // default


                    onDeleteConfirm={(onSuccess, onCancel) => {
                      // not default - default is null

                      setTimeout(() => {
                        deleteFeedBack(index)
                        console.dir(ref.current)
                      }, 250);
                      onCancel();


                      // if (window.confirm("Do you really want to delete this item ?")) {
                      //   onSuccess();

                      // } else {
                      //   onCancel();
                      // }

                    }}


                    key={index}>




                    <div onClick={() => {
                      setOpenfeedBack(true)
                      setCurrentPointStar({
                        pointStar: el.pointStar,
                        message: el.message
                      })
                    }} className="MB_FBClientRow" key={index}>


                      <div className="MB_Bigstar"><span className='MB_Bigstar_Point Flex_AllCenter'>{el.pointStar}</span><img src={MBiconStarList} alt="" /></div>
                      <div className="MB_FBMeassage">{el.message}</div>

                      <div className="MB_FBDay">
                        <div className="MB_FBDate">{el.date}</div>
                        <div className="MB_FBTime">{el.time}</div>
                      </div>

                    </div>




                  </SwipeToDelete>
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


          <div className="GruopBtn">
            <button className="MB_BtnEmpty ">

            </button>
          </div>
        </div>

        <div className="MB_2LangLayout_Grid gridRow_1fr">
          <div className="MB_Container_Sroll">
            <div className="MB_InScroll_2nd paddingTop_3">

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