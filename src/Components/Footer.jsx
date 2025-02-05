import './Footer.css'
import GithubLogo from '../assets/GithubLogo.svg'
import MediumLogo from '../assets/MediumLogo.svg'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import Logo from '../assets/Logo.svg'

export default function Footer() {

    return (
        <>
            <div className="FooterContainer">
                <div className="LogoContainer">
                    <img src={Logo} />
                    <p>Scott Mumby</p>
                </div>
                <div className="NavButtonsContainer">
                    <div className="NavButtons">
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://github.com/ScottMby'} src={GithubLogo} />
                        </div>
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://www.linkedin.com/in/scottmby'} src={LinkedInLogo} />
                        </div>
                        <div className="HomeContainer">
                            <img onClick={() => window.location.href = 'https://medium.com/@smumby2003'} src={MediumLogo} />
                        </div>
                    </div>
                </div>
                <div className="HireMeContainer">
                    <button className="HireMeContainerButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><text>Hire me</text></button>
                </div>
            </div>
        </>
    );
}