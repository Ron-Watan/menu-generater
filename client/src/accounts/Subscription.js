import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ticketPass } from '../protectors/authorize';
import { useNavigate } from 'react-router-dom';

function Subscription() {
  //1//

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const [subscriptionPack, setSubscriptionPack] = useState({})

  const [visiblePack, setVisblePack] = useState(false)
  const getSubscriptionPack = () => {

    axios
      .post(`${process.env.REACT_APP_API}/user/checkSubscription`, { email: user.email }, ticketPass)
      .then((result) => {
        const getReult = result.data.status;
        if (getReult === 'active') {
          navigate('/app')
        } else if (getReult === 'inActive') {

          axios
            .get(`${process.env.REACT_APP_API}/user/getSubscription`, ticketPass)
            .then(resultDB1 => {
              const getReult1 = resultDB1.data.subPackage.data[0]
              setSubscriptionPack(getReult1)
              axios
                .post(`${process.env.REACT_APP_API}/user/subscription`, { email: user.email, priceId: getReult1.id }, ticketPass)
                .then((resultDB2) => {

                  if (resultDB2.data.success) {
                  
                    const getReult2 = resultDB2.data.subPackage;
                    window.location.href = getReult2.url
                  } else {
                  }
                })
                .catch((err) => {
                });

              // submitSubscription()

            })



        }
      })
      .catch((err) => {

        console.log('Server: Connecting...');

      });

  }



  const submitSubscription = () => {
    axios
      .post(`${process.env.REACT_APP_API}/user/subscription`, { email: user.email, priceId: subscriptionPack.id }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.subPackage;
          window.location.href = getReult.url
        } else {
        }
      })
      .catch((err) => {
      });
  };

  useEffect(() => {
    if (user.userId) getSubscriptionPack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  return (
    <div className="m-auto w-fit flex flex-col justify-center">
      {visiblePack && <div className="">
        <h1 className="text-2xl my-6">
          NO
          {/* Signed in as {session?.user?.name} */}
        </h1>
        <div className="grid lg:grid-cols-3 gap-2">

          {/* <div className="">{subscriptionPack.planType}</div> */}
          {/* <div className="">{subscriptionPack.id}</div> */}
          {/* <div className="">{subscriptionPack.unit_amount / 100}</div> */}


        </div>
        <button
          className="p-2 text-white border mt-4"
          onClick={() => submitSubscription()}
        >
          Subb
        </button>
      </div>}
    </div>
  )
}

export default Subscription