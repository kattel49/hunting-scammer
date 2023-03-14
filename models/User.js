const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    gcash_id: {
        type: String,
        required: true
    },
    mpin: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;