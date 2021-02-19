//const { Router } = require("express");
const express = require('express');
const router = express.Router('');
const adminController = require('../controller/adminController.js')

router.post('/signup', adminController.signUp);

router.post('/login', adminController.login);

router.post('/generatetask', adminController.generateTask);

router.get('/allTaskInfo', adminController.allTaskInfo);

router.get('/allDeveloperInfo', adminController.allDeveloperInfo);

module.exports = router;