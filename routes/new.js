var express = require('express');
var router = express.Router();
var message = require('../models/Message');

router.get('/', function (req, res, next) {
    res.render('new_message');
})

router.post('/', function (req, res, next) {
    var user = req.body.user;
    console.log('user: ' + user);
    var content = req.body.content;
    console.log('content: ' + content);
    message.MessageRoster.addMessage(user, content);
    res.redirect('../');
})

module.exports = router;
