const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const axios = require('axios');
require("dotenv");

router.post('/getProduct', (req, res, next) => {
  const bodyFormData = {
    token: process.env.PRICE_API,
    source: 'google-shopping',
    currentness: 'daily_updated',
    key: 'keyword',
    country: "fr",
    values: "iPhone 8",
  };
  axios({
    method: 'post',
    url: 'https://api.priceapi.com/jobs',
    data: bodyFormData
  })
    .then(data => {
      //handle success
      ;
      res.json(data.data)

    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
});
// router.get('/getProduct', (req, res, next) => {
//   axios({
//     method: 'get',
//     url: `https://api.priceapi.com/jobs/${data.data.job_id}?token=${bodyFormData.token}`,
//     data: bodyFormData,
//     //config: { headers: { 'Content-Type': 'multipart/form-data' } }
//   })
//     .then(result => {
//       console.log(result)
//       res.json(result)
//     })
//     .catch((e) => {
//       //handle error
//       console.log(e);
//     });

// })

module.exports = router;
