import Users from "../_3models/menuModel.js"
import { stripe } from "../_2controllers/Utils.js";
// const stripe = require('stripe')('sk_test_...');
// import Stripe from 'stripe';


// const stripe = new Stripe('sk_test_...', {
//   apiVersion: '2020-08-27',
// });

// const stripe2 = new Stripe('sk_test_...', {
//   apiVersion: '2020-08-27',
// });
export const getSubscription = async (req, res) => {
  const subPackage = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.send({
    message: 'Success',
    subPackage: subPackage,
    success: true,
  }); //send to client side

};


export const subscription = (req, res) => {

  const { email, priceId, coupon } = req.body
  Users.findOne({ email }).then(user => {

    if (!user.stripeCustomerId) return

    stripe.checkout.sessions.create(
      {
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },

        ],
        success_url: process.env.LOCAL_PORT + "/app",
        cancel_url: process.env.LOCAL_PORT + "/app",
        customer: user.stripeCustomerId,
        subscription_data: {
          trial_period_days: 30,
        }

      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    ).then(result => {

      return res.send({
        message: 'Success',
        subPackage: result,
        success: true,
      });

    })

  })


};
//=
// stripe.checkout.sessions.retrieve(
//   'cs_test_c1oLYGtJQXxGXuilMRJwE4JW8EKfeFVvjJYF0l92EjMnQmUg2s9vexfMf9'
// ).then(ddd => {
//   console.log(ddd)
// })

export const accoutReloadDB = (req, res) => {

  const { userId } = req.body
  Users.findOne({ userId }).then(user => {



    user.subscription = {
      id: currentSub.id,
      status: currentSub.status,
      // brand: currentSub.default_payment_method.card.brand,
      // lastDigit: currentSub.default_payment_method.card.last4,
      subscriptionEnd: currentSub.current_period_end,
      subscriptionCancel: currentSub.cancel_at_period_end,

    }


  })
}








export const paymentProcess = (req, res) => {

  const { userId } = req.body
  Users.findOne({ userId }).then(user => {

    if (!user.stripeCustomerId) return
    // stripe.setupIntents.retrieve(user.subscriptionPayUpdate, {
    //   apiKey: process.env.STRIPE_SECRET_KEY,
    // }).then(reIntent => {

    //   stripe.customers.update(user.stripeCustomerId, {

    //     invoice_settings: {
    //       default_payment_method: reIntent.payment_method,
    //     }

    //   }, { apiKey: process.env.STRIPE_SECRET_KEY, })
    //     .then(resultPM => {

    //       stripe.subscriptions.update(user.subscription.id, {

    //         default_payment_method: reIntent.payment_method

    //       }, { apiKey: process.env.STRIPE_SECRET_KEY, })
    //         .then(resultUpPM => {



    stripe.subscriptions.list(
      {
        customer: user.stripeCustomerId,
        status: "all",
        expand: ["data.default_payment_method"],
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    ).then(result => {

      const filterStatus = result.data.filter(el => el.status === 'active' || el.status === 'trialing')




      if (filterStatus.length === 0) {
        user.subscriptionActive = 'inActive'
        user.save()
        return res.send({
          status: 'inActive',
        });
      }
      const currentSub = filterStatus[0]


      user.subscription = {
        id: currentSub.id,
        status: currentSub.status,
        // brand: currentSub.default_payment_method.card.brand,
        // lastDigit: currentSub.default_payment_method.card.last4,
        subscriptionEnd: currentSub.current_period_end,
        subscriptionCancel: currentSub.cancel_at_period_end,

      }

      // user.subscriptionActive = 'active'
      user.save()
      return res.send({
        status: 'active',
      });






      //   })

      // })


      // })





    })

  })

};



export const paymentProcess2 = (req, res) => {

  const { userId } = req.body
  Users.findOne({ userId }).then(user => {


    stripe.setupIntents.retrieve(user.subscriptionPayUpdate, {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }).then(reIntent => {

      stripe.customers.update(user.stripeCustomerId, {

        invoice_settings: {
          default_payment_method: reIntent.payment_method,
        }

      }, { apiKey: process.env.STRIPE_SECRET_KEY, })
        .then(resultPM => {

          stripe.subscriptions.update(user.subscription.id, {

            default_payment_method: reIntent.payment_method

          }, { apiKey: process.env.STRIPE_SECRET_KEY, })
            .then(resultUpPM => {



              stripe.subscriptions.list(
                {
                  customer: user.stripeCustomerId,
                  status: "all",
                  expand: ["data.default_payment_method"],
                },
                {
                  apiKey: process.env.STRIPE_SECRET_KEY,
                }
              ).then(result => {

                const filterStatus = result.data.filter(el => el.status === 'active' || el.status === 'trialing')




                if (filterStatus.length === 0) {
                  user.subscriptionActive = 'inActive'
                  user.save()
                  return res.send({
                    status: 'inActive',
                  });
                }
                const currentSub = filterStatus[0]


                user.subscription = {
                  id: currentSub.id,
                  status: currentSub.status,
                  brand: currentSub.default_payment_method.card.brand,
                  lastDigit: currentSub.default_payment_method.card.last4,
                  subscriptionEnd: currentSub.current_period_end,
                  subscriptionCancel: currentSub.cancel_at_period_end,

                }

                // user.subscriptionActive = 'active'
                user.save()
                return res.send({
                  status: 'active',
                });




















              })

            })


        })















    })

  })

};





















export const getSubPayment2 = (req, res) => {

  const { userId } = req.body
  Users.findOne({ userId }).then(user => {

    stripe.checkout.sessions.create(
      {
        mode: 'setup',
        payment_method_types: ["card"],
        customer: user.stripeCustomerId,
        setup_intent_data: {
          metadata: {
            customer_id: user.stripeCustomerId,
            subscription_id: user.subscription.id,
          },
        },
        success_url: process.env.LOCAL_PORT + "/paymentProcess",
        cancel_url: process.env.LOCAL_PORT,
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    ).then(result => {

      user.subscriptionPayUpdate = result.setup_intent
      user.save()
      // stripe.checkout.sessions.retrieve(
      //   result.id, {
      //   apiKey: process.env.STRIPE_SECRET_KEY,
      // }
      // ).then(resultCs => {

      //   stripe.setupIntents.retrieve(resultCs.setup_intent, {
      //     apiKey: process.env.STRIPE_SECRET_KEY,
      //   }).then(reIntent => {


      //   })
      // })

      return res.send({
        message: 'Success',
        subPackage: result,
        success: true,
      });

    })

  })


};

export const getSubPayment = (req, res) => {


  const { userId } = req.body
  Users.findOne({ userId }).then(user => {
    if (!user.stripeCustomerId) return

    stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: process.env.LOCAL_PORT + '/app',

    }, {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }).then(portal => {
      res.send({
        message: 'Success',
        resDB: portal,
        success: true,
      });

    })

  })



};


