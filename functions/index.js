const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQm2vGMVBv8F0TvaWC7Y1Sw3qtSBnFWlnmXWWNGnXY3BAy0mhifD9TkuXTKhNu8vL4nh0a9VlhVscg5B7Lsh82G00U03Kdroa"
);

//api


//app config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());


//api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  
  console.log('Payment Receved', total)
  const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency:"usd",
  });
  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })
})

//listen command
exports.api = functions.https.onRequest(app)