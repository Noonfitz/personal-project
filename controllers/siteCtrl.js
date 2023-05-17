const { response, request } = require("express");

module.exports = {
  index: (request, response) => {
    response.render('pages/index');
  },

  login: (request, response) => {
    response.render('pages/login');
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
  }


}