// export const cancelSubscription = (req, res) => {

//   const { userId } = req.body
//   Users.findOne({ userId }).then(user => {

//     stripe.subscriptions.update(
//       user.subscription.id,
//       {
//         cancel_at_period_end: true,
//       }, {
//       apiKey: process.env.STRIPE_SECRET_KEY,
//     }
//     ).then(result => {

//       return res.send({
//         message: 'Success',
//         subPackage: result,
//         success: true,
//       });

//     })

//   })


// };




// export const continueSubscription = (req, res) => {

//   const { userId } = req.body
//   Users.findOne({ userId }).then(user => {

//     stripe.subscriptions.update(
//       user.subscription.id,
//       {
//         cancel_at_period_end: false,
//       }, {
//       apiKey: process.env.STRIPE_SECRET_KEY,
//     }
//     ).then(result => {

//       return res.send({
//         message: 'Success',
//         subPackage: result,
//         success: true,
//       });

//     })

//   })


// };





//-
export const checkSubscription = (req, res) => {

  const { email } = req.body

  Users.findOne({ email }).then(user => {

    stripe.subscriptions.list(
      {
        customer: user.stripeCustomerId,
        status: "all",
        expand: ["data.default_payment_method"],
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    ).then(result => {
      const filterStatus = result.data.filter(el => el.status === 'active' || el.status === 'trialing')

      if (filterStatus.length === 0) {
        user.subscriptionActive = 'inActive'
        user.save()
        return res.send({
          status: 'inActive',
        });
      }
      const currentSub = filterStatus[0]
      user.subscription = {
        id: currentSub.id,
        status: currentSub.status,
        // brand: currentSub.default_payment_method.card.brand,
        // lastDigit: currentSub.default_payment_method.card.last4,
        subscriptionEnd: currentSub.current_period_end,
        subscriptionCancel: currentSub.cancel_at_period_end,

      }
      user.subscriptionActive = 'active'
      user.save()
      return res.send({
        message: 'Success',
        resDB: {
          status: user.subscription.status,
          subscriptionEnd: user.subscription.subscriptionEnd,
          subscriptionCancel: user.subscription.subscriptionCancel,
        },
        success: true,
        status: 'active',
      });


    }).catch(err => {
      console.log('Check Subscription Error ')
    })

  })

};





export const deleteCustomer = (req, res) => {


  const { userId } = req.body
  Users.findOne({ userId }).then(user => {
    if (!user.stripeCustomerId) return
    stripe.customers.del(user.stripeCustomerId, {

    }, { apiKey: process.env.STRIPE_SECRET_KEY, }).then(portal => {
      res.send({
        message: 'Success',
        success: true,
      });

    })

  })



};




const endpointSecret = 'whsec_b30002b6dbb863c030b54ee463157a68731bf0b1350cee879ce3f774028435e2';

export const webHooks = (request, response) => {

  console.log('WebHook Report===>')
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

  } catch (err) {
    console.log(err)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();

}


// DOC


// stripe.subscriptions.update('sub_1Nj6QTGFhFwjKc9QTcHldqPP', {
    //   default_payment_method: 'pm_1NjQ5pGFhFwjKc9Q5ZLD7MrI',
    // });

    // cus_OW3I75CYomMJ78

    // stripe.setupIntents.retrieve("seti_1NjzblGFhFwjKc9QcuDvrfF3", {
    //   apiKey: process.env.STRIPE_SECRET_KEY,
    // }).then(reIntent => {
    //   console.log(reIntent)
    // })



    // stripe.customer.retrieve("cus_OW3I75CYomMJ78", {
    //   apiKey: process.env.STRIPE_SECRET_KEY,
    // }).then(reIntent => {
    //   console.log(reIntent)
    // })




    // stripe.customers.update(
    //   'cus_OW2suOtt2f8JCo',
    //   {
    //     invoice_settings: {
    //       default_payment_method: 'pm_1NjQiRGFhFwjKc9Q6ohbDHe8',
    //     },
    //   },
    //   {
    //     apiKey: process.env.STRIPE_SECRET_KEY,
    //   }
    // );

    // })