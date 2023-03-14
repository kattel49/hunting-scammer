const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    }
}, {timestamps: {createdAt: "created_at"}})

const Location = mongoose.model("Location", LocationSchema)

module.exports = Location