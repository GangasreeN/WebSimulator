// effortInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let effortInfo = new Schema({
   
    projectId:{
        
    },
   /* atRep:{
        type: Number
    },
    atPo:{
        type: Number
    },*/
    revisedDate:{
        type: Date
    },
    perManday:{
        type: Number
    },
    resource:{
        type: Number
    },
    empId:{
        type : String
    }

},{
    collection: 'effortInfo'
});

    module.exports = mongoose.model('effortInfo', effortInfo);