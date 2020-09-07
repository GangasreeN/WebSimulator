// Defect.js
//const actionInfoSchema = require('../models/actionInfo.js').actionInfoSchema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');


let defectInfo = new Schema({
  
    empId: {
    type: Number
  },
  projectId: {
    type: String
  },
  raisedLastSit:{
    type:Number
  },
  raisedLastUat:{
      type:Number
  },
  raisedLastComments:{
      type:String
  },
  closedLastSit:{
    type:Number
  },
  closedLastUat:{
      type:Number
  },
  closedLastComments:{
      type:String
  },
  totRaisedSit:{
    type:Number
  },
  totRaisedUat:{
      type:Number
  },
  totRaisedComments:{
      type:String
  },
  totCloseSit:{
    type:Number
  },
  totCloseUat:{
      type:Number
  },
  totCloseComments:{
      type:String
  },
  nettSit:{
    type:Number
  },
  nettUat:{
      type:Number
  },
  nettComments:{
      type:String
  }
  },{
      collection: 'defectInfo'
});







/*userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

module.exports = mongoose.model('defectInfo', defectInfo);
