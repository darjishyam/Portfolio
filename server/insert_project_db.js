const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const projectData = {
    title: "HyperLocal - Food Delivery Ecosystem",
    description: "A comprehensive 4-app ecosystem comprising Customer, Restaurant, Driver, and Admin applications, synchronized in real-time.",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "Express", "Google Maps API"],
    imageUrl: "/hyperlocal_mockup.png",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
};

async function insertProject() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Check if project already exists
        const existing = await Project.findOne({ title: projectData.title });
        if (existing) {
            console.log('Project already exists. Skipping insertion.');
        } else {
            const project = new Project(projectData);
            await project.save();
            console.log('Project inserted successfully');
        }
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.connection.close();
    }
}

insertProject();
