var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var todoSchema =  new Schema({
  //congfiguration object or it fails
description: {
  type: String,
  require: true
}
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo; //export from file
