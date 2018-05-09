var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    description: String,
    status: String,
    assigned_user: String,
    created_user: String,
    creted_date: Date,
    end_date: Date
});

mongoose.model('Task', TaskSchema);

