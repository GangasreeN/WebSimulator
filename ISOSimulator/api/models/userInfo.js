// userInfo.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');



let userInfo = new Schema({
    userName: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email:{
      type:String
  },
  password:{
    type:String
},
confirmPassword:{
    type:String
},
acceptTerms:{
    type:String
}
},{
    collection: 'userInfo'
});

/*userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

module.exports = mongoose.model('userInfo', userInfo);