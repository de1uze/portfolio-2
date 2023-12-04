import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Student Ed-Tech Platform",
      desc: "A simple Student Dashboard with Login and Sign-up functionality. A replica of ZEN Class Student Dashboard using React",
      liveLink: "https://zenclass-dashboard.vercel.app/",
      githubLink: "https://github.com/de1uze/Zenclass-Dashboard",
      techs: ["HTML", "CSS", "React"]
      
    },
    {
      name: "Foodlify | A Recipe Suggestion Website",
      desc: "College Capstone Project | A Realtime recipe and dish suggestion built on React and Mongo DB.Uses Python machine learning collaboration for recipe.",
      liveLink: "https://foodlify-omega.vercel.app/",
      githubLink: "https://github.com/de1uze/Foodlify",
      techs: ["React", "Node", "MongoDB","Tailwind CSS","Machine Learning"]
    },
    {
      name: "A Gym website",
      desc: "A website for gym. Displaying trainers, pricing, environment made using React",
      liveLink: "https://gym-rat-deploy.onrender.com/",
      githubLink: "https://github.com/de1uze/Gym-rat",
      techs: ["React", "HTML","Css"]
    
    },
    {
      name: "Simple Netflix Clone",
      desc: "Tutorial Based Netflix clone. Fetching data for Movie API      ",
      liveLink: "https://ntflx-clone-ivory.vercel.app/",
      githubLink: "https://github.com/de1uze/Ntflx-clone",
      techs: ["React", "HTML" , "CSS"],
      isOpenSource: true,
    }
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
