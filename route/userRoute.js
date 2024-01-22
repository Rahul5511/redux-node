const express = require('express');
const { createUser, loginController } = require('../controller/userController');
const { newsHeadlines, HeadlinesTechcrunch, AppleHeadlines } = require('../controller/newsController');
const router = express.Router();


router.post('/users/register',createUser)
router.post('/users/login',loginController)
router.get('/news/topHeadlines',newsHeadlines)
router.get('/news/crunch',HeadlinesTechcrunch)
router.get('/news/appleNews',AppleHeadlines)

module.exports = router;