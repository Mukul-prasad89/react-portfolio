import React from "react";
import ProjectCard from "../components/ProjectCard";
import coldmail from '../assets/ColdMail.png';
import herbaltrace from '../assets/herbaltrace.png';
import spendwise from '../assets/spendwise.png';

const Project = () => {
    const projectsData = [
  {
  title: "ColdMail AI",
  description: "ColdMail AI is a GenAI-powered platform that helps service-based companies generate personalized cold emails for potential clients. It analyzes job postings, extracts required skills using LLMs, matches them with the most relevant candidate profiles from a vector database through semantic search, and generates tailored outreach emails.",
  techStack: [
    "ReactJs",
    "Node.js",
    "Express.js",
    "LangChain",
    "Groq Llama 3.3",
    "ChromaDB",
    "Tailwind CSS"
  ],
  liveDemo: "https://cold-mail-ai-n6ah.vercel.app/",
  image: coldmail
},
{
  title: "HerbalTrace",
  description: "HerbalTrace is a blockchain-powered platform that enables users to verify the authenticity and traceability of herbal products. It leverages Hyperledger Fabric to securely record every stage of the supply chain, allowing consumers to scan a QR code and access transparent product information, including origin, manufacturing details, and quality certifications.",
  techStack: [
    "ReactJs",
    "Tailwind CSS",
    "Supabase Authentication",
    "Node.js",
    "Express.js",
    "Hyperledger Fabric",
    "MongoDB"
  ],
  liveDemo: "https://herbaltrace.vercel.app/",
  image: herbaltrace
},

       {
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