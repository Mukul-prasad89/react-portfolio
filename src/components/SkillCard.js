import React from 'react';

function SkillCard({ skills }) {
    const { title, items } = skills;
    
    return (
        <div className="skill-card">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillCard;
