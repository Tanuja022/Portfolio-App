import React from 'react'
import './skill.css'
const Skills = () => {
    const skillsList = [
        { name: "JavaScript", description: "Proficient in ES6+" },
        { name: "React Js", description: "Experience with React hooks and context API" },
        { name: "HTML5 & CSS3", description: "Semantic HTML and modern CSS techniques" },
        { name: "Node.js & Express.js", description: "Building RESTful APIs and server-side applications" },
        { name: "Git & Github", description: "Git is a distributed version control system for tracking changes." },
        { name: "SQL", description: "SQL language is for managing and querying relational databases." },
        { name: "Python", description: "Python is a high-level programming language" },
        { name: "MongoDB", description: "NoSQL database design and queries" }
    ];
  return (
    <>
    <section id='skills'>
    <div className="skills">
            <h2>Skills</h2>
            <div className="skill-cards">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Skills