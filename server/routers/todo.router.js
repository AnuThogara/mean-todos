var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/todos', function(req, res){});
router.get('/todos/:id', function(req, res){});
router.post('/todos', function(req, res){
  res.send(req.body);
});
router.put('/todos/:id', function(req, res){});
router.delete('/todos/:id', function(req, res){});


module.exports = router;
