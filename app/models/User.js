const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
        trim: true,
        lowercase: true,

    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 50,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: "defaultAvatar.jpg"
    },
    bio: {
        type: String,
        trim: true,
    },
    sex: {
        type: String,
        trim: true,
        default: "0"
    },
    date: {
        type: Date
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', User);