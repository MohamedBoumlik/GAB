const client = require('../controllers/client.controller')
const express = require('express')
const router = express.Router()

router.post('/', client.authenticate);
router.post('/phoneBill', client.phoneBill);
router.post('/carTax', client.carTax);

module.exports = router