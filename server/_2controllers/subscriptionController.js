import Users from "../_3models/menuModel.js"
import { stripe } from "../_2controllers/Utils.js";


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

  const { email, priceId } = req.body
  Users.findOne({ email }).then(user => {

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
        success_url: process.env.LOCAL_PORT+"/app",
        cancel_url: process.env.LOCAL_PORT,
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
      console.log(result)
      const filterStatus = result.data.filter(el => el.status === 'active' || el.status === 'trialing')
      if (filterStatus.length === 0) {
        user.subscriptionActive = 'inActive'
        user.save()
        return res.send({
          status: 'inActive',

        });
      }
      user.subscriptionActive = 'active'
      user.save()
      return res.send({
        status: 'active',
      });


    })

  })


};
