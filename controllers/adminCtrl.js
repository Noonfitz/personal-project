// const { request, response } = require('express');
// const data = require('../data/data');
const Pet = require('../models/petModel');


module.exports = {
    admin: (request, response) => {
        Pet.find({},(error, allPets) => {
            if(error){
                return error;
            } else {
                response.render('pages/admin', {
                adminPet : allPets
              });
             }
           });
    },

    admin_report: (request,response) => {
        response.render('pages/report', {
        })
    },

    admin_update: (request,response) => {
        const { _id } = request.params;
        Pet.findOne({_id:_id}, (error , foundPet) => {
            if(error) {
                return error;
            } else {
                response.render('pages/update', {  
                    foundPet : foundPet
            });
          }
       }); 

    },



}