const mongoose = require("mongoose");

//Define a schema
let Schema = mongoose.Schema;

let UserModelSchema = new Schema({
    userId: String,
    username: String,
    first: String,
    last: String
});

let UserModel = mongoose.model('UserModel', UserModelSchema, 'users');

module.exports = {
    UserModel: UserModel
}