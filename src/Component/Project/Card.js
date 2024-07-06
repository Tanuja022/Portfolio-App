import React from 'react';
import './card.css'
const Card = ({ title, description, githubLink, skills }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>{skills}</h5>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                GitHub Link
            </a>
        </div>
    );
}

export default Card;