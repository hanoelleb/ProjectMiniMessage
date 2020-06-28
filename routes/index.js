var express = require('express');
var router = express.Router();
var message = require('../models/Message');

var messages = [];

message.MessageRoster.addMessage('Alice', 'Hi, how are you?');

message.MessageRoster.addMessage('Bob', 'I am great! Love to chat.');

var messages = message.MessageRoster.getMessages();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messenger', messages: messages });
});

module.exports = router;
