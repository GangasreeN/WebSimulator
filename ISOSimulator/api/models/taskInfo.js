// taskInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let taskInfo = new Schema({
   
    projectId:{
        type: String
    },
    taskName:{
        type: String
    },
    storyCount:{
        type: String
    },
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    },
    /*noDays:{
        type: Number
    },*/
    ragStatus:{
        type: String
    },
    workStatus:{
        type: String
    },
    empId:{
        type : String
    }

},{
    collection: 'taskInfo'
});

    module.exports = mongoose.model('taskInfo', taskInfo);