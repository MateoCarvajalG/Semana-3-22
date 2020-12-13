const router = require('express').Router();
const apiRouterRegister = require('./api/auth');


router.use('/auth', apiRouterRegister );


module.exports = router ;