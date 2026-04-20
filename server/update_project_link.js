const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const youtubeLink = "https://youtu.be/_FzwTYuOQBI";
const projectTitle = "HyperLocal - Food Delivery Ecosystem";

async function updateProject() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const result = await Project.updateOne(
            { title: projectTitle },
            { $set: { liveUrl: youtubeLink } }
        );

        if (result.modifiedCount > 0) {
            console.log('Project link updated successfully in database');
        } else {
            console.log('Project not found or link already up-to-date');
        }
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

updateProject();
