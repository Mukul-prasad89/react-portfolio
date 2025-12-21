import React from "react";

const ProjectCard = ({ project }) => {
    const { title, description, techStack, liveDemo, image } = project;

    return (
        <div className="project-card">
            <figure className="project-image-container">
                <img
                    src={image}
                    alt={title}
                    className="project-image"
                />
            </figure>
            <div className="project-body">
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
                <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <p>{techStack.join(", ")}</p>
                </div>
                <div className="project-link">
                    <a href={liveDemo} className="btn" target="_blank" rel="noopener noreferrer">
                        Visit Site
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;