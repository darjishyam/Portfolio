const mongoose = require("mongoose");
require("dotenv").config();
const Project = require("../models/Project");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

const blogProject = {
  title: "Blog Management System",
  description:
    "A full-featured blog management application built with MERN stack. Users can create, edit, delete, and manage blog posts with a rich text editor. Features include user authentication, category management, search functionality, and responsive design. The system provides an intuitive admin dashboard for content management and a beautiful public-facing blog interface.",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "RESTful API",
    "CSS3",
  ],
  imageUrl: "",
  githubUrl: "",
  liveUrl: "",
  featured: true,
};

async function addProject() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if project already exists
    const existingProject = await Project.findOne({
      title: blogProject.title,
    });

    if (existingProject) {
      console.log("Blog Management project already exists!");
      await mongoose.connection.close();
      return;
    }

    const project = new Project(blogProject);
    const savedProject = await project.save();
    console.log("Blog Management project added successfully!");
    console.log("Project ID:", savedProject._id);
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error adding project:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

addProject();
