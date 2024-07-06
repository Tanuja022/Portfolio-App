import React from 'react'
import Card from './Card';
import './project.css'
const Project = () => {
  const projects = [
    { id: 1, title: 'My Food Shop', description: 'In this Project I used React Js technology.In this project i used useContext Hook which is manage the state globally and avoid prop drilling after click add to cart button then items are added to cart in the form of list.', skills:'React Js| CSS |JavaScript | FrontEnd ', githubLink: 'https://github.com/Tanuja022/My-Food-Shop' },
    { id: 2, title: 'Portfolio', description: 'In My Portfolio website created using React js technology.Utillising react routers for seamless navigation and custom hooks for optimised functionality.It embodies a blend of design asthetic and technological inovation.  ',skills:'React Js| CSS |JavaScript | FrontEnd ', githubLink: 'https://github.com/Tanuja022/Portfolio-App' },
    { id: 3, title: 'Login and Registration Authentication', description: 'Creating a login and registration system using Node Js,hbs template engine and MongoDB database to practice my backend skills.',skills:'Node Js| HandleBars | MongoDB | Backend.', githubLink: 'https://github.com/Tanuja022/Login-Register-Nodejs-project' },
    { id: 4, title: 'Employee API', description: 'Node js Employee API project utilising MongoDB involves creating a REST API to manage employee data', 
      skills:'Node Js| REST API | MongoDB |Backend.',githubLink: 'https://github.com/Tanuja022/Nodejs_Emp_Api' },
    { id: 5, title: 'UserList CURD', description: 'Creating Userlist and performing curd operations using html,css,javascript to practice my javascript skill. if a user add their name on the input field and click on add user button then the user information or name is display in the list.',skills:'Html| Css | JavaScript | FrontEnd.',githubLink: 'https://github.com/Tanuja022/User-List-curd' }
];

  
  return (
    <section id="project">
        <h1>Project</h1>
       
       {/* cards */}
       <div className="project-section">
            <div className="row">
                {projects.slice(0, 3).map(project => (
                    <Card key={project.id} title={project.title} description={project.description} skills={project.skills} githubLink={project.githubLink} />
                ))}
            </div>
            <div className="row">
                {projects.slice(3).map(project => (
                    <Card key={project.id} title={project.title} description={project.description} skills={project.skills} githubLink={project.githubLink} />
                ))}
            </div>
        </div>
        
    </section>
  )
}

export default Project