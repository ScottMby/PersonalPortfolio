import './Footer.css'

export default function Footer() {

    return (
        <>
            <div className="FooterContainer">
                <div className="LogoContainer">
                    <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/Logo.svg" />
                    <p>Scott Mumby</p>
                </div>
                <div className="NavButtonsContainer">
                    <div className="NavButtons">
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://github.com/ScottMby'} src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/GithubLogo.svg" />
                        </div>
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://www.linkedin.com/in/scottmby'} src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/MediumLogo.svg" />
                        </div>
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://medium.com/@smumby2003'} src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/LinkedInLogo.svg" />
                        </div>
                    </div>
                </div>
                <div className="HireMeContainer">
                    <button className="HireMeContainerButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><p>Hire me</p></button>
                </div>
            </div>
        </>
    );
}