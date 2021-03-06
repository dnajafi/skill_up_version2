const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  following: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  skills: [{
    type: Schema.ObjectId,
    ref: 'Skill'
  }],
  image_url: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  motto: {
    type: String,
    default: ''
  }
});


/**
 * Compare the passed password with the value in the database. A model method.
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);