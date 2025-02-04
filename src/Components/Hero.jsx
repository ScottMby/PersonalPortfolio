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
                        <p className="Description">I launch <strong>functional</strong> and <strong>user-focused</strong> websites that deliver <strong><u>real results.</u></strong></p>
                        <button className="HireMeButton"><text>Hire me</text></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;