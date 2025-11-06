import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
    const skillsData = [
        {
            title: "Frontend Development",
            items: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Backend Development",
            items: ["Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Programming Languages",
            items: ["JavaScript", "C++","C","Python"]
        },
        {
            title: "Tools & Technologies",
            items: ["Git", "GitHub", "VS Code", "npm","Mac-Terminal","Netlify"]
        },
        {
            title: "Data Structures & Algorithms",
            items: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "HashMaps","BST"]
        },{
            title: "Soft Skills",
            items: ["Effective Communication", "Team Collaboration", "Problem-Solving", "Adaptability", "Time Management"]
        },{
            title:"Database",
            items: ["MySQL", "MongoDB"]
        }

    ];

    return (
        <div className="skill-page margin">
            <h1>My Skills</h1>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} skills={skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;