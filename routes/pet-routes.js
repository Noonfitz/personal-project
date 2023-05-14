const express = require('express');
const petsCtrl = require('../controllers/petCtrl');
const router = express.Router();

router.route('/')
.get(petsCtrl.all_pet)


router.route('/:_id')
.get(petsCtrl.pet_detail)




module.exports = router;