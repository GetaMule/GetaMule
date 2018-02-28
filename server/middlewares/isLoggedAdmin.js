function checkRoles(role) {
  return function (req, res, next) {
    console.log(req.user.role);
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    } else {
      res.redirect('/login')
      //return next();
    }
  }
}

var checkAdmin = checkRoles('Admin');

module.exports = checkAdmin;