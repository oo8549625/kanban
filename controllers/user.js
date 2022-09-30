var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var User = require('../models/user');

passport.use(new LocalStrategy(async function verify(email, password, cb) {
    try {
        let user = await User.getUser(email);
        let salt = crypto.randomBytes(16).toString('hex');
        if (!user) {
            cb(null, false, { message: 'Incorrect email or password.' });
        }
    } catch (error) {
        return cb(error);
    }
}));

const signup = (req, res, next) => {

}

module.exports = {
    signup
};