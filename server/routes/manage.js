var express = require('express');
var student = require('../models/students');
var router = express.Router();


router.post('/', function(req, res) {
  console.log(req.body.email);
  console.log(req.body.sname);
  console.log(req.body.sname);
  var myData=new student(req.body);
  myData.save(function(err,pass) {
  if (err) throw err;
  console.log('User saved successfully!');
});
  res.send("Request body is " + res);
});

router.get('/', function(req, res) {
  student.find({}, function(err, student) {
  if (err) throw err;
  console.log("get data");
  console.log(student);
  res.json(student);
});
});

router.get('/:op', function(req, res) {
  console.log(req.params.op);
  student.findOne({empcode:req.params.op}, function(err, student) {
  if (err) throw err;
  console.log("get data");
  res.json(student);
});
});


module.exports = router;
