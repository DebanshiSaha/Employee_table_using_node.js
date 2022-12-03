const express = require('express');
const router = express.Router();
const userController = require("../controllers/admin-controller/user-controller");
const multer = require('multer');





const request_param = multer();

router.get('/', userController.redirectHome);

router.get('/home',userController.userList);
router.get('/delete/:userid', userController.userDelete);
router.post('/home', userController.userSignup);

module.exports = {
    routes: router
};