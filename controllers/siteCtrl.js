// const { response, request } = require("express");
const User = require('../models/userModels');
const passport = require('passport');


module.exports = {
  index: (request, response) => {
    response.render('pages/index');
    
  },

   contact: (request, response) => {
    response.render('pages/contact');
  },

  catAction: (request, response) => {
    response.render('pages/cat-action');
  },

  dogAction: (request, response) => {
    response.render('pages/dog-action');
  },

  otherLostPet: (request, response) => {
    response.render('pages/other-lost-pet');
  },

  foundPet: (request, response) => {
    response.render('pages/found-pet');
  },

  donate: (request, response) => {
    response.render('pages/donate');
  },

  register_get: (request,response) => {
    response.render('pages/register');
  },

  register_post:(request, response) => {
    const {username, password} = request.body;
    User.register({username: username}, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
        });
      }
    }); 
  },

  login_get: (request, response) => {
    response.render('pages/login');
  },


  login_post: (request, response) => {
    const {username, password} = request.body;
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },

  logout:(request, response) => {
    request.logout();
    response.redirect('/');
  },

  
  google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
  google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
      response.redirect('/admin');
    }
  ]





}