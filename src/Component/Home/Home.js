import React from 'react'
import About from '../About/About'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import './home.css'
const Home = () => {
  return (
    <>
    <section className="home-section" id='home'>
      <div className='home-container'>
        <h3>Hello I,m</h3>
        <h1>Tanuja <span className='surname'><span className='highlight'>Kavilkar</span></span>
        </h1>
        <h4>Frontend Devloper.</h4>
      </div>
      {/* profiles icons */}
      <div className="profile-icons-container">
            <a href="https://github.com/Tanuja022" target="_blank" rel="noopener noreferrer">
                <FaGithub className="profile-icon" />
            </a>
            <a href="https://tanujakavilkar1357@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="profile-icon" />
            </a>
            <a href="www.linkedin.com/in/tanuja-kavilkar-20699a22b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="profile-icon" />
            </a>
        </div>

      </section>
      <section className='about-section' id='about'>
        <About/>
      </section>

      
      {/* contact */}
      

      
    </>
    
  )
}

export default Home