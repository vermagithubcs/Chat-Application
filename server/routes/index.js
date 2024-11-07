const express = require('express')
const router = express.Router()
const registerUser = require('../controllers/registerUser')
const checkEmail = require('../controllers/checkEmail')
const checkPassword = require('../controllers/checkPassword')
const userDetails = require('../controllers/userDetail')
const logout = require('../controllers/logout')
const UpdateUserDetails = require('../controllers/UpdateUserDetails')

router.post('/register', registerUser)
router.post('/email', checkEmail)
router.post('/password', checkPassword)
router.get('/user-details', userDetails)
router.get('/logout', logout)
router.post('/update-user', UpdateUserDetails)



module.exports = router