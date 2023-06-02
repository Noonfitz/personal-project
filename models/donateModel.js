const mongoose = require('mongoose');
const {Schema} = mongoose;

const donateSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
   
  },
  email: {
    type: String,
   
  },
  phone: {
    type: String,
  
  },
  address: {
    type: String,
 
  },

  city: {
    type: String,
    
  },
  state: {
    type: String,
   
  },
  zip: {
    type: String,
   
  },
  money: {
    type: String,
  
  },
  monthlydonate: {
    type: String,

  },


  payment: {
    type: String,
  
  },
  cardnumber: {
    type: String,
   
  },
  month: {
    type: String,
   
  },
  year: {
    type: String,
  
  },
  cvv: {
    type: String,
    
  },

  
  
});



const Donate = mongoose.model('Donate', donateSchema);

module.exports = Donate;