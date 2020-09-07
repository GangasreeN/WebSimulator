// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductDescription: {
    type: String
  },
  ProductPrice: {
    type: String
  }
},{
    collection: 'Product'
});

/*let userInfo = new Schema({
  UserName: {
    type: String
  },
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  }
},{
    collection: 'userInfo'
});
*/
module.exports = mongoose.model('Product', Product);