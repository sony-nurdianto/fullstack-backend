const express = require('express');
const router = express.Router();
const userController = require('../containers/User')

router.post('/register',userController.create)
router.post('/login',userController.authenticated)
router.get('/get',userController.getData)
router.get('/getDataById/:userId',userController.getDatabyId)
router.delete('/del/:userId',userController.deleteById)


module.exports = router;
