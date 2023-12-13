//defined mongoose and required it
const mongoose = require('mongoose');

//defined User Schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    unique: true, 
    required: true 
  },
  age: { 
    type: Number 
  },
  //profile image
  //profileImage: { 
  //type: String 
  //},
  //created a user assignment field
  },{ collection: 'User' }
);

module.exports = mongoose.model('User', userSchema);