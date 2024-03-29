// const { request, response } = require('express');
// const data = require('../data/data');
const Pet = require('../models/petModel');

module.exports = {
    all_pet: (request, response) => {
          Pet.find({}, (error, allPets) => {
            if(error){
              return error;
            } else {
              response.render('pages/search', {
                petsArray: allPets
              });
            }
          })
   
  },

  pet_detail: (request, response) => {
    const {_id} = request.params;
    Pet.findOne({_id: _id}, (error, foundPet) => {
      if(error) {
        return error;
      } else {
        response.render('pages/pet-details', {
            foundPet: foundPet
        });
      }
    })

},

pet_report_post: (request,response) => {
    const {type, date, breed, address, gender, age, color, weight, hair ,collar, addition, image } = request.body;

    const newPet = new Pet ({
    type: type,
    date: date, 
    breed: breed, 
    address: address, 
    gender: gender, 
    age: age, 
    color: color, 
    weight: weight, 
    hair: hair, 
    collar: collar, 
    addition: addition, 
    image: `https://lost-pet-app.s3.amazonaws.com/${image}`,
   
    });

    newPet.save();

    if (breed != "") {
        response.redirect("/search")
      } else {
        response.redirect('/admin/report-pet')
      }
},

pet_update_put: (request, response) => {
    const {_id} = request.params;
    
    const {type, date, breed, address, gender, age, color, weight, hair ,collar, addition, image} = request.body;

    Pet.findByIdAndUpdate(_id, {$set: {
        type: type,
        date: date, 
        breed: breed, 
        address: address, 
        gender: gender, 
        age: age, 
        color: color, 
        weight: weight, 
        hair: hair, 
        collar: collar, 
        addition: addition, 
        image: image
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin');
      }
    })
  },

  
  pet_delete: (request, response) => {
    const { _id } = request.params;
    Pet.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin')
      }
    }); 
  }




}

