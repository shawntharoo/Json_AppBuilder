var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var qs = require('qs');
var request = require('request');

/**
 * @param req
 * @param res
 */
exports.addtask = function (req, res) {
    var phone_no = req.body.phone_number;
    new Task({ phone_number: req.body.description });
}

/**
 * @param req
 * @param res
 */
exports.tasksofuser = function (req, res) {
    var phone_no = req.body.phone_number;
    Task.find({ phone_number: phone_no }).exec(function (err, tasks) {
        if (err) {
            console.log('Tasks retrieve error', err);
            res.status(500).json(err);
            return;
        }
        if (tasks) {
            res.status(200).json(tasks);
        }
    });
}

/**
 * @param req
 * @param res
 */
exports.alltasks = function (req, res) {
    Task.find().exec(function (err, tasks) {
        if (err) {
            console.log('Tasks retrieve error', err);
            res.status(500).json(err);
            return;
        }
        if (tasks) {
            res.status(200).json(tasks)
        }
    });
}

/**
 * @param req
 * @param res
 */
exports.upcommingtasks = function (req, res) {
    var n = new Date().toLocaleDateString();
    var today = new Date(n)
    var tomarrow = new Date(n);
    tomarrow.setDate(tomarrow.getDate() + 1);
    Task.find({ "created_on": { "$gte": today, "$lt": tomarrow } }).exec(function (err, tasks) {
        if (err) {
            console.log('Tasks retrieve error', err);
            res.status(500).json(err);
            return;
        }
        if (tasks) {
            res.status(200).json(tasks)
        }
    });
}