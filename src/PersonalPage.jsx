import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import ParticlesComponent from './components/Particles';
import Scroller from './Components/Scroller'
import ExperienceContent from './Components/ExperienceContent';
import ProjectsContent from './Components/ProjectsContent';
import CTAComponent from './Components/CTAComponent';
import Footer from './Components/Footer';
function PersonalPage() {

    const handleClick = (name) => {
        if (name != null) {
            if (document.getElementById(name) != null) {
                smoothScrollTo(document.getElementById(name));
            }
        }
    };

    return (
        <>
            <div className="wrapper">
                <NavBar experience={() => handleClick("experiencecontainer")} projects={() => handleClick("projectscontainer")} contact={() => handleClick("ctacontainer")} />
                <Hero />
                <Scroller />
                <ExperienceContent />
                <ProjectsContent />
                <CTAComponent />
                <Footer />
            </div>
            <ParticlesComponent className="Particles" />
        </>
    )
}

function smoothScrollTo(targetElement) {
    const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
    let startY = window.scrollY;
    let distance = targetY - startY;
    let startTime = null;

    function animationStep(currentTime) {
        if (!startTime) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let duration = 500; // Total duration in milliseconds
        let normalizedTime = Math.min(timeElapsed / duration, 1); // Clamp between 0 and 1

        // Apply sine easing: starts slow, speeds up in the middle, then slows down
        let easedProgress = 0.5 - 0.5 * Math.cos(normalizedTime * Math.PI);

        window.scrollTo(0, startY + distance * easedProgress);

        if (normalizedTime < 1) requestAnimationFrame(animationStep);
    }

    requestAnimationFrame(animationStep);
}

export default PersonalPage