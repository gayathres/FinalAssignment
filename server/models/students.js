var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student = new Schema({
  wave: String,
  name: String,
  email: String,
  phone: String,
  giturl: String,
  empcode: String,
  empdept: String,
  empdesign: String,
  skills: String,
  exp: String
});

module.exports=mongoose.model('student',student);
