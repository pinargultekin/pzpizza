const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
    trim: true
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
    unique: false,
    trim: true
  },
  address: {
    type: String,
    required: true,
    unique: false,
  },
  city: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  zip: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;