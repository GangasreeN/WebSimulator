// project.js.js
//const actionInfoSchema = require('../models/actionInfo.js').actionInfoSchema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');
/*let actionInfoSchema = new Schema({ 
  actionId: {
  type: String
},
actionSteps:{
  type: String
},
byWhom:{
  type: String
},
byWhen:{
  type: String
},
actionStatus:{
  type: String
},
dependencies:{
  type: String
}
});*/


let projectInfo = new Schema({
  
    customerName: {
    type: String
  },
  projectName: {
    type: String
  },
  projectManager: {
    type: String
  },
  upin:{
      type:String
  },
  projectStatus:{
    type:String
},
projectStartDate:{
    type:Date
},
projectEndDate:{
    type:Date
},
empId:{
  type:Number
},
delivery:{
  type:String
},
people:{
  type:String
},
scope:{
  type:String
},
finance:{
  type:String
},
customer:{
  type:String
},
//actionInfo: [actionInfoSchema]
},{
    collection: 'projectInfo'
});

/*userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

module.exports = mongoose.model('projectInfo', projectInfo);
