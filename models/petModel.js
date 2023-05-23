const mongoose = require('mongoose');
const {Schema} = mongoose;

const petSchema = new Schema({
  type: {
    type: String,
    required: [true, 'A type is required.'],
    minlength:[1,'Minimun length for the first name is 1 characters.']
  },
  date: {
    type: String,
    required: [true, 'The date is required.'],
    minlength:[8,'Minimun length for date 00/00/00 is 8 characters.']
  },
  breed: {
    type: String,
    required: [true, 'The breed is required.'],
    minelngth: [1, 'Minimun length for breed is 1']
  },
  address: {
    type: String,
    required: [true, 'The address is required.'],
    min: [1, 'Minimun length for address is 1']
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },

  color: {
    type: String,
    required: [true, 'The address is required.'],
    min: [1, 'Minimun length for address is 1']
  },

  weight: {
    type: String,
  },
  hair: {
    type: String,
    required: [true, 'The address is required.'],
    min: [1, 'Minimun length for address is 1']
  },
  collar: {
    type: String,
  },
  addition: {
    type: String
  },

   image: {
    type: String,
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;