var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var qs = require('qs');
var request = require('request');
var ObjectId = require('mongoose').Types.ObjectId;

/**
 * @param req
 * @param res
 */
exports.addtask = function (req, res) {

    var phone_number = req.body.phone_number;
    var title = req.body.title;
    var description = req.body.description;
    var status = req.body.status;
    var assigned_user = req.body.assigned_user;
    var creted_date = req.body.creted_date;
    var due_date = req.body.due_date;
    var project = req.body.project;

    var task = new Task({ phone_number: phone_number });
    task.set('title',title);
    task.set('description',description);
    task.set('status',status);
    task.set('assigned_user',assigned_user);
    task.set('creted_date',creted_date);
    task.set('due_date',due_date);
    task.set('project',project);
    task.save(function (err, doc) {
        if (err) {
            console.log('Error Creating Task', err);
            res.status(500).json(err);
        } else {
            res.status(200).json(doc);
        }
    });

}

/**
 * @param req
 * @param res
 */
exports.tasksofuser = function (req, res) {
    var phone_no = req.body.phone_number;
    Task.find({ assigned_user: phone_no }).exec(function (err, tasks) {
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
    var phone_no = req.body.phone_number;
    var n = new Date().toLocaleDateString();
    var today = new Date(n);
    var tomarrow = new Date(n);
    tomarrow.setDate(tomarrow.getDate() + 1);
    Task.find({ "created_on": { "$gte": today, "$lt": tomarrow }, "assigned_user": phone_no }).exec(function (err, tasks) {
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
exports.taskdata = function (req, res) {
    var id = req.body._id;
    Task.find({"_id": new ObjectId(id) }).exec(function (err, task) {
        if (err) {
            console.log('Tasks retrieve error', err);
            res.status(500).json(err);
            return;
        }
        if (task) {
            res.status(200).json(task)
        }
    });
}