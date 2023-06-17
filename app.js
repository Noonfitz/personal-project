require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const formidable = require('formidable');
const routes = require('./routes/index-routes');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

//load helper
const {upload} = require('./helpers/aws')



app.use(routes);

require('./config/connection');


//receive img
app.post('/uploadImage', upload.any(),(req,res) => {
  const form = new formidable.IncomingForm();
   form.on('file',(field,file) => {
     console.log(file);
   })
   form.on('error', (err) => {
    console.log(err);
     })

     form.on('end', () => {
      console.log('Image received successfully')
     });

     form.parse(req);
});


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});