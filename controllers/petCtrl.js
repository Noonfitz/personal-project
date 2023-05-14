const data = require('../data/data');

module.exports = {
    all_pet: (request, response) => {
          response.render('pages/search', {
              petsArray: data
          });
   
  },

  pet_detail: (request, response) => {
    const {_id} = request.params;
    const foundPet = data.find(pet => pet._id === _id);
    response.render('pages/pet-details', {
        petsArray: data,
        foundPet : foundPet
    });

},


}

