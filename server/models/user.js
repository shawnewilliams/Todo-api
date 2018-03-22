const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            unique: true,
            validate: {
                // validator: (value) => {
                //   return validator.isEmail(value)
            // },
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
              }
            },
            password: {
                type: String,
                required: true,
                minlength: 6
            },
            tokens: [{
                access: {
                    type: String,
                    required: true
                },
                token: {
                    type: String,
                    required: true
                }
            }]
        });

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['email', '_id']);
};

UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{
        access: access,
        token: token
        // es6
        // access,
        // token
    }]);
    return user.save().then(() => {
        return token;
    });
};
// statics creates model method
UserSchema.statics.findByToken = function(token) {
    User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        // return new Promise((resolve, reject) => {
        //     reject();
        // });
        return Promise.reject();
    }

    return User.findOne({
        // Quotes are required when there is a . in the value
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    })
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};