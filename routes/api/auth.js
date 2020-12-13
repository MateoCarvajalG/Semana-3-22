const router = require('express').Router()
const userController= require('../../controllers/UserController.js')



router.get('/', userController.listar)
router.post('/register', userController.register)

module.exports = router 