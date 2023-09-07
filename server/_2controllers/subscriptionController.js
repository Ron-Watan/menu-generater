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

   
      user.save()
      return res.send({
        status: 'active',
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


export const webHooks = (request, response) => {

  console.log('WebHook Report===>')
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, process.env.WEB_HOOK_SECRET);

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

