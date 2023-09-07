import { stripe } from "../_2controllers/Utils.js";



export const listAllSubscription = (req, res) => {

  stripe.customers.list(
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  ).then(async result1 => {
    let customerCanceled = await Promise.all(result1.data.map(async el1 => {


      const eachSubscriptions = await stripe.subscriptions.list(
        {
          customer: el1.id,
          status: "all",
          // expand: ["data.default_payment_method"],
        },
        {
          apiKey: process.env.STRIPE_SECRET_KEY,
        }
      )

   
      if (eachSubscriptions.data.length === 0) return
      let lastSubscription = eachSubscriptions.data.reduce(function (prev, current) {
        return (prev.cancel_at > current.cancel_at) ? prev : current

      })

      // Canceled
      if (lastSubscription.cancel_at_period_end === true) {



        return {
          cutomerID: el1.id,
          cutomerEmail: el1.email,
          subscriptions: lastSubscription
        }
      } return null
      
      

    }))


    const results = customerCanceled.filter(element => {
      return (element !== null) && (element !== undefined);
    });

    console.log(results)

    res.send({
      data: results,
    });


  })


};
