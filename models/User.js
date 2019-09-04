const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
})

UserSchema.methods.generateAuthToken = function () {
  let user = this;
  let access = 'auth';
  let token = jwt.sign(
    {_id: user._id.toHexString(),
      access
    }, process.env.JWT_SECRET).toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
      return token;
    });
};

const User = mongoose.model('User', UserSchema);

export default {
  User
};