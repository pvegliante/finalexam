'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  Player: String,
  Score: String
});

module.exports = mongoose.model('score', ScoreSchema, 'score');
