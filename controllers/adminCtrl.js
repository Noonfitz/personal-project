const { request, response } = require('express');
const data = require('../data/data');


module.exports = {
    admin: (request, response) => {
        response.render('pages/admin', {
         adminPet : data
        });
    },

    admin_report : (request,response) => {
        response.render('pages/report', {
            adminPet:data
        })
    },

    admin_update: (request,response) => {
        const {_id} = request.params;
        const foundPet = data.find(pet => pet._id === String(_id));
        response.render('pages/update', {  
         adminPet : data,
        foundPet : foundPet
        })
    },

    


}