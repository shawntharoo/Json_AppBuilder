var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var qs = require('qs');
var request = require('request');

/**
 * @param req
 * @param res
 */
exports.addtask = function(req, res){
    new Task({description: req.body.description});
}