var express = require('express');
var router = express.Router();
var User=require('../models/User')

/* GET users listing. */
router.post('/edit/:id',(req, res, next) => {
  const userId  = req.params.id;
  const updates = {
    name: req.body.name,
    username: req.body.username,
    password:req.body.password,
    age: req.body.age,
    description:req.body.description,
    };
    if(req.file){
      updates.imgUrl = `/uploads/${req.file.filename}`;
    }
    if (req.body.password !== ""){
      const password = req.body.password;
      let salt = bcrypt.genSaltSync(10);
      let hashPass = bcrypt.hashSync(password, salt);
      updates.password = hashPass;
    }
  User.findByIdAndUpdate(userId,updates, (err, user) => {
  if (err) {return res.status(500).json({ message: 'Something went wrong' });
  }else {
      return res.status(200).json({ message: 'editado correctamente' });
  }
  
  });
});
module.exports = router;
