const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    accuracy: {
        type: String,
        required: false
    }
}, {timestamps: {createdAt: "created_at"}})

const Location = mongoose.model("Location", LocationSchema)

module.exports = Location