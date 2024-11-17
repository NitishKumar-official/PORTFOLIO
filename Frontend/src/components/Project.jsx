


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeProj() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/project')
      .then(response => setProjects(response.data.projects || []))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="projectContainer bg-violet-200 py-5">
      <h1 className="text-center text-black text-7xl font-bold pt-8 pb-5 mt-14">Projects</h1>
      <div className="flex flex-wrap justify-center pb-5 gap-4">
        {Array.isArray(projects) && projects.map((project, index) => (
          <div
            key={project._id}
            className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4 project-card"
          >
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-black">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-600 font-medium">Technologies: {project.technologies.join(", ")}</p>
              <div className="mt-4">
                {project.link.live && <a href={project.link.live} className="text-blue-500 hover:underline mr-2">Live Demo</a>}
                <a href={project.link.github} className="text-blue-500 hover:underline">GitHub</a>
              </div>
              <div className="mt-4 text-black">
                {project.images && project.images.slice(0, 1).map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover rounded-lg mb-2" />
                ))}
              </div>
              <p className="text-gray-500 mt-2">Completion Date: {project.completionDate ? new Date(project.completionDate).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProj;

