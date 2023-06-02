const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Enter your name is required.'],
    minlength: [1, 'Minimun length name is 1']
  },
  email: {
    type: String,
   
  },
  subject: {
    type: String,
   
  },
  phone: {
    type: String,
  
  },
  message: {
    type: String,
    required: [true, 'Enter your message is required.'],
    minlength: [1, 'Minimun length message is 1']
  },
  
});



const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;