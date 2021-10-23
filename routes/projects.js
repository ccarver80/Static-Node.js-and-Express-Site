const express = require('express');
const router = express.Router();
const { projects } = require('../data/projects.json');



router.get("/project/:id", (req, res) => {
  const project = projects[req.params.id]
  

    res.render("project", {projectName: project.project_name, 
                          description: project.description,
                          technologies: project.technologies,
                          live: project.live_link,
                          github: project.github_link,
                          img: project.image_url});
  });
 
  
  

module.exports = router; 