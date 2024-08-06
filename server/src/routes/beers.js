const express = require('express');
const routes = express.Router();
const {getBeers} = require('../controllers/beers');

routes.get('/getBeers');

module.exports = getBeers;