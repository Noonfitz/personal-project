const express = require('express');
const adminCtrl = require('../controllers/adminCtrl');
const router = express.Router();

router.route('/')
.get(adminCtrl.admin)

router.route('/report')
.get(adminCtrl.admin_report)

router.route('/update/:_id')
.get(adminCtrl.admin_update)




module.exports = router;