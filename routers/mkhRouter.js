const express = require('express');
const router = express.Router();
const mkhControl = require('../controlers/mkhControl')

// mkhRouter
router.route('/').get(mkhControl.getMkhAddresses).post(mkhControl.postMkhAddress)
router.route('/:id').get(mkhControl.getMkhAddress).patch(mkhControl.updateMkhAddress).delete(mkhControl.deleteMkhAddress);

module.exports = router