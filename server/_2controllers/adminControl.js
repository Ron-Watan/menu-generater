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

      // return {
      //   cutomerID: el1.id,
      //   cutomerEmail: el1.email,
      //   subscriptions: subscriptions.data
      // }


      // let testy2 = await Promise.all(subscriptions.data.map(async el2 => {
      //   return el2.reduce(function (prev, current) {
      //     (prev.cancel_at > current.cancel_at) ? prev : current
      //   })
      // }))
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
      // console.log(testy2)
      // return {
      //   cutomerID: el1.id,
      //   cutomerEmail: el1.email,
      //   subscriptions: testy2
      // }



      // idSub.push(result2.data)
      // return result2.data

      // let date = new Date(el2.canceled_at * 1000)
      // const filterStatus2 = result2.data.filter(el2 =>( el2.status !== 'active') && (el2.status !== 'trialing'))

      // result2.data.forEach(el2 => {
      //   let data = `SubId= ${el2.id} ,Status= ${el2.status},Trial-end= ${(new Date(el2.trial_end * 1000))}, Sub-end= ${(new Date(el2.cancel_at * 1000))}, Cancel?= ${el2.cancel_at_period_end}, When Cancel?= ${new Date(el2.canceled_at * 1000)}`

      //   let data = `SubId= ${el2.id} ,Status= ${el2.status},Trial-end= ${(new Date(el2.trial_end * 1000))}, Sub-end= ${(new Date(el2.cancel_at * 1000))}, Cancel?= ${el2.cancel_at_period_end}, When Cancel?= ${new Date(el2.canceled_at * 1000)}`
      //   idSub.push(data)

      // })

      // console.log(el1.id, el1.email, idSub)




      //////////////++++++++++++++++

      // const max = result2.data.reduce(function (prev, current) {
      //   return (prev.cancel_at > current.cancel_at) ? prev : current
      // })
      // let data = `SubId= ${max.id} ,Status= ${max.status},Trial-end= ${(new Date(max.trial_end * 1000))}, Sub-end= ${(new Date(max.cancel_at * 1000))}, Cancel?= ${max.cancel_at_period_end}, When Cancel?= ${new Date(max.canceled_at * 1000)}`


      // if (max.cancel_at_period_end === true) {
      //   // console.log(el1.id, el1.email, "\n", data, "\n")
      //   return dataArr.push(max)
      // }


      //////////////++++++++++++++++




      // const fSCancel = max.filter(el => el.cancel_at_period_end === true)

      // let data1 = `SubId= ${fSCancel.id} ,Status= ${fSCancel.status},Trial-end= ${(new Date(fSCancel.trial_end * 1000))}, Sub-end= ${(new Date(fSCancel.cancel_at * 1000))}, Cancel?= ${fSCancel.cancel_at_period_end}, When Cancel?= ${new Date(fSCancel.canceled_at * 1000)}`


      // console.log(el1.id, el1.email, data1)
      //returns object
      // const filterStatus2 = result2.data.filter(el2 => el2.status === 'active' || el2.status === 'trialing')

      // console.log(el1.id, el1.email, filterStatus2)
      // filterStatus2.forEach(el2 => {

      //   let data = `SubId= ${el2.id} ,Status= ${el2.status},Trial-end= ${(new Date(el2.trial_end * 1000))}, Sub-end= ${(new Date(el2.cancel_at * 1000))}, Cancel?= ${el2.cancel_at_period_end}, When Cancel?= ${new Date(el2.canceled_at * 1000)}`
      //   idSub.push(data)

      // })
      // console.log(el1.id, el1.email, idSub)
      // })

    }))

    // let testy2 = await Promise.all(testy.map(async el2 => {

    //   return el2.reduce(function (prev, current) {
    //     return (prev.cancel_at > current.cancel_at) ? prev : current
    //   })
    // }))
    // console.log(testy)
    const results = customerCanceled.filter(element => {
      return (element !== null) && (element !== undefined);
    });

    console.log(results)

    res.send({
      data: results,
    });


  }).then(rrrr => {

  })



};
