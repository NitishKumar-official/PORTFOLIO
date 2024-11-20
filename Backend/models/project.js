const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        // required: true,
        trim: true,
      },
      description: {
        type: String,
        // required: true,
        trim: true,
      },
      technologies: [
        {
          type: String,
          // required: true,
        },
      ],
      link: {
        live: {
          type: String, // Link to the deployed project
          // required: false,
          trim: true,
        },
        github: {
          type: String, // Link to the GitHub repository
          // required: true,
          trim: true,
        },
      },
      images: [
        {
          type: String, // URLs to project images/screenshots
          required: false,
        },
      ],
      completionDate: {
        type: Date,
        required: false,
      },
      isFeatured: {
        type: Boolean,
        default: false, // Highlight this project if true
      },
      tags: [
        {
          type: String, // Tags to categorize the project
          required: false,
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    });
    
    const Project = mongoose.model("Project", projectSchema);
    
    module.exports = Project;


