
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
     </BrowserRouter>
     
     <section id="home">
        
      </section>
      <section id="about">
        
      </section>
      <section id='project'>
        <Project/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
