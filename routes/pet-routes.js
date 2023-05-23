const express = require('express');
const petsCtrl = require('../controllers/petCtrl');
const router = express.Router();

router.route('/')
.get(petsCtrl.all_pet)
.post(petsCtrl.pet_report_post)


router.route('/:_id')
.get(petsCtrl.pet_detail)
.put(petsCtrl.pet_update_put)
.delete(petsCtrl.pet_delete)



module.exports = router;