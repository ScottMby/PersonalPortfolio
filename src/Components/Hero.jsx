import './Hero.css'
function Hero() {

    return (
        <>
            <div className="HeroContainer">
                <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/BackgroundGrid.svg" className="HeroGrid" />
                <div className="InnerHeroContainer">
                    <div className="ContentContainer">
                        <p className="Title">.NET Software Engineer 🚀</p>
                        <p className="Description">I build <strong>user-focused</strong> websites to create <strong><u> real-world solutions</u></strong>.</p>
                        <button className="HireMeButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><p>Hire me</p></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;