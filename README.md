# Portfolio Website - MERN Stack

A modern, full-stack portfolio website built with MongoDB, Express, React, and Node.js.

## Features

- 🎨 Modern and responsive UI
- 📱 Mobile-friendly design
- 🚀 Fast and efficient
- 💼 Project showcase
- 📧 Contact form
- 🔒 RESTful API

## Project Structure

```
portfolio/
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 3. Environment Setup

Create a `.env` file in the `server` directory:

```bash
cd ../server
cp .env.example .env
```

Edit the `.env` file with your MongoDB connection string:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

For MongoDB Atlas, use:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### 4. Create Frontend Environment File (Optional)

Create a `.env` file in the `client` directory if you need to change the API URL:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode

1. **Start the backend server:**

   ```bash
   cd server
   npm run dev
   ```

   The server will run on `http://localhost:5000`

2. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the React app:**

   ```bash
   cd client
   npm run build
   ```

2. **Start the production server:**
   ```bash
   cd server
   npm start
   ```

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact

- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit a contact form

## Adding Sample Data

You can add sample projects using the API or directly in MongoDB. Example project structure:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "imageUrl": "https://example.com/image.jpg",
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://project-demo.com",
  "featured": true
}
```

## Technologies Used

- **Frontend:** React, React Router, Axios, CSS3
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Database:** MongoDB

## Customization

1. Update the hero section in `client/src/pages/Home.js`
2. Modify the skills list in the Home page
3. Customize colors and styles in `client/src/App.css`
4. Add your own projects through the API or MongoDB

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the repository.
