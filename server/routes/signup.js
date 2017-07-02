const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',

    failureRedirect: '/signup'
  }
));

module.exports = router;
