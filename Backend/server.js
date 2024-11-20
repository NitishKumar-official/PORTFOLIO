if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ListProj = require("./models/project.js");


const app = express();
app.use(cors());
app.use(express.json());




// const MONGO_URL = "mongodb://localhost:27017/portfolio";
const MONGO_URL = process.env.ATLASDB_URL

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
  }
app.get('/',(req, res)=>{
    res.send("my all project");
})

app.get('/project', async (req, res) => {
  try {
    const projects = await ListProj.find({});
    res.send({ projects }); // Wrap the projects array in an object
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).send({ error: "Failed to fetch projects" });
  }
});
app.post("/project", async (req, res) => {
  try {
    const { title, description, technologies, link, images, completionDate, isFeatured, tags } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    // Create a new project
    const newProject = new ListProj({
      title,
      description,
      technologies,
      link,
      images,
      completionDate,
      isFeatured,
      tags,
    });

    // Save to the database
    const savedProject = await newProject.save();

    res.status(201).json({ message: "Project added successfully", project: savedProject });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Failed to add project" });
  }
});



const PORT = 5000;

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));
