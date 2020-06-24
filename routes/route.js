const express = require('express')
const app = express();

module.exports = function(express) {

  var router = require('express').Router();

  app.use('/', router);

}
