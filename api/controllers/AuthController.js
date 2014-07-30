/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Handle auhentification stuff
 *
 * @docs        :: http://jethrokuan.github.io/2013/12/19/Using-Passport-With-Sails-JS.html
 */
var passport = require('passport');

module.exports = {
    
  login: function(req, res) {
    res.view('auth/login');
  },

  process: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        res.redirect('/login');
        return;
      }
      req.logIn(user, function(err) {
        if (err) res.redirect('/login');
        return res.redirect('/');
      });
    })(req, res);
  },

  logout: function (req, res) {
    req.logout();
    res.send('logout successful');
  },

  home: function(req, res) {
  	if (req.isAuthenticated()){
    	res.view('home/index');
	  } else {
	    res.redirect('/login');
	  }
  },
  _config: {}
  
};
