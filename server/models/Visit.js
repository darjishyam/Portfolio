const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now,
    },
    path: {
        type: String,
        required: true,
    },
    visitorId: {
        type: String, // Hashed IP or browser fingerprint
        required: true,
    },
    userAgent: String,
});

module.exports = mongoose.model("Visit", visitSchema);
