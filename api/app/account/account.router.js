var express = require('express');
var router = express.Router();
const accountContr = require('./account.controller');
const accountContain = require('../../libs/urlContain');

//Account
router.post(accountContain.createToken,accountContr.createToken);
router.post(accountContain.Authen, accountContr.checkToken)


module.exports = router