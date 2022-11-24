const express = require('express');
const router = express.Router();

const LoansControllers = require('../controllers/LoansControllers')

router.post('/create', LoansControllers.createLoan);

module.exports = router; 