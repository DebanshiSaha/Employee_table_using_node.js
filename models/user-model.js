const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        default: ""
    },
    phone: {
        type: String,
        required: true,
        default: ""
    },
    address: {
        type:String,
        required: true,
        default: ""
    },
    isDeleted: {
        type: Boolean,
        default: false,
        enum: [true, false]
    }
});

module.exports = mongoose.model('emps', userSchema);