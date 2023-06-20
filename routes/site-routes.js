const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router()

router.route('/')
  .get(siteCtrl.index);

router.route('/contact')
  .get(siteCtrl.contact_get)
  .post(siteCtrl.contact_post)
  

router.route('/cat-action')
  .get(siteCtrl.catAction)

router.route('/dog-action')
  .get(siteCtrl.dogAction)

router.route('/other-lost-pet')
  .get(siteCtrl.otherLostPet)

router.route('/found-pet')
  .get(siteCtrl.foundPet)


router.route('/donate')  
 .get(siteCtrl.donate_get)
 .post(siteCtrl.donate_post)



 router.route('/register')
 .get(siteCtrl.register_get)
.post(siteCtrl.register_post)

 router.route('/login')
 .get(siteCtrl.login_get)
.post(siteCtrl.login_post)

router.route('/auth/google')
 .get(siteCtrl.google_get)

router.route('/auth/google/search')
.get(siteCtrl.google_redirect_get)


module.exports = router;