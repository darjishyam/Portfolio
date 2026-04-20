const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");
const Project = require("../models/Project");
const crypto = require("crypto");

// Track a page hit/visit
router.post("/hit", async (req, res) => {
    try {
        const { path } = req.body;
        const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const userAgent = req.headers["user-agent"];

        // Create a simple hash of the IP to act as a visitor ID without storing personal data
        const visitorId = crypto.createHash("md5").update(ip).digest("hex");

        const newVisit = new Visit({
            path,
            visitorId,
            userAgent,
        });

        await newVisit.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Analytics Error:", error);
        res.status(500).json({ message: "Failed to record hit" });
    }
});

// Track a project click/view
router.post("/click/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check if ID is a valid MongoDB ObjectId
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            await Project.findByIdAndUpdate(id, { $inc: { clicks: 1 } });
        } else {
            // If it's the numeric ID from portfolioData.js, we just handle it gracefully
            // In a real production app, projects would be fetched from DB via ObjectId
            console.log(`Click recorded for project with ID: ${id}`);
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Click Tracking Error:", error);
        res.status(500).json({ message: "Failed to record click" });
    }
});

module.exports = router;
