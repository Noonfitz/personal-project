const mongoose = require('mongoose');
const {Schema} = mongoose;

const petSchema = new Schema({
  type: {
    type: String,
  },
  date: {
    type: String,
   
  },
  breed: {
    type: String,
    required: [true, 'The breed is required.'],
    minlength: [1, 'Minimun length for breed is 1']
  },
  address: {
    type: String,
  
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },

  color: {
    type: String,
  },

  weight: {
    type: String,
  },
  hair: {
    type: String,
  },
  collar: {
    type: String,
  },
  addition: {
    type: String
  },

   image: {
    type: String,
  },
  // imageupload : {
   
  //     type:String
    
  // }


});



const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;