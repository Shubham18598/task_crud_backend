const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Create and export the model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
