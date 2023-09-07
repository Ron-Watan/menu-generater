import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ticketPass } from '../protectors/authorize';
import MBiconClose from '../all-icon/button-icon/MBclose.svg'


function _12Account(prop) {

  // const [oneTimeCheck, setOneTimeCheck] = useState(true)

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let subscriptionEnd;
  // const subscriptionEndFn = () => {
    let date = new Date(prop.subscriptionFromDB.subscriptionEnd * 1000)
    subscriptionEnd = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
    // setOneTimeCheck(true)
  // }



    const editPayment = () => {

      axios
        .post(`${process.env.REACT_APP_API}/user/getSubPayment`, { userId: prop.user.userId }, ticketPass)
        .then((result) => {
          if (result.data.success) {

            const getReult = result.data.resDB;
            window.location.href = getReult.url
            // navigate('')
          } else {

          }
        })
        .catch((err) => {

        });


    }
  
  // useEffect(() => {
  //   if (oneTimeCheck && prop.user.userId) {
  //     subscriptionEndFn()
  //   }
  //   // eslint-disable-next-line 
  // }, [prop.user]);

  return (
    <div className=" MB_FullPage_Container">

      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => {
              prop.setOnOffAccount_MB(false)
              prop.setToggleScrollAccount(false)
            }}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />


          </button>
          <span className='MB_textBtn'>Close</span>
        </div>
        <div className="MB_title">Accout</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">

          </button>
        </div>
      </div>

      <div className="MB_AB_FullAgain zindexUnder1 ">
        <div className="MB_2LangLayout_Grid ">
          <div className="">
            <div className={`${prop.toggleScrollAccount === true && "MB_InScroll_fullNew"} paddingBottom_5`}>


              <div className="MB_OnOffContainer ">

                <div className="MB_OF_Flex_Col">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text ">Account Information</span>

                  </div>



                  <div className={`MB_OF_Flex `}>
                    <span className="MB_OF_text paddingleft_OF">Email</span>
                    <span className="MB_OF_text paddingleft_OF">{prop.user.email}</span>

                  </div>

                  <div className={`MB_OF_Flex flex_end`}>
                    <button onClick={() => prop.setAccountPassword(true)} className="Acc_SettingBtn">Change Password</button>
                  </div>

                </div>


                <div className="MB_OF_Flex_Col">

                  <div className="MB_OF_Flex colorof_title">
                    <span className="MB_OF_text ">Subscription</span>

                  </div>

                  {/* //- */}
                  <div className={`MB_OF_Flex `}>
                    <span className="MB_OF_text paddingleft_OF">Status</span>
                    {prop.subscriptionFromDB.status === "trialing" && <span className="MB_OF_text paddingleft_OF">Free Trial</span>}
                    {prop.subscriptionFromDB.status === "active" && <span className="MB_OF_text paddingleft_OF">Active</span>}

                  </div>

                  {(!prop.subscriptionFromDB.subscriptionCancel && prop.subscriptionFromDB.status === "trialing") && <div className={`pb-2`}>
                    <div className="MB_OF_text paddingleft_OF FlexText_Right">
                      <div>{`After your free trial ends, ${subscriptionEnd}`}</div>
                      <div>{`this plan will be billing monthly.`}</div>
                    </div>
                  </div>}

                  <div className={`MB_OF_Flex `}>
                    <span className="MB_OF_text paddingleft_OF">All Features Plan</span>
                    {prop.subscriptionFromDB.subscriptionCancel && <span className="MB_OF_text paddingleft_OF">Canceled </span>}
                    {!prop.subscriptionFromDB.subscriptionCancel && <span className="MB_OF_text paddingleft_OF">$9.99/Month</span>}

                  </div>

                  {(prop.subscriptionFromDB.subscriptionCancel && prop.subscriptionFromDB.status === "trialing") && <div className={`PaddingB_1`}>
                    <div className="MB_OF_text paddingleft_OF FlexText_Right">
                      <div>{`After your free trial ends, ${subscriptionEnd}`}</div>
                      <div>{`this plan will no longer be available,`}</div>
                      <div className="">and you will lose all your data.</div>
                    </div>
                  </div>}

                  {(prop.subscriptionFromDB.subscriptionCancel && prop.subscriptionFromDB.status === "active") && <div className={`PaddingB_1`}>
                    <div className="MB_OF_text paddingleft_OF FlexText_Right">
                      <div>{`Your plan is still available`}</div>
                      <div>{`until the end of your billing period on ${subscriptionEnd}`}</div>
                    </div>
                  </div>}

                  {!prop.subscriptionFromDB.subscriptionCancel && <div className={`MB_OF_Flex `}>
                    <div className="MB_OF_text paddingleft_OF">{`Billing Monthly`}</div>
                    <div className="MB_OF_text paddingleft_OF">{`Next payment on ${subscriptionEnd}`}</div>

                  </div>}

                  <div className={`MB_OF_Flex flex_end`}>
                    <button onClick={editPayment} className="Acc_SettingBtn">Edit Subscription and Payment</button>
                  </div>

                </div>


              </div>



            </div>
          </div>

        </div>


      </div>
    </div >
  )
}

export default _12Account