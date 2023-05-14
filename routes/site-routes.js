const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router()

router.route('/')
  .get(siteCtrl.index);

router.route('/login')
  .get(siteCtrl.login);

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


module.exports = router;