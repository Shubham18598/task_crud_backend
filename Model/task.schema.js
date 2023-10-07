const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const task = new mongoose.model('task', task_schema)
module.exports=task