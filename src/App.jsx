import { useRef, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import ParticlesComponent from './components/Particles';
import Scroller from './Components/Scroller'
import ExperienceContent from './Components/ExperienceContent';
import ProjectsContent from './Components/ProjectsContent';
import CTAComponent from './Components/CTAComponent';
import Footer from './Components/Footer';

function App() {

    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const handleExperienceClick = () => {
        experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleProjectsClick = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleContactClick = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <div className="wrapper">
                <NavBar experience={handleExperienceClick} projects={handleProjectsClick} contact={handleContactClick} />
                <Hero />
                <Scroller />
                <ExperienceContent innerRef={experienceRef} />
                <ProjectsContent innerRef={projectsRef} />
                <CTAComponent innerRef={contactRef} />
                <Footer/>
            </div>
            <ParticlesComponent className="Particles"/>
        </>
    )
}

export default App
