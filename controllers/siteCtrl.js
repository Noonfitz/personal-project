// const { response, request } = require("express");
const User = require('../models/userModels');
const Contact = require('../models/contactModel')
const Donate = require('../models/donateModel')
const passport = require('passport');


module.exports = {
  index: (request, response) => {
    response.render('pages/index');
    
  },

   contact_get: (request, response) => { 
    response.render('pages/contact');
  },

  contact_post: (request,response) => {
    const {name, email, subject, phone, message} = request.body;
    const newContact = new Contact ({
    name: name,
    email: email, 
    subject: subject, 
    phone: phone, 
    message: message, 
    });

    newContact.save();
    response.redirect('/')
  
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

  donate_get: (request, response) => {
    response.render('pages/donate');
  },

  donate_post: (request, response) => {
    const {fname,lname, email, phone, address, city,state,zip, money, monthlydonate,payment, cardnumber,month,year,cvv} = request.body;
    const newDonate = new Donate ({
      fname:fname,
      lname:lname,
      email:email,
      phone:phone,
      address:address,
      city:city,
      state:state,
      zip:zip,
      money:money,
      monthlydonate:monthlydonate,
      payment:payment,
      cardnumber:cardnumber,
      month:month,
      year:year,
      cvv:cvv
    });

    newDonate.save();
    response.redirect('/')
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
          response.redirect('/search');
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
      response.redirect('/search');
    }
  ]





}