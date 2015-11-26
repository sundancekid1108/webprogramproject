var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name : {type: String, required: true, trim: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
  password: {type: String},
  createdAt: {type: Date, default: Date.now},
  },
 {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports =Survey;
