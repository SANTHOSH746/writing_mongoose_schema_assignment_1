const mongo = require('mongoose');

const Schema = new mongo.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'], 
  },
  profile: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  lastLogin: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, 
});

module.exports = mongo.model('User', Schema);