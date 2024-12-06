const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true,
        minlength: 3,
        trim: true
    },
    user_nick: {
        type: String
    },
    user_email: {
        type: String
    },
    user_pwd: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User