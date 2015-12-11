var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  survey: {type:Schema.Types.ObjectID, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  content: {type: String, required: true, tim: true},
  numComment:{type: Number, default:0},
  createdAt: {type: Date, default: Date.now},

}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;