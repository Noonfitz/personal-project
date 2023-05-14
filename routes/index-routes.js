const express = require('express');
const siteRouter = require('./site-routes')
const petsRouter = require('./pet-routes');
const adminRouter = require('./admin-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/search', petsRouter);
router.use('/admin', adminRouter);

module.exports = router;