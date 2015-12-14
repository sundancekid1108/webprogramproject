var mongoose = require('mongoose');
var moment= require('moment');
var Schema = mongoose.Schema;

var schema = new Schema({
  Survey: {type: Schema.Types.ObjectId, required: true, trim: true},// 아이디로 받음
  content: {type: String, required: true, tim: true},
  contentvalue: {type: String},
createdAt: {type: Date, default: Date.now}

}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Surveyoption = mongoose.model('Surveyoption', schema);

module.exports = Surveyoption;
