import './PageSelector.css'
import ParticlesComponent from './components/Particles';

export default function PageSelector() {
    return (
        <>
            <div id="selectorWrapper">
                <div id="selectorContainer">
                    <p id="title">Hi I’m Scott 👋</p>
                    <div id="buttonContainer">
                        <p id="subTitle">Are You?</p>
                        <button className="Button"><p>A business looking for a website?</p></button>
                        <button className="Button"><p>A recruiter looking to hire me?</p></button>
                    </div>
                </div>
            </div>
            <ParticlesComponent className="Particles" />
        </>
    )
}