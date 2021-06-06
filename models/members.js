var mongoose = require('mongoose');

var membersSchema = mongoose.Schema({
    memberName: String,
    memberDescription : String, 
});

const membersModel = mongoose.model('members', membersSchema);

module.exports = membersModel;
