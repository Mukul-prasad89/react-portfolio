import React from "react";
import ProjectCard from "../components/ProjectCard";
import rasoi from '../assets/rasoi.png';
import laughline from '../assets/laughline.png';
import spendwise from '../assets/spendwise.png';
import codetrack from '../assets/CodeTrack.png';

const Project = () => {
    const projectsData = [
        {
  title: "CodeTrack",
  description: "CodeTrack is a full-stack platform that enables mentors to assign daily coding tasks to their students.",
  techStack: ["ReactJs", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  liveDemo: "https://code-track-peach.vercel.app/",
  image: codetrack
},

        {
            title: "Rasoi",
            description: "Rasoi is a food ordering app. It has strengthened my UI design and component structuring skills.",
            techStack: ["HTML", "CSS", "JavaScript"],
            liveDemo: "https://rasoii.netlify.app/",
            image: rasoi
        },
        {
            title: "Laughline",
            description: "Laughline is a random joke generator app. I learnt API handling and understanding of asynchronous programming.",
            techStack: ["HTML","CSS", "API Integration","JavaScript" ],
            liveDemo: "https://randomjokeee.netlify.app",
            image: laughline
        },{
            title: "Spendwise",
            description: "Spendwise is a personal finance management app that helps users track their expenses and manage budgets effectively.",
            techStack: ["HTML", "CSS", "Javascript", "Firebase"],
            liveDemo: "https://spenddwisee.netlify.app/",
            image: spendwise
        }
        
    ];

    return (
        <div className="project-page margin">
            <h1>My Projects</h1>
            <div className="project-list">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Project;