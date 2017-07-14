const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(user, callback) {
    user.save(callback);
}

module.exports.getUsers = function(callback) {
    User.find({}, callback);
}

module.exports.getUser = function(id, callback) {
    User.findById(id, callback);
}

module.exports.deleteUser = function(id, callback) {
    User.findById(id, (err, user) => {
        user.remove(callback);
    });
}

module.exports.updateUser = function(id, user, callback) {
    User.findByIdAndUpdate({_id: id}, user, callback);
}