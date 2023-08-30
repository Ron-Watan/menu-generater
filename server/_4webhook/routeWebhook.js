
import express from "express";
import cors from 'cors'
import morgan from "morgan";
const app = express()
import Stripe from 'stripe';


const stripe = new Stripe('sk_test_...', {
  apiVersion: '2020-08-27',
});

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   // apiVersion: "2020-08-27",
//   apiVersion: '2023-08-16',

// });
app.use(bodyparser.urlencoded({ extended: true, limit: maxRequestBodySize }))
app.use(bodyparser.json({ limit: maxRequestBodySize }))

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
const endpointSecret = process.env.WEB_HOOK_SECRET;

app.post('/webhook', express.raw({ type: "*/*" }), (request, response) => {
  // router.post('/webhook', raw({ type: 'application/json' }), webHooks)
  console.log('dddddddddddddddddddddddddddddddddddd')
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
});

app.listen(4242, () => console.log('Running on port 4242'));