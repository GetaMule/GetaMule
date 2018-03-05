var express = require('express');
var router = express.Router();
var User = require('../models/User')
const bcrypt = require('bcrypt');
const MyTravels = require('../models/MyTravels')
const Order = require('../models/Order')



router.get('/', (req, res, next) => {
  const userId = req.user._id;;

  User.findById(userId, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    res.status(200).json({ user: user })
  }).populate("myTravels").then((respuesta) => { res.status(200).json({ user: respuesta }) });
});

router.put('/edit/:id', (req, res, next) => {
  console.log(req.body)
  const userId = req.params.id;
  const updates = {

    username: req.body.user.username,

    password: req.body.user.password,
    role: req.body.user.role,

  };
  if (req.file) {
    updates.imgUrl = `/uploads/${req.file.filename}`;
  }
  if (req.body.password !== "") {
    const password = req.body.user.password;
    let salt = bcrypt.genSaltSync(10);
    let hashPass = bcrypt.hashSync(password, salt);
    updates.password = hashPass;
  }
  User.findByIdAndUpdate(userId, updates, { new: true })
    .then(user => res.status(200).json({ user }))
    .catch(e => res.status(500).json(e))
});
//NewTravel
router.put('/new/:id', (req, res, next) => {
  console.log(req.body)
  const userId = req.params.id;
  const { destiny, origin, date } = req.body.myTravels

  new MyTravels({
    destiny,
    origin,
    date

  }).save()
    .then((newTrav) => {
      User.findByIdAndUpdate(
        { _id: userId },
        { $push: { myTravels: newTrav._id } },
        { new: true })
        .then(user => res.status(200).json({ user }))
        .catch(e => res.status(500).json(e))


    })

})
router.get('/delete-travel/:id', (req, res) => {
  const travelId = req.params.id;
  console.log(req.params.id)

  MyTravels.findByIdAndRemove(travelId)
    .then(user => res.status(200).json({ user }))
    .catch(e => res.status(500).json(e));
})
//Add Order
// router.put('/order/add/:id', (req, res, next) => {
//   console.log(req.body)
//   const userId = req.params.id
//  // const orderDate
//   new MyTravels({


//   }).save()
//     .then((newOrd) => {
//       User.findByIdAndUpdate(
//         { _id: userId },
//         { $push: { orders: newOrd._id } },
//         { new: true })
//         .then(user => res.status(200).json({ user }))
//         .catch(e => res.status(500).json(e))


//     })

// })


module.exports = router;
