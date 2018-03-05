const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Order = require('../models/Order')
require('dotenv');

router.post('/getProduct', (req, res, next) => {
  const bodyFormData = {
    token: process.env.PRICE_API,
    source: 'google-shopping',
    currentness: 'daily_updated',
    key: 'keyword',
    country: 'us', //reads from database

    values: req.body.values,
  };
  axios({
    method: 'post',
    url: 'https://api.priceapi.com/jobs',
    data: bodyFormData,
  })
    .then(data => {
      //handle success

      res.json(data.data);

      const newProduct = new Product({
        name: bodyFormData.values,
        job_id: data.data.job_id,
        author: req.user._id,
      });
      return newProduct.save().then(prod => {
        res.status(200).json(req.prod);
      });
    })
    .catch(function(e) {
      //handle error
      console.log(e);
    });
});

router.post('/pushOrder', (req, res, next) => {
  console.log(req.params.id)
  console.log(Number(req.body.object.price));
  new Order({
    price: req.body.object.price,
    orderDate: req.body.myDate,
    shop_name: req.body.object.shop_name,
    currency: req.body.object.currency
  }).save()
    .then((order) => {
      User.findByIdAndUpdate({ _id: req.params._id }, { $push: { orders: order._id } }, { new: true })
    })
    .then(user => res.status(200).json({ user }))
    .catch(e => {
      res.status(500).json(e)
    });
});
  
  router.get('/getProduct', (req, res, next) => {
  var user = res.locals.user;

  Product.findOne({author: res.locals.user._id})
    .sort({created_at: -1})
    .then(prod => {
      axios
        .get(
          `https://api.priceapi.com/jobs/${prod.job_id}?token=${process.env
            .PRICE_API}`
        )
        .then(result => {
          axios
            .get(
              `https://api.priceapi.com/products/bulk/${prod.job_id}?token=${process
                .env.PRICE_API}`
            )
            .then(result => {
              res.json(result.data); //products[0].offers
            })
            .catch(e => {
              res.status(404).json(e);
              console.log(e);
            });
        })
        .catch(e => {
          res.status(404).json(e);
          console.log(e);
        });
    });
});

module.exports = router;
