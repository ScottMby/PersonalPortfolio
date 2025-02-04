import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import ParticlesComponent from './components/Particles';
import Scroller from './Components/Scroller'
import ExperienceContent from './Components/ExperienceContent';
import ProjectsContent from './Components/ProjectsContent';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="wrapper">
                <NavBar />
                <Hero />
                <Scroller />
                <ExperienceContent />
                <ProjectsContent />
            </div>
            <ParticlesComponent className="Particles"/>
        </>
    )
}

export default App
