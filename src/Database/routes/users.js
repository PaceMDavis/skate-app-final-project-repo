 const express = require('express')
 const usersController = require('../controllers/users')
 const router = express.Router()

 router.get('/', usersController.getAllUsers)
 router.get('/:id', usersController.getUserById)

 // Register Handle
 router.post('/', usersController.createUser)

 //Login Handle
 router.post('/', usersController.login)

 module.exports = router