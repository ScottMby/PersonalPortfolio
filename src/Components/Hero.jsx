import './Hero.css'
import HeroGrid from '../assets/BackgroundGrid.svg'

function Hero() {

    return (
        <>
            <div className="HeroContainer">
                <img src={HeroGrid} className="HeroGrid" />
                <div className="InnerHeroContainer">
                    <div className="ContentContainer">
                        <p className="Title">.NET Software Engineer 🚀</p>
                        <p className="Description">I build <strong>user-focused</strong> websites to create <strong><u> real-world solutions</u></strong>.</p>
                        <button className="HireMeButton"><text>Hire me</text></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;