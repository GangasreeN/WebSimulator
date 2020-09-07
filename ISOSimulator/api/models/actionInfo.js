// actionInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');



let actionInfo = new Schema({
   
    projectId:{
        type: String
    },
    empId:{
        type: Number
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

},{
    collection: 'actionInfo'
});

/*userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

//module.exports = mongoose.model('actionInfo', actionInfo);
/*var actionInfo = mongoose.model('actionInfo', projectInfo);
    module.exports.actionInfo = actionInfo
    module.exports.actionInfoSchema = projectInfo*/
    module.exports = mongoose.model('actionInfo', actionInfo);