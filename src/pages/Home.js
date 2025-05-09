import React from 'react';
import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import './Home.css'
import ParticlesBackground from '../components/ParticlesBackground';


const Home = () => {
    return (
        <div className='App'>
            <NavBar />
            <div className="introduction-wrapper" style={{ marginTop: 50,   }}>
                <ParticlesBackground />
                <Introduction />
            </div>
            <About/>
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
