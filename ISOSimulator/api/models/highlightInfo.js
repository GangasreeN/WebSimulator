// taskInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let highlightInfo = new Schema({
   
    projectId:{
        type: String
    },
    importantHighlight:{
        type: String
    },
    keyRisk:{
        type: String
    },
    upcomimgKeyActivity:{
        type: String
    },
    empId:{
        type : String
    }

},{
    collection: 'highlightInfo'
});

    module.exports = mongoose.model('highlightInfo', highlightInfo);