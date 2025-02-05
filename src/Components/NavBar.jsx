import Logo from '../assets/Logo.svg'
import HomeIcon from '../assets/Home Icon.svg'
import './NavBar.css'
function NavBar({ experience, projects, contact }) {
    return (
        <>
            <div className="NavContainer">
                <div className="LogoContainer">
                    <img src={Logo} />
                    <text>Scott Mumby</text>
                </div>
                <div className="NavButtonsContainer">
                    <div className="NavButtons">
                        <div className="HomeContainer">
                            <img src={HomeIcon} />
                        </div>
                        <a onClick={experience}>Experience</a>
                        <a onClick={projects}>Projects</a>
                        <a onClick={contact}>Contact me</a>
                    </div>
                </div>
                <div className="HireMeContainer">
                    <button className="HireMeContainerButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><text>Hire me</text></button>
                </div>
            </div>
        </>
    );
}

export default NavBar;