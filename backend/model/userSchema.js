const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  contact: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 10
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})
 
const User = mongoose.model('User', user);
module.exports = User;