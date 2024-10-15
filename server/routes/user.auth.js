const express = require('express');
const { signup, signin, resetPassword, confirmResetPassword } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/reset-password', resetPassword); // Request password reset
router.post('/reset-password/:token', confirmResetPassword); // Confirm password reset

module.exports = router;
