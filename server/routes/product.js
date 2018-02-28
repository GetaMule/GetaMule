const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/getProduct', (req, res, next) => {
  const bodyFormData = {
    token: 'CSXUDWHIPMCGBMNBZHFOYEAUFMKVBSYOPZJXRJNTGCIEABDCDVEBKNLALORXFTEC',
    source: 'google-shopping',
    currentness: 'daily_updated',
    key: 'keyword',
    country: req.body.country,
    values: req.body.values,
  };

  axios({
    method: 'post',
    url: 'https://api.priceapi.com/jobs',
    data: bodyFormData
    // config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
    .then(data => {
      //handle success
      console.log(data.data);
      res.json(data.data)
    })
    .catch(function(response) {
      //handle error
      console.log(response);
    });
});

module.exports = router;
