var express = require('express');
var router = express.Router();

router.get('/',isLoggedIn, function(req,res){
    res.render('feed.ejs', {user: req.user});
});

router.get('/post=*', isLoggedIn, function(req,res){
    res.render('customizedPost.ejs');
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}


