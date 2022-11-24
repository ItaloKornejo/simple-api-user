
const router = require('express').Router()


const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.createUser)

router.get('/users/:id', userServices.getUserById)
router.patch('/users/:id', userServices.updateUser)
router.delete('/users/:id', userServices.removeUser)

module.exports = router
