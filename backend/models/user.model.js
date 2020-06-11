const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;