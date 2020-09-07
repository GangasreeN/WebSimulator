// financeInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let financeInfo = new Schema({
   
    projectId:{
        type: String
    },
    travelCost:{
        type: Number
    },
    itCost:{
        type: Number
    },
    salaryCost:{
        type: Number
    },
    marginCost:{
        type: Number
    },
    marginPercent:{
        type: Number
    },    
    adminOverHeads:{
        type: Number
    },
    others:{
        type: Number
    },
    revenue:{
        type: Number
    },
    totalCost:{
        type: Number
    },
    analysis:{
        type: String
    },
    riskProjection:{
        type: Number
    },
    empId:{
        type : String
    }

},{
    collection: 'financeInfo'
});

    module.exports = mongoose.model('financeInfo', financeInfo);