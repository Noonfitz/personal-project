const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router()

router.route('/')
  .get(siteCtrl.index);

router.route('/contact')
  .get(siteCtrl.contact);

router.route('/cat-action')
  .get(siteCtrl.catAction);

router.route('/dog-action')
  .get(siteCtrl.dogAction);

router.route('/other-lost-pet')
  .get(siteCtrl.otherLostPet);

router.route('/found-pet')
  .get(siteCtrl.foundPet);


router.route('/donate')  //still don't know which route to put in yet 
 .get(siteCtrl.donate);


 router.route('/register')
 .get(siteCtrl.register_get)
//  .post(siteCtrl.register_post)

 router.route('/login')
 .get(siteCtrl.login);
//  .post(siteCtrl.login_post)

// router.route('/auth/google')
//   .get(siteCtrl.google_get)

// router.route('/auth/google/admin')
//   .get(siteCtrl.google_redirect_get)


module.exports = router;