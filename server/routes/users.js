var express = require('express');
var router = express.Router();
var User = require('../models/User')
const bcrypt = require('bcrypt');


router.get('/', (req, res, next) => {
  const userId = req.user._id;;

  User.findById(userId, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    res.status(200).json({ user: user })
  });
});



router.put('/edit/:id', (req, res, next) => {
  console.log(req.body)
  const userId = req.params.id;
  const updates = {

    username: req.body.user.username,
    originCountry: req.body.user.originCountry,
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




module.exports = router;
