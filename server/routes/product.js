const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Order = require('../models/Order')
const User = require('../models/User')
require('dotenv');

// router.get('/getCurrentCountry', (req, res, next) => {
//   res.status(200).json(req.body.country);
// });

router.post('/getProduct', (req, res, next) => {
  console.log(req.body.country)
  const bodyFormData = {
    token: process.env.PRICE_API,
    source: 'google-shopping',
    currentness: 'daily_updated',
    key: 'keyword',
    country: req.body.country, 

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
      return newProduct.save()
        .then(prod => { res.status(200).json(req.prod) })
    })
    .catch(function (e) {
      res.status(500).json(e)

      console.log(e);
    });
});
//Add an order:
router.put('/pushOrder', (req, res, next) => {
  console.log("8====D")
  console.log(req.session.passport.user)
  console.log(res.locals.user._id)

  const userId = res.locals.user._id
  console.log("8=====D")
  console.log(req.body)
  console.log(Number(req.body.item.price));
  const { shop_name, currency, price } = req.body.item
  new Order({
    price,
    shop_name,
    currency,
    orderDate: req.body.myDate

  }).save()
    .then((savedOrder) => {
      User.findByIdAndUpdate(userId,
        { $push: { orders: savedOrder._id } },
        { new: true }).then(updatedUser => {
          console.log('mi updated user =========================')
          console.log(updatedUser)
        })
        .then(user => {
          console.log(user)
          res.status(200).json({ user })
        })
    })
    .catch(e => {
      res.status(500).json(e)
      console.log(e)
    })
});
router.get('/delete-order/:id', (req, res) => {
  const orderId = req.params.id;
  console.log(req.params.id)

  Order.findByIdAndRemove(orderId)
    .then(user => res.status(200).json({ user }))
    .catch(e => res.status(500).json(e));
})


//SECOND PART OF THE PRICE API
router.get('/getProduct', (req, res, next) => {
  var user = res.locals.user;

  Product.findOne({ author: res.locals.user._id })
    .sort({ created_at: -1 })
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
