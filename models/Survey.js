var mongoose = require('mongoose');
var   Schema = mongoose.Schema;

var schema = new Schema({
  Surveyname: {type: String, required: true, trim: true},
  Surveymaker:{type:String, required:true, trim:true},


  createdAt: {type: Date, default: Date.now},

}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;
