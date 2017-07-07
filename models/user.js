const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = module.exports = mongoose.model('User', UserSchema);